import express from 'express';
import tendersRouter from './TendersRouter.js'

const app = express();
// const app = express();
//         const url = 'http://www.tender.pro/api/_tender.info.json'; // http://www.mysite.ru/index.php
//         var options = {
//         url: url,
//         opt: {
//             _key: "1732ede4de680a0c93d81f01d7bac7d1",
//             company_id: 44441,
//             id: 144276
//         }
//         };

//         request.get(options, function(error, response, body){
//             console.log(body);
//         });

const port = 5000;
app.use(express.json());
app.use(express.static('static'));
app.use('/api', tendersRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
