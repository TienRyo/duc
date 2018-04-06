module.exports =  function (req, res, next) {
    let factory = req.app.get('lecturerFactory');
    req.lecturer = factory.make(req.body);
    next();
};