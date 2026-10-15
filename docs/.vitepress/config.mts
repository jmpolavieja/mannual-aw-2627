import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/manualAW2627/",
  title: "Manual de WordPress",
  description: "Un manual para la asignatura de Aplicaciones Web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Bloque 1: Servidores Locales y CMS',
        items: [
          { text: '1.1. Servidor de Desarrollo XAMPP', link: '/bloque1/xampp' },
          { text: '1.2. Despliegue de WordPress Paso a Paso', link: '/bloque1/wordpress-instalacion' },
          { text: '1.3. Manejo Inicial de WordPress', link: '/bloque1/manejo-inicial-escritorio-wordpress'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
