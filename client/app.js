import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));





app.use(express.static(__dirname + '/tenders'));

app.use("/tenders", function(request, response){
     
    response.sendFile(__dirname + "/tenders/index.html");
});

app.listen(port, () => console.log(`Running on port ${port}`));