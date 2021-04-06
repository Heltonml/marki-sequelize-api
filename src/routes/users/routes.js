const userDB = require('../../data-access/users/app');

const route = ({ router }) => {
    router.get('/', async (req, res, next) => {
        const resutls = await userDB.selectAll();
        return res.status(200).json({ users: resutls });
    });

    router.post('/', async (req, res, next) => {
        const { name, email, role } = req.body;
        const data = { name, email, role };
        const user = await userDB.insertNewUser({ data });
        return res.status(201).json({ user });
    });

    return router;
};

module.exports = route;
