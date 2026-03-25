const bank=[

//* ================= FUNCTIONS / LOGIC APPS ================= */

{
cert:"DEV",topic:"Functions",
q:"Una organización quiere implementar un flujo de trabajo sin servidor con modelo declarativo. ¿Qué servicio debe usar?",
o:["Azure Functions","Azure Logic Apps","App Service","AKS"],
c:1,
tip:"Logic Apps permite flujos declarativos sin código"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué modelo utiliza Azure Logic Apps?",
o:["Imperativo","Declarativo","Orientado a objetos","Procedural"],
c:1,
tip:"Se basa en definición declarativa de flujos"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué ventaja ofrece el plan de consumo en Azure Functions?",
o:["Costo fijo","Pago por ejecución","Uso exclusivo","Mayor latencia"],
c:1,
tip:"Solo pagas cuando se ejecuta"
},
{
cert:"DEV",topic:"Functions",
q:"¿Cuál es el requisito para que una Azure Function se ejecute?",
o:["Trigger","VM","API","Storage"],
c:0,
tip:"Siempre se dispara por un evento"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué componente permite conectar entrada y salida en Azure Functions?",
o:["Trigger","Binding","Pipeline","SDK"],
c:1,
tip:"Bindings conectan servicios externos"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué tipo de trigger responde a solicitudes HTTP?",
o:["HTTP","Timer","Blob","Queue"],
c:0,
tip:"Permite crear APIs"
},
{
cert:"DEV",topic:"Functions",
q:"¿Qué trigger ejecuta funciones en intervalos programados?",
o:["Queue","Timer","Blob","Event Grid"],
c:1,
tip:"Se usa para tareas programadas"
},
{
cert:"DEV",topic:"Functions",
q:"En Node.js v4, ¿cómo se configuran triggers?",
o:["Archivo JSON","Código JavaScript","Portal","CLI"],
c:1,
tip:"Se configuran directamente en el código"
},

/* ================= STORAGE BLOBS ================= */

{
cert:"DEV",topic:"Storage",
q:"¿Qué tipo de blob se usa para discos duros virtuales?",
o:["Block","Append","Page","Archive"],
c:2,
tip:"Page blob es para VHD"
},
{
cert:"DEV",topic:"Storage",
q:"¿Cuál es el tamaño máximo de un block blob?",
o:["5 TB","50 TB","190 TB","1 TB"],
c:2,
tip:"Límite aproximado 190 TB"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué tipo de cuenta de almacenamiento se recomienda?",
o:["Basic","General Purpose v2","Blob only","Legacy"],
c:1,
tip:"GPv2 soporta todas las capacidades"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué nivel de acceso es offline?",
o:["Hot","Cool","Archive","Premium"],
c:2,
tip:"Archive requiere rehidratación"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué nivel es para acceso frecuente?",
o:["Hot","Cool","Archive","Cold"],
c:0,
tip:"Hot para uso constante"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué nivel es más barato pero con acceso lento?",
o:["Hot","Cool","Archive","Premium"],
c:2,
tip:"Archive es el más económico"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué permite lifecycle management?",
o:["Eliminar datos","Mover entre niveles","Crear blobs","Cache"],
c:1,
tip:"Automatiza costos"
},

/* ================= STORAGE REST ================= */

{
cert:"DEV",topic:"Storage",
q:"¿Qué encabezado HTTP es común en Azure Storage?",
o:["Authorization","Token","Session","Cookie"],
c:0,
tip:"Se usa para autenticación"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué clase en .NET gestiona blobs?",
o:["BlobClient","SqlClient","HttpClient","QueueClient"],
c:0,
tip:"Cliente para blobs"
},

/* ================= COSMOS DB ================= */

{
cert:"DEV",topic:"Cosmos",
q:"¿Qué nivel de consistencia ofrece mayor rendimiento?",
o:["Strong","Bounded","Session","Eventual"],
c:3,
tip:"Eventual = mejor rendimiento"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué mide RU/s?",
o:["CPU","Memoria","Operaciones","Red"],
c:2,
tip:"Costo por operación"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué hace una clave de partición?",
o:["Indexa","Distribuye datos","Relaciona tablas","Cache"],
c:1,
tip:"Escalabilidad horizontal"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué API usarías para grafos?",
o:["SQL","Mongo","Gremlin","Table"],
c:2,
tip:"Gremlin es para grafos"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué API es clave-valor?",
o:["Table","Mongo","SQL","Gremlin"],
c:0,
tip:"Table API"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué API permite consultas tipo SQL?",
o:["Mongo","SQL","Table","Gremlin"],
c:1,
tip:"Core SQL API"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué es el lease container?",
o:["Backup","Change feed","Cache","Logs"],
c:1,
tip:"Coordina procesamiento"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué hacen los pretriggers?",
o:["Después de insertar","Antes de insertar","Eliminar datos","Indexar"],
c:1,
tip:"Validación previa"
},
{
cert:"DEV",topic:"Cosmos",
q:"¿Qué hace el objeto context?",
o:["Logs","Acceso a colección","Autenticación","API"],
c:1,
tip:"Permite interactuar con datos"
},

/* ================= IDENTITY / AUTH ================= */

{
cert:"DEV",topic:"Seguridad",
q:"¿Qué tipo de permisos usan aplicaciones con usuario autenticado?",
o:["Application","Delegated","Admin","Service"],
c:1,
tip:"Delegated = usuario presente"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué flujo OAuth requiere interacción del usuario y soporta acceso condicional?",
o:["Client Credentials","Authorization Code","Implicit","On-Behalf-Of"],
c:1,
tip:"Authorization Code Flow es el estándar moderno"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué flujo se usa para servicios sin usuario?",
o:["Delegated","Authorization Code","Client Credentials","Implicit"],
c:2,
tip:"Client Credentials es para apps sin usuario"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es Azure Active Directory (Azure AD)?",
o:["Base de datos","Servicio de identidad","Firewall","API"],
c:1,
tip:"Gestiona usuarios y autenticación"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es un token de acceso?",
o:["Archivo","Credencial temporal","API","Cache"],
c:1,
tip:"Permite acceder a recursos protegidos"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué estándar se usa en autenticación moderna?",
o:["SOAP","OAuth 2.0","FTP","HTTP"],
c:1,
tip:"OAuth 2.0 es base de identidad"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es OpenID Connect?",
o:["DB","Extensión de OAuth para identidad","API","Firewall"],
c:1,
tip:"Agrega autenticación sobre OAuth"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué permite RBAC?",
o:["Cache","Control de acceso por roles","Logs","DNS"],
c:1,
tip:"Define permisos por rol"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es el principio de menor privilegio?",
o:["Acceso total","Acceso mínimo necesario","Admin total","Sin seguridad"],
c:1,
tip:"Reduce riesgos"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué es Managed Identity?",
o:["Usuario","Identidad automática","Token","API"],
c:1,
tip:"Evita credenciales en código"
},

/* ================= MSAL ================= */

{
cert:"DEV",topic:"Seguridad",
q:"¿Qué biblioteca se usa para SPA (Single Page Application)?",
o:["MSAL.NET","MSAL.js","MSAL Java","MSAL Python"],
c:1,
tip:"MSAL.js es para frontend"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Para qué sirve PublicClientApplicationBuilder?",
o:["DB","Configurar apps públicas","Logs","Cache"],
c:1,
tip:"Se usa en apps cliente"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué tipo de aplicación usa PublicClient?",
o:["Backend","Frontend","Database","API"],
c:1,
tip:"Apps sin secreto"
},
{
cert:"DEV",topic:"Seguridad",
q:"¿Qué tipo de app usa ConfidentialClient?",
o:["Frontend","Backend","Mobile","SPA"],
c:1,
tip:"Apps con secreto"
},

/* ================= SAS ================= */

{
cert:"DEV",topic:"Storage",
q:"¿Qué tipo de SAS aplica solo a Blob y Data Lake?",
o:["Account SAS","Service SAS","User delegation SAS","Shared SAS"],
c:1,
tip:"Service SAS es específico del recurso"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué SAS usa Azure AD para firmarse?",
o:["Service SAS","Account SAS","User Delegation SAS","Key SAS"],
c:2,
tip:"Más seguro"
},
{
cert:"DEV",topic:"Storage",
q:"¿Mejor práctica al usar SAS?",
o:["Duración larga","Duración corta","Sin expiración","Compartir clave"],
c:1,
tip:"Reducir exposición"
},
{
cert:"DEV",topic:"Storage",
q:"¿Qué permite SAS?",
o:["Eliminar DB","Acceso controlado","Crear VM","Logs"],
c:1,
tip:"Acceso temporal"
},

/* ================= REST / GRAPH ================= */

{
cert:"DEV",topic:"API",
q:"¿Qué método HTTP se usa para actualizar parcialmente?",
o:["POST","PUT","PATCH","GET"],
c:2,
tip:"PATCH modifica parcialmente"
},
{
cert:"DEV",topic:"API",
q:"¿Qué método reemplaza completamente un recurso?",
o:["PATCH","PUT","POST","GET"],
c:1,
tip:"PUT reemplaza todo"
},
{
cert:"DEV",topic:"API",
q:"¿Qué método obtiene datos?",
o:["POST","GET","PUT","PATCH"],
c:1,
tip:"GET recupera información"
},
{
cert:"DEV",topic:"API",
q:"¿Qué es Microsoft Graph?",
o:["DB","API unificada","Storage","DNS"],
c:1,
tip:"Accede a servicios M365"
},
{
cert:"DEV",topic:"API",
q:"¿Qué componente mueve datos de M365 a Azure?",
o:["Graph API","Graph Connectors","Graph Data Connect","REST"],
c:2,
tip:"Data Connect para análisis"
},
{
cert:"DEV",topic:"API",
q:"¿Qué devuelve código 200?",
o:["Error","Éxito","Redirección","Cache"],
c:1,
tip:"Operación exitosa"
},
{
cert:"DEV",topic:"API",
q:"¿Qué devuelve código 404?",
o:["Éxito","No encontrado","Error servidor","Permiso"],
c:1,
tip:"Recurso no existe"
},

/* ================= APP SERVICE ================= */

{
cert:"DEV",topic:"App Service",
q:"¿Qué plan ofrece máxima escalabilidad?",
o:["Free","Basic","Premium","Isolated"],
c:3,
tip:"Isolated para alto rendimiento"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué es App Service Environment?",
o:["VM","Entorno aislado","DB","API"],
c:1,
tip:"Mayor seguridad"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué determina recursos de cómputo?",
o:["App","Plan","Storage","DNS"],
c:1,
tip:"El plan define CPU y RAM"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué controla tráfico saliente?",
o:["Firewall","VNet integration","DNS","Cache"],
c:1,
tip:"Integración con red"
},
{
cert:"DEV",topic:"App Service",
q:"¿Dónde configuras runtime?",
o:["Portal","App Service settings","Storage","DNS"],
c:1,
tip:"Configuras stack"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué logs existen en Linux?",
o:["Sistema","App logs","Ambos","Ninguno"],
c:2,
tip:"Ambos disponibles"
},

/* ================= AUTOSCALING ================= */

{
cert:"DEV",topic:"App Service",
q:"¿Qué describe autoscaling?",
o:["Manual","Automático","Fijo","Sin control"],
c:1,
tip:"Se adapta a demanda"
},
{
cert:"DEV",topic:"App Service",
q:"¿Cuándo usar autoscaling?",
o:["Carga fija","Carga variable","Sin tráfico","Solo pruebas"],
c:1,
tip:"Escenarios dinámicos"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué métrica puede escalar?",
o:["CPU","Memoria","Requests","Todas"],
c:3,
tip:"Depende configuración"
},

/* ================= DEPLOYMENT SLOTS ================= */

{
cert:"DEV",topic:"App Service",
q:"¿Cuál es el tráfico por defecto en slots nuevos?",
o:["0%","10%","50%","100%"],
c:0,
tip:"No reciben tráfico"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué permite un slot?",
o:["Logs","Pruebas","Cache","Index"],
c:1,
tip:"Staging sin afectar prod"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué pasa en un swap?",
o:["Se borra app","Se intercambian entornos","Se elimina código","Nada"],
c:1,
tip:"Intercambio prod/staging"
},
{
cert:"DEV",topic:"App Service",
q:"¿Qué configuración NO se intercambia?",
o:["Código","Connection strings marcados","App settings","Logs"],
c:1,
tip:"Configuraciones sticky"
},
/* ================= DATA LAKE / STORAGE AVANZADO ================= */

{
cert:"DATOS",topic:"Analitica",
q:"¿Qué solución es mejor para análisis con Azure Databricks?",
o:["Blob Storage","Data Lake Storage Gen2","Queue Storage","Table Storage"],
c:1,
tip:"Databricks trabaja mejor con Data Lake Gen2"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué nivel de acceso usar para datos raramente accedidos?",
o:["Hot","Cool","Archive","Premium"],
c:1,
tip:"Cool = bajo costo con acceso ocasional"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué nivel usar para cumplimiento y acceso muy raro?",
o:["Hot","Cool","Archive","Premium"],
c:2,
tip:"Archive = muy barato pero lento"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué habilita el espacio de nombres jerárquico?",
o:["Blob simple","Estructura tipo carpetas","Cache","Logs"],
c:1,
tip:"Convierte en Data Lake"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Primer paso para crear jerarquía en Data Lake Gen2?",
o:["Crear contenedor","Habilitar namespace jerárquico","Crear VM","Crear API"],
c:1,
tip:"Es requisito base"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué mejora organización en Data Lake?",
o:["Índices","Carpetas jerárquicas","Triggers","Logs"],
c:1,
tip:"Organización tipo sistema de archivos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Por qué puede fallar lectura de un blob?",
o:["CPU","Permisos","RAM","Logs"],
c:1,
tip:"Normalmente es acceso/credenciales"
},

/* ================= COSMOS ESCENARIOS ================= */

{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué API usar para una red social?",
o:["Table","Gremlin","SQL","Mongo"],
c:1,
tip:"Grafos = relaciones complejas"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué API usar para documentos JSON?",
o:["Table","Gremlin","SQL","Mongo"],
c:3,
tip:"Mongo API es popular para documentos"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué API usar para clave-valor escalable?",
o:["SQL","Mongo","Table","Gremlin"],
c:2,
tip:"Table API"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué escenario NO es ideal para Cosmos DB?",
o:["Alta latencia","Distribución global","Alta disponibilidad","Escalabilidad"],
c:0,
tip:"Cosmos es para baja latencia"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué usar para app móvil con contenido personalizado?",
o:["SQL","Cosmos DB","Blob","Queue"],
c:1,
tip:"Baja latencia global"
},
{
cert:"DATOS",topic:"NoSQL",
q:"¿Qué característica es clave en retail global?",
o:["Cache","Distribución global","Logs","DNS"],
c:1,
tip:"Usuarios en todo el mundo"
},

/* ================= MICROSOFT FABRIC ================= */

{
cert:"DATOS",topic:"Analitica",
q:"¿Qué solución combina Data Lake y Data Warehouse?",
o:["Synapse","Fabric Lakehouse","Blob","SQL"],
c:1,
tip:"Lakehouse = ambos mundos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué solución SaaS permite crear pipelines?",
o:["Power BI","Fabric Data Factory","Blob","SQL"],
c:1,
tip:"Integración de datos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué motor distribuido usa Fabric?",
o:["Spark","SQL Server","MySQL","Oracle"],
c:0,
tip:"Apache Spark"
},

/* ================= PROCESAMIENTO DE DATOS ================= */

{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es procesamiento de flujos?",
o:["Batch","Tiempo real","Offline","Manual"],
c:1,
tip:"Streaming en tiempo real"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es procesamiento batch?",
o:["Tiempo real","Por lotes","Streaming","Cache"],
c:1,
tip:"Procesamiento diferido"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué componente maneja streaming en Fabric?",
o:["Spark","Eventstreams","Blob","SQL"],
c:1,
tip:"Procesamiento en vivo"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es ingestión de datos?",
o:["Eliminar","Entrada de datos","Procesar","Visualizar"],
c:1,
tip:"Entrada al sistema"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es transformación?",
o:["Entrada","Cambio de datos","Salida","Logs"],
c:1,
tip:"Modificar estructura/formato"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es pipeline?",
o:["Red","Flujo de datos","API","DB"],
c:1,
tip:"Orquesta procesos"
},

/* ================= POWER BI ================= */

{
cert:"DATOS",topic:"Analitica",
q:"¿Qué herramienta se usa para crear reportes?",
o:["SQL","Power BI","Blob","VM"],
c:1,
tip:"Visualización de datos"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué permite drill-down?",
o:["Filtros","Jerarquías","Logs","Cache"],
c:1,
tip:"Navegación por niveles"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué visualización usar para tiempo?",
o:["Tabla","Gráfica de líneas","Mapa","Tarjeta"],
c:1,
tip:"Series temporales"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es un dashboard?",
o:["DB","Panel visual","API","Cache"],
c:1,
tip:"Resumen visual"
},
{
cert:"DATOS",topic:"Analitica",
q:"¿Qué es KPI?",
o:["Clave","Indicador","API","Query"],
c:1,
tip:"Mide desempeño"
},

/* ================= ESCENARIOS REALES ================= */

{
cert:"DEV",topic:"General",
q:"Una app necesita escalar automáticamente sin administrar servidores. ¿Qué usar?",
o:["VM","App Service","Functions","AKS"],
c:2,
tip:"Serverless"
},
{
cert:"DEV",topic:"General",
q:"Necesitas almacenar imágenes de usuarios. ¿Qué servicio usar?",
o:["SQL","Blob Storage","Cosmos","Queue"],
c:1,
tip:"Archivos binarios"
},
{
cert:"DEV",topic:"General",
q:"Necesitas baja latencia global. ¿Qué usar?",
o:["SQL","Cosmos DB","Blob","Queue"],
c:1,
tip:"Distribución global"
},
{
cert:"DEV",topic:"General",
q:"Necesitas ejecutar código en eventos. ¿Qué usar?",
o:["VM","Functions","Blob","SQL"],
c:1,
tip:"Event-driven"
},
{
cert:"DEV",topic:"General",
q:"Necesitas control de acceso sin credenciales en código. ¿Qué usar?",
o:["Token","Managed Identity","API Key","Password"],
c:1,
tip:"Más seguro"
},
{
cert:"DEV",topic:"General",
q:"Necesitas contenedores sin orquestación. ¿Qué usar?",
o:["AKS","ACI","VM","App Service"],
c:1,
tip:"Simple deployment"
},
{
cert:"DEV",topic:"General",
q:"Necesitas orquestar contenedores. ¿Qué usar?",
o:["ACI","AKS","VM","Blob"],
c:1,
tip:"Kubernetes"
},

];
