module.exports = function (req, res, next) {
    let factory = req.app.get('durationFactory');
    req.duration = factory.make(req.body);
    next();
};