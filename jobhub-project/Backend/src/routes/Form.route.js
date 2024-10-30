const { Router } = require("express");
const { formDetails } = require("../controllers/Form.controller");
const upload = require("../middleware/Multer.middleware");

const router = Router();

router.post('/form', upload.single("resume"), formDetails);

module.exports = router;