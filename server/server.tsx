import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Html } from './index.server'
import App from "../resources/app/App";
// import path from "path";

const port = 3000
const server = express()
const jsFiles: Array<string> = []

fs.readdirSync('./dist/assets').forEach(file => {
    if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
})

// const isProd = process.env.NODE_ENV === 'production'
// const resolve = (file: string) => path.resolve(__dirname, file)
// const serve = (dir: string, cache: boolean) =>
//     express.static(resolve(dir), {
//         maxAge: cache && isProd ? '1y' : 0,
//     })

server.use('/assets', express.static('./dist/assets'))
server.use('/fonts', express.static('./public/fonts'))
// server.use('/fonts', serve('./public/fonts', true))

server.get('*', async (req, res) => {
    ReactDOMServer.renderToStaticNodeStream(<Html scripts={jsFiles}>
        <App />
    </Html>).pipe(res)
})

server.listen(port, () => console.log(`Listening on port ${port}`))