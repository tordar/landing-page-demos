const fs = require('fs')
const path = require('path')

const APPS = [
  'fysio-landing',
  'vhut-landing',
  'hgn-landing',
  'advokatfirma-demo',
  'tannlege-demo',
  'vet-demo',
  'renseri-demo',
  'camping-demo',
  'treningssenter-demo',
  'trelast-demo',
  'maler-demo',
  'idrettsanlegg-demo',
  'idrettslag-demo',
  'trykk-demo',
  'elektro-firma',
  'vvs',
  'stranda-golf',
  'os-gravferdsbyraa',
]

const ROOT = path.join(__dirname, '..')

function getInjection(appName) {
  return `  output: 'export',\n  basePath: '/${appName}',\n  images: { unoptimized: true },\n`
}

function findConfigFile(appDir) {
  for (const name of ['next.config.js', 'next.config.mjs', 'next.config.ts', 'next.config.cjs']) {
    const p = path.join(appDir, name)
    if (fs.existsSync(p)) return p
  }
  return null
}

let patched = 0
let skipped = 0
let failed = 0

for (const app of APPS) {
  const appDir = path.join(ROOT, 'apps', app)

  if (!fs.existsSync(appDir)) {
    console.warn(`⚠️  apps/${app} not found, skipping`)
    skipped++
    continue
  }

  const configFile = findConfigFile(appDir)
  const injection = getInjection(app)

  if (!configFile) {
    const newConfig = `/** @type {import('next').NextConfig} */\nconst nextConfig = {\n${injection}}\n\nmodule.exports = nextConfig\n`
    fs.writeFileSync(path.join(appDir, 'next.config.js'), newConfig)
    console.log(`✅  ${app}: created next.config.js`)
    patched++
    continue
  }

  let content = fs.readFileSync(configFile, 'utf-8')

  if (content.includes("output: 'export'") || content.includes('output: "export"')) {
    console.log(`⏭️  ${app}: already patched`)
    skipped++
    continue
  }

  // Inject after the opening brace of the exported config object.
  // Handles: const x = {, module.exports = {, export default {
  const PATTERN = /((?:const\s+\w+\s*=|module\.exports\s*=|export\s+default)\s*\{)(\s*\n?)/
  const match = content.match(PATTERN)

  if (!match) {
    console.error(`❌  ${app}: unrecognized config format in ${path.basename(configFile)}`)
    console.error(`    Manually add: output: 'export', basePath: '/${app}', images: { unoptimized: true }`)
    failed++
    continue
  }

  content = content.replace(PATTERN, (_, prefix, ws) => `${prefix}\n${injection}`)
  fs.writeFileSync(configFile, content)
  console.log(`✅  ${app}: patched ${path.basename(configFile)}`)
  patched++
}

console.log(`\nDone: ${patched} patched, ${skipped} skipped, ${failed} failed`)
if (failed > 0) process.exit(1)
