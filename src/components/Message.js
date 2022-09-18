const sendMessage = (passed_accountSid, passed_authToken, message, image_url) =>{
    const accountSid = passed_accountSid; // Your Account SID from www.twilio.com/console
    const authToken = passed_authToken; // Your Auth Token from www.twilio.com/console
  
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
  
    client.messages
      .create({
        body: message,
        mediaUrl: [image_url],
  
        to: '+12142288513', // Text this number
        from: '+19032317677', // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));
  
  }
  export default sendMessage;