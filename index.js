const rateLimit = require('express-rate-limit')
const express = require('express')
const app = express()

const limiter = rateLimit({
    windowMs: 1000 * 60,
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
    message: "cuma boleh 6 request dalam 1 menit"
})

app.use(limiter);
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/ip', (request, response) => response.send(request.ip))

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});
