FROM ruby:2.3-alpine

RUN apk update && \
    apk add make gcc g++ nodejs

RUN gem install bundler smashing

ENV PATH="/usr/local/bundle/bin/:${PATH}"

RUN mkdir -p /dashboard

COPY Gemfile /dashboard/

RUN cd /dashboard && \
    bundle

EXPOSE 3030

WORKDIR /dashboard

ENTRYPOINT ["smashing"]
CMD ["start"]
