const notify = require('/ql/data/scripts/sendNotify.js');
const title = process.argv[2];
const content = process.argv[3];

notify.sendNotify(`${title}`, `${content}`);
