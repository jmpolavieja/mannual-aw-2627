# 1.6 Creación y Gestión de Menús de Navegación

Un **menú de navegación** es el componente de la interfaz que permite a los usuarios orientarse y desplazarse a través de la arquitectura de la información de un sitio web. En WordPress, la gestión de menús es completamente dinámica y permite enlazar páginas estáticas, categorías de entradas, publicaciones individuales o enlaces externos personalizados.

---

## 1. Arquitectura de la Navegación y Ubicaciones del Tema

La disponibilidad y representación visual de los menús depende de las **ubicaciones definidas por el tema activo** (*Theme Locations*).

### Ubicaciones Habituales en Plantillas Web:
* **Menú Principal / Cabecera (*Header Menu*):** Situado en la parte superior del portal, visible en todas las páginas. Contiene las secciones clave del sitio (*Inicio*, *Servicios*, *Sobre Nosotros*, *Contacto*).
* **Menú Secundario / Superior (*Top Bar Menu*):** Ubicado sobre la cabecera principal, habitualmente reservado para enlaces institucionales, teléfono de contacto o acceso a redes sociales.
* **Menú del Pie de Página (*Footer Menu*):** Situado en la parte inferior. Suele incluir enlaces legales (*Aviso Legal*, *Política de Privacidad*, *Política de Cookies*) y el mapa del sitio.
* **Menú Social (*Social Links Menu*):** Diseñado para mostrar iconos enlazados a los perfiles oficiales en redes sociales.

---

## 2. Gestión de Menús en Temas Clásicos (`Apariencia > Menús`)

En los temas tradicionales de WordPress, la administración del menú se realiza desde la interfaz dedicada en **Apariencia > Menús**.
### 2.1 Elementos Añadibles al Menú:
1. **Páginas (*Pages*):** Enlaces directos a páginas estáticas. Es la opción más común para webs corporativas.
2. **Entradas (*Posts*):** Enlaces a artículos específicos del blog.
3. **Categorías (*Categories*):** Enlaces a las páginas de archivo de una categoría. Muestran automáticamente todas las entradas asignadas a dicha temática.
4. **Enlaces personalizados (*Custom Links*):** Permiten introducir manualmente cualquier URL interna o externa y asignar un texto de enlace libre (ideal para enlazar portales externos como Moodle Centros o la web oficial de Altair).

### 2.2 Creación de Jerarquías y Submenús (*Submenus / Dropdowns*)
* WordPress permite organizar menús jerárquicos mediante el sistema **arrastrar y soltar (*drag and drop*)**.
* Para convertir un elemento en un **submenú desplegable**, basta con arrastrarlo ligeramente hacia la derecha justo debajo del elemento padre (*elemento hijo / ítem sangrado*).

::: tip Mostrar Opciones Avanzadas de Menú
En la pestaña desplegable **Opciones de pantalla** (esquina superior derecha de `Apariencia > Menús`), se pueden activar casillas avanzadas como:
* **Destino del enlace (`target="_blank"`):** Permite abrir el enlace en una pestaña nueva del navegador.
* **Clases CSS:** Añade clases CSS personalizadas a un elemento específico del menú para aplicar estilos únicos.
* **Atributo del título / Relación con el enlace (rel):** Utilizado para atributos como `nofollow`.
  :::

---

## 3. Navegación en Temas de Bloques (Full Site Editing / FSE)

En las versiones modernas de WordPress que utilizan temas basados en bloques (como *Twenty Twenty-Four*), los menús ya no se gestionan desde `Apariencia > Menús`, sino a través del **Editor de Sitio** (`Apariencia > Editor`).

* **Bloque de Navegación (*Navigation Block*):** Es el componente de bloque encargado de renderizar la lista de enlaces.
* **Ventajas del FSE:**
    * Permite editar visualmente el menú directamente sobre la cabecera.
    * Facilita la inserción de iconos, botones de llamadas a la acción (CTA) o barras de búsqueda dentro del propio contenedor de navegación.
    * Permite configurar fácilmente el comportamiento responsivo (*Menú Hamburguesa*) para dispositivos móviles.

---

## 4. Buenas Prácticas de Arquitectura de la Información (UX)

Al diseñar la estructura de navegación para los proyectos web del ciclo, se deben aplicar las siguientes directrices de usabilidad:

* **Regla de los 3 clics:** Cualquier información relevante del sitio debe ser accesible en un máximo de 3 clics desde la portada.
* **Concisión y claridad:** El menú principal no debe superar los **5–7 elementos de primer nivel** para no saturar la carga cognitiva del usuario.
* **Etiquetado claro:** Utilizar nombres descriptivos e intuitivos (*Contacto*, *Servicios*) en lugar de términos creativos pero ambiguos.
* **Página de inicio (*Home*):** Incluir siempre un enlace explícito a la portada o verificar que el logotipo del sitio redirija a la raíz `/`.

---

## 🧪 Práctica Guiada de Aula: Estructuración del Menú Principal del Centro

### Objetivo:
Diseñar y publicar un menú de navegación jerárquico que combine páginas estáticas, categorías dinámicas y un enlace personalizado a la plataforma del centro.

### Pasos a realizar:

1. **Creación del Menú:**
    * Accede a `Apariencia > Menús` (o al *Editor de Sitio* si usas un tema FSE).
    * Crea un nuevo menú denominado `Menú Principal Altair`.

2. **Adición de Elementos:**
    * Añade las páginas estáticas previamente creadas: *Inicio*, *Quienes Somos* y *Contacto*.
    * Añade las categorías de entradas: *Noticias* y *Tutoriales*.
    * Añade un **Enlace personalizado**:
        * **URL:** `[suspicious link removed]`
        * **Texto del enlace:** `Web Altair`

3. **Estructuración Jerárquica (Submenú):**
    * Organiza la estructura para que la categoría *Tutoriales* quede anidada como submenú desplegable dentro de la sección *Noticias*.

4. **Asignación de Ubicación:**
    * Marca la casilla de verificación **Menú Principal / Cabecera** (*Header Menu*) en los ajustes del menú.
    * Guarda los cambios y comprueba en el **Frontend** (`http://localhost/mi_sitio_wordpress`) el correcto funcionamiento de los desplegables.
