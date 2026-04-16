// Usage: node scripts/fix-image-paths.js <appName> <htmlFile> [<htmlFile> ...]
// Rewrites absolute src/srcSet paths in <img> tags to include the app's basePath prefix.
// next/image with unoptimized:true does not prepend basePath in static exports.
const fs = require('fs')

const [,, appName, ...files] = process.argv
if (!appName || files.length === 0) {
  console.error('Usage: fix-image-paths.js <appName> <htmlFile>...')
  process.exit(1)
}

const prefix = `/${appName}`

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8')

  // Fix src="/..." on img tags — skip if already prefixed or is a data URI
  content = content.replace(
    new RegExp(`src="(?!${prefix}/)(?!data:)(/[^"]+)"`, 'g'),
    `src="${prefix}$1"`
  )

  // Fix srcSet entries like "  /images/foo.jpg 1x, /images/foo@2x.jpg 2x"
  content = content.replace(
    new RegExp(`srcSet="([^"]*)"`, 'g'),
    (_, srcset) => {
      const fixed = srcset.replace(
        new RegExp(`(?<=[,\\s]|^)(?!${prefix}/)(/[^,\\s]+)`, 'g'),
        `${prefix}$1`
      )
      return `srcSet="${fixed}"`
    }
  )

  fs.writeFileSync(file, content)
}
