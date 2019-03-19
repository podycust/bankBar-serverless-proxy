exports.handler = async (event) => {
  return {
    statusCode: 301,
    headers: {
      Location: `bankbar://${event.queryStringParameters.code}`,
      'Cache-Control': 'no-cache'
    }
  }
};
