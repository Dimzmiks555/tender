import Tenders from "./Tenders.js";
import fs from 'fs'
import XMLParser from 'xml-js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
class TendersService {
    // async create(tenders) {
    //     const createdTenders = await Tenders.create(...post);
    //     return createdTenders;
    // }
    async create(file) {
        let filePath = fs.createReadStream(file.path,'utf8');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data);
            }
        })
    }
    async getAll() {
        const tenders = await Tenders.find();
        return tenders;
    }
    // async getOne(id) {
    //     if (!id) {
    //         throw new Error('не указан ID')
    //     }
    //     const post = await Tenders.findById(id);
    //     return post;
    // }

    // async update(tenders) {
    //     if (!post._id) {
    //         throw new Error('не указан ID')
    //     }
    //     const updatedTenders = await Tenders.findByIdAndUpdate(post._id, post, {new: true})
    //     return updatedTenders;
    // }

    // async delete(id) {
    //         if (!id) {
    //             throw new Error('не указан ID')
    //         }
    //         const post = await Tenders.findByIdAndDelete(id);
    //         return post;
    // }
}


export default new TendersService();