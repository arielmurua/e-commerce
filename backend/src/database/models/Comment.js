module.exports = (sequelize, DataTypes) => {
  let alias = "Comment"
  let cols = {
    id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.TEXT(500),
    },
    user_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
    },
    product_id: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: true
    },
  }
  let config = {
    tableName: "comment"
  }

  const Comment = sequelize.define(alias, cols, config)

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, {
      as: "comment_user",
      foreingKey: "user_id",
      onDelete: 'SET NULL'
    })

    Comment.belongsTo(models.Product, {
      as: "comment_product",
      foreingKey: "product_id",
      onDelete: 'CASCADE'
    })
  }

  return Comment
}