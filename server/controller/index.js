const pool = require('../database/db')

exports.getUser = async (req, res) => {

    const conn = await pool.promise().getConnection()

    try {

        const [ user ] = await conn.execute(
            `
                select * from Users
            `
        )

        return res.send(user);

    } finally {

        conn.release();

    }

}
