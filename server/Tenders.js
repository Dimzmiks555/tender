import fetch from 'node-fetch'


class Tenders {
   
    async find() {
        const apiURL = 'http://www.tender.pro/api/_info.tenderlist_by_set.json?_key=1732ede4de680a0c93d81f01d7bac7d1&set_type_id=2&set_id=7964&max_rows=100&open_only=t';
        const response = await fetch(apiURL);
        const json = await response.json();
        return json;
    }

}

export default new Tenders()  
