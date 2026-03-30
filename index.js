const https = require("https");

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const message = JSON.stringify({
  content: "🔥 Alternate day reminder!"
});

const options = {
  hostname: "discord.com",
  path: `/api/v10/channels/${CHANNEL_ID}/messages`,
  method: "POST",
  headers: {
    "Authorization": `Bot ${TOKEN}`,
    "Content-Type": "application/json",
    "Content-Length": message.length
  }
};

const req = https.request(options, res => {
  console.log(`Status: ${res.statusCode}`);
  res.on("data", d => process.stdout.write(d));
});

req.on("error", error => {
  console.error(error);
});

req.write(message);
req.end();
