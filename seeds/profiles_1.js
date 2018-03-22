exports.seed = function (knex, Promise) {
  return knex.raw('TRUNCATE TABLE profiles RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('profiles').insert([{
        name: "Jordan Smith",
        dob: "12-17-1995",
        description: "Be better than Goku",
        teacher: "Vegeta",
        image: "http://www.pngmart.com/files/2/Vegeta-PNG-Image.png"
      },
      {
        name: "Isaiah Martinez",
        dob: "10-28-1995",
        description: "Save the World",
        teacher: "Goku",
        image: "http://www.pngmart.com/files/2/Goku-Transparent-PNG.png"
      },
      {
        name: "Josh Swinger",
        dob: "04-16-1992",
        description: "Look awesome old",
        teacher: "Master Roshi",
        image: "https://vignette.wikia.nocookie.net/drslump/images/f/f3/517557-tortue_gniale.png/revision/latest?cb=20140121194858"
      }
      ]);
    });
};
