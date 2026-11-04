# Guía Didáctica para la Confección de la Memoria Técnica del Proyecto Integrador
## 1. Orientaciones Didácticas y Estilo de Redacción Técnica
   ::: info
   Esta guía establece las pautas pedagógicas y la estructura requerida para redactar la Memoria Técnica del Proyecto Integrador de WordPress (Empresa: "Altair Tech Solutions"). El objetivo de este documento no es reproducir textos prediseñados, sino servir como plantilla orientadora para que cada estudiante documente, argumente y justifique las decisiones técnicas adoptadas durante el despliegue del portal web.
   :::
   ###  Criterios de Calidad en la Redacción Profesional:
   * **Vocabulario Técnico Preciso**: Utiliza términos propios del módulo (por ejemplo, DocumentRoot, Cotejo MySQL, Hardening, Permalinks, RBAC, Hooks, Directiva PHP).
   * **Justificación Razonada**: No te limites a enumerar pasos ("Hice clic en instalar"); explica el porqué técnico de cada configuración (por ejemplo, por qué elegiste el cotejo `utf8mb4_unicode_ci` o por qué limitaste las revisiones en `wp-config.php`).
   * **Soporte Visual Integrado**: Cada captura de pantalla incluida en la memoria debe ir numerada, tener un título descriptivo y estar explicada brevemente en el texto inmediatamente anterior o posterior.
## 2. Estructura Requerida de la Memoria Técnica
   A continuación se detalla el esquema obligatorio que debe componer tu memoria técnica, junto con las preguntas guía que debes responder en cada apartado.
   ### Portada e Identificación del Proyecto
   * **Datos requeridos**: Título del proyecto, Nombre y Apellidos del alumno, Curso (2º SMR), Módulo (Aplicaciones Web), Centro (Colegio Altair) y Fecha de entrega.
   ### Sección 1: Ficha del Proyecto y Entorno Servidor
   En este bloque debes describir la infraestructura local sobre la que has desplegado el sistema.
   1.1 Objetivos Corporativos del Sitio Web
   * Pregunta guía: ¿Cuál es la actividad principal de "Altair Tech Solutions" y qué necesidades comerciales resuelve su nuevo portal web?
   1.2 Configuración de la Infraestructura Servidor (XAMPP)
   * Preguntas guía:
    - ¿Qué versión de Apache y MySQL/MariaDB estás ejecutando en XAMPP?
    - ¿En qué ruta física del disco duro se encuentra alojado el proyecto (DocumentRoot) y por qué es esa la única carpeta pública procesada por Apache?
    - ¿Qué parámetros utilizaste para crear la base de datos en phpMyAdmin (nombre de la base de datos y cotejo de caracteres) y qué ventajas aporta el cotejo seleccionado?
   ### Sección 2: Arquitectura de la Información y Maquetación Visual
   2.1 Mapa Web y Ajustes de Navegación
   * Pautas de documentación:
        * Describe las 5 páginas creadas (Inicio, Quiénes Somos, Servicios, Noticias, Contacto).
        * Explica qué opción seleccionaste en Ajustes > Lectura para fijar la portada estática y la página de entradas, indicando la diferencia funcional entre ambas.
        * Justifica la estructura de enlaces permanentes (Permalinks) configurada en Ajustes > Enlaces permanentes desde el punto de vista del SEO y la usabilidad.
   2.2 Estrategia de Maquetación con Bloques Gutenberg y FSE
   * Pautas de documentación:
        * Detalla los bloques avanzados empleados en la maquetación (por ejemplo, rejillas de Columnas, bloques de Medios y Texto o botones de Llamada a la Acción - CTA).
        * Explica cómo personalizaste la cabecera (Header) y el pie de página (Footer) mediante el Editor del Sitio (Full Site Editing).
   ### Sección 3: Funcionalidades, Formularios y Cumplimiento RGPD
   3.1 Integración del Plugin de Formularios
   * Pautas de documentación:
        * Nombra el plugin de formularios seleccionado del repositorio oficial y argumenta tu elección basándote en la fecha de actualización, instalaciones activas y compatibilidad.
        * Detalla la lista de campos que componen tu formulario de contacto.
   3.2 Adaptación al Reglamento General de Protección de Datos (RGPD)
   * Preguntas guía:
        * ¿Qué elemento específico incorporaste al formulario para cumplir con la legislación europea de privacidad?
        * ¿Por qué la casilla de verificación de la política de privacidad debe estar desmarcada por defecto?
   ### Sección 4: Hardening de Seguridad y Auditoría de Roles (RBAC)
   4.1 Directivas de Seguridad en `wp-config.php`
   * Tabla de justificación técnica: Completa en tu memoria una tabla como la siguiente, explicando la función de cada directiva insertada con VS Code:
   | Directiva PHP Insertada | Valor Asignado | Justificación Técnica de Seguridad / Rendimiento |
   | --- | --- | --- |
   | WP_MEMORY_LIMIT | 256M | (Explica por qué es necesario ampliar la memoria RAM asignada a PHP) |
   | DISALLOW_FILE_EDIT | true | (Explica qué riesgo evita deshabilitar el editor interno del backend) |
   | WP_POST_REVISIONS | 3 | (Explica el impacto de este parámetro sobre la base de datos MySQL) |
   | WP_DEBUG_LOG | true | (Explica la diferencia entre registrar errores en archivo o mostrarlos en pantalla) |
   
   4.2 Matriz de Control de Acceso Basado en Roles (RBAC)
   Pautas de documentación:
   Enumera las 4 cuentas de usuario creadas en tu sistema.
   Explica qué capacidades atómicas tiene asignadas el rol Colaborador frente al rol Editor y qué ocurre cuando un colaborador intenta publicar directamente una entrada.
   Sección 5: Plan de Copias de Seguridad y Recuperación (Disaster Recovery)
   5.1 Procedimiento de Respaldo Lógico y Físico
   Pautas de documentación:
   Describe el proceso seguido en phpMyAdmin para exportar el archivo de volcado de la base de datos (.sql).
   Explica el método utilizado para comprimir el directorio web en un archivo .zip.
   Argumenta por qué un backup completo requiere obligatoriamente ambos componentes (archivos + base de datos) y aplica la regla del 3-2-1 a tu entorno de trabajo.
## 3. Guía de Evidencias Gráficas Obligatorias
   Para verificar la ejecución técnica sin revelar la solución resuelta, adjunta en tu memoria las siguientes 4 capturas de pantalla numéricas con pie de imagen:
   Captura 1 (Servidor y BD): Panel de phpMyAdmin mostrando la base de datos bd_wordpress_altair con sus 12 (o más) tablas creadas y su cotejo utf8mb4_unicode_ci.
   Captura 2 (Frontend/Gutenberg): Vista pública de la página Inicio donde se aprecie la cabecera corporativa, la maquetación en columnas y el pie de página.
   Captura 3 (Formulario y RGPD): Página de contacto con el formulario renderizado y la casilla obligatoria de aceptación del aviso de privacidad.
   Captura 4 (Hardening y Usuarios): Captura combinada mostrando las líneas agregadas en wp-config.php dentro de VS Code y la tabla de Usuarios > Todos los usuarios de WordPress con los 4 roles activos.
## 4. Lista de Autochequeo Pre-Entrega para el Alumnado
   Antes de subir tu memoria técnica en formato PDF a Google Classroom, comprueba que cumples con todos los ítems de esta lista:
   [ ] He redactado las explicaciones con mis propias palabras, evitando copiar texto literalmente de internet o de otros compañeros.
   [ ] He respondido a todas las preguntas guía razonando las decisiones técnicas.
   [ ] He completado la tabla de justificación de directivas de wp-config.php.
   [ ] He adjuntado las 4 capturas de pantalla requeridas con sus correspondientes pies de foto descriptivos.
   [ ] He verificado que adjunto a la tarea los tres entregables finales: la Memoria Técnica en PDF, el paquete comprimido de archivos (.zip) y el volcado de la base de datos (.sql).
