module.exports = {
    factura: async (req, res, next) => {
        try {
            if (req.body.productos.length) {
                
                reg = JSON.parse(req.body.productos)
                var valorDomicilioGratis = 99999;
                var domicilio = 9000;
                var iva = 19;
                var valorProductos = 0;
                var valorIva = 0;
                var valorTotal =0;
                for (var i = 0; i < reg.length; i++) {
                    valorProductos += parseInt(reg[i].valor);
                }
                if (valorProductos > valorDomicilioGratis) {
                    domicilio = 0;
                }
                valorIva = (valorProductos*iva)/100
                valorTotal = valorProductos + valorIva
                res.status(200).json({
                    "cedula": req.body.cedula,
                    "direccion": req.body.direccion,
                    "productos": reg,
                    "domicilio": domicilio,
                    "iva_porcentaje ": iva,
                    "iva_valor": valorIva,
                    "valor_sin_iva": valorProductos,
                    "valor_con_iva": valorTotal
                });

            } else {
                res.status(404).send({
                    message: 'No hay prodcutos'
                });

            }
        
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}