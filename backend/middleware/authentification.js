const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('On essaye')
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    console.log(token)
    if (req.body.userId && req.body.userId !== userId) {
      console.log('Token pas ok')
      throw 'Invalid user ID';
    } else {
      console.log('Token ok')
      next();
    }
  } catch {
    console.log('Il y a une erreur')
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}