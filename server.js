const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/api/images/:id', (req, res) => {
    if (req.params.id === imageData.id) {
        res.json(imageData);
    } else {
        res.status(404).send('Image not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
