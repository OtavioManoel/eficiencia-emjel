exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        
        table.increments();
        table.string('environment').notNullable();
        table.decimal('area').notNullable();
        table.string('electronicEquipment').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
