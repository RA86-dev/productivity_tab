// config.js
function decodeApiKey(e){try{if("string"!=typeof e)throw Error("Encoded API key must be a string");let r=decodeURIComponent(escape(atob(e)));return r}catch(t){return console.error("Error decoding API key:",t.message),null}}
// Function to get API key
export const getApiKey = () => decodeApiKey(`ZWMxMjk4NzUwZDBjNDcwMjg3MTEzMjkwMTI0MDYwMQ==`)


// Other configuration variables and functions can be added here
