const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Tariff, Service } = sequelize.models;

module.exports = {
    create: async (req, res) => {
        try {
            const { body: { services, ...restBody } } = req;
            const id = uuid();
            const instance = await Tariff.create({
                id,
                ...restBody,
            }, {
                returning: true,
            });

            await instance.addServices(services);


            const result = await Tariff.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Service,
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
            const instances = await Tariff.findAll({
                include: [{
                    model: Service,
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
            const instance = await Tariff.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Service,
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
            const instance = await Tariff.update( restBody, {
                where: {
                    id,
                },
                returning: true,
            });

            if (instance[1][0]) {
                await instance[1][0].setServices(services);
            }

            const result = await Tariff.findOne({
                where: {
                    id,
                },
                include: [{
                    model: Service,
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
            await Tariff.destroy({
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