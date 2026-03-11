import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, 'dist');

// Definisi Meta Tags unik untuk setiap halaman
const routes = {
    '/marketing': {
        title: 'SaaS Platform Donasi Online - DonasiOnline',
        description: 'Platform Donasi Online White-Label #1 di Indonesia. Berhenti menumpang, miliki platform donasi Anda sendiri dengan ekosistem lengkap.',
        image: 'https://images.unsplash.com/photo-1593113589914-075990116daa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    },
    '/demo/donasi': {
        title: 'Aplikasi Donasi - DonasiOnline',
        description: 'Aplikasi donasi putih label untuk yayasan Anda. Berdonasi dengan aman, mudah, dan transparan.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    },
    '/demo/admin': {
        title: 'Admin Dashboard - DonasiOnline',
        description: 'Dashboard Command Center Admin DonasiOnline. Kelola kampanye, pantau transaksi real-time, dan atur database donatur Anda dengan mudah.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    },
    '/demo/affiliate': {
        title: 'Portal Fundraiser - DonasiOnline',
        description: 'Sebarkan tautan kebaikan, pantau traffic donasi, dan dapatkan komisi jariyah Anda secara transparan.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    }
};

async function run() {
    console.log('[Prerender] Starting lightweight SSG generation...');

    // Baca template bawaan index.html
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (!fs.existsSync(indexPath)) {
        console.error('[Prerender] Error: dist/index.html not found! Ensure Vite build is successful.');
        process.exit(1);
    }

    const templateHTML = fs.readFileSync(indexPath, 'utf-8');

    // Membuat index.html unik untuk tiap rute
    for (const [route, meta] of Object.entries(routes)) {
        console.log(`[Prerender] Processing route: ${route}`);

        // Replace text meta di dalam tag head
        let newHTML = templateHTML
            .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
            .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${meta.description}">`)
            .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${meta.title}">`)
            .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${meta.description}">`)
            .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${meta.image}">`);

        // Tentukan path output
        let outputPath;
        if (route === '/') {
            outputPath = path.join(DIST_DIR, 'index.html');
        } else {
            // Vercel cleanUrls: true otomatis membaca file .html yang namanya sama dengan URL path
            outputPath = path.join(DIST_DIR, `${route}.html`);
            const routeDir = path.dirname(outputPath);
            if (!fs.existsSync(routeDir)) {
                fs.mkdirSync(routeDir, { recursive: true });
            }
        }

        // Tulis HTML yang baru
        fs.writeFileSync(outputPath, newHTML);
        console.log(`[Prerender] Saved ${outputPath}`);
    }

    console.log('[Prerender] Done generating static pages!');
}

run().catch(console.error);
