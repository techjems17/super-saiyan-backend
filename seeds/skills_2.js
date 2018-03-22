exports.seed = function (knex, Promise) {
  return knex.raw('TRUNCATE TABLE skills RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('skills').insert([{
        name: "Superhuman speed",
        description: "Travel great distances in short periods of time, or move at untrackable speeds while in combat."
      },
      {
        name: "Superhuman strength",
        description: "Strong enough to effortlessly break all Earthling-made materials or weapons, move in increased gravity without any discomfort, and even lift a suit capable of sinking through a planet."
      },
      {
        name: "Superhuman senses",
        description: "Able to think and react at extremely high speeds, easily able to dodge or catch projectiles fired from weapons, or even keep up with incredible combat speeds from opponents."
      }
      ]);
    });
};
