const CodeSearch            = require('../../src/search-service/code-search');
const KeywordSearch         = require('../../src/search-service/keyword-search');
const UndeleteSearch        = require('../../src/search-service/undeleted-search');
const NameSearch            = require('../../src/search-service/name-search');


module.exports = (req, res, next) => {
    req.condition = makeCondition(req);
    next();
};

function  makeCondition(req) {

}