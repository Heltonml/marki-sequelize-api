const connect = ({ dotenv, mysql }) => {
    return async function conn() {
        dotenv.config();

        const config = {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        };

        const pool = mysql.createPool(config);

        return pool;
    };
};

module.exports = connect;
