module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
      burger_name: {
        type: DataTypes.STRING,
        notNull: true,
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    });

    // Establish association
    Burger.associate = function (models) {
      Burger.belongsTo(models.Customer, {
        foreignKey: {      
        }
      })
  };
  
    return Burger;
  };


