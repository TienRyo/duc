const express           = require('express');
const router            = express.Router();
const UserController    = require('../http/controller/user-controller');
const CourseController  = require('../http/controller/course-controller');
const CompanyController = require('../http/controller/company-controller');
const ManagerController = require('../http/controller/manager-controller');
const DurationController= require('../http/controller/duration-controller');
const InternController  = require('../http/controller/intern-controller');
const userRequest       = require('../http/middleware/user-request');
const courseRequest     = require('../http/middleware/course-request');
const companyRequest    = require('../http/middleware/company-request');
const managerRequest    = require('../http/middleware/manager-request');
const durationRequest   = require('../http/middleware/duration-request');
const internRequest     = require('../http/middleware/intern-request');

const UndeletedSearch   = require('../src/search-service/undeleted-search');
const CodeSearch        = require('../src/search-service/code-search');

let userController    = new UserController();
let courseController  = new CourseController();
let companyController = new CompanyController();
let managerController = new ManagerController();
let durationController= new DurationController();
let internController  = new InternController();


router.get('/user/:user_name');
router.post('/user', userRequest, userController.create);
router.put('/user', userRequest, userController.update);
router.delete('/user', userController.remove);

router.post('/course',courseRequest, courseController.createCourse);

router.post('/company', companyRequest, companyController.createCompany);

router.post('/manager', managerRequest, managerController.createManager);

router.post('/duration', durationRequest, durationController.createDuration);

router.post('/intern', internRequest, internController.createIntern);
router.put('/update/intern/:code', internRequest, internController.updateIntern);
router.put('/intern/:code', internRequest, internController.removeIntern);

router.get('/interns', function (req, res, next) {
    req.condition = new UndeletedSearch();
    next();
}, internController.search);

router.get('/', function (req, res, next) {
    req.condition =  new UndeletedSearch();
    next();
}, internController.renderHome);

router.get('/detail/:code',function (req, res, next) {
    req.condition = new CodeSearch(req.params.code);
    next();
},internController.detailIntern);

module.exports = router;