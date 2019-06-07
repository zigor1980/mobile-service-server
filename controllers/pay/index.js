const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Phone, Pay } = sequelize.models;

module.exports = {
    create: async (req, res) => {
        try {
            const { body: { phone, cost, ...restBody } } = req;
            const id = uuid();
            await Pay.create({
                id,
                phone_id: phone,
                cost,
                ...restBody,
            }, {
                returning: true,
            });

            await Phone.increment(['balans'], { by: cost, where: { id: phone } });

            const result = await Pay.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Phone,
                }],
            });

            res.send(result);
        } catch(error) {
            console.log(error);
            res.status(404).send();
        }
    },
    fetch: async (req, res) => {
        try {
            const instances = await Pay.findAll({
                include: [{
                    model: Phone,
                }],
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });

            res.send(instances);
        } catch(error) {
            console.log(error);
            res.status(404).send();
        }
    },
    get: async (req, res) => {
        try {
            const { params: {id} } = req;
            const instance = await Pay.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Phone,
                }],
            });

            res.send(instance);
        } catch(error) {
            res.status(404).send();
        }
    },
    update: async (req, res) => {
        try {
            const { params: {id}, body: {phone, ...restBody} } = req;
            await Phone.update( {phone_id: phone, ...restBody}, {
                where: {
                    id,
                },
                returning: true,
            });

            const result = await Pay.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Phone,
                }],
            });

            res.send(result);
        } catch(error) {
            res.status(404).send;
        }
    },
    remove: async (req, res) => {
        try {
            const { params: {id} } = req;
            await Pay.destroy({
                where: {
                    id,
                }
            });
            res.status(204).send();
        } catch(error) {
            res.status(404).send();
        }
    }
};