module.exports = function (req, res, next) {
    let factory = req.app.get('managerFactory');
    factory.make(req.body).then(manager => {
        req.manager = manager;
        next();
    });
};