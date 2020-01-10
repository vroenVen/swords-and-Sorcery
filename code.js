var curentHero = null;
	hero = function(a,b,c,d){
		this.clas = a;
		this.hp = b;
		this.atk = c;
		this.armor = d;
	}
	fighter = new hero("Moratlon", 10, 5, 5)
	function ctFighter(){
	
		curentHero = fighter;
