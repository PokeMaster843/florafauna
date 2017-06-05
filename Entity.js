var Entity = function(texture, x, y, speed, path, ctx) {
	
	this.texture = texture !== undefined ? texture : [];
	this.x = x !== undefined ? x : 0;
	this.y = y !== undefined ? y : 0;
	this.speed = speed !== undefined ? speed : 1;
	this.path = path !== undefined ? path : [];
	this.towards = 1;
	
	this.render = function(frame) {
		
		if(!this.ignorePath) {
			
			if(this.x < this.path[this.towards]) {
				
				if(this.towards === 1) {
					this.x += this.speed;
				}
				
				else {
					
					this.towards = 1;
					this.x += this.speed;
					
				}
				
			}
			
			if(this.x >= this.path[this.towards]) {
				
				if(this.towards === 0) {
					this.x -= this.speed;
				}
				
				else {
					
					this.towards = 0;
					this.x -= this.speed;
					
				}
				
			}
			
		}
		
		if(this.towards === 0) {
			
			ctx.setTransform(-1.5, 0, 0, 1.5, (this.x + this.texture[frame].width) * 1.5, this.y * 1.5);
			ctx.drawImage(this.texture[frame], 0, 0);
			ctx.setTransform(1.5, 0, 0, 1.5, 0, 0);
			
		}
		
		else {
			ctx.drawImage(this.texture[frame], this.x, this.y);
		}
		
	};
	
};