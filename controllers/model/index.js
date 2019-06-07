const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Model } = sequelize.models;

module.exports = {
    createModel: async (req, res) => {
        try {
            const { body } = req;
            const instance = await Model.create({
                id: uuid(),
                ...body,
            }, {
                returning: true,
            });

            res.send(instance);
        } catch(error) {
            console.log(error);
            res.status(404).send();
        }
    },
    getModels: async (req, res) => {
        try {
            const instances = await Model.findAll({
                order: [
                    ['updatedAt', 'DESC'],
                ],
            });
            res.send(instances);
        } catch(error) {
            res.status(404).send();
        }
    },
    getModel: async (req, res) => {
        try {
            const { params: {id} } = req;
            const instance = await Model.findOne({
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
    updateModel: async (req, res) => {
        try {
            const { params: {id}, body } = req;
            const instance = await Model.update( body, {
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
    removeModel: async (req, res) => {
        try {
            const { params: {id} } = req;
            await Model.destroy({
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