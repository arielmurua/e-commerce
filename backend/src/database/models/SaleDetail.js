module.exports = (sequelize, DataTypes) => {
  let alias = "SaleDetail";
  let cols = {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    sale_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER(6).UNSIGNED
    },
    quantity: {
      type: DataTypes.TINYINT(1),
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    discount: {
      type: DataTypes.TINYINT(3),
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  };
  let config = {
    tableName: "sales_detail",
    timestamps: false,
  };

  const SaleDetails = sequelize.define(alias, cols, config);

  SaleDetails.associate = (models) => {
    SaleDetails.belongsTo(models.Product, {
      as: "saleDetail_product",
      foreignKey: "product_id",
      onDelete: 'SET NULL'
    });

    SaleDetails.belongsTo(models.Sale, {
      as: "saleDetail_sale",
      foreignKey: "sale_id",
    });
  };

  return SaleDetails;
};