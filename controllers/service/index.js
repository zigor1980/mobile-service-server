const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Service } = sequelize.models;

module.exports = {
    createService: async (req, res) => {
        try {
            const { body } = req;
            const service = await Service.create({
                id: uuid(),
                ...body,
            }, {
                returning: true,
            });

            res.send(service);
        } catch(error) {
            console.log(error);
            res.status(404).send();
        }
    },
    getServices: async (req, res) => {
        try {
            const services = await Service.findAll({
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });
            res.send(services);
        } catch(error) {
            res.status(404).send();
        }
    },
    getService: async (req, res) => {
        try {
            const { params: {id} } = req;
            const services = await Service.findOne({
                where: {
                    id,
                },
                returning: true,
            });
            res.send(services);
        } catch(error) {
            console.log(error);
            res.status(404).send;
        }
    },
    updateService: async (req, res) => {
        try {
            const { params: {id}, body } = req;
            console.log(id, body);
            const service = await Service.update( body, {
                where: {
                    id,
                },
                returning: true,
            });
            res.send(service);
        } catch(error) {
            res.status(404).send;
        }
    },
    removeService: async (req, res) => {
        try {
            const { params: {id} } = req;
            await Service.destroy({
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