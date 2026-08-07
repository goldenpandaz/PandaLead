export interface DialCode {
  code: string;
  label: string;
}

/** Lista acotada a los países más relevantes para el uso real de la app —
 * no pretende ser exhaustiva, se suma otro código el día que haga falta. */
export const DIAL_CODES: readonly DialCode[] = [
  { code: '+57', label: '🇨🇴 +57 Colombia' },
  { code: '+54', label: '🇦🇷 +54 Argentina' },
  { code: '+52', label: '🇲🇽 +52 México' },
  { code: '+51', label: '🇵🇪 +51 Perú' },
  { code: '+56', label: '🇨🇱 +56 Chile' },
  { code: '+593', label: '🇪🇨 +593 Ecuador' },
  { code: '+58', label: '🇻🇪 +58 Venezuela' },
  { code: '+591', label: '🇧🇴 +591 Bolivia' },
  { code: '+595', label: '🇵🇾 +595 Paraguay' },
  { code: '+598', label: '🇺🇾 +598 Uruguay' },
  { code: '+506', label: '🇨🇷 +506 Costa Rica' },
  { code: '+507', label: '🇵🇦 +507 Panamá' },
  { code: '+34', label: '🇪🇸 +34 España' },
  { code: '+1', label: '🇺🇸 +1 EE.UU. / Canadá' },
];

export const DEFAULT_DIAL_CODE = '+57';
