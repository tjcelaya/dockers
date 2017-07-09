FROM openjdk:8
# openjdk doesn't need Java Cryptography Extensions

RUN mkdir /app
WORKDIR /app

# current bouncy latest is 156
ARG BOUNCY_RELEASE=156

# download bouncycastle and add it to the security providers if requested
RUN cd $JAVA_HOME/jre/lib/ext \
  && \
  ( for bouncyjar in bcprov bcpkix bcmail bcpg bctls bctest; do \
    wget -nv "https://www.bouncycastle.org/download/$bouncyjar-jdk15on-$BOUNCY_RELEASE.jar"; \
    done ) \
  && \
  chown -R $(ls -ld $JAVA_HOME/jre | awk '{print $3}') $JAVA_HOME/jre/lib/ext ; fi \
  && \
  NEXT_PROVIDER_IDX=$(( $(awk 'BEGIN{ FS="=";} /^security\.provider/ { split($1, r, "."); print r[3] }' $JAVA_HOME/jre/lib/security/java.security | sort -nr | head -1) + 1 )) \
  && \
  echo "\nsecurity.provider.$NEXT_PROVIDER_IDX=org.bouncycastle.jce.provider.BouncyCastleProvider" >> $JAVA_HOME/jre/lib/security/java.security

RUN wget -nv "https://dl.bintray.com/albertlatacz/maven/com/javarepl/javarepl/428/javarepl-428.jar"
