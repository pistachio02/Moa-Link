require('dotenv').config();

module.exports = {
    db: {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        password: required('DB_PASSWORD'),
        database: required('DB_DATABASE')
    }
  };