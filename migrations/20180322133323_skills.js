exports.up = function (knex, Promise) {
    return knex.schema.createTable('skills', skill => {
        skill.increments();
        skill.string("name");
        skill.string('description');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('skills')
};
