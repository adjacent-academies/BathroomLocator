var express = require("express");
var router = express.Router();
const locations = [
  { name: "home", distance: 1, popularity: 5, comments: ["asd", "asd"] },
  { name: "work", distance: 2, popularity: 3, comments: ["asd"] },
  {
    name: "office",
    distance: 3,
    popularity: 9,
    comments: ["asd", "asd", "awdasd"]
  },
  { name: "park", distance: 4, popularity: 1, comments: [] },
  { name: "dummy", distance: 4, popularity: 1, comments: [] }
];
//let whichActive = [true, false, false];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("list", {
    title: "List View for the Bathroom Mapper",
    locations
  });
});


//router.get('/chicken', function(req, res, next) {
  //res.render('test', { layout: false });
//});


router.get("/order/:key", (req, res) => {
  let sortKey = req.params.key;

  if (sortKey === "comments") {
    locations.sort((locA, locB) => locA[sortKey].length - locB[sortKey].length);
    //whichActive = [false, true, false];
  } else if (sortKey === "popularity") {
    locations.sort((locA, locB) => locA[sortKey] - locB[sortKey]);
    console.log(locations);
    //whichActive = [false, false, true];
  } else {
    locations.sort((locA, locB) => locA[sortKey] - locB[sortKey]);
    console.log(locations);
  }
  //console.log(locations);
  res.render("list", {
    title: "List View for the Bathroom Mapper",
    locations
    //isActive: whichActive
  });
});

module.exports = router;
