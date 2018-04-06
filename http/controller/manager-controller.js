class ManagerController {
    createManager(req, res, next) {
        let repo = req.app.get('manager.repo');
        repo.add(req.manager).then(
            res.send({message : 'success '})
        ).catch(next)
    }
}

module.exports = ManagerController;
