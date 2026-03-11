import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 54321;
const DIST_DIR = path.resolve(__dirname, 'dist');
const ROUTES = [
    '/',
    '/marketing',
    '/demo/donasi',
    '/demo/admin',
    '/demo/affiliate'
];

async function run() {
    // 1. Start a local server to serve the built Vite app
    const app = express();
    app.use(express.static(DIST_DIR));

    // SPA fallback
    app.get(/^.+$/, (req, res) => {
        res.sendFile(path.resolve(DIST_DIR, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        console.log(`[Prerender] Local server started on port ${PORT}`);

        // 2. Launch Puppeteer
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        for (const route of ROUTES) {
            console.log(`[Prerender] Processing route: ${route}`);

            // Navigate to the route
            await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });

            // Wait for React and react-helmet-async to finish rendering
            // We look for our custom event to be fired from main.jsx
            try {
                await page.evaluate(() => {
                    return new Promise((resolve) => {
                        if (window.__PRERENDER_READY) {
                            resolve();
                        } else {
                            document.addEventListener('custom-render-trigger', resolve, { once: true });
                            // Also add a timeout fallback
                            setTimeout(resolve, 3000);
                        }
                    });
                });
            } catch (err) {
                console.log(`[Prerender] Render trigger wait timeout for ${route}`);
            }

            // Small delay just to make sure Helmet injected tags
            await new Promise(r => setTimeout(r, 500));

            // Get the full HTML
            const html = await page.content();

            // 3. Save the HTML to the appropriate directory
            const isRoot = route === '/';
            const routeDir = isRoot ? DIST_DIR : path.join(DIST_DIR, route);

            if (!fs.existsSync(routeDir)) {
                fs.mkdirSync(routeDir, { recursive: true });
            }

            fs.writeFileSync(path.join(routeDir, 'index.html'), html);
            console.log(`[Prerender] Saved ${path.join(routeDir, 'index.html')}`);
        }

        await browser.close();
        server.close();
        console.log('[Prerender] Done prerendering static pages!');
    });
}

run().catch(console.error);
