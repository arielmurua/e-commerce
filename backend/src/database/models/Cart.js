module.exports = (sequelize, DataTypes) => {
  let alias = "Cart"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.TINYINT(1),
      default: 1
    },
    user_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false
    }
  }
  let config = {
    timestamps: false,
    tableName: "cart"
  }

  const Cart = sequelize.define(alias, cols, config);

  Cart.associate = (models) => {
    Cart.belongsTo(models.Product, {
      as: "cart_product",
      foreignKey: "product_id",
      onDelete: 'CASCADE'
    })
  
    Cart.belongsTo(models.User, {
      as: "cart_user",
      foreignKey: "user_id",
      onDelete: 'CASCADE'
    })
  }

  return Cart
}