function Player (type) {
	this.type = type;
	this.x = 0;
	this.y = 0;
	this.sprite = null;
}

function Tile(){
	this.full = 0;
	this.type = 0;
	this.contents = null;
}

function Map(numOfTilesX, numOfTilesY, tileWidth, tileHeight){
	this.numOfTilesX = numOfTilesX;
	this.numOfTilesY = numOfTilesY;
	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
	this.tiles = [];
	
	this.makeTiles = function(){
		for(var i = 0; i < this.numOfTilesX; i++){
			this.tiles.push([]);
			for(var z = 0; z < this.numOfTilesY; z++){
				var tile = new Tile();
				this.tiles[i].push(tile);
			}
		}
	}
	
	this.placePlayer = function(x, y, player) {
		var currentTileX = player.x / this.tileWidth;
		var currentTileY = player.y / this.tileHeight;
		
		this.tiles[currentTileX][currentTileY].full = 0;
		this.tiles[currentTileX][currentTileY].type = 0;
		this.tiles[currentTileX][currentTileY].contents = null;
	
		player.x = x;
		player.y = y;
		
		var newTileX = x / this.tileWidth;
		var newTileY = y / this.tileHeight;
	
		this.tiles[newTileX][newTileY].full = 1;
		this.tiles[newTileX][newTileY].type = 1;
		this.tiles[newTileX][newTileY].contents = player;
	}
	
	this.makeTiles();
}

