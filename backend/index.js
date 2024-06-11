const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const { todo } = require('./db');
const port = 3000;
const { updateTodo, createTodo } = require('./types');

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({ msg: "you sent wrong inputs" });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false // Fixed typo here
    }); 

    res.json({
        msg: "todo created"
    });
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json(todos);
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you sent wrong input"
        });
        return;
    }
    await todo.findByIdAndUpdate(req.body.id, { completed: true }); // Corrected update method
    res.json({
        msg: "todo mark completed"
    });
});

app.listen(port, () => {
    console.log(`server is successfully running on port ${port}`);
});
