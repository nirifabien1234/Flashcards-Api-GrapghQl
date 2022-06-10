import express from "express";
import { getSchema } from "./graphql/schema";
import {ApolloServer} from 'apollo-server-express'
import { getMyPrismaClient } from "./db";

const main = async () => {
    const app = express();

    const schema = getSchema()

    const prisma = await getMyPrismaClient()
    const apolloServer = new ApolloServer({
        schema,
        // context: ({req, res}): 
    })

    await apolloServer.start();
    apolloServer.applyMiddleware({ app })

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

    })
}

main().catch((err) => {
    console.log(err);
})