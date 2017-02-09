# node-express-rest-oracle-docker
sample of sharing (oracle) database tables via rest api using node.js, express in a docker container

# setup
Install oracle instant client (in this example under /home/matteo/apps/instantclient_12_1)

git clone https://github.com/matteoredaelli/node-express-rest-oracle-docker

npm install

# run it

## docker container

docker build -t biapis .

docker run -p 3000:3000 -d --name biapis -restart=always biapis

## with pm2
npm install -g pm2

pm2 start biapis.config.js --env production

