import middleware from './middleware/middlewareBasic';
import { allOutlets } from './axiosOrFetch/axios';
import logger from './winstonLogger/logger';
import job from './cron/cronExperimentation';

console.log('::::::::::::::::Middleware Basic::::::::::::::::\n\n');
const middlewareResult = middleware('Joyrudra', 'Biswas');
console.log(middlewareResult);
console.log('\n\n::::::::::::::::Middleware Basic::::::::::::::::\n\n');

console.log('::::::::::::::::Axios Basic::::::::::::::::\n\n');
allOutlets().then(data => {
  console.table(data.data.data.slice(0, 2));
  logger.debug(data.data.data.slice(0, 2));
});
console.log('\n\n::::::::::::::::Axios Basic::::::::::::::::\n\n');

console.log('::::::::::::::::Cron Basic::::::::::::::::\n\n');
job.start();
console.log('\n\n::::::::::::::::Cron Basic::::::::::::::::\n\n');
