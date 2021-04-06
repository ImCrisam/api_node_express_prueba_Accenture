const routerx = require('express-promise-router');
const facturasController = require('../controllers/FacturaController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/factura', facturasController.factura);

router.post('/facturaAuth', auth.verifyUsuario, facturasController.factura);

module.exports = router;