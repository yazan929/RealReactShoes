// exports.shoes = ((req, res)=> {
// res.json(
//     {
//     shoes':["men", "women"]}
//     )}
// }

exports.shoes = (req, res) => {
    res.json({
        shoes: [
            "photos/Men1.jpg",
            "photos/Men2.jpg",
            "photos/Men3.jpg",
            "photos/Men4.jpg",
            "photos/Men5.jpg",
            "photos/Men6.jpg",
            "photos/women1.jpg",
            "photos/women2.jpg",
            "photos/women3.jpg",
            "photos/women4.jpg",
            "photos/women5.jpg",
            "photos/women6.jpg",
            "photos/Kids1.jpg",
            "photos/Kids2.jpg",
            "photos/Kids3.jpg",
            "photos/Kids4.jpg",
            "photos/Kids5.jpg",
            "photos/Kids6.jpg",
        ],
    });
};

// exports.names = (req,res) => {
//     res.json({"names":["shoe1", "shoe2" , "shoe3"],

// })
// };

// exports.shoes = (req,res) => {
//     res.json({"hello there"]})
// };

// exports.shoes = ((req, res)=> {
//     res.send('shoe and stuff')
// })
