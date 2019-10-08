import mongoose from 'mongoose';
import authorModel from './models/author';

const resolvers = {
    Query: {
        authors: () => {
            // return authors;
        },
        author: (root, { id }) => {
            // return authors.find(author => author.id === id);
        }
    },

    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({ name, age, books });
            return author.save();
        },
        deleteAuthor(root, {id}) {
            return authorModel.findOneAndRemove({id: id});
        }
    }
}

export default resolvers;
