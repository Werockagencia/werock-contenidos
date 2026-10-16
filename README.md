# We Rock · Contenidos propios

Línea editorial de redes de **We Rock** (Empresa de Crecimiento Estratégico · Cajicá, Colombia · werock.space).

## Piezas
| Nº | Pieza | Formato | Estado |
|---|---|---|---|
| 01 | **Estructura** — "Tu marketing no tiene un problema de contenido. Tiene un problema de estructura." | Carrusel 9 slides + 3 historias | Listo para publicar |

- Ver, copiar captions y descargar: **página del repo** (GitHub Pages) — ver link en la descripción del repo.
- Archivos: `01-estructura/carrusel/export/` (1080×1350) · `01-estructura/story/export/` (1080×1920) · `descargas/*.zip`.
- Captions, textos alternativos, guía de stickers y checklist de validación: `01-estructura/COPY-Y-PUBLICACION.md`.

## Sistema visual
Barlow (tipografía real), negro `#0a0a0a`, rojo `#e8000a`, crema `#f4f1ea`; masthead "Nº XX — …", folio, numeral fantasma, grano. Logo: `we-rock.png` (fondo oscuro), `we-rock-dark.png` (crema), `we-rock-white.png` (rojo).

## Re-exportar
```bash
cd 01-estructura && npm install
node scripts/render.mjs carrusel   # PNG del carrusel
node scripts/render.mjs story      # PNG de las historias
node scripts/sheet.mjs carrusel 3 420   # hoja de contacto
```
Requiere Chrome instalado (ruta en `scripts/render.mjs`).
