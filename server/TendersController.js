import Tenders from "./Tenders.js";
import TendersService from "./TendersService.js";

class TendersController {
    async create(req, res) {
        try {
            console.log(req.filename);
            const tender = await TendersService.create(req.file);
            res.send("file saved on server");
        } catch (e) {
            // console.log(e);
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const tenders = await TendersService.getAll();
            return res.json(tenders);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    // async getOne(req, res) {
    //     try {
    //         const post = await PostService.getOne(req.params.id)
    //         return res.json(post)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
    // async update(req, res) {
    //     try {
    //         const updatedPost = await PostService.update(req.body);
    //         return res.json(updatedPost);
    //     } catch (e) {
    //         res.status(500).json(e.message)
    //     }
    // }
    // async delete(req, res) {
    //     try {
    //         const post = await PostService.create(req.params.id);
    //         return res.json(post)
    //     } catch (e) {
    //         res.status(500).json(e)
    //     }
    // }
}


export default new TendersController();