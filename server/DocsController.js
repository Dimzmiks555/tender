
import DocsService from "./Docs.js";


class DocsController {

    async create(req, res) {
        try {
            const document = await DocsService.create(req.body);
            res.send("Document created");
        } catch (e) {
            // console.log(e);
            res.status(500).json(e)
        }
    }

}

export default new DocsController()