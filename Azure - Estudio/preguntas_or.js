const bank=[

/* ================= CONCEPTOS (25) ================= */

{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es un dato estructurado?",
o:["Imagen","Tabla con filas y columnas","Video","Archivo PDF"],
c:1,
tip:"Los datos estructurados tienen un esquema definido"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es un dato no estructurado?",
o:["Tabla","Relación","Imagen","Índice"],
c:2,
tip:"Imágenes, audio y video no tienen estructura fija"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es un esquema?",
o:["Código","Estructura de datos","API","Servidor"],
c:1,
tip:"Define cómo se organizan los datos"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué tipo de dato es JSON?",
o:["Estructurado","Semiestructurado","No estructurado","Binario"],
c:1,
tip:"JSON tiene estructura flexible"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es una base de datos?",
o:["Archivo","Sistema para almacenar datos","API","Servidor web"],
c:1,
tip:"Permite guardar y consultar información"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es una tabla?",
o:["Archivo","Colección de filas y columnas","API","Servidor"],
c:1,
tip:"Es la base de datos relacional"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es una fila?",
o:["Columna","Registro","Índice","Tabla"],
c:1,
tip:"Representa un registro"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es una columna?",
o:["Registro","Campo","Tabla","Vista"],
c:1,
tip:"Define atributos"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es un índice?",
o:["Tabla","Optimización","Relación","Vista"],
c:1,
tip:"Mejora el rendimiento"
},
{
cert:"DATOS",topic:"Conceptos",
q:"¿Qué es latencia?",
o:["Velocidad de almacenamiento","Tiempo de respuesta","Memoria","CPU"],
c:1,
tip:"Tiempo que tarda en responder"
},

/* ================= RELACIONAL (25) ================= */

{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es una clave primaria?",
o:["Duplicada","Única","Opcional","Null"],
c:1,
tip:"Identifica cada registro"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es una clave foránea?",
o:["Índice","Relación","Vista","Trigger"],
c:1,
tip:"Conecta tablas"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué hace un JOIN?",
o:["Filtra","Une tablas","Ordena","Inserta"],
c:1,
tip:"Combina datos"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es SELECT?",
o:["Insertar","Consultar","Eliminar","Actualizar"],
c:1,
tip:"Obtiene datos"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es INSERT?",
o:["Consultar","Agregar datos","Eliminar","Ordenar"],
c:1,
tip:"Inserta registros"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué hace DELETE?",
o:["Insertar","Eliminar registros","Actualizar","Consultar"],
c:1,
tip:"Elimina datos"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué hace UPDATE?",
o:["Eliminar","Actualizar datos","Insertar","Consultar"],
c:1,
tip:"Modifica registros"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué significa ACID?",
o:["Velocidad","Transacciones seguras","Cache","Logs"],
c:1,
tip:"Integridad de datos"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es Atomicidad?",
o:["Parcial","Todo o nada","Cache","Velocidad"],
c:1,
tip:"Transacción completa o nada"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es Consistencia?",
o:["Velocidad","Datos válidos","Cache","Logs"],
c:1,
tip:"Cumple reglas"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es Durabilidad?",
o:["Temporal","Persistencia","Cache","Velocidad"],
c:1,
tip:"Los datos permanecen"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es Aislamiento?",
o:["Separación","Velocidad","Cache","Backup"],
c:0,
tip:"Evita interferencias"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué hace GROUP BY?",
o:["Ordena","Agrupa","Filtra","Inserta"],
c:1,
tip:"Se usa con SUM, COUNT"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué hace ORDER BY?",
o:["Agrupa","Ordena","Filtra","Elimina"],
c:1,
tip:"Ordena resultados"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es una vista?",
o:["Tabla","Consulta guardada","Índice","Trigger"],
c:1,
tip:"No guarda datos"
},
{
cert:"DATOS",topic:"Relacional",
q:"¿Qué es normalización?",
o:["Duplicar","Organizar datos","Eliminar tablas","Indexar"],
c:1,
tip:"Evita redundancia"
},

/* ================= NOSQL (25) ================= */

{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué caracteriza a una base de datos NoSQL?",
o:["Esquema rígido","Flexibilidad","Relaciones estrictas","Solo tablas"],
c:1,
tip:"NoSQL permite estructuras dinámicas"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué servicio de Azure es NoSQL?",
o:["Azure SQL","Cosmos DB","Synapse","App Service"],
c:1,
tip:"Cosmos DB es la base NoSQL principal"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué formato de datos usa principalmente NoSQL?",
o:["XML","JSON","CSV","TXT"],
c:1,
tip:"JSON es común en documentos"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué ventaja tiene NoSQL?",
o:["Menos escalabilidad","Escalado horizontal","Esquema fijo","JOINs complejos"],
c:1,
tip:"Escala agregando nodos"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué mide RU/s en Cosmos DB?",
o:["CPU","Memoria","Rendimiento","Red"],
c:2,
tip:"Define capacidad de operación"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué es una clave de partición?",
o:["Índice","Distribución de datos","Tabla","Join"],
c:1,
tip:"Permite escalar correctamente"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué evita una mala partición?",
o:["Errores","Hot partitions","Índices","Cache"],
c:1,
tip:"Distribuye carga uniformemente"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué consistencia es más rápida?",
o:["Strong","Eventual","Bounded","Session"],
c:1,
tip:"Eventual prioriza rendimiento"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué tipo de base es Cosmos DB?",
o:["Relacional","NoSQL distribuida","Archivo","Cache"],
c:1,
tip:"Distribución global"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué API soporta Cosmos DB?",
o:["Solo SQL","Varias APIs","Ninguna","SOAP"],
c:1,
tip:"Mongo, Cassandra, SQL, etc."
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué tipo de datos almacena Cosmos DB?",
o:["Filas","Documentos","Columnas","Triggers"],
c:1,
tip:"Documentos JSON"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué es una colección en NoSQL?",
o:["Tabla","Grupo de documentos","Índice","API"],
c:1,
tip:"Similar a tabla"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué evita la escalabilidad horizontal?",
o:["Añadir nodos","Aumentar CPU","Reducir datos","Cache"],
c:1,
tip:"Escalar vertical vs horizontal"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué es latencia baja?",
o:["Tiempo alto","Tiempo corto","Memoria","CPU"],
c:1,
tip:"Respuesta rápida"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué es throughput?",
o:["Errores","Velocidad de procesamiento","Memoria","CPU"],
c:1,
tip:"Cantidad de operaciones"
},

/* ================= ANALITICA (25) ================= */

{
cert:"DATOS",topic:"Analitica",
q:"¿Qué herramienta se usa para visualización?",
o:["SQL","Power BI","Cosmos","Blob"],
c:1,
tip:"Dashboards interactivos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es un Data Warehouse?",
o:["App","Almacén analítico","API","Servidor"],
c:1,
tip:"Optimizado para consultas"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es un Data Lake?",
o:["DB estructurada","Datos crudos","API","Tabla"],
c:1,
tip:"Datos sin procesar"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué servicio de Azure es para Big Data?",
o:["SQL","Synapse","Blob","Queue"],
c:1,
tip:"Analítica avanzada"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es ETL?",
o:["Consulta","Transformación de datos","Backup","API"],
c:1,
tip:"Extraer, transformar y cargar"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué significa BI?",
o:["Base Index","Business Intelligence","Binary Input","Big Index"],
c:1,
tip:"Análisis para negocio"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué hace Power BI?",
o:["Almacena","Visualiza","Ejecuta código","Gestiona redes"],
c:1,
tip:"Representa datos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué tipo de datos usa Data Lake?",
o:["Procesados","Sin procesar","Indexados","Relacionales"],
c:1,
tip:"Datos crudos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué permite Synapse?",
o:["Hosting","Analítica","DNS","Firewall"],
c:1,
tip:"Big Data + SQL"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es agregación?",
o:["Eliminar","Agrupar datos","Insertar","Indexar"],
c:1,
tip:"SUM, COUNT, AVG"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es streaming de datos?",
o:["Datos en tiempo real","Datos almacenados","Archivos","Tablas"],
c:0,
tip:"Procesamiento en vivo"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es batch processing?",
o:["Tiempo real","Procesos por lote","Streaming","Cache"],
c:1,
tip:"Procesamiento diferido"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué herramienta usa dashboards?",
o:["Blob","Power BI","VM","AKS"],
c:1,
tip:"Visualización"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es KPI?",
o:["Clave","Indicador de rendimiento","API","Query"],
c:1,
tip:"Mide desempeño"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es pipeline de datos?",
o:["Red","Flujo de datos","Tabla","Índice"],
c:1,
tip:"Movimiento de datos"
},

/* ================= APP SERVICE (10) ================= */

{
cert:"DEV",topic:"App Service",
q:"¿Qué tipo de servicio es Azure App Service?",
o:["IaaS","PaaS","SaaS","Serverless"],
c:1,
tip:"No administras infraestructura"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite un deployment slot?",
o:["Backup","Pruebas sin afectar producción","Cache","Logs"],
c:1,
tip:"Permite staging"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué ventaja tiene App Service?",
o:["Control total","Escalado automático","Manual","Local"],
c:1,
tip:"Escala automáticamente"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué lenguaje soporta?",
o:["Solo Java","Solo .NET","Varios lenguajes","Ninguno"],
c:2,
tip:"Soporta múltiples lenguajes"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite la integración con GitHub?",
o:["Logs","CI/CD","Backup","Cache"],
c:1,
tip:"Automatiza despliegues"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué es autoscaling?",
o:["Manual","Escalado automático","Cache","Logs"],
c:1,
tip:"Ajusta recursos según demanda"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite HTTPS?",
o:["Seguridad","Velocidad","Cache","Logs"],
c:0,
tip:"Protege datos"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué es un plan de App Service?",
o:["App","Recursos asignados","API","VM"],
c:1,
tip:"Define CPU, RAM"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite custom domain?",
o:["DNS","Dominio propio","API","Cache"],
c:1,
tip:"Usar tu dominio"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite monitoreo?",
o:["Logs","Insights","Cache","Backup"],
c:1,
tip:"Application Insights"
},

/* ================= FUNCTIONS (10) ================= */

{
cert:"DEV",topic:"Functions",
q:"¿Qué modelo usa Azure Functions?",
o:["IaaS","PaaS","Serverless","SaaS"],
c:2,
tip:"No gestionas servidores"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué inicia una función?",
o:["Loop","Trigger","Clase","API"],
c:1,
tip:"Evento dispara ejecución"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué trigger responde HTTP?",
o:["HTTP","Blob","Timer","Queue"],
c:0,
tip:"Para APIs"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué trigger usa tiempo?",
o:["Timer","HTTP","Blob","Queue"],
c:0,
tip:"Ejecuta por horario"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué trigger responde a archivos?",
o:["Blob","HTTP","Timer","Queue"],
c:0,
tip:"Detecta archivos"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué plan cobra por uso?",
o:["Premium","Consumption","VM","Dedicated"],
c:1,
tip:"Pago por ejecución"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué es binding?",
o:["Código","Conexión a servicios","API","Clase"],
c:1,
tip:"Entrada/salida de datos"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué lenguaje soporta?",
o:["Solo JS","Solo C#","Varios","Ninguno"],
c:2,
tip:"Multi lenguaje"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué es escalado automático?",
o:["Manual","Automático","Cache","Logs"],
c:1,
tip:"Se adapta a demanda"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué servicio usa eventos?",
o:["Functions","VM","SQL","DNS"],
c:0,
tip:"Event-driven"
},

/* ================= STORAGE (10) ================= */

{
cert:"DEV",topic:"Storage",
q:"¿Qué almacena Blob Storage?",
o:["Tablas","Archivos","API","Logs"],
c:1,
tip:"Imágenes, videos"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es un contenedor?",
o:["VM","Carpeta","API","Tabla"],
c:1,
tip:"Agrupa blobs"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es SAS?",
o:["Clave","Acceso temporal","Firewall","API"],
c:1,
tip:"Acceso seguro"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es redundancia?",
o:["Backup","Copias de datos","Cache","Logs"],
c:1,
tip:"Alta disponibilidad"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué tipo de acceso hay?",
o:["Privado","Público","Ambos","Ninguno"],
c:2,
tip:"Configurable"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es hot tier?",
o:["Barato","Acceso frecuente","Archivo","Cache"],
c:1,
tip:"Para uso frecuente"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es cool tier?",
o:["Frecuente","Menor acceso","Cache","Logs"],
c:1,
tip:"Menos acceso"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es archive tier?",
o:["Rápido","Muy lento","Cache","Logs"],
c:1,
tip:"Acceso raro"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es Azure Files?",
o:["Blob","File share","API","VM"],
c:1,
tip:"Compartir archivos"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué es Queue Storage?",
o:["Archivos","Mensajes","API","DB"],
c:1,
tip:"Mensajería"
},

/* ================= COSMOS DB (5) ================= */

{
cert:"DEV",topic:"Cosmos",
q:"¿Qué es Cosmos DB?",
o:["SQL","NoSQL global","Archivo","API"],
c:1,
tip:"Distribución global"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué define escalabilidad?",
o:["CPU","Partición","Cache","Logs"],
c:1,
tip:"Clave de partición"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué mide RU/s?",
o:["CPU","Memoria","Rendimiento","Red"],
c:2,
tip:"Capacidad"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué consistencia es más fuerte?",
o:["Eventual","Strong","Session","Bounded"],
c:1,
tip:"Mayor precisión"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué almacena?",
o:["Tablas","JSON","Relaciones","API"],
c:1,
tip:"Documentos"
},

/* ================= SEGURIDAD (10) ================= */

{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es autenticación?",
o:["Permisos","Identidad","Roles","Logs"],
c:1,
tip:"Quién eres"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es autorización?",
o:["Quién eres","Permisos","Login","Token"],
c:1,
tip:"Qué puedes hacer"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es RBAC?",
o:["DB","Roles","API","Firewall"],
c:1,
tip:"Control de acceso"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es Managed Identity?",
o:["Usuario","Identidad automática","Clave","API"],
c:1,
tip:"Evita credenciales"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es Azure AD?",
o:["DB","Identidad","API","VM"],
c:1,
tip:"Gestión de usuarios"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es token?",
o:["Archivo","Credencial","API","Cache"],
c:1,
tip:"Acceso temporal"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es cifrado?",
o:["Texto","Protección de datos","Cache","Logs"],
c:1,
tip:"Seguridad"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es HTTPS?",
o:["Seguridad","Velocidad","Cache","Logs"],
c:0,
tip:"Comunicación segura"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es firewall?",
o:["Red","Protección","API","Cache"],
c:1,
tip:"Control de acceso"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué protege datos?",
o:["Cache","Cifrado","Logs","DNS"],
c:1,
tip:"Seguridad"
},

/* ================= CONTENEDORES (5) ================= */

{
cert:"DEV",topic:"Contenedores",
q:"¿Qué es AKS?",
o:["VM","Kubernetes","DB","API"],
c:1,
tip:"Orquestador"
},
{
cert:"DEV",topic:"Contenedores",
q:"¿Qué es ACI?",
o:["Cluster","Contenedor simple","DB","API"],
c:1,
tip:"Sin orquestador"
},
{
cert:"DEV",topic:"Contenedores",
q:"¿Qué es Docker?",
o:["Lenguaje","Contenedor","DB","API"],
c:1,
tip:"Empaqueta apps"
},
{
cert:"DEV",topic:"Contenedores",
q:"¿Qué es imagen?",
o:["Archivo","Plantilla","API","Cache"],
c:1,
tip:"Base de contenedor"
},
{
cert:"DEV",topic:"Contenedores",
q:"¿Qué es orquestación?",
o:["Control","Gestión de contenedores","API","DB"],
c:1,
tip:"Administra contenedores"
},

];
