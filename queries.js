const database = require("./database_connections");

module.exports = {
    getprofiles() {
        return database('profiles');
    },
    read(id) {
        return database('profiles')
            .where('id', id)
            .first();
    },
    create(profiles) {
        return database('profiles')
            .insert(profiles)
            .returning('*')
            .then(record => record[0]);
    },
    update(id, profiles) {
        return database('profiles')
            .update(profiles)
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    delete(id) {
        return database('profiles')
            .delete()
            .where('id', id);
    },

    getSkills() {
        return database('skills');
    },
    readSkill(id) {
        return database('skills')
            .where('id', id)
            .first();
    },
    createSkill(skills) {
        return database('skills')
            .insert(skills)
            .returning('*')
            .then(record => record[0]);
    },
    updateSkill(id, skills) {
        return database('skills')
            .update(skills)
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    deleteSkill(id) {
        return database('skills')
            .delete()
            .where('id', id);
    }
};