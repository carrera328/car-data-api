const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    console.log(req.query);
    const response = await fetch(`http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=honda&model=civic&year=2000`, {
            method: 'GET'
        }).then(res => res.text());

        res.send(JSON.parse(response.slice(2, -1).slice(0, -1)));
})

app.post('/', async (req, res) => {
    console.log(req.body);
    const response = await fetch(`http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=${req.body.make}&model=${req.body.model}&year=${req.body.year}`, {
            method: 'GET'
        }).then(res => res.text());
        console.log(response);
            res.send(JSON.parse(response.slice(2, -1).slice(0, -1)));

    
})

app.listen( process.env.PORT || 5000, () => {
    console.log(`listening on port 5000`);
})

// httpProxy.createProxyServer({ target:'http://192.168.1.234:3000' }).listen(5000);
