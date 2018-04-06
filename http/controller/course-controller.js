class  CourseController {
    createCourse(req, res, next) {
        let repo = req.app.get('course.repo');
        repo.add(req.course).then(function () {
            res.send({message: 'success '})
        }).catch(next)
    }
}

module.exports =CourseController;
