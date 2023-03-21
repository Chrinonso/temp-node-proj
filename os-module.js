const os = require('os');
// USING NODE INBUILT MODULES
const user = os.userInfo();
console.log(user);

//METHOD RETURNS THE SYSTEM UPTIME IN SECONDS

console.log(`the system runs on ${os.uptime} seconds`);
