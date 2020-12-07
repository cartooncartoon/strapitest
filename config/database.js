module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        "client": "postgres",
        "host": "ec2-54-225-254-115.compute-1.amazonaws.com",
        "port": 5432,
        "database": "ddhrsvgtkfh0ql",
        "username": "jucnuxcejjqslq",
        "password": "bc21d253159c6e43b19e135c7c7eeeb97e5719fe9576b91d9b645bb018d5e7e0",
        "ssl": { "rejectUnauthorized": false }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
