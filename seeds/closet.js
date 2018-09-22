exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('closet').del()
        .then(function () {
            // Inserts seed entries
            return knex('closet').insert([
                {
                    type: "top",
                    img: "#000",
                    season: "spring/summer",
                    color: "orange"
                },
                {
                    type: "skirt",
                    img: "#000",
                    season: "srping/summer",
                    color: "navy"
                },
                {
                    type: "dress",
                    img: "#000",
                    season: "srping/summer",
                    color: "black"
                },
                {
                    type: "bag",
                    img: "#000",
                    season: "srping/summer",
                    color: "red"
                },
                {
                    type: "shoes",
                    img: "#000",
                    season: "srping/summer",
                    color: "kaki"
                },
                {
                    type: "hat",
                    img: "#000",
                    season: "srping/summer",
                    color: "mustard"
                }
            ]
            );
        });
};