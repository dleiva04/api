import SuperTokens from "supertokens-node"
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword"
import Session from "supertokens-node/recipe/session"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from './src/routes/index.routes';

dotenv.config()
const app = express()
const port = process.env.PORT
const domain = process.env.DOMAIN
const url = `${domain}:${port}`

// SuperToken initialize
SuperTokens.init({
    appInfo: {
        appName: "API",
        apiDomain: url,
        websiteDomain: url,
    },
    supertokens: {
        connectionURI: `${domain}:3567`
    },
    recipeList: [
        Session.init({
            enableAntiCsrf: true
        })
    ]
})

// middlewares
app.use(express.json())
app.use(cors({
    origin: domain,
    allowedHeaders: ['Content-Type', ...SuperTokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true
}))
app.use(SuperTokens.middleware())

// routes
app.use('/api', routes);

// error handling middlewares
app.use(SuperTokens.errorHandler())


app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})
