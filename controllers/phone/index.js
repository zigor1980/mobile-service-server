const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Phone, Tariff, Model, Client } = sequelize.models;

module.exports = {
    create: async (req, res) => {
        try {
            const { body: { model, tariff, client, ...restBody } } = req;
            const id = uuid();
            const instance = await Phone.create({
                id,
                model_id: model,
                tariff_id: tariff,
                client_id: client,
                ...restBody,
            }, {
                returning: true,
            });

            const result = await Phone.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Tariff,
                }, {
                    model: Model,
                }, {
                    model: Client,
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
            const instances = await Phone.findAll({
                include: [{
                    model: Tariff,
                }, {
                    model: Model,
                }, {
                    model: Client,
                }],
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
            const instance = await Phone.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Tariff,
                }, {
                    model: Model,
                }, {
                    model: Client,
                }],
            });

            res.send(instance);
        } catch(error) {
            res.status(404).send();
        }
    },
    update: async (req, res) => {
        try {
            const { params: {id}, body: {services, ...restBody} } = req;
            const instance = await Phone.update( restBody, {
                where: {
                    id,
                },
                returning: true,
            });

            if (instance[1][0]) {
                await instance[1][0].setServices(services);
            }

            const result = await Phone.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Tariff,
                }, {
                    model: Model,
                }, {
                    model: Client,
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
            await Phone.destroy({
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