# node-express-rest-oracle-docker
sample of sharing (oracle) database tables via rest api using node.js, express in a docker container

# setup
Install oracle instant client (in this example under /home/matteo/apps/instantclient_12_1)

Setup oracle environment as in ecosystem.config.js

git clone https://github.com/matteoredaelli/node-express-rest-oracle-docker

npm install

# run it

## docker container

copy oracle zip files under

 oracle/linux/instantclient-basic-linux.x64-12.1.0.2.0.zip
 oracle/linux/instantclient-jdbc-linux.x64-12.1.0.2.0.zip
 oracle/linux/instantclient-odbc-linux.x64-12.1.0.2.0.zip
 oracle/linux/instantclient-sdk-linux.x64-12.1.0.2.0.zip
 oracle/linux/instantclient-sqlplus-linux.x64-12.1.0.2.0.zip

docker build -t biapis .

docker run -p 3000:3000 -d --name biapis -restart=always biapis

## with pm2
npm install -g pm2

pm2 start biapis.config.js --env production

