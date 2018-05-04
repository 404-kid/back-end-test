const database = require("./database-connection");
// console.log(database("memebers").select());
module.exports = {
    list(){
      return database("memebers").select()
    },
    read(id){
      return database("memebers").select().where("id", id).first()
    },
    create(memeber){
      return database("memebers").insert(memeber).returning("*").then(record => record[0])
    },
    update(id, memeber){
      return database("memebers").update(memeber).where("id", id).returning("*").then(record => record[0])
    },
    delete(id){
      return database("memebers").delete().where("id", id)
    }
};
