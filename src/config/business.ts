/**
 * Datos del negocio (Veterinaria Trébol).
 * Negocio ficticio: demo de flitzfa. Todos los datos son de ejemplo, sin dirección ni teléfono reales.
 */

export const business = {
  name: 'Trébol',
  fullName: 'Veterinaria Trébol',
  tagline: 'Clínica para perros y gatos en Zona Oeste',
  area: 'Zona Oeste, Buenos Aires',
  siteUrl: 'https://veterinaria.flitzfa.com.ar/',
  flitzfaUrl: 'https://flitzfa.com.ar/',

  // Mensajes de ejemplo: en la demo se muestran, no se envían
  whatsappMessages: {
    general: 'Hola, quiero hacer una consulta en Veterinaria Trébol.',
    turno: 'Hola, quiero pedir un turno para mi mascota. ¿Qué días tienen libre?',
    servicio: (servicio: string) => `Hola, quiero consultar por ${servicio.toLowerCase()}. ¿Cómo es y qué día puedo ir?`,
  },

  // Horarios de ejemplo. Días: 0 = domingo ... 6 = sábado. Rangos en "HH:MM-HH:MM".
  hours: [
    { label: 'Lunes a viernes', days: [1, 2, 3, 4, 5], ranges: ['10:00-19:00'] },
    { label: 'Sábados', days: [6], ranges: ['09:00-12:00'] },
  ],
  closedLabel: 'Domingos y feriados',

  seo: {
    title: 'Veterinaria Trébol | Demo de web para veterinaria',
    description: 'Veterinaria Trébol es una veterinaria ficticia: una demo de flitzfa para mostrar cómo puede ser la web de una clínica. Servicios, horarios y turnos por WhatsApp.',
  },
} as const;

export type Business = typeof business;
