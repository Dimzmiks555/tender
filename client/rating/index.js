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
        for (let id = 0; id < 1000000; id++){
            console.log(id);
            const res = await fetch(URL, {
                method: 'POST',
                body: `{"id":77,"jsonrpc":"2.0","method":"tender.offer.rating","sid":2349383,"lang":"ru","params":{"id":510683,"companyid": ${id},"ti":"${myT}"},"debug":{}}`,
                headers: {
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'Content-Type': 'application/json'
                }
            });
            let json = await res.json();
            let arr = json.result.data[0].offer_rating.split(';');
            console.log(json);
            for (let i = 0; i < arr.length; i++) {

                // let tt = arr[i].slice(0, arr[i].length - 3).slice(3);
                //     tt = tt.split(',');
                //     if (tt[1] != 0){
                //         console.log(id + 'yes');
                //     } else {
                //         console.log(id)
                //     }
            }
            return JSON.stringify(json)
        }
        
    }
    res.send(getRating());
})


app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));