# Hugo June Theme

[![Hugo Version](https://img.shields.io/static/v1?label=Hugo+Version&message=0.88.1&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.88.1)
[![Latest Release](https://img.shields.io/github/tag/ClavinJune/hugo-june-theme.svg)](https://github.com/ClavinJune/hugo-june-theme/releases/latest)
[![GitHub](https://img.shields.io/github/license/ClavinJune/hugo-june-theme)](https://github.com/ClavinJune/hugo-june-theme/blob/master/LICENSE)
[![Work In Progress](https://img.shields.io/static/v1?label=Work+In+Progress&message=true&color=green&logo=github)](https://github.com/ClavinJune/hugo-june-theme)

![Hugo June Theme Example](https://hugo.ClavinJune.dev/images/example.png)

Hugo June is a theme that created to serve multilingual personal site and blog. The design itself is created by [Jessi](https://munyaaa.github.io/) and implemented by [Clavin June](https://clavinjune.dev). By default, Hugo June has supported English, Indonesian, and Japanese. All the configuration could be modified by adjusting the built-in `config file`, `i18n directory`, and `data directory`.

## Features

- Skip to Content Button
- Multilingual
- Google Site Verification Meta Tag
- Web Monetization Meta Tag
- Brave Rewards Verification File
- Minimalist
- Simple
- Responsive
- Custom Shortcodes
- Content Security Policy Support
- Giscus Support Comment Section

## Config Example

```toml
baseURL = 'https://clavinjune.dev'
canonifyURLs = true
enableEmoji = true
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = true
enableMissingTranslationPlaceholders = true
enableRobotsTXT = true
googleAnalytics = 'XXXXX'
hasCJKLanguage = true
languageCode = 'en-us'
paginate = 5
publishDir = 'docs'
title = 'June Personal Web'
theme = 'june'

[markup]
  [markup.tableOfContents]
    endLevel = 3
    ordered = true
    startLevel = 1
  [markup.highlight]
    anchorLineNos = true
    codeFences = true
    guessSyntax = true
    lineNos = true
    lineNumbersInTable = true
    style = 'vs'
    tabWidth = 4
  
[taxonomies]
  category = 'categories'

[languages]
  [languages.en]
    contentDir = 'content/en'
    languageName = 'English'
    weight = 1
    [languages.en.params]
    description = 'Clavin June Personal Web'
    locale = "en_US"

    [[languages.en.menu.main]]
      name = 'HOME'
      url = '/'
      weight = 1

    [[languages.en.menu.main]]
      name = 'BLOG'
      url = '/blogs/'
      weight = 2

    [[languages.en.menu.main]]
      name = 'PODCAST'
      url = '/podcasts/'
      weight = 3

    [[languages.en.menu.main]]
      name = 'WORK'
      url = '/works/'
      weight = 4

  [languages.id]
    contentDir = 'content/id'
    languageName = 'Bahasa Indonesia'
    weight = 2
    [languages.id.params]
      description = 'Clavin June Personal Web'
      locale = "id_ID"

    [[languages.id.menu.main]]
      name = 'HOME'
      url = '/'
      weight = 1

    [[languages.id.menu.main]]
      name = 'BLOG'
      url = '/blogs/'
      weight = 2

    [[languages.id.menu.main]]
      name = 'SINIAR'
      url = '/podcasts/'
      weight = 3

    [[languages.id.menu.main]]
      name = 'KARYA'
      url = '/works/'
      weight = 4

  [languages.ja]
    contentDir = 'content/ja'
    languageName = '日本語'
    weight = 3
    [languages.ja.params]
      description = 'Clavin June Personal Web'
      locale = "ja_JP"

    [[languages.ja.menu.main]]
      name = 'ホーム'
      url = '/'
      weight = 1

    [[languages.ja.menu.main]]
      name = 'ブログ'
      url = '/blogs/'
      weight = 2

    [[languages.ja.menu.main]]
      name = 'ポード'
      url = '/podcasts/'
      weight = 3

    [[languages.ja.menu.main]]
      name = '作品'
      url = '/works/'
      weight = 4

[author]
  Name = "XXXXX"
  Email = 'XXXXX'

[params]
  [params.june]
    braveRewardsVerification = 'ze0dec1b3acfbd430cac887ce390fdefcb56679334fcd39bc49d434660a52e26c'
    canonicalURL = 'XXXXX'
    csp = "default-src 'self' 'unsafe-inline' https:; object-src 'none'; style-src 'self' 'unsafe-inline' fonts.googleapis.com github.githubassets.com; font-src fonts.gstatic.com; script-src 'self' 'unsafe-inline' www.googletagmanager.com gist.github.com giscus.app; base-uri 'none'; img-src 'self' images.unsplash.com;"
    googleSiteVerification = 'XXXXX'
    monetization = '$ilp.uphold.com/XXXXX'

    [[params.june.support]]
      Name = 'Bitcoin'
      URL = 'XXXXX'

    [[params.june.support]]
      Name = 'Ko-fi'
      URL = 'XXXXX'

    [[params.june.support]]
      Name = 'Trakteer'
      URL = 'XXXXX'

    [[params.june.contact]]
      Name = "Email"
      URL  = "XXXXX"

    [[params.june.contact]]
      Name = "Github"
      URL  = "XXXXX"

    [[params.june.contact]]
      Name = "LinkedIn"
      URL  = "XXXXX"
      
    # get from https://giscus.app/
    [params.june.giscus]
      Repo =  "XXXXX"
      RepoID = "XXXXX"
      Category = "XXXXX"
      CategoryID = "XXXXX"
      Mapping = "XXXXX"
      Reaction = "XXXXX"
      Metadata = "XXXXX"
      Theme = "XXXXX"
```
