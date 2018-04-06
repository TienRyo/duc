
module.exports = function (req, res, next) {
    let factory  = req.app.get('courseFactory');
    factory.makeFromRequest(req.body).then(result =>{
        req.course = result;
        req.course.setId(req.params.id);
        next();
    });
};