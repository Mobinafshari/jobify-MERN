import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('yaaaa aliiii',err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "something went wrong please try again later"
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
