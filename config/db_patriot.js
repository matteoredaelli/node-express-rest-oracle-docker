module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "myuser",

  // Instead of hard coding the password, consider prompting for it,
  // passing it in an environment variable via process.env, or using
  // External Authentication.
  password      : process.env.NODE_ORACLEDB_PASSWORD || "mypwd",

  // For information on connection strings see:
  // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "patriot.redaelli.org:1521/PATRIOT",

    poolAlias: 'patriot_pool'
};
