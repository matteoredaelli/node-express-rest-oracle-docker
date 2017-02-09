export PATH=/home/oracle/apps/biapis/node-v7.4.0-linux-x64/bin:$PATH

export http_proxy=http://lucifer.pirelli.com:80
export https_proxy=$http_proxy
export HTTP_PROXY=$http_proxy
export HTTPS_PROXY=$http_proxy
export no_proxy="localhost,127.0.0.1,.pirelli.com,172.17.0.10/16,151.10.0.0/16"
export NO_PROXY=$no_proxy

export ORACLE_HOME=/home/oracle/apps/biapis/instantclient_12_1
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ORACLE_HOME
export TNS_ADMIN=$ORACLE_HOME
export OCI_LIBRARY_PATH=$ORACLE_HOME
export OCI_LIB_DIR=$ORACLE_HOME
export OCI_INC_DIR=$ORACLE_HOME/sdk/include
