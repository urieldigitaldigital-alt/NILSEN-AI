# NilsenAI

Descarga videos de TikTok sin marca de agua, en maxima calidad y sin registrarte.

## Desarrollo local

```bash
npm install
npm run dev
```

Abri http://localhost:3000.

## Como funciona

- `/api/tiktok` recibe la URL del video, la resuelve contra el endpoint publico de
  tikwm.com y devuelve la miniatura, el autor y los links de descarga.
  - `/api/tiktok/download` hace de proxy del archivo final para forzar la descarga como `.mp4`
    (los links de TikTok no fuerzan descarga por si solos y expiran).
    - No requiere ninguna variable de entorno para funcionar. `TIKWM_API_KEY` queda documentada en
      `.env.local.example` para un eventual plan pago.

      ## Deploy

      Pensado para desplegarse en Vercel importando este repositorio
      directamente - no necesita build steps ni variables de entorno adicionales.
      
