class  LectureController {
    createLecture(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.add(req.lecturer).then(function () {
            res.send({message:'success'})
        }).catch(next)
    }

    editLecturer(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.edit(req.lecturer).then(function () {
            res.send({message:'success'})
        }).catch(next)
    }

    removeLecture(req, res, next) {
        let repo = req.app.get('lecturer.repo');
        repo.remove(req.params.code).then(function () {
            res.send({message:'success'})
        }).catch(next)
    }
}

module.exports = LectureController;
