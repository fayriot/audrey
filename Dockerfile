ARG ALPINE_VERSION=alpine3.20
ARG NODE_VERSION=22.6.0

FROM node:$NODE_VERSION-$ALPINE_VERSION AS development

ENV NPM_CONFIG_LOGLEVEL=silent
ENV OPENCOLLECTIVE_HIDE=1

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm ci --loglevel info  --cache .npm --prefer-offline --include=dev --audit=false
RUN npm run build

##########################################
FROM node:$NODE_VERSION-$ALPINE_VERSION

WORKDIR /usr/app
COPY --from=development /usr/app/dist/ /usr/app/
COPY --from=development /usr/app/package.json /usr/app/

EXPOSE 3000

CMD "npm" "run" "start:docker"
