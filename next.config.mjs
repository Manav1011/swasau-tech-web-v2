/** @type {import('next').NextConfig} */
const nextConfig = {    
    env: {
        CONTENTFUL_AUTH: process.env.CONTENTFUL_AUTH,
    },
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            },
        ],
    }
};

export default nextConfig;
