/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFiles: "./loader.js",
remotePatterns:[{
    protocol:"https"
}]
    }
};

export default nextConfig;
