export interface ChangelogEntry {
  version: string;
  fecha: string;
  cambios: string[];
}

/** Notas de versión, de la más nueva a la más vieja. Solo cambios notorios para el usuario. */
export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '2.1.0',
    fecha: '21/09/2026',
    cambios: [
      'Sistema de descuentos: aplicá descuentos a los servicios por proyecto.',
      'Archivo de clientes: guardá clientes como archivados sin perderlos.',
      'Diseño minimalista: interfaz más limpia y enfocada.',
      'Versión visible: mirá la versión actual en el sidebar.',
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
