const Usuario = require('../models/usuarios');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const obtenerUsuarios = async(req, res) => {
    const usuarios = await Usuario.find({});
    res.json({
        ok: true,
        msg: 'getUsuarios',
        usuarios
    });
}

const crearUsuario = async(req, res = response) => {
    const { email, password } = req.body;
    try {
        const exiteEmail = await Usuario.findOne({ email: email });
        if (exiteEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'Email ya existe'
            });
        }

        const salt = bcrypt.genSaltSync(); // generamos un salt, una cadena aleatoria
        const cpassword = bcrypt.hashSync(password, salt); // y aquí ciframos la contraseña

        const usuario = new Usuario(req.body);
        usuario.password = cpassword;
        await usuario.save();

        res.json({
            ok: true,
            msg: 'crearUsuarios',
            usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            errores: 'Email ya existe'
        });
    }

}

const actualizarUsuario = async(req, res = response) => {
    const { password, email, ...object } = req.body;
    const uid = req.param.id;

    try {
        const existeEmail = await Usuario.findOne({ email: email });
        if (existeEmail) {
            if (existeEmail._id != uid) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Email ya existe'
                });
            }
        }

        object.email = email;
        const usuario = await Usuario.findByIdAndUpdate(uid, object, { new: true });

        res.json({
            ok: true,
            msg: 'Usuario actualizado',
            usuario: usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            errores: 'Error actualizando usuarios'
        });
    }

    res.json({
        ok: true,
        msg: 'actualizarUsuario'
    });
}

const borrarUsuario = async(req, res = response) => {
    const uid = req.param.id;

    try {
        const existeUsuario = await Usuario.findById(uid);
        if (!existeUsuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const resultado = await Usuario.findByIdAndRemove(uid);

        res.json({
            ok: true,
            msg: 'Usuario eliminado',
            usuario: resultado
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            errores: 'Error borrando usuarios'
        });
    }

    res.json({
        ok: true,
        msg: 'actualizarUsuario'
    });
}

module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, borrarUsuario }