import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.json())

const PORT = 8080;
// tender.offer.rating/509868
const URL = 'https://www2.tender.pro/api/';

let our = 343375;
// {"id":509868,"companyid":343375,"ti":"2021-04-27 16:48:00"}


app.get('/', (req,res) => {
    async function getRating(){
        let t = new Date();
        let myT =
        t.getFullYear() + '-' +
        ('0' + (t.getMonth() + 1)).slice(-2) + '-' +
        ('0' + t.getDate()).slice(-2)+ " " +
        ('0' + t.getHours()).slice(-2) + ":" +
        ('0' + t.getMinutes()).slice(-2) + ":" +
        ('0' + t.getSeconds()).slice(-2);
        const res = await fetch(URL, {
            method: 'POST',
            body: `{"id":77,"jsonrpc":"2.0","method":"tnd_v2.z_offer","sid":419640,"lang":"ru","params":{"id":512968,"_ip": "127.0.0.1","ti":"${myT}"},"_sid": "32323243"}`,
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/json'
            }
        });
        let json = await res.json();
        console.log(myT);
        
        console.log(json)
        return myT
        
        
    }
    res.send(getRating());
})


app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));