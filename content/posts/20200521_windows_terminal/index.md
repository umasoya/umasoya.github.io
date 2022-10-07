---
title: "Windows Terminalが正式リリースされたので使ってみた"
date: 2020-05-21T04:37:10Z
draft: false
---

Microsoft Store からインストール

設定は以下のファイルに書いていく。
`%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\setting.json`



## デフォルトの起動を Windows Power Shell から WSL(Ubuntu) に変更 

`defaultProfile` にプロファイルのguid を指定するとそれがデフォルトで起動するようになる。

guid は `list`の中にかかれているのでそれをコピペ

```json
{
    // WSLのguid
    "defaultProfile": "{2c4de342-38b7-51cf-b940-2309a097f518}"
}
```



## 起動時のディレクトリをWSLのホームディレクトリに変更

そのままだと  `%USERPROFILE%` が開くので起動時のコマンドで `~` を指定する。

```json
{
    "profiles":
      "list": [
        {
          "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
        "hidden": false,
                "name": "Ubuntu",
                "source": "Windows.Terminal.Wsl",
        "commandline": "wsl.exe ~ -d Ubuntu"
      }
    ]
}
```



## 見た目をカスタマイズ

プロファイルに以下のプロパティを追記する。

全プロファイルで共通の設定は `defaults` に記述する。



| プロパティ        | 説明                                                         |
| ----------------- | ------------------------------------------------------------ |
| backgroundImage   | `string` <br />背景画像のパス                                |
| backgroundOpacity | `number` <br />背景画像の透過度 0～1の間で調整<br />※うまく適用されなかった |
| colorSchema       | `string` <br />`schema`配列で自分で定義したものかデフォルトで入っているものを指定<br />https://docs.microsoft.com/ja-jp/windows/terminal/customize-settings/color-schemes |
| useAcrylic        | `boolean` <br />後ろに別ウィンドウがあったら透過する         |
| fontFace          | `string` <br />フォントを指定                                |



```json
{
    "profiles":
      "defaults":
      {
        "colorSchema": "Solarized Dark",
        "useAcrylic": false,
        "fontFace": "Migu 1M"
    },
      "list": [
        {
          ...,
          "backgroundImage": "path\\to\\image",
          "backgroundOpacity": 0.5,
          ...
      }
    ]
}
```



フォントは長年windows環境で愛用している [Migu 1M](https://mix-mplus-ipa.osdn.jp/migu/) を使用。



## キーバインド

```json
{
    "keybindings":
    [
        // split pane
        { "command": { "action": "splitPane", "split": "vertical" }, "keys": "alt+|" },
        { "command": { "sction": "splitPane", "split": "horizontal" }, "keys": "alt+-" },
        
        // move pane
    { "command": { "action": "moveFocus", "direction": "left" }, "keys": "alt+h" },
        { "command": { "action": "moveFocus", "direction": "down" }, "keys": "alt+j" },
        { "command": { "action": "moveFocus", "direction": "up" }, "keys": "alt+k" },
        { "command": { "action": "moveFocus", "direction": "right" }, "keys": "alt+l" },
        
        // resize pane
        { "command": { "action": "resizePane", "direction": "left" }, "keys": "alt+left" },
        { "command": { "action": "resizePane", "direction": "down" }, "keys": "alt+down" },
        { "command": { "action": "resizePane", "direction": "up" }, "keys": "alt+up" },
        { "command": { "action": "resizePane", "direction": "right" }, "keys": "alt+right" },
        
        // find
        { "command": "find", "keys": "alt+f },
        
        // close pane
        { "command": "closePane", "keys": "alt+q" }
    ]
}
```



# 感想

これ1つでWSL、cmd、Windows Power Shell 等を使えるのはかなり便利。

今まで `tmux` を使って画面分割していたけどもう不要かもしれない。



# 参考

- [Windows Terminalをカスタマイズしよう！(Preview v0.11.1121.0版)](https://qiita.com/hideki0145/items/04582a26baf3d81632c1)

- [公式ドキュメント](https://docs.microsoft.com/ja-jp/windows/terminal/get-started)


