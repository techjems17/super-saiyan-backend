module.exports = {

  development: {
    client: 'pg',
    connection: "postgres:///dragonball"
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
