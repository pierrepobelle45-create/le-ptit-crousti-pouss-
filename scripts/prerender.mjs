// Post-build : rend l'app en HTML statique et l'injecte dans dist/index.html,
// pour que le contenu existe sans JavaScript (Bing, crawlers IA, aperçus sociaux).
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const distIndex = fileURLToPath(new URL('../dist/index.html', import.meta.url))

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const app = render()
  if (!app || app.length < 5000) {
    throw new Error(`prerender : sortie suspecte (${app?.length ?? 0} caractères)`)
  }
  const marker = '<div id="root"></div>'
  const html = readFileSync(distIndex, 'utf8')
  if (!html.includes(marker)) {
    throw new Error('prerender : marqueur <div id="root"></div> introuvable dans dist/index.html')
  }
  writeFileSync(distIndex, html.replace(marker, `<div id="root">${app}</div>`))
  console.log(`prerender : ${Math.round(app.length / 1024)} Ko de HTML injectés dans dist/index.html`)
} finally {
  await vite.close()
}
