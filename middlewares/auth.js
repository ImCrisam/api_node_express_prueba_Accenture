module.exports = {

    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        if (req.headers.token == "1234") {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },


}