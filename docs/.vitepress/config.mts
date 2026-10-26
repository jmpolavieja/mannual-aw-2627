import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'


// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base: "/mannual-aw-2627/",
    title: "Manual de Aplicaciones Web (2º SMIR)",
    description: "Un manual para la asignatura de Aplicaciones Web",
    markdown: {
      math: true // Esto activa el renderizado de fórmulas matemáticas
    },
    vite: {
      optimizeDeps: {
        include: ['fastdom', 'mermaid']
      }
    },
    themeConfig: {
      logo: '/logoAltair.png',
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        {text: 'Home', link: '/'},
        {text: 'Manual', link: '/bloque1/1.1.Servidor-de-Desarrollo-XAMPP'},
      ],

      sidebar: [
        {
          text: 'Bloque 1: Servidores Locales y CMS',
          items: [
            {text: '1.1. Servidor de Desarrollo XAMPP', link: '/bloque1/1.1.Servidor-de-Desarrollo-XAMPP'},
            {text: '1.2. Despliegue de WordPress Paso a Paso', link: '/bloque1/1.2.Despliegue-de-WordPress'},
            {text: '1.3. Manejo Inicial de WordPress', link: '/bloque1/1.3.Manejo-Inicial-de-WordPress'},
            {
              text: '1.4. Gestión de Contenidos: Páginas, Entradas y Taxonomías',
              link: '/bloque1/1.4.GestionContenidos'
            },
            {text: '1.5. Biblioteca Multimedia y Optimización de Medios', link: '/bloque1/1.5.BibliotecaMultimedia'},
            {text: '1.6. Gestión de Menús de Navegación', link: '/bloque1/1.6.GestionMenus'},
            { text: '1.7. Gestión de Usuarios y Matriz de Roles (RBAC)', link: '/bloque1/1.7.Usuarios-Roles-RBAC' },
            { text: '1.8. Personalización Visual: Temas, Bloques y FSE', link: '/bloque1/1.8.Temas-Gutenberg-FSE' },
            { text: '1.9. Ecosistema de Plugins: Formularios y Utilidades', link: '/bloque1/1.9.Plugins-Formularios' },
            { text: '1.10. Seguridad Web, Hardening y Copias de Seguridad', link: '/bloque1/1.10.Seguridad-Hardening-Backups' },
            // --- PROYECTO INTEGRADOR ---
            { text: '1.11. Proyecto Guiado: Mi Primera Web Corporativa Completa', link: '/bloque1/1.11.Proyecto-Web-Completa' }
          ]
        }
      ],

      socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
      ]
    }
  })
)
