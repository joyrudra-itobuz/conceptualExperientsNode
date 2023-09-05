import { CronJob } from 'cron';

import myMiddleware from '../middleware/middlewareBasic';
import { allOutlets } from '../axiosOrFetch/axios';

/* Point 1 : Read Below For The Explanation */
const job = new CronJob(
  '*/10 * * * * 2', // Point 2 : Read Below For The Explanation

  async function () {
    console.log('You will see this message every 10 seconds');
    myMiddleware('Joyrudra', 'Biswas');
    const response = await allOutlets();
    console.table(response.data.data.slice(0, 1));
  },

  null,
  true,
  'Asia/Kolkata'
);

export default job;

/* :::::::::::::::::::::::Descriptions:::::::::::::::::::::::  */

/* 

Point 1 :  Example Code To Print a Log in Every Seconds 

Package : npm i cron

import { CronJob } from 'cron';

const job = new CronJob(
  '* * * * * *',
  async function () {
    console.log('You will see this message every seconds');
  },
  null,
  true,
  'Asia/Kolkata'
);


Point 2  : *         *         *     *               *       *
Meaning  : Seconds   Minutes   Hour  Days of Months  Months  Days oF Week

Understanding How do we Write in Cron Syntax The Same :

Seconds         : * Simply Means Every , Here * Means Every Seconds, Let's Say We want to run a particular block of code
                  every 5 seconds, We'll be writing the syntax as * / 5 or Let's say We want to run the Code in a particular second ,
                  like on 10:42:43 am seconds we will write 43 instead of a start. Accepted Range : 0-59 or * / 0-59.

Minutes         : Same as Seconds.

Hour            : Same As Minutes.

Days Of Months  : Same as The others But the Range is From 0-31 or * / 0-31

Months          : Same, Range :  0-11 (which denotes Jan-Dec) or * / 0-12

Days of Week    : Same, But Ranges From : 0-6 (denoting Sun-Sat) or * / 0-6

*/
