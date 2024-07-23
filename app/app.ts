import express from 'express'
import { registerMiddlewares } from './routes/routes'
import { connectToMongoDB } from './connections/mongo.connection';

export const startServer = async () => {
    try {
        await connectToMongoDB();

        const app = express()
        registerMiddlewares(app);

        const { PORT } = process.env;
        app.listen(PORT, () => {
            console.log(`SERVER STARTED LISTENING ON PORT ${PORT}`)
        })
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}