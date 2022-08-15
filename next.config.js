module.exports = {
  reactStrictMode: true,
  env: {
    api: "https://strapi.bastienbc.fr/"
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
    domains: [
      'strapi.bastienbc.fr',
      'bastienbc.fr'
    ]
  }
}
