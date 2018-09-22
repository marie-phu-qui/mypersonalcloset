exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('closet').del()
        .then(function () {
            // Inserts seed entries
            return knex('closet').insert([
                spring = [
                    tops = [
                        {
                            img: "#000",
                            color: "orange"
                        },
                        {
                            img: "#111",
                            color: "green"
                        },
                        {
                            img: "#333",
                            color: "coral"
                        }
                    ],
                    bottoms = [
                        {
                            img: "a.jpg",
                            color: "orange"
                        },
                        {
                            img: "b.jpg",
                            color: "orange"
                        }
                    ]],
                summer = [
                    dresses = [
                        {
                            img: "o.png",
                            color: "orange"
                        },
                        {
                            img: "abc.jpg",
                            color: "green"
                        },
                        {
                            img: "",
                            color: "coral"
                        }
                    ],
                    shoes = [
                        {
                            img: "a.jpg",
                            color: "black"
                        },
                        {
                            img: "b.jpg",
                            color: "red"
                        }
                    ]],
                autumn = [
                    accessories = [
                        {
                            img: "pok.png",
                            color: "orange"
                        },
                        {
                            img: "treee.jpg",
                            color: "green"
                        },
                        {
                            img: "000",
                            color: "coral"
                        }
                    ],
                    shoes = [
                        {
                            img: "fern.jpg",
                            color: "black"
                        },
                        {
                            img: "bob.jpg",
                            color: "red"
                        }
                    ]],
                winter = [
                    tops = [
                        {
                            img: "green.png",
                            color: "green"
                        },
                        {
                            img: "cat.jpg",
                            color: "green"
                        },
                        {
                            img: "hhh.jpg",
                            color: "coral"
                        }
                    ],
                    jackets = [
                        {
                            img: "img.jpg",
                            color: "black"
                        },
                        {
                            img: "png.jpg",
                            color: "red"
                        }
                    ]
                ]
            ])
        });
};