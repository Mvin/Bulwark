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

function Map(numOfTilesX, numOfTilesY){
	this.numOfTilesX = numOfTilesX;
	this.numOfTilesY = numOfTilesY;
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
		this.tiles[player.x][player.y].full = 0;
		this.tiles[player.x][player.y].type = 0;
		this.tiles[player.x][player.y].contents = null;
	
		this.tiles[x][y].full = 1;
		this.tiles[x][y].type = 1;
		this.tiles[x][y].contents = player;
		player.x = x;
		player.y = y;
	}
	
	this.makeTiles();
}

