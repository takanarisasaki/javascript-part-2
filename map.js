function Tile(type) {
    this.type = type;
}

Tile.prototype.isWalkable = function isWalkable() {
    if (this.type === "grass" || this.type === "sand") {
        return true;
    }
    else {
        return false;
    }
}

var tileType = ["grass", "sand", "water"];

function Map(width, height) {
    this.width = width;
    this.height = height;
    
    var finalMap = [];



    for (var i = 0; i < height; i++) {
        var innerWidth = [];
        for (var j = 0; j < width; j++) {
            innerWidth.push(new Tile(tileType[Math.floor(Math.random() * 3)]));
        }
        finalMap.push(innerWidth);
    }
    console.log(finalMap);
    
}

var map1 = new Tile("grass");
console.log(map1);

console.log(Map(5,7));