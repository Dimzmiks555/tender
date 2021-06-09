
import Docs from "./Docs.js";

class DocsService {

    async create(id, positions, date, deadline, payment) {
        Docs.create({
            id: id,
            pos: positions,
            date: date,
            deadline: deadline,
            payment: payment
        });
    }
    
}

export default new DocsService()