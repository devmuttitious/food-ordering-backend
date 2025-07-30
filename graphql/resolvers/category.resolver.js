import Category from '../../models/category.model.js';

export const categoryResolvers = {
  Query: {
    getAllCategories: async () => await Category.find(),
    getCategoryById: async (_, { id }) => await Category.findById(id),
  },
  Mutation: {
    createCategory: async (_, { input }) => await Category.create(input),
    updateCategory: async (_, { id, input }) =>
      await Category.findByIdAndUpdate(id, input, { new: true }),
    deleteCategory: async (_, { id }) => await Category.findByIdAndDelete(id),
  },
  Category: {
    id: (cat) => cat._id.toString(),
  },
};
