const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    description: {
      type: String, 
      required: true
    },
    category: {
      type: String, 
      required: true 
    },
    completed: {
      type: Boolean, 
      default: false 
    },
    owner: {
      type: String, 
      ref: "User", 
      required: true 
    },
  },
  { 
    timestamps: true 
  }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;