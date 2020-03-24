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
    username = escape(username)
    realname = escape(realname)

    //生成加密密码
    password = genPassword(password)
    password = escape(password)

    const sql = `insert into users (username, password, realname) values (${username}, ${password}, ${realname});`

    return exec(sql).then(data => {
        const sql = `select username, realname from users where id=${data.insertId};`
        return exec(sql).then(data => {
            return data[0] || {}
        })
    })
}

const userInfo = async(id, username, oldPassword, newPassword, information) => {
    id = escape(id)
    username = escape(username)
    information = escape(information)

    //生成加密密码
    oldPassword = genPassword(oldPassword)
    newPassword = genPassword(newPassword)
    oldPassword = escape(oldPassword)
    newPassword = escape(newPassword)

    //sql语句有错误，应该是用户名和密码是varchar，要加引号。但我不会改。。。
    const sql = `update users set username=${username}, password=${newPassword}', information='${information}' where id='${id}' and password='${oldPassword}';`
    
    return exec(sql).then(data => {
        console.log('data:', data)
        return {
            id: data.insertId
        }
    })
}

module.exports = {
    login,
    register,
    userInfo
}