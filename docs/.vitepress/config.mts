import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/mannual-aw-2627/",
  title: "Manual de WordPress",
  description: "Un manual para la asignatura de Aplicaciones Web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manual', link: '/bloque1/xampp' }
    ],

    sidebar: [
      {
        text: 'Bloque 1: Servidores Locales y CMS',
        items: [
          { text: '1.1. Servidor de Desarrollo XAMPP', link: '/bloque1/1.1.Servidor-de-Desarrollo-XAMPP' },
          { text: '1.2. Despliegue de WordPress Paso a Paso', link: '/bloque1/1.2.Despliegue-de-WordPress' },
          { text: '1.3. Manejo Inicial de WordPress', link: '/bloque1/1.3.Manejo-Inicial-de-WordPress' },
          { text: '1.4. Gestión de Contenidos: Páginas, Entradsas y Taxonomías', link: '/bloque1/1.4.GestionContenidos'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
