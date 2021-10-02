#! /bin/bash

set -e

TITLE="$(stoml theme.toml name)"
HOMEPAGE=$(stoml theme.toml homepage)
AUTHOR="$(stoml theme.toml author.name)"
DESCRIPTION="$(stoml theme.toml description)"
TARGET="/tmp/readme-${RANDOM}"

hugo new site "$TARGET" &> /dev/null
cp "README.md" "$TARGET/content"

cd "$TARGET"

cat <<EOF > "config.toml"
baseURL = '$HOMEPAGE/'
title = '$TITLE'
theme = 'readme'

[params]
  author = '$AUTHOR'
  description = '$DESCRIPTION'
EOF

git clone -q https://github.com/ClavinJune/hugo-readme-theme.git "themes/readme"

hugo --minify &> /dev/null

cd - &> /dev/null

cp "$TARGET/public/index.html" "docs/index.html"
rm -rf "$TARGET"
