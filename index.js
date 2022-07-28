const rateLimit = require('express-rate-limit')
const express = require('express')
const app = express()

const port = 3000
const limiter = rateLimit({
    windowMs: 1000 * 60,
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
})

app.use(limiter);
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
