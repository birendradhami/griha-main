const checkAccess = (req, res, next) => {
  const user = req.user;
  console.log('User in checkAccess:', user);

  if (user && user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ error: 'Access forbidden' });
  }
};

export default checkAccess;
