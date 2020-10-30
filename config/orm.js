const connection = require("../config/connection.js");

//methods need work//
const orm = {
    selectAll: (tableInput, cb) => {

      let queryString = `SELECT FROM ${ tableInput }`;

      connection.query(queryString, ( err, result ) => {
        if (err) throw err;
        cb(result);
      });
    },

    insertOne: (tableInput,cols,vals,cb) => {
      
      let queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

      connection.query(queryString, vals, (err, result) => {
          if (err) throw err;
          cb(result);
      });
    },

    updateOne: (tableInput, cols, vals, condition, cb) => {

        let queryString = `UPDATE ${tableInput} SET ${cols.toString()} = ? WHERE ${condition}`;

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            console.log("Successfully updated!");
            cb(result);
        })
    }    
  };
  
  module.exports = orm;