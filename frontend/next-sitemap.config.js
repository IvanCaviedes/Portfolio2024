/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com', // Cambia esto por tu dominio
  generateRobotsTxt: true, // Generar robots.txt
  sitemapSize: 5000, // Máximo número de URLs por archivo sitemap
  changefreq: 'daily', // Frecuencia de cambio por defecto
  priority: 0.7, // Prioridad por defecto de las páginas
  exclude: [
    '/admin',
    '/private/*', // Exclusión de rutas específicas
  ],
  alternateRefs: [
    {
      href: 'https://example.com/es', // URL para el idioma español
      hreflang: 'es',
    },
    {
      href: 'https://example.com/fr', // URL para el idioma francés
      hreflang: 'fr',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // Aplicar reglas a todos los bots
        allow: '/', // Permitir el rastreo de todo el sitio
        disallow: ['/admin', '/private/*'], // Bloquear rutas específicas
      },
    ],
    additionalSitemaps: [
      'https://example.com/my-custom-sitemap-1.xml', // Sitemaps adicionales si tienes varios
      'https://example.com/my-custom-sitemap-2.xml',
    ],
  },
  transform: async (config, path) => {
    // Personalizar las propiedades de cada página
    return {
      loc: path, // Ruta de la página
      changefreq: 'weekly', // Frecuencia de cambio personalizada por página
      priority: path === '/' ? 1.0 : 0.7, // Página principal con máxima prioridad
      lastmod: new Date().toISOString(), // Fecha de la última modificación
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
