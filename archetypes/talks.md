---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: "description"
aliases:
    - "/{{ .Name | lower }}-{{ time.Format "Jan-06" .Date | lower }}"
---
