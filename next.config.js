/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["pbs.twimg.com"],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/feed",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
