const fs = require('fs')
const path = require('path')

module.exports = {
  filePath: path.join(__dirname, '../data/users.json'),

  getData: function() {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
  },
  genId: function() {
    let allUsers = this.getData()
    let lastUser = allUsers.pop()
    if(lastUser) {
      return lastUser.id + 1;
    } else return 1
  },
  findById: function(id) {
    let allUsers = this.getData()
    userFound = allUsers.find(user => user.id == id)
    if(userFound) {
      return {
        status: 0,
        data: userFound
      }
    } else return {
      status: 1,
      data: null
    }
  },
  findByEmail: function(email) {
    let allUsers = this.getData()
    userFound = allUsers.find(user => user.email == email)
    if(userFound) {
      return {
        status: 0,
        data: userFound
      }
    } else return {
      status: 1,
      data: null
    }
  },
  findByUsername: function(username) {
    let allUsers = this.getData()
    userFound = allUsers.find(user => user.username == username)
    if(userFound) {
      return {
        status: 0,
        data: userFound
      }
    } else return {
      status: 1,
      data: null
    }
  },
  create: function(data) {
    if(!data || typeof data != 'object') {
      return {
        status: 1,
        data: null
      }
    }
    let allUsers = this.getData()
    let newUser = {
      id: this.genId(),
      ...data
    }
    allUsers.push(newUser)
    fs.writeFileSync(this.filePath, JSON.stringify(allUsers, null, ' '))
    return {
      status: 0,
      data: newUser
    }
  },
  update: function(id, data) {
    let allUsers = this.getData()
    let userFound = this.findById(id)
    let newData = {...data}
    let updatedUser = {
      ...userFound.data,
      ...newData
    }
    allUsers.splice(id-1, 1, updatedUser)
    fs.writeFileSync(this.filePath, JSON.stringify(allUsers, null, ' '))
    return {
      status: 0,
      data: 'User updated'
    }
  },
  delete: function(id) {
    if(!id || isNaN(id)) {
      return {
        status: 1,
        data: null
      }
    }
    let allUsers = this.getData()
    let filteredUsers = allUsers.filter(user => user.id != id)
    fs.writeFileSync(this.filePath, JSON.stringify(filteredUsers, null, ' '))
    return {
      status: 0,
      data: 'User deleted'
    }
  }
}