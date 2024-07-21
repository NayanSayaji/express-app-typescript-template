import express, { json } from "express"

export const startServer = () => {
    try {
        const app = express();

        app.use(json());

        app.listen(3000, () => {
            console.log(`SERVER IS LISTENING TO THE PORT 3000 and http://localhost:3000`)
        })
    } catch (error) {

    }
}