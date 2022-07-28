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

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
