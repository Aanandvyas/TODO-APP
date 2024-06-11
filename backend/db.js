const mongoose = require('mongoose');
const { string, boolean } = require('zod');

mongoose.connect('mongodb+srv://vyasanand:vyasanand0007@tanya.mk3jzty.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean }
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
    todo
};
