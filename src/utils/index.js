export const getId = urlPath => urlPath.match(/([^\/]*)\/*$/)[0];

export const throwHttpNotFound = message => {
  const error = new Error(message);
  const formattedError = {
    ...error,
    statusCode: 404,
    message: error.message,
  };
  throw formattedError;
};
