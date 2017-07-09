FROM node:7-alpine

RUN npm install -g manta
ENV PATH="/usr/local/lib/node_modules/manta/bin/:${PATH}"

RUN mkdir -p /manta
WORKDIR /manta

ENTRYPOINT ["sh", "-c"]
CMD ["ls /usr/local/lib/node_modules/manta/bin/"]
