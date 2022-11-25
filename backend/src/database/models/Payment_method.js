module.exports = (sequelize, DataTypes) => {
  let alias = "Payment_method"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }
  let config = {
    timestamps: false,
    tableName: "payment_method"
  }

  const Payment_method = sequelize.define(alias, cols, config)

  Payment_method.associate = (models) => {
    Payment_method.hasMany(models.User, {
      as: "payment_users",
      foreignKey: "payment_method_id"
    })
    Payment_method.hasMany(models.Sale, {
      as: "payment_sales",
      foreignKey: "payment_method_id"
    })
  }

  return Payment_method
}