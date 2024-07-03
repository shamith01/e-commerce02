const errorMiddleware = (err, req, res, next) => {
  console.log("custom error middleware");
  const errstatus = err.statuscode || 500;
  const errMsg = err.message || "something went wrong";
  res.status(errstatus).json({
    success: false,
    status: errstatus,
    message: errMsg,
    stock: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

module.exports = errorMiddleware;
