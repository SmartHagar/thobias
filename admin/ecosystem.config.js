/** @format */

module.exports = {
  apps: [
    {
      name: "hagar_portfolio",
      script: "npm run start",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      port: 3001,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
