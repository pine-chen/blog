const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)

    const sql = `select * from users where user_name=${username} and userpassword=${password};`

    return exec(sql).then(data => {
        return data[0] || {}
    })
}

const register = (username, password, nickname) => {
    username = escape(username)
    nickname = escape(nickname)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)

    const sql = `insert into users (user_name, user_password, user_nickname) values (${username}, ${password}, ${nickname});`

    return exec(sql).then(data => {
        return {
            id: data.insertId
        }
    })
}

const userInfo = async(id, username, oldPassword, newPassword, information) => {
    username = escape(username)
    information = escape(information)

    //生成加密密码
    oldPassword = genPassword(oldPassword)
    newPassword = genPassword(newPassword)
    oldPassword = escape(oldPassword)
    newPassword = escape(newPassword)

    const sql = `update users set username=${username}, password=${newPassword}, information=${information} where id=${id} and password=${oldPassword};`
    
    return exec(sql).then(data => {
        return {
            changedRows: data.changedRows
        }
    })
}

module.exports = {
    login,
    register,
    userInfo
}