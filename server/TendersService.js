import Tenders from "./Tenders.js";

class TendersService {
    // async create(tenders) {
    //     const createdTenders = await Tenders.create(...post);
    //     return createdTenders;
    // }

    async getAll() {
        const tenders = await Tenders.find();
        console.log(tenders);
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