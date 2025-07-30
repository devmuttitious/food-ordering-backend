import Menu from '../../models/menu.model.js';
import Category from '../../models/category.model.js';
import Customization from '../../models/customization.model.js';

export const menuResolvers = {
  Query: {
    getAllMenus: async (_, { category }) => {
      const filter = category ? { categories: category } : {};
      return await Menu.find(filter)
        .populate('categories')
        .populate('customizations');
    },
    getMenuById: async (_, { id }) => {
      return await Menu.findById(id)
        .populate('categories')
        .populate('customizations');
    },
  },
  Mutation: {
    createMenu: async (_, { input }) => await Menu.create(input),
    updateMenu: async (_, { id, input }) =>
      await Menu.findByIdAndUpdate(id, input, { new: true }),
    deleteMenu: async (_, { id }) => await Menu.findByIdAndDelete(id),
  },
  Menu: {
    id: (menu) => menu._id.toString(),
    categories: async (parent) => {
      return await Category.findById(parent.categories);
    },
    customizations: async (parent) => {
      return await Customization.find({ _id: { $in: parent.customizations } });
    },
  },
};
