class CompanyController {
    createCompany(req, res, next) {
        let repo = req.app.get('company.repo');
        repo.add(req.company).then(function () {
            res.redirect('/companies')
        }).catch(next)
    }

    editCompany(req, res, next) {
        let repo = req.app.get('company.repo');
        repo.edit(req.company).then(function () {
            res.redirect('/companies')
        }).catch(next)
    }

    removeCompany(req, res, next) {
        let repo = req.app.get('company.repo');
        repo.remove(req.params.id).then(function () {
            res.redirect('/companies')
        }).catch(next)
    }

    search(req, res, next) {
        req.app.get('company.searcher').search(req.condition)
            .then((foundCompany) => res.json(foundCompany))
            .catch(next)
    }
    renderHome(req, res, next) {
        req.app.get('company.searcher').search(req.condition)
            .then(function (foundCompany) {
                res.render('company.njk', {companies: foundCompany})
            }).catch(next);
    }

    renderEditCompany(req, res, next) {
        req.app.get('company.searcher').search(req.condition).then(function (company) {
            res.render('detail-company.njk', {company : company[0]});
        }).catch(next)
    }
}

module.exports = CompanyController;
