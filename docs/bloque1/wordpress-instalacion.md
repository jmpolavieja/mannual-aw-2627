# 1.2. Despliegue e Instalación de WordPress Paso a Paso

Una vez que tenemos el servidor local **XAMPP** en marcha y la base de datos vacía creada en phpMyAdmin, el siguiente paso es realizar el despliegue físico de los archivos del CMS y ejecutar el asistente web de instalación.

---

## 📂 Paso 1: Preparación del Directorio de Trabajo

En XAMPP, el servidor web Apache busca por defecto los sitios de internet en la ruta raíz del sistema: `C:\xampp\htdocs\`.

1. Descarga el archivo comprimido oficial (`.zip`) desde [es.wordpress.org](https://wordpress.org).
2. Ve a la carpeta `C:\xampp\htdocs\`.
3. Descomprime el contenido del ZIP ahí dentro.
4. **¡Importante!** Cambia el nombre de la carpeta resultante (que por defecto se llama `wordpress`) por el nombre de tu proyecto o cliente, por ejemplo: `primeraweb`.

::: tip Estructura Limpia de Rutas
La ruta absoluta de tus archivos en el disco duro de clase debe quedar exactamente así:
`C:\xampp\htdocs\primeraweb\index.php` (junto al resto de ficheros raíz de WordPress).
:::

---

## ⚙️ Paso 2: El Enlace Técnico (`wp-config.php`)

Antes de lanzar el asistente en el navegador, debemos enseñarle a WordPress dónde está la base de datos de XAMPP que creamos en la práctica anterior.

1. Abre la carpeta de tu proyecto (`C:\xampp\htdocs\primeraweb\`).
2. Busca el archivo llamado `wp-config-sample.php`.
3. Cambia el nombre del archivo eliminando la palabra "-sample". Debe quedar exactamente como **`wp-config.php`**.
4. Ábrelo con tu editor de código (VS Code, Notepad++, etc.) y edita las siguientes constantes con las credenciales locales de XAMPP:

```php
// Nombre de la base de datos que creaste en phpMyAdmin
define( 'DB_NAME', 'db_primeraweb' );

// Usuario por defecto del MySQL local de XAMPP
define( 'DB_USER', 'root' );

// En XAMPP local, la contraseña del root se deja vacía (comillas simples sin espacio)
define( 'DB_PASSWORD', '' );

// Servidor local de la máquina del aula
define( 'DB_HOST', 'localhost' );
```
5. Guarda los cambios y cierra el editor.

---

## 🌐 Paso 3: Lanzamiento del Asistente Web

Con los servicios de Apache y MySQL activos en el panel de control de XAMPP, abre tu navegador web (Chrome, Firefox, Edge) e introduce la URL local de tu proyecto:

👉 `http://localhost/primeraweb/`

*(Nota: Si tuviste que cambiar el puerto de Apache en la UD1 por conflicto, recuerda usar: `http://localhost:8080/primeraweb/`)*

### 📝 Formulario de Configuración Inicial

Al cargar la página, si el archivo `wp-config.php` está bien editado, aparecerá el famoso asistente de instalación de WordPress en 5 minutos. Rellena los datos solicitados:

1. **Título del sitio:** Pon el nombre de tu primer proyecto académico.
2. **Nombre de usuario:** Elige un usuario para administrar la web.
   ::: danger Seguridad en el Aula
   **No uses "admin"**. Es una mala práctica de seguridad que facilita los ataques de fuerza bruta en servidores reales. Elige algo personalizado.
   :::
3. **Contraseña:** El asistente generará una clave fuerte. Como estamos trabajando en un entorno de desarrollo local controlado, puedes cambiarla por una más fácil de recordar para clase, pero asegúrate de marcar la casilla **"Confirmar el uso de una contraseña débil"**.
4. **Tu correo electrónico:** Introduce tu correo corporativo del Colegio Altair.
5. **Visibilidad en los motores de búsqueda:** Deja la casilla **desmarcada**. En local da igual, pero en servidores reales esto evita que Google indexe una web que aún está en construcción.

Haz clic en el botón **"Instalar WordPress"**.

---

## 🔑 Paso 4: Verificación y Acceso al Escritorio

Si el proceso ha concluido con éxito, el asistente te mostrará un mensaje de confirmación. Para acceder al panel de administración (el corazón del CMS), utiliza siempre la URL de login:

👉 `http://localhost/primeraweb/wp-login.php` (o bien `/wp-admin/`)

Introduce el usuario y la contraseña que acabas de definir. Si logras ver el **Escritorio (Dashboard)** con el menú lateral de entradas, páginas y plugins, ¡enhorabuena! Tu entorno local de desarrollo está completamente operativo y listo para ser evaluado en el **Hito 1 de Google Classroom**.

---

## ⚠️ Errores Típicos en el Aula (FAQ de Soporte)

*   **Error: "Error establishing a database connection"**
    *   *Causa:* Has cometido una errata al escribir el nombre de la base de datos, el usuario `root` o te has dejado un espacio dentro de las comillas en `wp-config.php`. Revisa el archivo.
*   **Pantalla en blanco o "No se puede conectar al servidor"**
    *   *Causa:* El servicio Apache o MySQL se ha caído en el panel de control de XAMPP, o estás usando un puerto diferente (como el `8080`) y has olvidado ponerlo en la URL del navegador.
