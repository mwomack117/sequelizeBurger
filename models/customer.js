module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING
        }
    });

    // Establish association
    Customer.associate = function (models) {
        Customer.hasMany(models.Burger)
    };

    return Customer;
};