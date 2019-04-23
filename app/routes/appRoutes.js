'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  // todoList Routes
  app.route('/artists')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/albums')
      .post(todoList.create_a_album);

  app.route('/albums/:m_id')
    .get(todoList.list_all_albums)
    .put(todoList.update_album);

  app.route('/artists/notfound')
    .get(todoList.allNotFound)

  app.route('/artists/:m_id')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/artists/notfound/:m_id')
    .put(todoList.not_found);

  app.route('/linkedartists')
      .get(todoList.list_all_linked_tasks);
    };
  app.route('/linkedartists')
      .get(todoList.list_all_linked_albums);
    };
  app.route('/albums/:m_id/songs')
    .get(todoList.list_all_songs)

  app.route('/songs/:m_id')
    .put(todoList.update_song);
