---
title: "hugoをupdateしたらトップページがおかしくなったので直した話"
date: 2019-10-29T15:00:17Z
draft: false
tags: ["IT", "Golang", "hugo"]
---

hugo を `0.55.5` -> `0.59.0` にupdateしたところ、 `/` や `/tags/` などのリスト形式のページの表示がおかしくなっていた。  
原因は `0.57.0` で `.Pages` に `publishDir/` 以下のすべてのページが含まれるように変更されたことだった。[#6153](https://github.com/gohugoio/hugo/issues/6153)  

## 修正方法

`layout` の中で `.Pages` を使っていた箇所を `.Site.RegularPages` に書き換える。
