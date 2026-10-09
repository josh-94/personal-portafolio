# Josh — portafolio

Sitio de Jeshua Cabanillas Blanco. Español en `/` e inglés en `/en`. El contenido largo vive en Markdown, en `src/content`.

## Local

```bash
npm install
npm run dev
```

El build de producción, el que usa Netlify, es:

```bash
npm run build
npm run preview
```

`npm run build` genera `out/` con Next.js y después el índice de búsqueda con Pagefind. La búsqueda en `npm run dev` avisa que el índice todavía no existe.

## Publicar una pieza

1. Copia `src/content/_plantilla.mdx` a la colección: `blog`, `guias`, `casos`, `automatizaciones` o `integraciones`.
2. El nombre del archivo es el slug. `translationKey` es el mismo en español y en inglés.
3. Completa título, resumen, fecha, etiquetas, nivel, tecnologías e idioma.
4. En un caso, llena problema y enfoque solo con hechos. Si no hay resultado, deja `outcome` vacío y anota el hueco en `gaps`.
5. No crees la versión en inglés hasta que el texto exista. Una página inglesa vacía no se publica.
6. Deja `draft: true` hasta cerrar el texto. Pasa a `false` para incluirla en el sitio, el RSS y el sitemap.

## Calendario inicial

Ideas, no fechas comprometidas. Conviene dos piezas al mes, primero en español.

1. Cómo ordenar DEV, TEST y PROD con Power Platform Pipelines. Ya hay una guía.
2. Dataverse o SQL Server. Ya hay una guía.
3. Qué resuelve un gateway on-premises y qué queda fuera.
4. Patrón de aprobación que operaciones puede seguir.
5. El costo de editar en PROD.
6. Conector o HTTP cuando el sistema no tiene conector.
7. SharePoint como archivo y Dataverse como sistema de registro.
8. Cómo documentar un flujo. Ya hay una nota.
9. Estructura de pantallas de una canvas app de mesa de control.
10. Checklist para TI antes de integrar un SQL on-premises.

## Netlify

El dominio `codewithjosh.codes` sigue en el sitio actual de Netlify. `netlify.toml` fija:

- comando: `npm run build`
- carpeta: `out`
- Node 22

En el panel, la carpeta publicada tiene que ser `out`, no `dist` ni `build`. Si existe una regla que envía todo a `/index.html`, quítala: cada ruta tiene su HTML.

El formulario de contacto se llama `contact` y lo recibe Netlify Forms. Configura ahí el correo de aviso. No hay servidor Express ni claves en el repositorio.

## Secretos

Había un `.env` en el historial del repo, usado por el servidor de correo anterior. Ya no está en el árbol de trabajo y `.gitignore` lo excluye. Rota la clave de aplicación de Gmail: el archivo llegó a estar en el remoto. No reescribo el historial de git desde aquí.

Los scripts `deploy.sh`, `1.configNewServer.sh`, `2.configNgnix.sh` y `3.configSSL.sh` son de un Nginx antiguo. El sitio nuevo no los usa.

## Marca

Las reglas del logo están en `public/brand/USO.md`. `npm run brand` regenera los SVG y los PNG. El nodo del isotipo es verde. El nombre del sitio en el título y en Open Graph es codewithjosh.
