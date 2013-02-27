{
	addImage:[
		["intro1", "images/intro1.png"]
	],
	setObject:[{
		object:"dialogues",
		property:"intro",
		value:{
			font:"small", skipkey:"a", esckey:"b", who:{narrator:{x:10, y:150}},
			scenes:[{
				slide:{image:"intro1", x:0, y:40},
				speed:1,
				who:"narrator",
				audio:"beep",
				talk:[
					"This is the intro.",
					"You can put any image and text here."
				]
			},
			{
				slide:{image:"intro1", x:0, y:40},
				speed:1,
				who:"narrator",
				audio:"beep",
				talk:[
					"A bad day, the violet squids that used",
					"to live underwater, jumped out asking",
					"to play with Jin. \"Let's play",
					"together, Jin\" they said!"
				]
			}
			]
		}
	}]
}
