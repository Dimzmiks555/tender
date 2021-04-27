import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.json())

const PORT = 5000;

const URL = 'https://www2.tender.pro/api/v1/tender.offer.rating/509868';

let our = 343375;



app.get('/', (req,res) => {
    async function getRating(){
        const params = {
            method: 'POST',
            body: '{"id":77,"jsonrpc":"2.0","method":"tender.offer.rating","sid":2349383,"lang":"ru","params":{"id":509868,"companyid":343375,"ti":"2021-04-27 16:48:00"},"debug":{}}',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(URL, params);
        let json = await res.json();
        console.log(json);
        return json
    }
    res.send(getRating());
})


app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));