const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();
const path              = require('path');
const Searcher          = require('./src/search-service/searcher');
const UserRepository    = require('./auth/login/user-system');
const CourseRepository  = require('./src/course/course-repository');
const ManagerRepository = require('./src/manager/manager-repository');
const DurationRepository= require('./src/duration/duration-repository');
const InternRepository  = require('./src/intern/intern-repository');
const LecturerRepository = require('./src/lecturer/lecturer-repository');
const CourseFactory     = require('./src/course/course-factory');
const CompanyFactory    = require('./src/company/company-factory');
const ManagerFactory    = require('./src/manager/manager-factory');
const DurationFactory   = require('./src/duration/duration-factory');
const InternFactory     = require('./src/intern/intern-factory');
const LecturerFactory   = require('./src/lecturer/lecturer-factory');
const knex              = require('./database/knex-connection');
const nunjuck           = require('nunjucks');
const router            = require('./router/router');

nunjuck.configure('views', {
    autoescape : true,
    express : app
});
app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('intern.searcher', new Searcher(knex, new InternFactory()));
app.set('users.repo', new UserRepository(knex));
app.set('course.repo', new CourseRepository(knex));
app.set('manager.repo', new ManagerRepository(knex));
app.set('duration.repo', new DurationRepository(knex));
app.set('intern.repo', new InternRepository(knex));
app.set('lecturer.repo', new LecturerRepository(knex));
app.set('courseFactory', new CourseFactory());
app.set('companyFactory', new CompanyFactory());
app.set('managerFactory', new ManagerFactory());
app.set('durationFactory', new DurationFactory());
app.set('internFactory', new InternFactory());
app.set('lecturerFactory', new LecturerFactory());

app.use(router);

app.listen(8080, () => {
    console.log('sever running port 8080!');
});