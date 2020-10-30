const orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM.

//burger object

const burger = {

    selectAll: (cb) => {
        orm.selectAll("burgers", (results) => {
            cb(results);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (result) => {
            console.log("Insert One Model");
            cb(result);
        });
    },

    updateOne: (cols, vals, condition, cb) => {
        console.log("Update One Model");
        orm.updateOne("burgers", cols, vals, condition, (result) => {
            console.log("Second declared cb");
            cb(result);
        });
    }
};

        //exporting burger object//

module.exports = burger;