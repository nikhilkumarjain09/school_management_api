const authorizeRole = (role) => (req, res, next) => {
  // console.log(req.user);
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
  
  module.exports = authorizeRole;
  