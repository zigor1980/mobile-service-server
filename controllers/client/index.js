const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Client } = sequelize.models;

module.exports = {
    create: async (req, res) => {
        try {
            const { body } = req;
            const instance = await Client.create({
                id: uuid(),
                ...body,
            }, {
                returning: true,
            });

            res.send(instance);
        } catch(error) {
            res.status(404).send();
        }
    },
    fetch: async (req, res) => {
        try {
            const instances = await Client.findAll({
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });
            res.send(instances);
        } catch(error) {
            res.status(404).send();
        }
    },
    get: async (req, res) => {
        try {
            const { params: {id} } = req;
            const instance = await Client.findOne({
                where: {
                    id,
                },
                returning: true,
            });
            res.send(instance);
        } catch(error) {
            res.status(404).send;
        }
    },
    update: async (req, res) => {
        try {
            const { params: {id}, body } = req;
            const instance = await Client.update( body, {
                where: {
                    id,
                },
                returning: true,
            });
            res.send(instance);
        } catch(error) {
            res.status(404).send;
        }
    },
    remove: async (req, res) => {
        try {
            const { params: {id} } = req;
            await Client.destroy({
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