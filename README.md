# README

## How to write new post?

use `hugo new` command.

```
.bin/hugo new posts/hello.md

or

.bin/hugo hugo new posts/hello/index.md
```

## build content

```sh
docker-compose run --rm hugo hugo
```

## build assets

```sh
docker-compose run --rm node npm run build
```
