# Veterinaria Trébol: demo de flitzfa

Web de ejemplo para una veterinaria. **Veterinaria Trébol es un negocio ficticio**: el nombre, los horarios y los servicios son de ejemplo, y no hay dirección ni teléfono.

Publicada en https://veterinaria.flitzfa.com.ar · Hecha por [flitzfa](https://flitzfa.com.ar).

## Qué muestra

- Servicios ordenados en tarjetas, con un botón de consulta en cada uno.
- Aviso de abierto o cerrado según el horario (hora de Buenos Aires).
- Botones de WhatsApp en modo demo: muestran el mensaje armado y permiten copiarlo, pero no abren `wa.me` ni lo envían a ningún número.

Los datos del negocio están en `src/config/business.ts`.

## Comandos

```sh
npm install
npm run dev      # localhost:4321
npm run build    # genera ./dist
```

## Fotos

Todas de [Pexels](https://www.pexels.com), con la [licencia de Pexels](https://www.pexels.com/license/) (uso libre, sin atribución obligatoria). Son de la misma sesión, para mantener el estilo.

| Archivo | Foto original | Autor |
|---|---|---|
| `src/assets/images/consultorio-perro.jpg` | https://www.pexels.com/photo/6235243/ | Tima Miroshnichenko |
| `src/assets/images/control-mesa.jpg` | https://www.pexels.com/photo/6234608/ | Tima Miroshnichenko |
| `public/og-image.jpg` (recorte de la primera) | https://www.pexels.com/photo/6235243/ | Tima Miroshnichenko |

Logo e íconos: SVG propios (`src/components/Logo.astro`, `public/favicon.svg`) e íconos de [Lucide](https://lucide.dev) (ISC).
