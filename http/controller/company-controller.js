class CompanyController {
    createCompany(req, res, next) {
        let repo = req.app.get('company.repo');
        repo.add(req.body).then(function () {
            res.send({message:'success !'})
        }).catch(next)
    }
}

module.exports = CompanyController;
