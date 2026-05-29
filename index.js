const axios = require('axios');

const DRAFT_ID = '1365924840090931200';
const POLL_INTERVAL = 500;

let previousPickCount = 0;

async function pollDraft() {
  try {
    const response = await axios.get(`https://api.sleeper.app/v1/draft/${DRAFT_ID}/picks`);
    const picks = response.data;

    if (picks.length > previousPickCount) {
      const newPicks = picks.slice(previousPickCount);
      newPicks.forEach(pick => {
        console.log(`New pick detected: ${pick.metadata.first_name} ${pick.metadata.last_name} (${pick.metadata.position}) - Pick #${pick.pick_no}`);
      });
      previousPickCount = picks.length;
    } else {
      console.log('No new picks');
    }
  } catch (error) {
    console.error('Error polling draft:', error.message);
  }
}

setInterval(pollDraft, POLL_INTERVAL);
console.log('Polling engine started');


