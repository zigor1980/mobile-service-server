const { sequelize } = require('../../models');
const uuid = require('uuid/v4');
const { Service } = sequelize.models;

module.exports = {
    createService: async (req, res) => {
        try {
            console.log(uuid());
            const service = await Service.create({
                id: uuid(),
                name: 'qwe',
                desc: 'asdasd',
            }, {
                returning: true,
            });
            console.log(service);
            res.send();
        } catch(error) {
            console.log(error);
            res.status(404).send();
        }
    },
    getServices: async (req, res) => {
        try {
            const services = await Service.findAll();
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
                }
            });
            res.send(services);
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