import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'


// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base: "/mannual-aw-2627/",
    title: "Aplicaciones Web",
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
        {text: 'Bloque 1', link: '/bloque1/1.1.Servidor-de-Desarrollo-XAMPP'},
        {text: 'Bloque 2', link: '/bloque2/2.1.Panorama-CMS-Clasificacion'}
      ],

      sidebar: [
        {
          text: 'Bloque 1: Servidores Locales y CMS',
          collapsed: true,
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
            { text: '1.11. Proyecto Guiado: Mi Primera Web Corporativa Completa', link: '/bloque1/1.11.Proyecto-Web-Completa' },
            // ----EJEMPLO MEMORIA TÉCNICA ---
            { text: 'Guía didáctica para la memoria técnica', link: '/bloque1/guia-didactica-memoria-tecnica'}
          ]
        },
        {
          text: 'Bloque 2: Otros CMS, LMS y Generadores Estáticos',
          collapsed: true,
          items: [
            { text: '2.1. Panorama de los CMS: Monolíticos, Headless y SSG', link: '/bloque2/2.1.Panorama-CMS-Clasificacion' },
            { text: '2.11. Práctica Guiada y Selección de Arquietectura', link: '/bloque2/2.11.practica_guiada'},
            { text: '2.2. Plataformas LMS: Despliegue y Cursos en Moodle', link: '/bloque2/2.2.Plataformas_LMS_Moodle' },
            { text: '2.22. Desplioegue de Moodle', link: '/bloque2/2.22.practica-moodle'},
            { text: '2.3. CMS E-Commerce: Gestión de Tiendas con PrestaShop', link: '/bloque2/2.3.CMS-Ecommerce-Prestashop' },
            { text: '2.33. Despliegue PrestaShop' , link:'/bloque2/2.33.actica-guiada-PestaShop'},
            { text: '2.4. Generadores de Sitios Estáticos: Manuales con VitePress', link: '/bloque2/2.4.Generadores-Estaticos-VitePress' },
            { text: '2.5. Comparativa Técnica y Criterios de Elección de CMS', link: '/bloque2/2.5.Comparativa-Criterios-Eleccion' }
          ]
        }
      ],

      socialLinks: [
        {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
      ]
    }
  })
)
