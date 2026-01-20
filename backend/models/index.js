'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../src/store/sequelize'); 
const db = {};

// import model factory
const TransactionModel = require('../src/modules/transaction/transaction.model');
const CategoryModel = require('../src/modules/category/category.model');
const UserModel = require('../src/modules/user/user.model');
const MonthlySummaryModel = require('../src/modules/monthlySummary/monthlySummary.model');

// init model
db.Transaction = TransactionModel(sequelize, Sequelize.DataTypes);
db.Category = CategoryModel(sequelize, Sequelize.DataTypes);
db.User = UserModel(sequelize, Sequelize.DataTypes);
db.MonthlySummary = MonthlySummaryModel(sequelize, Sequelize.DataTypes);

// associations
Object.values(db).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
});

// export
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
