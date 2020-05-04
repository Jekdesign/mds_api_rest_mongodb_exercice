const mongoose = require('mongoose');

const TodoModel = require('../models/todoItem')
let Todo = mongoose.model('Todo', TodoModel);

module.exports = {
    getTodo: ({
        id
    }) => {
        const data = Todo.findById(id)
        console.log(data);

        return data;
    },


    getAllTodo: () => {
        try {
            return Todo.find();
        } catch (err) {
            return {
                error: {
                    status: 500,
                    message: "Internal Server Error",
                }
            }
        }
    },


    createTodo: ({
        input
    }) => {
        try {
            return Todo.create(input);
        } catch (err) {
            return {
                error: {
                    status: 500,
                    message: "Internal Server Error",
                }
            }
        }
    },

    updateTodo: ({
        id,
        input
    }) => {
        try {
            return Todo.findByIdAndUpdate(id, input, {
                new: true
            })
        } catch (err) {
            return {
                error: {
                    status: 500,
                    message: "Internal Server Error",
                }
            }
        }
    },

    deleteTodo: ({
        id
    }) => {
        try {
            return Todo.findByIdAndDelete(id);
        } catch (err) {
            return {
                error: {
                    status: 500,
                    message: "Internal Server Error",
                }
            }
        }
    }
};