import app from './src/config/express';
import config from './src/config/env';
import mongoose from 'mongoose';

mongoose.connect(config.db);
mongoose.Promise = require('bluebird');
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});
mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.db}`);
});

if (config.env === 'development') {
  mongoose.set('debug', true);
}

app.listen(config.port, () => {
    console.log(`API Server running on port ${config.port} (${config.env})`);
});

export default app;