const router = require('express').Router();

const apiRoutes = require('./api');

const templateRoutes = require('./homeRoutes');

router.use('/', templateRouts);
router.use('/api', apiRoutes);

module.exports = router;
