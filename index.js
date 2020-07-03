const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.json({message: 'hello app of me'});
})

app.listen(port, () => console.log('server on run'));