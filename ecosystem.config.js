module.exports = {
  apps : [{
      name        : "biapis",
      script      : "./server.js",
      watch       : true,
      env: {
	  "NODE_ENV": "development",
	  "ORACLE_HOME"     : "/home/matteo/apps/instantclient_12_1",
	  "LD_LIBRARY_PATH" : "/home/matteo/apps/instantclient_12_1",
	  "TNS_ADMIN"       : "/home/matteo/apps/instantclient_12_1",
	  "OCI_LIBRARY_PATH" : "/home/matteo/apps/instantclient_12_1",
	  "OCI_LIB_DIR"      : "/home/matteo/apps/instantclient_12_1",
	  "OCI_INC_DIR"      : "/home/matteo/apps/instantclient_12_1/sdk/include"
	  },
      env_production : {
	  "NODE_ENV": "production",
	  "ORACLE_HOME"      : "/home/matteo/apps/instantclient_12_1",
	  "LD_LIBRARY_PATH"  : "/home/matteo/apps/instantclient_12_1",
	  "TNS_ADMIN"        : "/home/matteo/apps/instantclient_12_1",
	  "OCI_LIBRARY_PATH" : "/home/matteo/apps/instantclient_12_1",
	  "OCI_LIB_DIR"      : "/home/matteo/apps/instantclient_12_1",
	  "OCI_INC_DIR"      : "/home/matteo/apps/instantclient_12_1/sdk/include"
	  }
    }]
}
