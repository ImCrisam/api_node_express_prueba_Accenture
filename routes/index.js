const routerx = require('express-promise-router');
const facturasRouter = require('./factura');

const router = routerx();
router.use('/facturas', facturasRouter);

module.exports = router;