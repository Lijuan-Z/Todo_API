const User = require("../models/User");
const Todo = require("../models/Todo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    '${process.env.JWT_SECRET_KEY}',
    { expiresIn: "1h" }
  );
  return token;
};


const resolvers = {
  Query: {
    async todos() {
      const todos = await Todo.find({});
      return todos;
    },
    async todoByCategory(_, { category }) {
      const todo = await Todo.find({ category });
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    },
    async todoByOwner(_, { owner }) {
      const todo = await Todo.find({ owner });
      if (!todo) {
        throw new Error("Todo not found");
      }
      return todo;
    },
  },

  Mutation: {
    async register(_, { input }) {
        const user = await User.findOne({ email: input.email });
        if (user) {
          throw new Error("User already exists");
        }
        const passwordHash = await bcrypt.hash(input.password, 12);
        const newUser = new User({
          ...input,
          password: passwordHash,
        });
        await newUser.save();
        const token = generateToken(newUser);
        return { user: newUser, token };
      },
      async login(_, { email, password }) {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Invalid credentials");
        }
        const token = generateToken(user);
        return { user, token };
      },
      async createTodo(_, { input } ){
        const name =  input.owner;
        const user = await User.findOne({ name });
        if (!user) {
          throw new Error("Invalid credentials");
        }
        const todo = new Todo({
          ...input,
          owner: input.owner,
        });
        await todo.save();
        return todo;
      },
      async updateTodo(_, { id, input }) {
        const todo = await Todo.findById(id);
        if (!todo) {
          throw new Error("Todo not found");
        }
        if (String(todo.owner) !== String(input.username)) {
          throw new Error("Unauthorized");
        }
        Object.assign(todo, input);
        await todo.save();
        return todo;
      },
      async deleteTodo(_, { id ,username}) {
        const todo = await Todo.findById(id);
        if (!todo) {
          throw new Error("Todo not found");
        }
        if (String(todo.owner) !== String(username)) {
          throw new Error("Unauthorized");
        }
        await todo.remove();
        return todo;
      },  
  },

};

module.exports = resolvers;
