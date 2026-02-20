export function errorMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500

  res.status(statusCode).json({
    status: err.status || 'error',
    message: err.message || 'Erro interno do servidor',
    errors: err.errors || null
  })
}
