const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'))

app.get('/api/galleryvideos', (req, res) => {
	const media = require('./galleryvideos.json');
	res.send(media);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
