exports.up = function (knex, Promise) {
    return knex.schema.createTable('profiles', table => {
        table.increments();
        table.string("name");
        table.string('dob');
        table.string('description');
        table.string('teacher');
        table.string('image');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('profiles')
};
