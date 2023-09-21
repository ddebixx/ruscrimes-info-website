/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '**',
        },
      ],
    },
    i18n: {
      locales: ['en', 'uk', 'pl', 'ru'],
      defaultLocale: 'en',
      localeDetection: false,
    }
  }