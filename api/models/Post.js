/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

 tableName:"posts",

  attributes: {

    title : { type: 'string', required:true },

    content : { type: 'longtext' ,required:true },

    //Associations
    category : { model :'category', columnName:'category_id', required:true},

    user : { model :'user', columnName:'user_id', required:true},
  }
};

