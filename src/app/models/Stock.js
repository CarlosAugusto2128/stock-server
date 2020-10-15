import Sequelize, { Model } from 'sequelize';

class Stock extends Model {
  static init(sequelize) {
    super.init({
      amount: Sequelize.INTEGER,
      product_id: Sequelize.INTEGER,
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'stock_product' });
  }
}

export default Stock;
