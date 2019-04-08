'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.name = task.name;
    this.uri = task.uri;
    this.m_id = task.m_id;
    this.artist_id = task.artist_id;
    this.created_at = new Date();
};
Task.createTask = function createUser(newTask, result) {
        sql.query("INSERT INTO spotify.artists set ?", newTask, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};
Task.createAlbum = function createUser(newTask, result) {
        sql.query("INSERT INTO spotify.albums set ?", newTask, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};
Task.getTaskById = function createUser(taskId, result) {
        sql.query("Select task from spotify.artist where id = ? ", taskId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
Task.getAllTask = function getAllTask(result) {
        sql.query("Select * from spotify.artists WHERE uri IS NULL AND notFound IS NULL", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};

Task.getAllAlbum = function getAllTask(id, result) {
        sql.query("Select * from spotify.albums WHERE artist_id = ?", id, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};

Task.getAllLinkedTask = function getAllTask(result) {
        sql.query("Select * from spotify.artists WHERE uri IS NOT NULL", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};
Task.getAllNotFound = function getAllTask(result) {
        sql.query("Select * from spotify.artists WHERE notFound IS NOT NULL", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE spotify.artists SET spotify.artists.uri = ? WHERE m_id = ?", [task.uri, task.m_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
Task.updateNotFound = function(id, task, result){
  sql.query("UPDATE spotify.artists SET spotify.artists.notFound = 1 WHERE m_id = ?", [task.m_id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
Task.remove = function(id, result){
     sql.query("DELETE FROM spotify.artists WHERE m_id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= Task;
