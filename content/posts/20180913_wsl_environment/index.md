---
title: "WSLでの開発環境"
date: 2018-09-13T10:53:31+09:00
draft: false
tags: ["IT", "Windows", "WSL", "Linux"]
---

仕事での開発マシンは`Windows`を使用しているので、
現在の開発環境をメモ程度に書いておく。

## tools

| category | name |
----|----
| Terminal Emulator | [wsl_terminal](https://github.com/goreliu/wsl-terminal) |
| Terminal Multiplexer | [tmux](https://github.com/tmux/tmux) |
| Editor | [neovim](https://github.com/neovim/neovim) |
| VM | [virtualbox](https://www.virtualbox.org/) + [vagrant](https://www.vagrantup.com/) |
| Filer | [NyanFi](http://nekomimi.la.coocan.jp/freesoft/nyanfi.htm) |

### wsl_terminal

WSLで使えるターミナルエミュレータ  
見た目が好きだったので使用している。  
デフォルトでは起動時のログインシェルは`bash`だが、設定ファイルで変更することができる。

`etc/wsl-terminal.conf` example:

```
[config]
shell=/bin/zsh
```

### tmux

画面分割

### neovim

`vim`の進化系みたいなもの  
`vim`ではなく`neovim`を選んだ理由は、カーソルを移動したときにvimの場合は画面全てを再描画するためカーソル位置の行と列に色を付けるとめちゃくちゃ重くなるから。neovimはそのへんを上手くやっているらしくサクサク動いてくれる。  

### VM

WSL上でも`docker`は動くのだが、まだ制約がキツく使い勝手が悪そうなのでVM上でdocokerを動かすために入れている。  
WSL側からwindowsでインストールした`VirtualBox`と`vagrant`を使うためには環境変数を設定する必要がある。

```.envrc
export VAGRANT_WSL_ENABLE_WINDOWS_ACCESS=1
export PATH="$PATH:/mnt/c/Program Files/Oracle/VirtualBox"
# .envrcの場合は PATH_add というエイリアスを使ってもOK
PATH_add "$PATH:/mnt/c/Program Files/Oracle/VirtualBox"
```

あとは普通にVMを起動してdockerを使うだけ。

### NyanFi

かつて使用していた`あふw`のような2画面ファイラ。  
最近は標準のエクスプローラを使っているのでほぼ起動しない。  

## あとがき

WSLが順当に使いやすく進歩していて、非常にありがたい。
あとは`docker`が普通に使えるようになれば特に文句は無くなるので、MicroSoftさんにはこれからもぜひ頑張っていただきたい。
