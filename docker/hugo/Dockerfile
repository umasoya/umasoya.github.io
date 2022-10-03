FROM golang:1.14-alpine

RUN apk --update --no-cache add git gcc libc-dev g++ && \
    git clone -b stable --depth 1 https://github.com/gohugoio/hugo.git /tmp/hugo

WORKDIR /tmp/hugo

RUN go install --tags extended && \
    rm -rf /tmp/hugo
