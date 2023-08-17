const app = require("express");
const { testingFunction, createUser } = require("../handlers/app");

const router = app.Router();
const r = '/api/v1';

router.get(`/testing`, testingFunction);
router.post('/register', createUser);

module.exports = router;

