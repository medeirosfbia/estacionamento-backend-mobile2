const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
	const usuarios = await Usuario.findAll();
	res.status(200).json(usuarios);
});

router.get('/:id', async (req, res) => {
	const usuario = await Usuario.findByPk(req.params.id);
	res.status(200).json(usuario);
});

router.post('/register', async (req, res) => {
	const { nome, email, senha } = req.body;

	if (!nome || !email || !senha) {
		return res.status(400).json({ message: 'nome, email e senha são obrigatórios' });
	}

	const existingUser = await Usuario.findOne({ where: { email } });

	if (existingUser) {
		return res.status(409).json({ message: 'Usuário já cadastrado' });
	}

	const usuario = await Usuario.create({ nome, email, senha });

	res.status(201).json({ message: 'Usuário cadastrado com sucesso', usuario });
});

router.post('/login', async (req, res) => {
	const { email, senha } = req.body;

	if (!email || !senha) {
		return res.status(400).json({ message: 'email e senha são obrigatórios' });
	}

	const usuario = await Usuario.findOne({ where: { email, senha } });

	if (!usuario) {
		return res.status(401).json({ message: 'Credenciais inválidas' });
	}

	res.status(200).json({ message: 'Login realizado com sucesso', usuario });
});

router.delete('/:id', async (req, res) => {
	await Usuario.destroy({
		where: {
			id_usuario: req.params.id,
		},
	});

	res.status(200).json({ message: 'Usuário excluído com sucesso' });
});

module.exports = router;
