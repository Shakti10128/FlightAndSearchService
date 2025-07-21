
class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data){
        const result = await this.model.create(data);
        return result; 
    }

    async destroy(modelId){
        await this.model.destroy({
            where:{
                id: modelId
            }
        });
        return true;
    }

    async get(modelId){
        const result = await this.model.findByPk(modelId);
        return result;
    }

    async getAll(){
        const result = await this.model.findAll();
        return result;
    }

    async update(modelId,data){
        const result = await this.model.update(data,{
            where: {
                id: modelId
            }
        });
        return result;
    }
}

module.exports = CrudRepository;