FROM alpine

RUN apk --update add pianobar \
  && rm -rf /var/cache/apk/*

RUN mkdir -p /app/pianobar

RUN adduser -S pianobar
RUN chown -R pianobar /app
USER pianobar
ENV XDG_CONFIG_HOME=/app

VOLUME ["/app/pianobar"]

ADD ./server.js /app/server.js
# RUN mkfifo /app/pianobar/config/ctl

WORKDIR /app
CMD ["pianobar"]
