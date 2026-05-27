const axios = require('axios');

async function getDraftPicks(draftId) {
  const response = await axios.get(`https://api.sleeper.app/v1/draft/${draftId}/picks`);
  console.log(response.data);
}

getDraftPicks('1365204712369954816');