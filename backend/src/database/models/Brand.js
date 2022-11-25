module.exports = (sequelize, DataTypes) => {
  let alias = "Brand"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  }
  let config = {
    timestamps: false,
    tableName: "brand"
  }

  const Brand = sequelize.define(alias, cols, config)

  Brand.associate = (models) => {
    Brand.hasMany(models.Product, {
      as: "brand_products",
      foreignKey: "brand_id"
    })
  }

  return Brand
}