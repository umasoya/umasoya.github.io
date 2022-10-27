---
title: "Hugoでmermaidを使えるようにする"
date: 2022-10-28T00:44:54Z
draft: false
tags: ["IT", "node.js", "frontend"]
---

- [Hugoにmermaidを組み込んでみた](https://qiita.com/_takeuchi_/items/35c52fd85884a83c154d)

こちらの記事を参考に当ブログでも `mermaid.js` を使えるように設定する。

## インストール

```sh
yarn add -D mermaid @types/mermaid
```

## mermaid を読み込む

私はモジュール類のインポートや設定を `assets/js/vendor.ts` にまとめているので、このファイルに下記を追記する。

```ts
import "mermaid"
```

## mermaid.js用のショートコードを作成

`layouts/shortcodes` に `mermaid.html` を作成する。

```html
<div class="mermaid" align="{{ if .Get 'align' }}{{ .Get 'align' }}{{ else }}center{{ end }}">
    {{ safeHTML .Inner }}
</div>
```

## 描画テスト

```html
{{</*mermaid*/>}}
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
{{</mermaid>}}
```

{{<mermaid>}}
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
{{</mermaid>}}