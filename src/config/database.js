
import mongoose from "mongoose"

async function connection() {
    await mongoose
        .connect(process.env.MONGO_DB_NAME, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => {
            console.log("MONGO DB connected!")
        }).catch(e => {
            console.log("DB Error", e)
        })
}

export default { connection }