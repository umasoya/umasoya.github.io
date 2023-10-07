# README

## How to write new post?

use `hugo new` command.

```
.bin/hugo new posts/hello/index.md

or

.bin/hugo hugo new posts/hello/index.md
```

## build content

```sh
docker compose run --rm hugo hugo

# or

.bin/hugo hugo
```

## build assets

- ts
- scss

ともに `webpack` でバンドルしている｡
hugoの機能でコンパイルできるが､管理コストが高く小回りも効かないのでこうなった｡

```sh
docker compose run --rm node yarn run build
```