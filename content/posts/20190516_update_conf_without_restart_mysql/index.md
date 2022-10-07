---
title: "MySQLの設定を再起動せず変更する"
date: 2019-05-16T07:23:37Z
draft: false
tags: ["MySQL", "メモ", "IT"]
---

```sql
SET GLOBAL 変数名=値

or

SET @@global.変数名=値
```

これだけだと再起動したときに設定が消えてしまうので、必ず `my.cnf` も変更しておく。
