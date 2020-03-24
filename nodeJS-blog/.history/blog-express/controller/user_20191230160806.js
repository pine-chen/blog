const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    username = escape(username)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)

    const sql = `select * from users where user_name=${username} and user_password=${password};`

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

const userInfo = async(id, nickname, oldPassword, newPassword, age, email, telephone, information) => {
    nickname = escape(nickname)
    email = escape(email)
    information = escape(information)

    //生成加密密码
    oldPassword = genPassword(oldPassword)
    newPassword = genPassword(newPassword)
    oldPassword = escape(oldPassword)
    newPassword = escape(newPassword)

    const sql = `update users set user_nickname=${nickname}, user_password=${newPassword},  user_info=${information} where id=${id} and password=${oldPassword};`
    
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