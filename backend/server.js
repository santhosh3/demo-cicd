const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

app.get('/api', (req, res) => {
    return res.send({message : "Hello World"})
})

app.listen(3000, () => console.log(`app is listening on port 3000`));