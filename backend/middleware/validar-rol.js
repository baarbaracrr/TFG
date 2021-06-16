const { response } = require('express');
const rolesPermitidos = ['ROL_ALUMNO', 'ROL_PROFESOR', 'ROL_ADMIN', 'ROL_TUTOR'];

const validarRol = (req, res = response, next) => {
    const rol = req.body;

    //comprobar que el rol es válido
    if (rol && rolesPermitidos.includes(rol)) {
        return res.status(400).json({
            ok: false,
            msg: 'Rol incorrecto'
        });
    }

    next();
}

module.exports = { validarRol }