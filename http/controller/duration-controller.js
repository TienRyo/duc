class DurationController {
    createDuration(req, res, next) {
        let repo = req.app.get('duration.repo');
        repo.add(req.duration).then(function () {
            res.send({message:'success'})
        }).catch(next)
    }
}

module.exports = DurationController;
