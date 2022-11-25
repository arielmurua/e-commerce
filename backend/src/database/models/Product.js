module.exports = (sequelize, DataTypes) => {
  let alias = "Product";
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      defaultValue: "default.png",
    },
    description: {
      type: DataTypes.TEXT(500),
    },
    discount: {
      type: DataTypes.TINYINT(3),
      default: 0
    },
    stock: {
      type: DataTypes.INTEGER(6),
      default: 0
    },
    brand_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
    },
    storage_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
    },
    RAM_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
    },
  };
  let config = {
    tableName: "product",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, {
      as: "product_brand",
      foreignKey: "brand_id",
    });

    Product.belongsTo(models.Storage, {
      as: "product_storage",
      foreignKey: "statuses_id",
    });

    Product.belongsTo(models.Ram, {
      as: "product_ram",
      foreignKey: "RAM_id",
    });

    Product.belongsToMany(models.User, {
      as: "products_users",
      through: "Favourites",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false,
    });

    Product.belongsToMany(models.User, {
      as: "products_cart",
      through: "Cart",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false,
    });

    Product.belongsToMany(models.User, {
      as: "products_comments",
      through: "Comments",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: true,
    });
  };

  return Product;
};