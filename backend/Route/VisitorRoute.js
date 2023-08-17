const express = require ('express');
const {AddVisitor} = require ("../Controller/VisitorController")

const router = express.Router();

router.route('/AddVisitor').post(AddVisitor);

module.exports = router;