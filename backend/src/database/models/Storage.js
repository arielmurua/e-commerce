module.exports = (sequelize, DataTypes) => {
  let alias = "Storage"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    storage: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  }
  let config = {
    timestamps: false,
    tableName: "storage"
  }

  const Storage = sequelize.define(alias, cols, config)

  Storage.associate = (models) => {
    Storage.hasMany(models.Product, {
      as: "storage_products",
      foreignKey: "storage_id"
    })
  }

  return Storage
}