const express = require("express");
const router = express.Router({ mergeParams: true });  //mergeParams - When true any req.params passed to the router will be merged into the router's req.params. (default: false) 

const {
  createMessage,
  getMessage,
  deleteMessage
} = require("../handlers/messages");

// prefix - /api/users/:id/messages
router.route("/").post(createMessage);

// prefix - /api/users/:id/messages/:message_id
router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);

module.exports = router;
