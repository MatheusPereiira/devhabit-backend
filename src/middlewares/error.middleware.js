export function errorMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500

  return res.status(statusCode).json({
    error: err.message || 'Internal server error'
  })
}
