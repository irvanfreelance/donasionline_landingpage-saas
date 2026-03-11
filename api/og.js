export default function handler(req, res) {
    const fs = require('fs');
    const path = require('path');

    const { url } = req;
    const filePath = path.join(process.cwd(), 'dist', 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading index.html');
        }

        const routes = {
            default: {
                title: 'DonasiOnline - Platform Donasi SaaS',
                description: 'Platform Donasi Online White-Label #1 di Indonesia. Berhenti menumpang, miliki platform donasi Anda sendiri dengan ekosistem lengkap.',
                image: 'https://images.unsplash.com/photo-1593113589914-075990116daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            },
            marketing: {
                title: 'SaaS Platform Donasi Online - DonasiOnline',
                description: 'Platform Donasi Online White-Label #1 di Indonesia. Berhenti menumpang, miliki platform donasi Anda sendiri dengan ekosistem lengkap.',
                image: 'https://images.unsplash.com/photo-1593113589914-075990116daa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            },
            donasi: {
                title: 'Aplikasi Donasi - DonasiOnline',
                description: 'Aplikasi donasi putih label untuk yayasan Anda. Berdonasi dengan aman, mudah, dan transparan.',
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
            },
            admin: {
                title: 'Admin Dashboard - DonasiOnline',
                description: 'Dashboard Command Center Admin DonasiOnline. Kelola kampanye, pantau transaksi real-time, dan atur database donatur Anda dengan mudah.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            },
            affiliate: {
                title: 'Portal Fundraiser - DonasiOnline',
                description: 'Sebarkan tautan kebaikan, pantau traffic donasi, dan dapatkan komisi jariyah Anda secara transparan.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            },
        };

        let meta = routes.default;
        if (url.includes('/marketing')) meta = routes.marketing;
        else if (url.includes('/demo/donasi')) meta = routes.donasi;
        else if (url.includes('/demo/admin')) meta = routes.admin;
        else if (url.includes('/demo/affiliate')) meta = routes.affiliate;

        const modifiedHtml = data
            .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
            .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${meta.description}">`)
            .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${meta.title}">`)
            .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${meta.description}">`)
            .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${meta.image.replace(/&/g, '&amp;')}">`);

        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(modifiedHtml);
    });
}
