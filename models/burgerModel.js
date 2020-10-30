const orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM.
//burger object

const burger = {

  selectAll : (callback) => {
    orm.selectAll("burgers", (results)=>{
      callback(results);
    });
  },

  insertOne : (cols, vals, callback) => {
    // Execute orm Function to Post Data into Database
    orm.insertOne("burgers", cols, vals, (result)=>{
      console.log("Executing Insert One Model");
      callback(result);
    });
  },

  updateOne : (cols, vals, condition, callback) =>{
    console.log("Executing Update One Model");

    orm.updateOne("burgers", cols, vals, condition, (result)=>{
      console.log("Executing Second Declared CallBack");
      callback(result);
    });
  }
}; 
//exporting burger object//

module.exports = burger;
