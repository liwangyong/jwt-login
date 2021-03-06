module.exports = {
  apps : [{
    name: 'API',
    script: 'yarn start:prod',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    node_args: 'one two',
    instances: 1,
    autorestart: true,
    watch: ['dist/'],
    watch_options: {
      usePolling: true,
    },
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
      // 不需要更改
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
