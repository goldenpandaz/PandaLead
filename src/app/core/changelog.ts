export interface ChangelogEntry {
  version: string;
  fecha: string;
  cambios: string[];
}

/** Notas de versión, de la más nueva a la más vieja. Solo cambios notorios para el usuario. */
export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '2.1.5',
    fecha: '12/10/2026',
    cambios: [
      'Conexión con Kontrol Cash: tus ingresos de cada mes se envían solos, con un token seguro y un interruptor para encender o apagar la conexión.',
      'Perfil: pon tu nombre y tu foto desde Configuración; se ven en el menú lateral.',
      'Resumen con "Ingresos del mes" e indicadores de clientes y trabajos.',
      'Calendario para elegir la fecha de cada pago.',
    ],
  },
  {
    version: '2.1.4',
    fecha: '12/10/2026',
    cambios: ['Catálogo adaptado al celular: listas, formularios y barras de importar y exportar sin desbordes.'],
  },
  {
    version: '2.1.3',
    fecha: '12/10/2026',
    cambios: [
      'Varios trabajos por cliente, cada uno con sus pagos, notas, fecha de entrega y vista de detalle.',
      'Resumen con próximos seguimientos, trabajos por entregar y cobros pendientes.',
      'Notas generales y seguimientos editables, con selector de fecha y hora y confirmación al eliminar.',
      'Historial en español y ordenado del más reciente al más antiguo.',
      'Catálogo (antes Configuración): listas más compactas, formulario al costado y estados que se reordenan arrastrando.',
      'Estados simplificados: solo "Requiere servicio". "Preferencias" pasa a llamarse Configuración.',
    ],
  },
  {
    version: '2.1.2',
    fecha: '11/10/2026',
    cambios: [
      'Temas de color: elige entre dorado, azul y rosa desde Configuración.',
      'Categorías múltiples: cada cliente puede tener una o más categorías.',
      'Formularios más simples: un campo sobre otro, con teléfono y prefijo en una sola línea.',
      'Estados con punto de color, íconos de acciones con color y botones más grandes.',
      'Tipografía y títulos unificados en toda la app.',
      'Al editar un cliente ahora se cargan su teléfono, categorías y servicio.',
    ],
  },
  {
    version: '2.1.0',
    fecha: '21/09/2026',
    cambios: [
      'Sistema de descuentos: aplica descuentos a los servicios por proyecto.',
      'Archivo de clientes: guarda clientes como archivados sin perderlos.',
      'Diseño minimalista: interfaz más limpia y enfocada.',
      'Versión visible: mira la versión actual en el sidebar.',
    ],
  },
  {
    version: '2.0.0',
    fecha: '01/09/2026',
    cambios: [
      'Nuevo diseño de formularios más intuitivo.',
      'Ver y ocultar contraseña al ingresar.',
      'Bloqueo automático de clientes duplicados.',
      'Mejor espaciado y organización visual en toda la app.',
    ],
  },
  {
    version: '1.3.0',
    fecha: '17/08/2026',
    cambios: [
      'Importar clientes desde Excel o CSV.',
      'Exportar clientes a Excel o CSV.',
      'Eliminar múltiples clientes de una vez.',
      'Diálogos de importación con resumen de cambios.',
    ],
  },
  {
    version: '1.2.0',
    fecha: '16/08/2026',
    cambios: [
      'Cierre automático de sesión por inactividad.',
      'Validación de contraseña más segura.',
      'Protección de APIs con Firebase.',
      'Mejora de rendimiento en carga de datos.',
    ],
  },
  {
    version: '1.1.0',
    fecha: '08/08/2026',
    cambios: [
      'Botón para instalar la app desde el menú.',
      'Instalación mejorada en iPhone y iPad.',
      'Acceso rápido como app nativa desde el home del celular.',
    ],
  },
  {
    version: '1.0.0',
    fecha: '07/08/2026',
    cambios: [
      'Primera versión de PandaLead.',
      'Ingreso seguro con contraseña temporal.',
      'Gestión completa de clientes y contactos.',
      'Sistema de ingresos y servicios.',
      'Funciona en celular, tablet y computadora.',
      'Instalable como app nativa.',
    ],
  },
];
