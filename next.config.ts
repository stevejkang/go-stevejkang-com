import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/gh', destination: 'https://github.com/stevejkang', permanent: false },
      { source: '/in', destination: 'https://www.linkedin.com/in/iam-stevejkang', permanent: false },
      { source: '/bg', destination: 'https://juneyoung.io', permanent: false },
      { source: '/ig', destination: 'https://www.instagram.com/stevejkang', permanent: false },
      { source: '/x', destination: 'https://x.com/stevejkang_', permanent: false },
      { source: '/meet', destination: 'https://cal.com/stevejkang', permanent: false },
    ];
  },
};

export default nextConfig;
