const SuperAdminManage = {
  // 用户检查通知
  SuperAdmin: {
    addSuperAdmin: 'insert into SuperAdmin(UserID) values (?)'
    // deleteAllUserByAccount: 'delete from AllUser where Account = ?',
    // updateAllUser: 'insert into user(id, name, age) values (0, ?, ?)',
    // searchAllUser: 'insert into user(id, name, age) values (0, ?, ?)',
  }
}

module.exports = SuperAdminManage
