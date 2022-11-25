module.exports = (sequelize, DataTypes) => {
  let alias = "Ram"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    RAM: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  }
  let config = {
    timestamps: false,
    tableName: "RAM"
  }

  const Ram = sequelize.define(alias, cols, config)

  Ram.associate = (models) => {
    Ram.hasMany(models.Product, {
      as: "Ram_products",
      foreignKey: "RAM_id"
    })
  }

  return Ram
}