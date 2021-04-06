const query = ({ connects, models }) => {
    return Object.freeze({
        insertNewUser,
        selectAll
    });

    async function insertNewUser({ data }) {
        try {
            const User = models.users;
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.error(error);
        }
    }

    async function selectAll() {
        try {
            const pool = await connects();

            const res = await new Promise((resolve, reject) => {
                const sql = `Select * From users;`;
                pool.query(sql, [], (error, results, fields) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });

            return res;
        } catch (error) {
            console.error(error);
        }
    }

};

module.exports = query;
