FROM alpine

RUN apk --no-cache add libedit-dev git bash make gcc musl-dev fts-dev libgcc                                      \
    && mkdir -p ~/gitdev/                                                                                         \
    && git clone https://github.com/jsoftware/jsource.git /root/gitdev/jsource                                    \
    && cp /root/gitdev/jsource/make/jvars.sh /root/jvars.sh                                                       \
    && . /root/jvars.sh                                                                                           \
    && /root/gitdev/jsource/make/jvars.sh                                                                         \
    && /root/gitdev/jsource/make/install.sh                                                                       \
    && /root/gitdev/jsource/make/clean.sh || echo nothing to clean                                                \
    && cp /root/gitdev/jsource/jsrc/jversion-x.h                           /root/gitdev/jsource/jsrc/jversion.h   \
    && sed -e 's/jplatform.*/jplatform "linux"/'                           /root/gitdev/jsource/jsrc/jversion.h   \
    && sed -e 's/jbuilder.*/jbuilder "Tomas Celaya <tjcelaya@gmail.com>"/' /root/gitdev/jsource/jsrc/jversion.h   \
    && /root/gitdev/jsource/make/build_jconsole.sh j64                                                            \
    && /root/gitdev/jsource/make/build_libj.sh     j64                                                            \
    && /root/gitdev/jsource/make/build_tsdll.sh    j64                                                            \
    && mv /root/jbld/j64 /usr/local/share/j                                                                       \
    && ln -snf /usr/local/share/j/bin/jconsole    /usr/local/bin/                                                 \
    && ln -snf /usr/local/share/j/bin/libj.so     /usr/local/lib/                                                 \
    && ln -snf /usr/local/share/j/bin/libtsdll.so /usr/local/lib/                                                 \
    && apk del git bash make gcc musl-dev fts-dev libgcc                                                          \
    && rm -rf /root/gitdev /root/jvars.sh

CMD [ "/usr/local/bin/jconsole" ]
