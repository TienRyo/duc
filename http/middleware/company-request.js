module.exports = function (req, res, next) {
    let factory  = req.app.get('companyFactory');
    req.company = factory.make(req.body);
    req.company.setId(req.params.id);
    next();
};