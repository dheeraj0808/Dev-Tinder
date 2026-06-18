const cron = require('node-cron');

cron.schedule('0 0 * * *', () => {
  console.log('Hello world ' + new Date());
 
});