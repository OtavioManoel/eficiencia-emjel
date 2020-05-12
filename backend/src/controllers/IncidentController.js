const connection = require('../database/connection');

module.exports= {
    async index(request,response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
         .limit(5)
         .offset((page-1)*5)
         .select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const {environment, area, electronicEquipment} = request.body;


        const [id] = await connection('incidents').insert({
            environment,
            area,
            electronicEquipment,
        });

        return response.json({id});
    },

    async delete(request,response){
        const {id} = request.params;

        const incidents = await connection('incidents')
            .where('id',id)
            .first();

    await connection('incidents').where('id',id).delete();

    return response.status(204).send();
    }
};
