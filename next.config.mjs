/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Esmail-Portfolio.githup.io';

const nextConfig = {
  output: 'export',
  // Required for GitHub Pages: assets served from /<repo-name>/
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

