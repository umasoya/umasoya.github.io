---
title: "放置していていたブログのメンテナンスをした話"
date: 2022-09-30T09:59:27Z
draft: false
tags: ["IT", "node.js", "frontend"]
---

久しく放置していたこのブログのメンテンスを実施しました。
フロントまわりのツール類は変化が早く、陳腐化していたため整理&アップデートをしたのですが中々大変でした。

## ツールやモジュールの整理

先日IEのサポートが終了しbabelを使う必要が無くなったので、この機会に削除しました。
また、gulpを使用してアセットのビルドなどの処理を行っていたのですが、webpackだけで事足りるためこちらも削除しました。
以前使用していたnode-sassはDeprecatedになっていたので、 sass(Dart-sass)へ移行。

```json
 {
+  "license": "UNLICENSED",
   "devDependencies": {
     "@fortawesome/fontawesome-free": "^5.13.0",
     "@types/highlight.js": "^9.12.3",
@@ -6,26 +7,33 @@
     "@typescript-eslint/eslint-plugin": "^2.32.0",
     "@typescript-eslint/parser": "^2.32.0",
     "browser-sync": "^2.26.7",
+    "css-loader": "^6.7.1",
     "dom": "0.0.3",
     "eslint": "^6.8.0",
     "eslint-config-prettier": "^6.11.0",
     "eslint-loader": "^3.0.4",
     "eslint-plugin-prettier": "^3.1.3",
-    "gulp": "^4.0.2",
-    "gulp-rename": "^2.0.0",
-    "gulp-sass": "^4.1.0",
-    "gulp-sourcemaps": "^2.6.5",
     "highlight.js": "^10.4.1",
     "instantclick": "^3.1.0",
-    "npm-check-updates": "^4.1.2",
+    "mini-css-extract-plugin": "^2.6.1",
+    "npm-check-updates": "^16.3.3",
     "path": "^0.12.7",
     "prettier": "^1.19.1",
     "pretty-quick": "^2.0.1",
+    "sass": "^1.55.0",
+    "sass-loader": "^13.0.2",
     "scroll-out": "^2.2.8",
     "ts-loader": "^6.2.2",
     "typescript": "^3.8.3",
-    "webpack": "^4.43.0",
-    "webpack-cli": "^3.3.11",
-    "webpack-stream": "^5.2.1"
+    "webpack": "5.0.0",
+    "webpack-cli": "^4.0.0",
+    "webpack-dev-server": "^4.11.1",
+    "webpack-fix-style-only-entries": "^0.6.1",
+    "webpack-stream": "^5.2.1",
+    "yarn": "^1.22.19"
+  },
+  "scripts": {
+    "build": "webpack --mode development",
+    "serve": "webpack serve --mode development"
   }
 }
```

バージョンアップ等もして、ビルドしてみると下記のようなエラーが大量に発生します。

```sh
> docker compose run --rm node npm run build

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(99,68)
      TS1110: Type expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(99,77)
      TS1005: '}' expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(99,78)
      TS1128: Declaration or statement expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(99,80)
      TS1005: ';' expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(101,33)
      TS1005: ';' expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(101,48)
      TS1005: ';' expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(102,8)
      TS1005: ';' expected.

ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts
[tsl] ERROR in /newb.tokyo/node_modules/@types/express-serve-static-core/index.d.ts(108,22)
      TS1005: ';' expected.
...
```

どうやら express-serve-static-core の `4.17.20` で発生している不具合で、 `4.17.6` までバージョンダウンすれば良いとのこと
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/53397

package.json に下記を追加してバージョンを固定

```json
  "resolutions": {
    "@types/express-serve-static-core": "4.7.16"
  },
```

ビルド実行

```sh
> docker compose run --rm node yarn

> docker compose run --rm node npm run build
```

無事にエラーは出なくなりました。

### おわり

hugo もかなりバージョンアップが来ているようなので、近いうちにアップデートしようかなと考えています。

### 追記(2022/10/28)

`highlight.js` が上手いこと動作していなかったので 11系にアップグレードしたところ、今度はbuildでコケるように…
どうやら10系とは別の不具合があるようで、結局9系にダウングレードしました。

```sh
yarn upgrade highlight.js@^9.18.5
```

またビルド自体も上手いことできていなかったようなので、 [webpack.config.js](https://raw.githubusercontent.com/umasoya/newb.tokyo/master/webpack.config.js) を修正しました。