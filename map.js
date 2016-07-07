function Tile(type) {
    var tile = {
        type: type
    }
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
    
    var storeTwoDimensional = [];
    var storeWidth = [];

    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            storeWidth.push(new Tile);
            
            tileType[Math.floor(Math.random() * 3)];
            
        }
        storeTwoDimensional.push(storeWidth);
    }
    
}

var map1 = new Tile("grass");
console.log(map1);