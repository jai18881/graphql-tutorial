import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from "./schema";

const app = express();
mongoose.connect('mongodb://localhost:27018/graphqlTutorial');

const connection = mongoose.connection;

connection.once('open', () => {
   console.log('connectin to database was successful..!!');
});

const server = new ApolloServer({schema});
server.applyMiddleware({ app });

app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
