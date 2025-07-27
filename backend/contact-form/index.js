const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-west-1",
});

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body || "{}");
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "name, email, and message are required" }),
      };
    }

    const params = {
      Source: process.env.FROM_ADDRESS,
      Destination: { ToAddresses: [process.env.TO_ADDRESS] },
      Message: {
        Subject: { Data: `Contact form submission from ${name}` },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "sent" }),
    };
  } catch (err) {
    console.error("Error sending contact form email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};