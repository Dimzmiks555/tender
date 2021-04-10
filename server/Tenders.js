import fetch from 'node-fetch'
class Tenders {
    async find() {
        // const url = 'http://www.tender.pro/api/_tender.info.json'; // http://www.mysite.ru/index.php
        let answer = '';
        // var options = {
        // url: url,
        // qs: {
        //     _key: '1732ede4de680a0c93d81f01d7bac7d1',
        //     company_id: '44441',
        //     id : '144276'
        // }
        // };
        // console.log('1')
        // request.get(options, (error, response, body) => {
        //     answer = body;
        //     console.log('2')
        // });
        // console.log('3')
        // function TenderProAPI(){
        //     fetch('http://www.tender.pro/api/_info.tenderlist_by_set.json?_key=1732ede4de680a0c93d81f01d7bac7d1&set_type_id=2&set_id=7964&max_rows=100&open_only=t')
        // .then(res => res.json())
        // .then(json => {
        //     return json;
        // })
        // }
        // console.log(TenderProApi())
        // return TenderProAPI();
        let Getdata = async function (callback) {
            var response = await fetch('http://www.tender.pro/api/_info.tenderlist_by_set.json?_key=1732ede4de680a0c93d81f01d7bac7d1&set_type_id=2&set_id=7964&max_rows=100&open_only=t');
            var obj = await response.json();
            callback(obj);
          }
          
        Getdata(function(data){
            return data
        });
        console.log(answer);
    }
}

export default new Tenders();