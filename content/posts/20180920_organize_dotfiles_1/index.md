---
title: "dotfilesの整理 その1"
date: 2018-09-20T12:11:48+09:00
tags: ["IT", "dotfiles", "terminal", "bash", "zsh", "vim"]
draft: true
---

dotfilesの中がゴチャゴチャしていて、非常に気持ち悪い…。  
現在はプライベートではChromeBookを使っているが、仕事ではWindowsを使っている(といってもVM上のCentOSを主に使っている)。  
さらに最近はWSLの使い勝手が良くなってきてWSL(実態はUbuntu)上で作業をすることも増えてきた。  
ChromeBookを購入する以前は、MacBookを相棒としていた。  
こうして数々の環境で使えるように都度dotfilesを場当たり的に弄った結果、自分でも把握しきれなくなってきた。  
そこでdotfilesをコツコツ整理して、その経過を記録として残しておこうと思う。  

### ゴール

#### 動作環境

- MacOS
- ChromeOS
- Linux(CentOS/Ubuntu)
- Windows(これはオマケぐらいに考えている)

#### シェル関連

bash, zshで環境変数などを共通化したい。

```.sh
dotfiles/
├── conf.d
│   ├── .env  #共通の環境変数
│   ├── .rc   #共通の処理
│   ├── bash/ #bash用の設定
│   ├── zsh/  #zsh用の設定
├── .vim
```

#### リポジトリ管理

存在は知っていたが使ったことはない[ghq](https://github.com/motemen/ghq)を使いたい。
[こちらの記事](http://dojineko.hateblo.jp/entry/2016/09/09/001754)に従って`$GOPATH/src`をghqのrootとして設定する。

### フロー

- dotfilesを取ってくる
  - 普通に`git clone`する
- 自動でデプロイ
  - 現在makefileでやっているのでこれを整理するだけでいい

#### bashとzshの環境変数を共通化
