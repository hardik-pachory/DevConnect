const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Test routes 
// @access    Public 

router.get('/', (req, res) => res.send("Authentication Route!"));

module.exports = router;