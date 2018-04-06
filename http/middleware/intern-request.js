module.exports = function (req, res, next) {
  let factory = req.app.get('internFactory');
  req.intern = factory.make(req.body);
    next();
};