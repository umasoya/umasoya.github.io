ARG golang_version="1.19-alpine"

FROM golang:${golang_version}

ARG hugo_version="v0.104.3"

RUN apk --update --no-cache add --virtual .deps git gcc && \
    apk --no-cache add libc-dev g++ && \
    git clone -b ${hugo_version} --depth 1 https://github.com/gohugoio/hugo.git /tmp/hugo

WORKDIR /tmp/hugo

ENV CGO_ENABLED=1

RUN go install --tags extended && \
    rm -rf /tmp/hugo && \
    apk del --purge .deps
