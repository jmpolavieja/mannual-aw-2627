# 1.1. Servidor de Desarrollo Local: XAMPP

Para que WordPress funcione en los equipos locales de clase, necesitamos un entorno **AMP** (Apache, MySQL, PHP). En el segundo curso utilizamos **XAMPP** instalado directamente sobre el sistema operativo Windows local para obtener el máximo rendimiento.

## 📥 Paso 1: Instalación en Local
1. Descarga el instalador oficial de XAMPP para Windows.
2. Ejecuta el instalador como **Administrador**.
3. En la selección de componentes, asegúrate de marcar como mínimo:
    * **Apache** (Servidor Web)
    * **MySQL** (Base de Datos)
    * **phpMyAdmin** (Gestión gráfica de la base de datos)
4. Instala en la ruta por defecto: `C:\xampp`.

## 🛠️ Paso 2: Resolución de Conflictos de Puertos (Muy Común)
Al arrancar el servicio **Apache** desde el Panel de Control de XAMPP, es muy habitual que el botón se ponga en rojo debido a que el **puerto 80 o 443** está ocupado por otra aplicación del sistema (como Skype o servicios de IIS).

### Cómo cambiar el puerto de Apache:
1. En la línea de Apache, haz clic en el botón **Config** y abre el archivo `httpd.conf`.
2. Busca la línea (Ctrl+B) que dice `Listen 80`.
3. Cámbiala por un puerto alternativo, por ejemplo: `Listen 8080`.
4. Guarda el archivo y arranca Apache. Ahora tu URL local será `http://localhost:8080`.

## 🗄️ Paso 3: Creación de la Base de Datos
Antes de volcar los archivos de WordPress, debemos preparar su contenedor de datos:
1. Con Apache y MySQL en verde, entra en `http://localhost/phpmyadmin`.
2. Haz clic en **Nueva**.
3. Nombra la base de datos como `db_primeraweb` (o el nombre asignado en clase).
4. En el cotejamiento, selecciona `utf8mb4_general_ci` para garantizar la compatibilidad con emojis y caracteres especiales.
5. Haz clic en **Crear**.
