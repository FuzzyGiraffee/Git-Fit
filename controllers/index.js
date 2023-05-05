const router = require('express').Router();

const apiRoutes = require('./api');

const templateRoutes = require('./homeRoutes');

router.use('/', templateRoutes);
router.use('/api', apiRoutes);

module.exports = router;
