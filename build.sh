#!/usr/bin/env bash
set -e

APPS=(
  fysio-landing
  vhut-landing
  hgn-landing
  advokatfirma-demo
  tannlege-demo
  vet-demo
  renseri-demo
  camping-demo
  treningssenter-demo
  trelast-demo
  maler-demo
  idrettsanlegg-demo
  idrettslag-demo
  trykk-demo
  elektro-firma
  vvs
  stranda-golf
  os-gravferdsbyraa
)

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Cleaning output directory..."
rm -rf "$ROOT_DIR/out"
mkdir -p "$ROOT_DIR/out"

cp "$ROOT_DIR/index.html" "$ROOT_DIR/out/index.html"

for APP in "${APPS[@]}"; do
  APP_DIR="$ROOT_DIR/apps/$APP"
  echo ""
  echo "=== Building $APP ==="

  if [ ! -d "$APP_DIR" ]; then
    echo "⚠️  Skipping $APP (directory not found)"
    continue
  fi

  cd "$APP_DIR"
  npm install --silent
  npm run build

  if [ ! -d "$APP_DIR/out" ]; then
    echo "❌  $APP: no out/ directory after build. Check next.config.js patch."
    exit 1
  fi

  mkdir -p "$ROOT_DIR/out/$APP"
  cp -r "$APP_DIR/out/." "$ROOT_DIR/out/$APP/"
  echo "✅  $APP done"
  cd "$ROOT_DIR"
done

echo ""
echo "=== Build complete. Output in: $ROOT_DIR/out/ ==="
