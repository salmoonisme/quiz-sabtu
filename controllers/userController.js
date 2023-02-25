const { Users } = require('../models');
const Error = require('../helpers/error');

class UserController {
    async get(req, res, next) {
      try {
        const data = await Users.findAll({});
        if (data.length < 1) {
          throw new Error(400, 'There is no user yet')
      }
        res.status(200).json(data);
      } catch (error) {
        next(error);
      }
    }
}

module.exports = { UserController };