FROM jawg/mapnik3:latest

WORKDIR /usr/src/app

ADD . /usr/src/app

yarn install

CMD yarn start
