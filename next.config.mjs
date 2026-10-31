/** @type {import('next').NextConfig} */

import path from 'node:path';

const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
