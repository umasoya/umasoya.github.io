---
title: "【Laravel】ネストしたリレーションをEager loadingするときにクエリを追加する"
date: 2019-07-24T06:34:31Z
draft: false
tags: ["IT", "PHP", "Laravel"]
---

Category,Title,Subtitle という3つのモデルを例にする。

**Category**

```php
<?php

class Category extends Eloquent
{
    protected $table = 'category';

    public function title()
    {
        return $this->hasMany('Title');
    }
}
```

**Title**

```php
<?php

class Title extends Eloquent
{
    protected $table = 'title';

    public function subtitle()
    {
        return $this->hasMany('Subtitle');
    }
}
```

**Subtitle**

```php
<?php

class Subtitle extends Eloquent
{
    protected $table = 'subtitle';
}
```

## 普通にEager loadする

```php
$result = Category::with('title.subtitle')->get();
```

## title に where を咬ませる

```php
$result = Category::with(['title' => function ($query) {
    $query->where('title', 'like', '%first%');
}])->get();
```

Eager loadingにクエリを追加する場合はこのようにクロージャーを渡せば良い。

## title と subtitle の両方にクエリを咬ませたい

```php
$result = Category::with([
    'title' => function ($query) {
        $query->where('title', 'like', '%first%');
    },
    'title.subtitle' => function ($query) {
        $query->where('subtitle', 'like', '%second%');
    }
])->get();
```

`subtitle` にクエリを追加する場合のキー値は `subtitle` ではなく `title.subtitle` とする必要がある。
