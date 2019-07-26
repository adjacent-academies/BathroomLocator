var express = require("express");
var router = express.Router();
const mapJSON = require("../public/map.json");
const locations = mapJSON.features;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("list", {
    title: "List View for the Bathroom Mapper",
    locations
  });
});

router.post("/", function(req, res, next) {
  //calc distances
});

router.get("/order/:key", (req, res) => {
  let sortKey = req.params.key;

  if (sortKey === "comments") {
    locations.sort((locA, locB) => locA[sortKey].length - locB[sortKey].length);
  } else if (sortKey === "popularity") {
    locations.sort(
      (locA, locB) => locB.properties.rating - locA.properties.rating
    );
  } else {
    locations.sort((locA, locB) => locA[sortKey] - locB[sortKey]);
  }

  res.render("list", {
    title: "List View for the Bathroom Mapper",
    locations
  });
});

module.exports = router;

