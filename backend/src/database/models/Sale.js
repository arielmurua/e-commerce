module.exports = (sequelize, DataTypes) => {
  let alias = "Sale"
  let cols = {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(45),
    },
    last_name: {
      type: DataTypes.STRING(45),
    },
    address: {
      type: DataTypes.STRING(100),
    },
    phone: {
      type: DataTypes.STRING(45),
    },
    zip: {
      type: DataTypes.STRING(45),
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
    },
    user_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
    },
    payment_method_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false
    }
  }
  let config = {
    tableName: "sale"
  }

  const Sale = sequelize.define(alias, cols, config)

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: "sale_user",
      foreignKey: "user_id",
      onDelete: 'SET NULL'
    })

    Sale.belongsTo(models.Payment_method, {
      as: "payMethod_user",
      foreignKey: "payment_method_id"
    })
  }

  return Sale
}