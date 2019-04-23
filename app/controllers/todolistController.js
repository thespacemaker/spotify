'use strict';

var Task = require('../model/appModel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};
exports.list_all_songs = function(req, res) {
  Task.getAllSongs(req.params, function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.list_all_linked_tasks = function(req, res) {
  Task.getAllLinkedTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.list_all_linked_albums = function(req, res) {
  Task.getAllLinkedAlbums(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.allNotFound = function(req, res) {
  Task.getAllNotFound(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};

exports.list_all_albums = function(req, res) {
  Task.getAllAlbum(req.params.m_id, function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};





exports.create_a_task = function(req, res, next) {
  console.log("i got something")
  var new_task = new Task(req.body);

  //handles null error
   if(!new_task.name || !new_task.m_id){
            res.status(400).send({ error:true, message: 'Please provide artist details'});

        }
else{

  Task.createTask(new_task, function(err, task) {

    if (err)
      res.send(err);
    res.json(task);
  });
}
};

exports.create_a_album = function(req, res, next) {
  console.log("i got something")
  var new_task = new Task(req.body);

  //handles null error
   if(!new_task.artist_id){
            res.status(400).send({ error:true, message: 'Please provide artist details'});

        }
else{

  Task.createAlbum(new_task, function(err, task) {

    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.m_id, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_song = function(req, res) {
  Task.updateSong(req.params.m_id, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_album = function(req, res) {
  Task.updateByAlbum(req.params.m_id, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.not_found = function(req, res) {
  Task.updateNotFound(req.params.notFound, req.params.m_id, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove(req.params.m_id, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
