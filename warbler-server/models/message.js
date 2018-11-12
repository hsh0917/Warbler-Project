const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
        text: {
            type: String,
            required: true,
            maxLength: 160
        },
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true  // This will be really useful when you want to sort the messages.
    }
);

messageSchema.pre("remove", async function(next){
    try {
          // find a user
          let user = await User.findById(this.user);
          // remove the id of the message from their messages List
          user.message.remove(this.id);
          // save that user
          await user.save();
          // return next
          return next();
        } catch (err){
            return next(err);
    }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;