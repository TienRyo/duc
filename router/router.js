const express           = require('express');
const router            = express.Router();
const UserController    = require('../http/controller/user-controller');
const CourseController  = require('../http/controller/course-controller');
const CompanyController = require('../http/controller/company-controller');
const ManagerController = require('../http/controller/manager-controller');
const DurationController= require('../http/controller/duration-controller');
const InternController  = require('../http/controller/intern-controller');
const LecturerController= require('../http/controller/lecturer-controller');
const userRequest       = require('../http/middleware/user-request');
const courseRequest     = require('../http/middleware/course-request');
const companyRequest    = require('../http/middleware/company-request');
const managerRequest    = require('../http/middleware/manager-request');
const durationRequest   = require('../http/middleware/duration-request');
const internRequest     = require('../http/middleware/intern-request');
const lecturerRequest   = require('../http/middleware/lecturer-request');

const UndeletedSearch       = require('../src/search-service/intern/undeleted-search');
const CodeSearch            = require('../src/search-service/intern/code-search');
const UndeletedSearcCompany = require('../src/search-service/company/undeleted-search');
const KeywordSearchCompany  = require('../src/search-service/company/keyword-search');
const IdSearchCompany       = require('../src/search-service/company/id-search');

let userController    = new UserController();
let courseController  = new CourseController();
let companyController = new CompanyController();
let managerController = new ManagerController();
let durationController= new DurationController();
let internController  = new InternController();
let lecturerController= new LecturerController();


router.get('/user/:user_name');
router.post('/user', userRequest, userController.create);
router.put('/user', userRequest, userController.update);
router.delete('/user', userController.remove);

router.post('/course',courseRequest, courseController.createCourse);

router.post('/company', companyRequest, companyController.createCompany);
router.post('/update/company/:id', companyRequest, companyController.editCompany);
router.get('/company/:id', companyController.removeCompany);


router.post('/manager', managerRequest, managerController.createManager);

router.post('/duration', durationRequest, durationController.createDuration);

router.post('/lecturer', lecturerRequest, lecturerController.createLecture);
router.put('/update/lecturer/:code', lecturerRequest, lecturerController.editLecturer);
router.delete('/lecturer/:code', lecturerController.removeLecture);

router.post('/intern', internRequest, internController.createIntern);
router.put('/update/intern/:code', internRequest, internController.updateIntern);
router.delete('/intern/:code', internController.removeIntern);

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

//router.get('/companies', companyController.getAll);
router.get('/companies', function (req, res, next) {
    req.condition = new UndeletedSearcCompany();
    next();
}, companyController.renderHome);

router.get('/api/company', function (req, res, next) {
    req.condition = new KeywordSearchCompany(req.query.keyword);
    next();
},companyController.search);

router.get('/add-company/', function (req, res, next) {
    res.render('add-company.njk');
    next();
});

router.get('/detail-company/:id', function (req, res, next) {
    req.condition = new IdSearchCompany(req.params.id);
    next();
}, companyController.renderEditCompany);

router.get('/login', function (req, res, next) {
    res.render('login1.njk');
    next();
});

router.get('/profile-intern', function (req, res, next) {
    res.render('profile-intern.njk');
    next();
});


module.exports = router;