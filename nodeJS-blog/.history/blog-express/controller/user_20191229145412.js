const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)

    const sql = `select username, realname from users where username=${username} and password=${password};`

    return exec(sql).then(data => {
        return data[0] || {}
    })
}

const register = (username, password, realname) => {
    const sql = `insert into users (username, password, realname) values ('${username}', '${password}', '${realname}');`

    return exec(sql).then(data => {
        return {
            id: data.insertId
        }
    })
}




module.exports = {
    login,
    register
}