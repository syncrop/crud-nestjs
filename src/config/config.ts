export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  database: {
    host: process.env.DB_URI,
    port: 5432,
  },
});
