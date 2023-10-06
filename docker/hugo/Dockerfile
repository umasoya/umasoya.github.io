ARG GO_VERSION="1.21.2"
ARG DIST="alpine"
ARG HUGO_VERSION="v0.119.0"
ARG APP_NAME="umasoya.giithub.io"

FROM golang:${GO_VERSION}-${DIST}

RUN apk --update --no-cache add --virtual .deps gcc tzdata && \
    apk --no-cache add libc-dev g++ && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

ENV CGO_ENABLED=1

RUN go install --tags extended github.com/gohugoio/hugo@latest && \
    apk del --purge .deps
