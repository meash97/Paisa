#!/bin/sh
# Builds index.html from src/ parts and stamps the service-worker cache version.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
{ cat src/part1.html; cat src/part2.js src/part3.js src/part4.js; printf '\n</script>\n</body>\n</html>\n'; } > index.html
sed "s/__VERSION__/$V/" src/sw.template.js > sw.js
echo "built version $V"
