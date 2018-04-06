class InternController {
    createIntern(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.add(req.intern).then(() => {
            res.send({message:'success'})
        }).catch(next)
    }

    updateIntern(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.edit(req.intern).then(function () {
            res.send({message:'success'})
        }).catch(next)
    }
    removeIntern(req, res, next) {
        let repo = req.app.get('intern.repo');
        repo.remove(req.params.code).then(function () {
            res.send({message: 'success' })
        }).catch(next)
    }
    search(req, res, next) {
        req.app.get('intern.searcher').search(req.condition)
            .then( interns => res.send(interns))
            .catch(next);
    }
    renderHome(req, res, next) {
        req.app.get('intern.searcher').search(req.condition)
            .then(function (foundIntern) {
                res.render('intern.njk', {interns: foundIntern})
            }).catch(next);
    }
    detailIntern(req, res, next) {
        req.app.get('intern.searcher').search(req.condition)
            .then(function (values) {
                res.render('detail.njk', {intern : values[0]})
            }).catch(next)
    }


}

module.exports = InternController;
