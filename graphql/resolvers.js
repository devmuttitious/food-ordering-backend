import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Category from '../models/category.model.js';
import Customization from '../models/customization.model.js';
import Menu from '../models/menu.model.js';

export const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error("Not authenticated");
      return user;
    },

    // ---------- Get All ----------
    getAllCategories: async () => {
      return await Category.find();
    },

    getAllCustomizations: async () => {
      return await Customization.find();
    },

    getAllMenus: async (_, { category }) => {
      const filter = category ? { categories: category } : {};
      return await Menu.find(filter)
        .populate('categories')
        .populate('customizations');
    },

    // ---------- Get By ID ----------
    getCategoryById: async (_, { id }) => {
      return await Category.findById(id);
    },

    getCustomizationById: async (_, { id }) => {
      return await Customization.findById(id);
    },

    getMenuById: async (_, { id }) => {
      return await Menu.findById(id)
        .populate('categories')
        .populate('customizations');
    },
  },

  Mutation: {
    // -------------------- Auth --------------------
    register: async (_, { input }) => {
      const { name, email, password } = input;
      const existing = await User.findOne({ email });
      if (existing) throw new Error("User already exists");

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: `https://ui-avatars.com/api/?name=${name.replace(" ", "+")}`,
      });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
       return { token, user };
    },

    login: async (_, { input }) => {
      const { email, password } = input;
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error("Invalid credentials");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { token, user };
    },

    // -------------------- Category --------------------
    createCategory: async (_, { input }) => {
      return await Category.create(input);
    },

    updateCategory: async (_, { id, input }) => {
      return await Category.findByIdAndUpdate(id, input, { new: true });
    },

    deleteCategory: async (_, { id }) => {
      return await Category.findByIdAndDelete(id);
    },

    // -------------------- Customization --------------------
    createCustomization: async (_, { input }) => {
      return await Customization.create(input);
    },

    updateCustomization: async (_, { id, input }) => {
      return await Customization.findByIdAndUpdate(id, input, { new: true });
    },

    deleteCustomization: async (_, { id }) => {
      return await Customization.findByIdAndDelete(id);
    },

    // -------------------- Menu --------------------
    createMenu: async (_, { input }) => {
      return await Menu.create(input);
    },

    updateMenu: async (_, { id, input }) => {
      return await Menu.findByIdAndUpdate(id, input, { new: true });
    },

    deleteMenu: async (_, { id }) => {
      return await Menu.findByIdAndDelete(id);
    },
  },

  // -------------------- Resolvers for nested fields --------------------
  Menu: {
    categories: async (parent) => {
      return await Category.findById(parent.categories);
    },
    customizations: async (parent) => {
      return await Customization.find({ _id: { $in: parent.customizations } });
    },
    id: (menu) => menu._id.toString(),
  },

  User: {
    id: (user) => user._id.toString(),
  },

  Category: {
    id: (cat) => cat._id.toString(),
  },

  Customization: {
    id: (cust) => cust._id.toString(),
  },
};
