export const getId = (urlPath) => urlPath.match(/([^/]*)\/*$/)[0];

export const throwHttpNotFound = (message) => {
  const error = new Error(message);
  const formattedError = {
    ...error,
    statusCode: 404,
    message: error.message,
  };
  throw formattedError;
};

export const apiSuccessResponse = (statusCode, data) => ({
  statusCode,
  body: JSON.stringify(data),
});

export const apiFailureResponse = (error) => ({
  statusCode: error.statusCode || 500,
  body: error.message || 'Internal server error.',
});
