const app = require("express");
const { testingFunction } = require("../handlers/app");

const router = app.Router();
const r = '/api/v1';

router.get(`/testing`, testingFunction);

module.exports = router;

