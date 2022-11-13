const handleError = (err, req, res, next) => {
    console.error('Something broke!',err);
    res.status(500).send( 'Something broke!'+ err );
  }

  module.exports = { handleError };