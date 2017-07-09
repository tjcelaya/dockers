FROM debian:jessie


RUN apt-get install software-properties-common


RUN mkdir /app
WORKDIR /app

# current bouncy latest is 156
ARG BOUNCY_RELEASE=156

# download bouncycastle and add it to the security providers if requested
RUN cd $JAVA_HOME/jre/lib/ext && \
  ( for bouncyjar in bcprov bcpkix bcmail bcpg bctls bctest; do \
    wget -nv "https://www.bouncycastle.org/download/$bouncyjar-jdk15on-$BOUNCY_RELEASE.jar"; \
    done )

RUN wget -nv "https://dl.bintray.com/albertlatacz/maven/com/javarepl/javarepl/428/javarepl-428.jar"
