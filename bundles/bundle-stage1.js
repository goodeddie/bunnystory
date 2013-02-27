{
	//addAudio:[
	//	["map-bgm",[audioserver+"tlol-village.mp3",audioserver+"tlol-village.ogg"],{channel:"bgmusic",loop:true}],	
	//],
	addImage:[	
		["tiles-image", "images/gfx-village.png"],
		["background", "images/stage1-background1.png"]
	],
	addTiles:[
		{id:"tiles", image:"tiles-image", tileh:30, tilew:30, tilerow:10, gapx:0, gapy:0},	
	],
	setObject:[
		{
			object:"dialogues",
			property:"intro",
			value:{ font:"small", skipkey:"a", esckey:null, who: noface,
				scenes:[
					{ speed:1, who:"noone", talk:["Help help!"]},
					{ speed:1, who:"noone", talk:["Someone come save me!"]}
				]
			}
		},
		{
			object:"tilemaps",
			property:"map",
			value:{
				title:"Kariko Village",
				tileset:"tiles",
				map:[
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,null,null,null,null,null,null,0,0,null,null,null,null,null,null,0],
					[0,null,null,0,0,0,null,null,null,null,0,0,0,null,null,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,0,null,null,null,null,null,null,null,null,null,null,null,null,0,0],
					[0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
					
				 ],
				 addObjects:function() {
					//gbox.playAudio("map-bgm");
					//maingame.addBlock(360,150,"house",0);
					//maingame.addNpc(390,220,[4],"villager",null,[4,5]);
					//maingame.addNpc(150,180,[6],"Ally",null,[6,7]);
				 },
				 mapActions:function() {
					//var pl=gbox.getObject("player","player");
					//var ontile=help.getTileInMap(pl.x+pl.colx+pl.colhw,pl.y+pl.coly+pl.colhh,tilemaps.map,tilemaps._defaultblock,"map");
					//if (ontile==1) maingame.gotoLevel({level:"floor1",x:580,y:590,label:"Floor 1 entrance"});
				 },
				/*tileIsSolid: function(obj, t) {
					return (t > 9)
				},*/
				tileIsSolidCeil: function(obj, t) {
					return (obj.group == "enemies" ? false : t == 0)
				},
				tileIsSolidFloor: function(obj, t) {
					return t == 0
				}
			}
		}
	]
}