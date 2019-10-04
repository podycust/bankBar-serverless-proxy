exports.handler = async (event) => {
  if (!event.queryStringParameters.code) {
    const html = `Oops! <br /> No auth code found in the request. <br /> Try logging in again by restarting Monzo Desktop from the dropdown menu. <br /> <br /> Get in touch if the issue persists. <br /> @johneas10`
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html,
    }
  }

  return {
    statusCode: 301,
    headers: {
      Location: `mdesktop://${event.queryStringParameters.code}`,
      'Cache-Control': 'no-cache'
    }
  }
};
