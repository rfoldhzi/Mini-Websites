const ArtCards = ['Soldier', 'Knight', 'Capital', 'Barbarian', 'Peasant', 'Horse Rider', 'King', 'Archer', 'Bandit', 'Prince', 'Rogue', 'Farmer', 'Catapult', 'Mine', 'Mill', 'Market', 'Guard', 'Defender', 'Raider', 'Hunter', 'Marksman', 'Cow', 'Pig', 'Bank', 'Lumber Yard', 'Warehouse', 'Messenger', 'Royal Guard', 'Guard Captain', 'Royal Knight', 'Angry Mob', 'Jester', 'Book', 'Well Prepared', 'Surprise Attack', 'Builder', 'Dragon', 'Rooster', 'Sentry', 'Expert Archer', 'Knight Officer', 'War Hero', 'Flaming Archer', 'Coward', 'Dark Prince', 'Dark Knight', 'Dark King', 'Moat', 'Log Trap', 'Sword', 'Anvil', 'Crown', 'Front Focused', 'Warning Horn', 'Brawler', 'Winter Soldier', 'Frost Knight', 'Ice Archer', 'Snowman', 'Ice King', 'Plague', 'Rest and Recovery', 'Standoff', 'Snowball', 'Flock', 'Doctor', 'Soldier Squadron', 'Double Cross', 'Two Steps Ahead', 'Bribe', 'Confusion', 'Fear', 'Testudo Formation', 'Warhorn', 'Black Death', 'Hourglass', 'Rally', 'Captain', 'Salmon', 'Giant', 'Regicide', 'Revolution!', 'Decisive Victory', 'Book of Nobility', 'Informant', 'Rumors', 'Snow Bandit', 'Noble Sacrifice', 'Fight Me', 'Disruption', 'Crow', 'Astrolabe', 'Heavy Rain', 'Cloak', 'Rebel', 'Poison', 'Rat', 'Nightmares', 'Dreams', 'Horse', 'Exhaustion', 'Unsanctioned Experiments', 'The Cavalry has arrived', 'Ice Dragon', 'Igloo', 'Preemptive Strike', 'Standard Viking', 'Axe Viking', 'Shield Viking', 'Viking Boat', 'Steep Mountain', 'Trade Market', 'Spike-O-Pult', 'Taskmaster', 'Viking King', 'Booming Economy', 'Heavy Rain', 'Intense Fog', 'Leather Pouch', 'The Fog Has Lifted!', 'Behind Schedule', 'Chaotic Misinformation', 'Take it to the Top', 'Old Memories', 'War Hog', 'Defend the City', 'Wise Dragon'];

var CardDB = {
    "Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["G"],"text":"-","vp":-1,"trait":"Military","type":"Unit","rare":"Common"},
    "Knight":{"cost":["A", "A"],"time":"2","hp":1,"icons":["D", "D"],"spd":3,"tct":"2","res":["A"],"text":"Shielding 1 (at the start of the engagement, place 1 shield on a friendly card)","vp":-1,"trait":"Military, Chivalry","type":"Unit","rare":"BLUE"},
    "Capital":{"cost":[""],"time":"","hp":20,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Fronts: Forward, Left, Right. Water Front: Rear","vp":5,"trait":"Main Base","type":"Base","rare":"Common"},
    "Barbarian":{"cost":["M"],"time":"1","hp":3,"icons":["Dr", "Drw"],"spd":3,"tct":"0","res":["W"],"text":"Presence (when this unit attacks, the opponent must defend with at least one defender)","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Peasant":{"cost":[""],"time":"1","hp":1,"icons":["Dw"],"spd":3,"tct":"0","res":["G"],"text":"-","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Horse Rider":{"cost":["A", "G"],"time":"2","hp":2,"icons":["D", "Bw", "Dr"],"spd":2,"tct":"1","res":["M"],"text":"-","vp":-1,"trait":"Military, Cavalry","type":"Unit","rare":"BLUE"},
    "King":{"cost":["S", "G", "G", "G"],"time":"3","hp":4,"icons":["D", "T", "Tw"],"spd":3,"tct":"4","res":["W", "G", "A"],"text":"During night, summon a peasant from the discard pile.","vp":2,"trait":"Royalty","type":"Unit","rare":"Rare"},
    "Archer":{"cost":["W"],"time":"1","hp":1,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["W", "M"],"text":"-","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"Common"},
    "Bandit":{"cost":["G"],"time":"1","hp":1,"icons":["B", "Dw"],"spd":3,"tct":"0","res":["G"],"text":"-","vp":-1,"trait":"Outlaw","type":"Unit","rare":"Common"},
    "Prince":{"cost":["A", "G", "G", "G"],"time":"2","hp":3,"icons":["D", "D", "Dw", "Dw"],"spd":2,"tct":"4","res":["G", "S"],"text":"-","vp":1,"trait":"Royalty","type":"Unit","rare":"Rare"},
    "Rogue":{"cost":["G", "W"],"time":"1","hp":2,"icons":["D", "B", ""],"spd":3,"tct":"-1","res":["W"],"text":"-","vp":-1,"trait":"Outlaw","type":"Unit","rare":"Common"},
    "Farmer":{"cost":[""],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Guardian Animal","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Catapult":{"cost":["3W", "A", "A"],"time":"4","hp":3,"icons":["B", "Bw", "Bw", "Bw"],"spd":4,"tct":"0","res":["W"],"text":"-","vp":-1,"trait":"Vehicle, Ranged","type":"Unit","rare":"Rare"},
    "Mine":{"cost":["W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Resource: Exhaust and spend 1 time to gain 1 alloy.","vp":1,"trait":"Generation, Structure","type":"Building","rare":"Common"},
    "Mill":{"cost":["W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Resource: Exhaust and spend 1 time to gain 1 wood.","vp":1,"trait":"Generation, Structure","type":"Building","rare":"Common"},
    "Market":{"cost":["W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Resource: Exhaust and spend 1 time to gain 1 gold.","vp":1,"trait":"Generation, Structure","type":"Building","rare":"Common"},
    "Guard":{"cost":["A"],"time":"1","hp":1,"icons":["Dbw", "Dbw"],"spd":3,"tct":"1","res":["W"],"text":"Guardian 1 (When a friendly unit on the same front takes damage, you exhaust this unit to block 1 damage and place it on this unit.)","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Defender":{"cost":["W", "A"],"time":"2","hp":2,"icons":["Db", "Db"],"spd":3,"tct":"1","res":["A"],"text":"Wall","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Raider":{"cost":["W"],"time":"1","hp":1,"icons":["B", "Bw"],"spd":3,"tct":"0","res":["G"],"text":"Loot 1","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Hunter":{"cost":["G", "W"],"time":"1","hp":1,"icons":["Drw", "Drw"],"spd":3,"tct":"2","res":["M", "W"],"text":"Resource: Exhaust and spend 1 time to gain 1 meat.","vp":-1,"trait":"Civilian, Ranged","type":"Unit","rare":"BLUE"},
    "Marksman":{"cost":["W", "W"],"time":"2","hp":1,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["G"],"text":"Targeted Strike (while attacking, this unit may strike against enemy units that are not defending)","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"BLUE"},
    "Cow":{"cost":["G"],"time":"1","hp":3,"icons":[""],"spd":4,"tct":"0","res":["G"],"text":"Resource: Sacrifice for 2 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Pig":{"cost":[""],"time":"2","hp":2,"icons":[""],"spd":3,"tct":"0","res":["M"],"text":"Resource: Sacrifice for 1 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Bank":{"cost":["A"],"time":"2","hp":6,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Store 5 Gold","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Lumber Yard":{"cost":["A"],"time":"2","hp":6,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Store 5 Wood","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Warehouse":{"cost":["A"],"time":"2","hp":6,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Store 5 Alloy","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Messenger":{"cost":["G", "G"],"time":"1","hp":1,"icons":["D"],"spd":2,"tct":"+1","res":["A", "S"],"text":"After this unit survives a battle, you may look at the top card of your deck","vp":-1,"trait":"Civilian, Cavalry","type":"Unit","rare":"BLUE"},
    "Royal Guard":{"cost":["A", "G"],"time":"2","hp":3,"icons":["D", "D"],"spd":3,"tct":"2","res":["W"],"text":"Spot Royalty. Guardian 2. Royalty not engaged cannot be damaged","vp":-1,"trait":"Court, Military","type":"Unit","rare":"Rare"},
    "Guard Captain":{"cost":["A", "A"],"time":"2","hp":2,"icons":["Dbw", "Dbw"],"spd":3,"tct":"2","res":["G"],"text":"Guardian 2. While this unit is engaged, other friendly Guardians may treat one damage icon as if it were fully black when they strike.","vp":-1,"trait":"Military","type":"Unit","rare":"Rare"},
    "Royal Knight":{"cost":["A", "A"],"time":"1","hp":2,"icons":["D", "D"],"spd":3,"tct":"3","res":["A", "S"],"text":"Spot Royalty. Shielding 2","vp":-1,"trait":"Court, Military","type":"Unit","rare":"Rare"},
    "Angry Mob":{"cost":["W"],"time":"3","hp":3,"icons":["Dr", "B", "B"],"spd":4,"tct":"0","res":[""],"text":"At the end of the day, deal 2 damage to this unit.","vp":-1,"trait":"Civilian, Burning","type":"Unit","rare":"BLUE"},
    "Jester":{"cost":["G"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"1","res":[""],"text":"Presence. Enemies with 0 or less tactics cannot target him.","vp":-1,"trait":"Civilian, Court","type":"Unit","rare":"BLUE"},
    "Royal Ceremony":{"cost":["S"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"For each royalty you have, draw 1 card.","vp":-1,"trait":"Royalty","type":"Event","rare":"BLUE"},
    "Book":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade unit. Attached unit gains +1 tactics","vp":-1,"trait":"Book","type":"Upgrade","rare":"BLUE"},
    "Mercenary":{"cost":["G"],"time":"1","hp":2,"icons":["D", "B"],"spd":3,"tct":"2","res":["M"],"text":"As an action, any player may pay 2 Gold to put this unit under their control","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Lighthouse":{"cost":["W", "W", "A"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Gain +1 Tactics while defending on this front,  or +2 instead if you have 3 or less time tokens","vp":1,"trait":"Water, Structure","type":"Building","rare":"BLUE"},
    "Royal Herald":{"cost":["A"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"1","res":["S"],"text":"Decrease the cost of Royal cards by 1 Gold","vp":-1,"trait":"Musician, Court","type":"Unit","rare":"Rare"},
    "Well Prepared":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when determining advantage while you are defending. You automatically gain the advantage.","vp":-1,"trait":"Strategy","type":"Event","rare":"Common"},
    "Surprise Attack":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when determining advantage while you are attacking. You automatically gain the advantage.","vp":-1,"trait":"Strategy","type":"Event","rare":"Common"},
    "Builder":{"cost":["A", "A"],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Exhaust while playing a building to decrease the time cost by 1","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Dragon":{"cost":["3G", "3M"],"time":"3","hp":4,"icons":["D", "Dr", "Dr", "Br", "Br"],"spd":2,"tct":"2","res":["G"],"text":"Flying. Loot 2. Presence. While attacking, this unit gains 2 extra blast from the no defenders bonus, unless your opponent spends one time. ","vp":2,"trait":"Beast, Ranged, Burning","type":"Unit","rare":"Rare"},
    "Rooster":{"cost":["G"],"time":"1","hp":1,"icons":[""],"spd":2,"tct":"0","res":["M"],"text":"Gain +1 Time at start of day. Resource: Sacrifice for 1 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"BLUE"},
    "Covering Fire":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"During an engagement, exhaust any number of ranged units to give 1 shield each to an equal number of units.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Retreat":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play when it's your turn to strike. All friendly units on this front flee","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Adaptive Strategy":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play at the start of a battle. Enemy terrain cards have no effect for the duration of this battle","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Dense Forest":{"cost":["W", "W", "W"],"time":"3","hp":5,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Vehicles cannot battle on this front. Ranged units cannot use white icons. Sacrifice and spend 1 time on your turn for 2 Wood","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Light Forest":{"cost":["W", "W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Vehicles cannot use white icons. Sacrifice and spend 1 time on your turn for 1 Wood","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Nobleman":{"cost":["S", "G"],"time":"2","hp":2,"icons":["D"],"spd":3,"tct":"3","res":["S"],"text":"Before a friendly unit does damage, you may spot a Royalty and exhaust this card. If you do, they deal one extra damage.","vp":-1,"trait":"Court","type":"Unit","rare":"Rare"},
    "Sentry":{"cost":["A", "W"],"time":"2","hp":1,"icons":["Db"],"spd":3,"tct":"1","res":["A"],"text":"While this unit is defending from an attack, you may spend 2 time. If you do, you gain the advantage.","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Expert Archer":{"cost":["W", "W"],"time":"2","hp":2,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["W", "M"],"text":"When this unit strikes, you may spend one time to deal one extra damage to the target unit.","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"Rare"},
    "Battering Ram":{"cost":["4W", "A"],"time":"3","hp":3,"icons":["Br", "Br", "Br"],"spd":4,"tct":"0","res":["W"],"text":"On the defending front, ignore wall keywords.","vp":-1,"trait":"Vehicle","type":"Unit","rare":"BLUE"},
    "Tax Collector":{"cost":["G", "G"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"0","res":["A", "C"],"text":"Exhaust this unit and any number of civilians to gain gold equal to the number of civilians just exhausted,","vp":-1,"trait":"Court","type":"Unit","rare":"Rare"},
    "Royal Advisor":{"cost":["S"],"time":"3","hp":2,"icons":[""],"spd":3,"tct":"2","res":["S", "G"],"text":"Exhaust this card, spend a time, and spot a number of Royalty to draw that many cards","vp":-1,"trait":"Court","type":"Unit","rare":"Rare"},
    "Librarian":{"cost":["S"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"1","res":["S"],"text":"Exhaust this card, spot a library, and spend a time to gain one Wisdom.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Tower":{"cost":["W", "W", "A"],"time":"3","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W", "A"],"text":"Shielding 1. Prison 1 When you start an engagement defending on this front, friendly ranged units gain 1 shield.","vp":-1,"trait":"Defensive, Structure","type":"Building","rare":"BLUE"},
    "Fortified Position":{"cost":["W", "A"],"time":"2","hp":2,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Shielding 2","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Traveling Merchant":{"cost":["G"],"time":"2","hp":1,"icons":[""],"spd":2,"tct":"0","res":["G"],"text":"Spend one Gold, Alloy, or Wood to gain one Gold, Alloy, or Wood. At the end of the day, defeat this unit.","vp":-1,"trait":"Civilian","type":"Unit","rare":"Rare"},
    "Merchant":{"cost":["G", "G"],"time":"2","hp":2,"icons":["D"],"spd":3,"tct":"0","res":["G"],"text":"E + 1 Gold = 1 Alloy or 1 Wood","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Bounty Hunter":{"cost":["G", "G"],"time":"2","hp":2,"icons":["D", "Dr"],"spd":3,"tct":"1","res":["G"],"text":"Store 1 Gold. When this unit defeats an enemy, gain one gold.","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Fence":{"cost":["W"],"time":"2","hp":2,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Wall","vp":-1,"trait":"Defensive","type":"Building","rare":"Common"},
    "Knight Commander":{"cost":["S", "A", "A", "A"],"time":"3","hp":4,"icons":["D", "Tw"],"spd":3,"tct":"5","res":["S"],"text":"This unit can only fight with Chivalry","vp":1,"trait":"Military, Chivalry","type":"Unit","rare":"Rare"},
    "Knight Officer":{"cost":["A", "A", "A"],"time":"2","hp":3,"icons":["D", "D"],"spd":3,"tct":"3","res":["A"],"text":"Friendly Chivalry gain Guardian 1.","vp":-1,"trait":"Military, Chivalry","type":"Unit","rare":"BLUE"},
    "Coat of Arms":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade a Chivalry unit. Attached unit gains shielding 1 and +1 tactics","vp":-1,"trait":"Chivalry","type":"Upgrade","rare":"BLUE"},
    "Jouster":{"cost":["A", "G", "G"],"time":"2","hp":2,"icons":["D", "Dw", "Dr"],"spd":1,"tct":"3","res":["A", "M"],"text":"An enemy [Cavalry] must defend against this unit alone if this unit attacks alone, if able.","vp":1,"trait":"Cavalry,  Chivalry","type":"Unit","rare":"Rare"},
    "Scout":{"cost":["W", "W", "G"],"time":"2","hp":1,"icons":["D"],"spd":2,"tct":"1","res":["W"],"text":"At the start of a battle when this unit is an attacker, the enemy must either choose to place one unit on defense or place no units on defense for the remainder of the battle","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "War Hero":{"cost":["G", "W", "A"],"time":"2","hp":3,"icons":["Dr", "Br"],"spd":3,"tct":"1","res":["G"],"text":"After surviving a battle, this unit heals to full health. You may then spend one gold, one alloy, and one time to place one counter on this unit. For each counter, this unit gains a white unit damage icon and +1 tactics","vp":1,"trait":"Military, Cavalry","type":"Unit","rare":"Rare"},
    "Transport Boat":{"cost":["W", "W", "A"],"time":"4","hp":2,"icons":[""],"spd":3,"tct":"1","res":["W"],"text":"You may bring two land units to a front this unit is on. If this unit is defeated, those units are defeated as well.","vp":-1,"trait":"Water, Boat","type":"Unit","rare":"BLUE"},
    "Stationary Cannon":{"cost":["A", "A"],"time":"3","hp":2,"icons":["D", "D", "Dw", "B"],"spd":-1,"tct":"","res":["A", "W"],"text":"","vp":-1,"trait":"Defensive, Ranged, Aquatic","type":"Building","rare":"BLUE"},
    "Flaming Archer":{"cost":["W", "W"],"time":"3","hp":1,"icons":["Dr", "Drw"],"spd":3,"tct":"1","res":["W"],"text":"While attacking, this unit gains 1 extra blast from the no defenders bonus, unless your opponent spends 1 time. ","vp":-1,"trait":"Military, Ranged, Burning","type":"Unit","rare":"Rare"},
    "Coward":{"cost":["A"],"time":"0","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"0","res":["A", "G"],"text":"If this unit is the only friendly unit in the engagement, it flees.","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Cannon Boat":{"cost":["W", "W"],"time":"3","hp":2,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["G", "F"],"text":"-","vp":-1,"trait":"Water, Boat","type":"Unit","rare":"BLUE"},
    "Dock":{"cost":["W", "W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"1T + E = 1 Fish or heal one health from a boat","vp":1,"trait":"Water, Generation","type":"Building","rare":"BLUE"},
    "Wall":{"cost":["W", "A"],"time":"3","hp":4,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Wall","vp":-1,"trait":"Defensive","type":"Building","rare":"Common"},
    "NightWatch":{"cost":["W"],"time":"1","hp":3,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"While defending on this front, if you have 3 or less time, you gain +2 tactics","vp":-1,"trait":"Defensive","type":"Building","rare":"BLUE"},
    "Trading Port":{"cost":["F", "G"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Exhaust and spend one time and one resource to gain one alloy, gold, or wood","vp":1,"trait":"Water","type":"Building","rare":"BLUE"},
    "Lumberjack":{"cost":["A"],"time":"1","hp":1,"icons":["Dr"],"spd":3,"tct":"0","res":["W"],"text":"1T + E = 1 Wood","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Dark Prince":{"cost":["G", "G", "G", "A"],"time":"2","hp":3,"icons":["D", "D", "Dw", "Dw"],"spd":2,"tct":"3","res":["G", "C"],"text":"Arrogant (this unit must be your chosen leader)","vp":1,"trait":"Dark, Royalty","type":"Unit","rare":"Rare"},
    "Dark Knight":{"cost":["C", "A", "A", "A"],"time":"2","hp":3,"icons":["D", "D", "Bw", "Bw"],"spd":2,"tct":"3","res":["A", "C"],"text":"While fighting alone, this unit automatically has the advantage.","vp":1,"trait":"Dark, Chivalry","type":"Unit","rare":"Rare"},
    "Dark King":{"cost":["C", "G", "G", "G"],"time":"3","hp":4,"icons":["D", "T", "Tw"],"spd":3,"tct":"4","res":["G", "C"],"text":"When determining advantage, you may sacrifice a friendly participating unit on this front to gain the advantage.","vp":2,"trait":"Dark, Royalty","type":"Unit","rare":"Rare"},
    "Moat":{"cost":["G"],"time":"4","hp":8,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Units without ranged cannot use white icons on this front.","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Library":{"cost":["S", "W", "W"],"time":"3","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W", "S"],"text":"Action: Exhaust and spend 1 time to draw a card","vp":1,"trait":"Generation, Structure","type":"Building","rare":"Common"},
    "Recruit":{"cost":["W"],"time":"0","hp":1,"icons":["D"],"spd":3,"tct":"1","res":["A"],"text":"This unit starts exhausted.","vp":-1,"trait":"Military","type":"Unit","rare":"Common"},
    "Water Wheel":{"cost":["W", "W"],"time":"3","hp":4,"icons":[""],"spd":-1,"tct":"","res":["F", "W"],"text":"While using an exhaust ability on a building, you may spend one additional time. If you do, don't exhaust that card, but exhaust this card in stead.","vp":1,"trait":"Water","type":"Building","rare":"Rare"},
    "Training Grounds":{"cost":["W", "W"],"time":"2","hp":5,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Exhaust to decrease the time cost of a Military Unit by 1","vp":1,"trait":"Military","type":"Building","rare":"BLUE"},
    "Unstable Infrastructure":{"cost":["W"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade a Structure. After a unit strikes attached building, destroy both that unit and this building","vp":-1,"trait":"Trap","type":"Upgrade","rare":"BLUE"},
    "Dark Alliance":{"cost":["C"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Action: Spot an outlaw and a dark unit to play an outlaw or dark unit from your discard pile, ignoring the gold and corruption cost.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Log Trap":{"cost":["W", "W"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Instead of striking, you may sacrifice this card to deal 2 damage each to up to 3 attackers on the front.","vp":-1,"trait":"Trap","type":"Building","rare":"BLUE"},
    "Throne Room":{"cost":["G", "G", "A", "S"],"time":"4","hp":5,"icons":[""],"spd":-1,"tct":"","res":["S", "G"],"text":"Spot Royalty.  Decrease the time cost of court units by 2.","vp":1,"trait":"Structure","type":"Building","rare":"Rare"},
    "Knife":{"cost":["A"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade Outlaw. Attached unit gains a black unit damage icon.","vp":-1,"trait":"Weapon","type":"Upgrade","rare":"BLUE"},
    "Angry Farmer":{"cost":[""],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Action: Sacrifice this unit and another civilian to summon an angry mob.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Dark Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["C"],"text":"If this unit survives an attack without the undefended bonus, destroy it.","vp":-1,"trait":"Military, Dark","type":"Unit","rare":"BLUE"},
    "Dismount":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M", "A", "G"],"text":"Action: Sacrifice a Cavalry to summon a horse, and a soldier if that unit was military","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Blacksmith":{"cost":["A", "G"],"time":"2","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"0","res":["A"],"text":"Resource: Exhaust this card, spend 1 time, and spend 1 alloy to gain either 2 alloy or 1 gold.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Sword":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Military. Attached unit gains piercing and a black unit damage icon.","vp":-1,"trait":"Weapon","type":"Upgrade","rare":"BLUE"},
    "Heater Shield":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Military. Attached unit gains shielding 1.","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Anvil":{"cost":["A", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade structure. Resource: Exhaust and spend 1 alloy to gain 2 alloy","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Crown":{"cost":["G", "G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Royalty. While attached card is engaged, other friendly units in the engagement gain guardian royalty. Attached Card has +1 VP","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Front Focused":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when an opponent begins an attack. The opponent can only attack on a single front.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Raging Flames":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when you gain the undefended bonus. Spot a participating burning unit to deal 2 extra blast, unless the opponent spends 1 time","vp":-1,"trait":"Burning, Attack","type":"Event","rare":"BLUE"},
    "Warning Horn":{"cost":["W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Structure. When this front is attacked, you may exhaust this card to ready a defensive card or a unit with a blue damage icon.","vp":-1,"trait":"Defensive","type":"Upgrade","rare":"BLUE"},
    "Brawler":{"cost":["W"],"time":"0","hp":2,"icons":["D", "D"],"spd":3,"tct":"0","res":["A"],"text":"If ready, this unit must be declared as an attacker or defender, if possible.","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Winter Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":4,"tct":"1","res":["I"],"text":"After this unit deals damage to a enemy card with Burning, exhaust that card.","vp":-1,"trait":"Winter, Military","type":"Unit","rare":"BLUE"},
    "Frost Knight":{"cost":["A", "A", "I"],"time":"2","hp":2,"icons":["D", "D", "Tbw"],"spd":4,"tct":"3","res":["I", "A"],"text":"Shielding 1","vp":-1,"trait":"Winter, Chivalry","type":"Unit","rare":"Rare"},
    "Ice Archer":{"cost":["W", "I"],"time":"2","hp":1,"icons":["D", "Tbw"],"spd":4,"tct":"0","res":["I", "W"],"text":"-","vp":-1,"trait":"Winter, Military, Ranged","type":"Unit","rare":"BLUE"},
    "Snowman":{"cost":[""],"time":"1","hp":1,"icons":["Tbw"],"spd":4,"tct":"0","res":[""],"text":"Resource: Sacrifice this unit for 1 ice.","vp":-1,"trait":"Winter","type":"Unit","rare":"BLUE"},
    "Ice King":{"cost":["I", "G", "G", "G"],"time":"3","hp":4,"icons":["Tb", "Tw"],"spd":4,"tct":"5","res":["I", "S", "G"],"text":"This unit cannot be exhausted by enemies.","vp":2,"trait":"Winter, Royalty","type":"Unit","rare":"Rare"},
    "Plague":{"cost":["C", "C"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on an opponents play area. During night, for each damaged unit that opponent controls, they must deal 1 damage to any of their units. Discard this card if that ever opponent controls no units with damage on them.","vp":-1,"trait":"Disease","type":"Detriment","rare":"Rare"},
    "Rest and Recovery":{"cost":[""],"time":"X","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"X is equal to your remaining time. For every 2 time spent, you may either heal 1 damage from any unit or discard a detriment.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Standoff":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Action: Pick an opponent. You choose a number between 0 and 3 (inclusive). Both you and your opponent lose this much time. Then the opponent does the same, but they choose the number.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Snowball":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["I"],"text":"Upgrade winter unit. Attached unit gains ranged and a black unit damage icon.","vp":-1,"trait":"Weapon, Winter","type":"Upgrade","rare":"BLUE"},
    "Flock":{"cost":["F", "F"],"time":"4","hp":3,"icons":[""],"spd":4,"tct":"-1","res":["F"],"text":"This unit was a white unit damage icon for each health it has remaining.","vp":-1,"trait":"Animal, Flying","type":"Unit","rare":"BLUE"},
    "Doctor":{"cost":["G", "A"],"time":"3","hp":1,"icons":[""],"spd":3,"tct":"1","res":["S"],"text":"During night, heal 1 damage from a friendly unit.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Soldier Squadron":{"cost":["A", "A", "A"],"time":"2","hp":3,"icons":["D", "D", "D"],"spd":3,"tct":"1","res":["G"],"text":"-","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Double Cross":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play when an opponent plays an event. Cancel its effects. You may play the canceled card as if you had played it, paying its costs","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Two Steps Ahead":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play when an opponent plays an event. Cancel its effects","vp":-1,"trait":"Strategy, Cancel","type":"Event","rare":"BLUE"},
    "Bribe":{"cost":["G", "G", "G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: Choose an enemy unit with gold in their cost, that isn't Chivalry, and has 2 or less tactics. Take control of that unit.","vp":-1,"trait":"Dark, Cancel","type":"Event","rare":"BLUE"},
    "Confusion":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on an enemy unit. Treat each of that units black damage icons as white, and each of its white icons as black.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Fear":{"cost":["W", "A", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on an opponent's play area. After that opponent plays a unit, you may discard this card to return that unit to their hand.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Testudo Formation":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play during an engagement. For each partipating shielding unit, you may place 1 shield on any unit.","vp":-1,"trait":"Strategy","type":"Event","rare":"Rare"},
    "Warhorn":{"cost":["W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade a unit. Attached unit gains Presence","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Black Death":{"cost":["4C", "W"],"time":"5","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on an opponent's play area. Deal 1 damage to all of that opponent's non-VP units during night. Discard this card if that opponent ever controls no non-VP units","vp":-1,"trait":"Disease","type":"Detriment","rare":"Rare"},
    "Hourglass":{"cost":["W"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Unit. Action: if you have more time than an opponent, you may exhaust this card to force that opponent to lose 1 time","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Rally":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Summon 3 common Civilians.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Captain":{"cost":["A", "A", "G", "G"],"time":"2","hp":2,"icons":["D", "Bw"],"spd":3,"tct":"2","res":["A", "G"],"text":"After this unit is played, summon up to 3 soldiers.","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Salmon":{"cost":[""],"time":"1","hp":1,"icons":[""],"spd":3,"tct":"0","res":["G"],"text":"Resource: Sacrifice this unit for 1 fish, or 2 instead if you spot another water unit","vp":-1,"trait":"Water, Animal","type":"Unit","rare":"BLUE"},
    "Giant":{"cost":["M", "M", "M", "M"],"time":"3","hp":5,"icons":["D", "D", "B", "B"],"spd":4,"tct":"0","res":["W"],"text":"-","vp":1,"trait":"-","type":"Unit","rare":"BLUE"},
    "Regicide":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play after an opponent's royalty unit is defeated. Gain 1 VP","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Revolution!":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Action: Sacrifice a royalty unit to ready all friendly civilians and heal all damage from them","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Decisive Victory":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play after you destroy a unit with VP. Destroy a target upgrade.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Book of Nobility":{"cost":["W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade chivalry or military. While this upgrade is on a military they are treated as a chivalry. If this upgrade is on a chivalry it gains shielding 2 and can only fight with other chivalry.","vp":-1,"trait":"Book","type":"Upgrade","rare":"BLUE"},
    "Informant":{"cost":["G"],"time":"2","hp":1,"icons":["D"],"spd":3,"tct":"1","res":["W"],"text":"When this card enters play, you may look at an opponent's hand.","vp":-1,"trait":"Dark","type":"Unit","rare":"BLUE"},
    "Rumors":{"cost":["G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: An opponent chooses 1 card in their hand, and shows the rest to you. Of the shown cards, choose and discard 1.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Snow Bandit":{"cost":["G"],"time":"2","hp":1,"icons":["B", "Bw"],"spd":4,"tct":"0","res":["G", "I"],"text":"After attacking or defending, if you had the no defenders bonus and this unit was alive, you may exhaust an enemy building.","vp":-1,"trait":"Winter, Outlaw","type":"Unit","rare":"BLUE"},
    "Noble Sacrifice":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S", "F", "M"],"text":"Play when it's your turn to strike. Sacrifice a participating unit with at least 2 tactics to have any number of friendly units on the flee from the battle.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Fight Me":{"cost":["G"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Choose up to three of your own units. An opponent then chooses that number of their own units if able. Start a battle with those units ignoring speed cost and not attacking a front.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Disruption":{"cost":["W", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play on an opponents play area. Each card the opponent plays cost 1 additional time. Discard this card at the end of the day.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Crow":{"cost":[""],"time":"1","hp":1,"icons":["Dw"],"spd":2,"tct":"0","res":[""],"text":"Flying. After this unit strikes, it flees","vp":-1,"trait":"Animal, Dark","type":"Unit","rare":"BLUE"},
    "Astrolabe":{"cost":["A"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade unit. When you draw a card from a card effect, you may draw from the bottom of the deck instead","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"Rare"},
    "Heavy Rain":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no unit can use white damage icons. Discard this card during night","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Cloak":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade outlaw. If you have 3 or less time, attached unit cannot be targeted by enemy card effects","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Rebel":{"cost":["A", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Action: Choose an enemy unit. Until the end of the day, you take control of this unit","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Poison":{"cost":["W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play on a non-VP enemy unit. At the end of each day, this unit takes 1 damage.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Rat":{"cost":[""],"time":"1","hp":1,"icons":["D"],"spd":3,"tct":"0","res":["C"],"text":"After this unit strikes, you may sacrifice it to play a detriment from your discard pile, ignoring the time cost.","vp":-1,"trait":"Animal, Dark","type":"Unit","rare":"BLUE"},
    "Nightmares":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on enemy unit. During night, before the owner of attached card draws up to their hand size, they must choose and discard 1 card.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Dreams":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade character. During night, before you discard cards, you may draw 1 card.","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Horse":{"cost":["M"],"time":"1","hp":1,"icons":[""],"spd":2,"tct":"0","res":["G"],"text":"Action: Attach this card to a character. Attached card gains Cavalry and reduces its travel time by 1.","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Exhaustion":{"cost":["W", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on a ready enemy unit. This unit does not ready at night unless its controller starts the day with 2 less time.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Unsanctioned Experiments":{"cost":["C"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Sacrifice a civilian you control to play a card from your discard pile, paying its cost.","vp":-1,"trait":"Dark","type":"Event","rare":"BLUE"},
    "The Cavalry has arrived":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Play when it's your turn to strike. Instead of striking, you may add any number of friendly Cavalry to this front to participate in the engagement.","vp":-1,"trait":"Strategy","type":"Event","rare":"Rare"},
    "George, the Soldier of Legend":{"cost":["A", "G"],"time":"2","hp":2,"icons":["D", "Dw", "B"],"spd":3,"tct":"2","res":["A"],"text":"","vp":-1,"trait":"Military","type":"Unit","rare":"Unique"},
    "James, Archer":{"cost":["W"],"time":"1","hp":1,"icons":["D", "Dw"],"spd":3,"tct":"0","res":["M"],"text":"After you play this card, you may deal 1 damage to a unit","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"Unique"},
    "Larry, Bandit":{"cost":["G"],"time":"1","hp":1,"icons":["B", "Dw"],"spd":3,"tct":"0","res":["G"],"text":"-","vp":-1,"trait":"Outlaw","type":"Unit","rare":"Unique"},
    "Ice Dragon":{"cost":["3M", "3I"],"time":"3","hp":4,"icons":["B", "B", "Tb", "Tbw"],"spd":3,"tct":"3","res":["I", "G"],"text":"Flying. After this unit strikes as an attacker, exhaust all buildings on this front","vp":2,"trait":"Winter, Beast, Ranged","type":"Unit","rare":"Rare"},
    "Igloo":{"cost":["I"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"After you play a winter card, you may exhaust this card to draw 1 card","vp":1,"trait":"Winter, Structure","type":"Building","rare":"BLUE"},
    "Preemptive Strike":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play when an opponent begins an attack, before declaring attackers. You attack the opponent first, and then they may choose to attack you.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Standard Viking":{"cost":["W"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["G"],"text":"-","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Axe Viking":{"cost":["W", "A", "A"],"time":"1","hp":2,"icons":["D", "B"],"spd":3,"tct":"1","res":["G", "W"],"text":"Shield Breaker (while attacking a unit with 1 or more shield tokens, you may also exhaust them as part of your attack)","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Shield Viking":{"cost":["A", "A"],"time":"2","hp":1,"icons":["Dbw"],"spd":4,"tct":"0","res":["A"],"text":"Shielding 1, Guardian 1","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Viking Boat":{"cost":["W", "W", "F"],"time":"3","hp":3,"icons":["D", "Drw", "Brw"],"spd":4,"tct":"2","res":["W"],"text":"Rotary Cannon (This unit may deal its blast damage to a different front than the one it is fighting on, even if it is defending), Mod 1 (This unit can only have 1 Modification card attatched to it)","vp":-1,"trait":"Water, Viking, Boat","type":"Unit","rare":"BLUE"},
    "Steep Mountain":{"cost":["A", "A"],"time":"3","hp":7,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"If Vehicle Units attack this front, the opponent must spend 2 time per vehicle attacking. If the opponent cannot spend the time, the vehicles must attack a different front.","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Trade Market":{"cost":["W"],"time":"3","hp":5,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Resource: Exhaust and spend 1 alloy or wood to gain 2 gold.","vp":1,"trait":"Generation, Structure","type":"Building","rare":"Common"},
    "Spike-O-Pult":{"cost":["W", "W", "A", "A"],"time":"3","hp":2,"icons":["D", "B", "B", "Bw"],"spd":5,"tct":"1","res":["A"],"text":"Armored (enemies must use blast to damage this unit)","vp":-1,"trait":"Vehicle, Ranged","type":"Unit","rare":"Rare"},
    "Taskmaster":{"cost":["W", "W", "M"],"time":"2","hp":1,"icons":["Dw", "Bw"],"spd":3,"tct":"1","res":["M"],"text":"When you play a building, you may exhaust this card and other friendly civilian cards to decrease the time to play the building by 1 for each other civilian exhausted.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Viking King":{"cost":["F", "G", "G", "G"],"time":"4","hp":4,"icons":["D", "Dw", "Tw", "Tw"],"spd":3,"tct":"4","res":["G", "F"],"text":"If you do not have advantage while attacking, all Viking units may use one of their white attack icons during the attack.","vp":2,"trait":"Viking, Royalty","type":"Unit","rare":"Rare"},
    "Booming Economy":{"cost":["S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade a Generation Building. After attached building produces 1 or more gold, ready it.","vp":-1,"trait":"Modification","type":"Upgrade","rare":"BLUE"},
    "Heavy Rain":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no unit can use white damage icons. Discard this card during night","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Intense Fog":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no ranged unit can use white damage icons and every Unit has -1 Tactics (to a minimum of 0). Discard this card during night.","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Leather Pouch":{"cost":["M"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Upgrade Standard Viking. Store 1 Wood. This Unit gains Looting 1.","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"Common"},
    "The Fog Has Lifted!":{"cost":["S", "S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Play Area. Each player's hand size is increased to 9 for the rest of the game.","vp":-1,"trait":"Strategy, Permanent","type":"Upgrade","rare":"Rare"},
    "Behind Schedule":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when an opponent spends time. The time used is doubled. If this would cause the opponent's time to drop below 0, their time is set to 0 and the action they tried to complete is left incomplete.","vp":-1,"trait":"Strategy","type":"Event","rare":"Unique"},
    "Chaotic Misinformation":{"cost":["C"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: Discard the top 2 cards of your opponent's deck, then shuffle your deck and your opponent's deck.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Take it to the Top":{"cost":["G"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when determining advantage. If you have 2 or more royalty cards in play, all of your units gain +2 Tactics until the end of the attack.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Old Memories":{"cost":["G", "W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade enemy character. After this unit strikes, deal 1 damage to it","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "War Hog":{"cost":["A"],"time":"3","hp":2,"icons":["B"],"spd":3,"tct":"0","res":["M"],"text":"-","vp":-1,"trait":"Animal, Military","type":"Unit","rare":"BLUE"},
    "Defend the City":{"cost":["A", "W"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play after you declare defenders. Each defending unit gains Wall until the end of the battle","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Wise Dragon":{"cost":["3M", "3S"],"time":"5","hp":3,"icons":["T", "Tw"],"spd":2,"tct":"8","res":["S"],"text":"Flying. After you play a unit or building, you may exhaust that card to draw a card","vp":2,"trait":"Beast, Ranged","type":"Unit","rare":"Rare"}
};
var matchCards = [];
const ress = {
	"Wood": "W",
	"Alloy": "A",
	"Gold": "G",
	"Wisdom": "S",
	"Corruption": "C",
	"Meat": "M",
	"Fish": "F",
	"Ice": "I"
};
const cardTypes = ["Unit","Building","Event","Upgrade","Detriment","Base"];

function changeDefOver(e) {
	const source = CardDB[e.target.name]["art"];
	document.getElementById("cardImage").setAttribute('src', "images/" + e.target.name + ".png");
}

function changeResourceNumber() {
	for (var c in CardDB) {
		for (var i = 0; i < CardDB[c]["cost"].length; i++) {
			if (CardDB[c]["cost"][i].length > 1) {
				CardDB[c]["cost"][i] = CardDB[c]["cost"][i].slice(-1);
			}
		}
	}
}

function findCards() {
	var reqs = [];
	var ban = [];
	var reqs2 = [];
	var ban2 = [];
	var typeReqs = [];
	var typeBans = [];
	matchCards = [];
	for (var r in ress) {
		const n = document.getElementById(r).data;
		const n2 = document.getElementById(r + "2").data;
		if (n == 0) {
			ban.push(ress[r]);
		} else if (n == 2) {
			reqs.push(ress[r]);
		}
		if (n2 == 0) {
			ban2.push(ress[r]);
		} else if (n2 == 2) {
			reqs2.push(ress[r]);
		}
	}
	for (var t of cardTypes) {
		const n = document.getElementById(t).data;
		if (n == 0) {
			typeBans.push(t);
		} else if (n == 2) {
			typeReqs.push(t);
		}
	}
	for (var c in CardDB) {
		var good = true;
		for (var re of reqs) {
			if (!CardDB[c]["cost"].includes(re)) {
				good = false;
			}
		}
		for (var re of ban) {
			if (CardDB[c]["cost"].includes(re)) {
				good = false;
			}
		}
		for (var re of reqs2) {
			if (!CardDB[c]["res"].includes(re)) {
				good = false;
			}
		}
		for (var re of ban2) {
			if (CardDB[c]["res"].includes(re)) {
				good = false;
			}
		}
		for (var ty of typeBans) {
			if (CardDB[c]["type"] == ty) {
				good = false;
			}
		}
		for (var ty of typeReqs) {
			if (CardDB[c]["type"] !== ty) {
				good = false;
			}
		}
		if (!ArtCards.includes(c)) {
			good = false;
		}
		if (good) {
			matchCards.push(c);
		}
	}
}

function genButtons() {
	for (const c of matchCards) {
		addButton(c);
	}
}

function CountCards() {
	var elements = document.getElementsByClassName("cardbtn");
	var count = 0;
	for (var i = 0; i < elements.length; i++) {
		count += Number(elements[i].count);
	}
	document.getElementById("deckCount").innerHTML = "_Deck_ " + count + "/60";
}

function initCriteriaButtons() {
	var elements = document.getElementsByClassName("reqBtn");
	for (var i = 0; i < elements.length; i++) {
		elements[i].data = 1;
		elements[i].addEventListener('click', requirement, false);
	}
}

function addButton(text) {
	const btnGroup = document.getElementById('btnGroup');

	const btn = document.createElement('button');
	btn.setAttribute('class', 'button');
	btn.setAttribute('id', 'button');
	btn.innerHTML = text;
	btn.name = text;
	if (text in CardDB) {
		btn.addEventListener('mouseover', changeDefOver);
	}
	btn.addEventListener("click", function() {
		addCard(text);
	}, false);
	btn.addEventListener('contextmenu', function(ev) {
		ev.preventDefault();
		removeCard(text);
		return false;
	}, false);
	btnGroup.appendChild(btn);
}

function addCard(cardName) {
	const btnGroup = document.getElementById('btnGroup2');

	const existBtn = document.getElementById(cardName + 'card');

	if (existBtn) {
		const Rarity = {
			"Common": 8,
			"BLUE": 4,
			"Rare": 2
		};
		var NewCount = Math.min(existBtn.count + 1, Rarity[CardDB[cardName]["rare"]]);

		existBtn.count = NewCount;

		existBtn.innerHTML = cardName + " x" + NewCount;
	} else {
		const btn = document.createElement('button');
		btn.setAttribute('class', 'button cardbtn');
		btn.setAttribute('id', cardName + 'card');
		btn.count = 1;
		btn.name = cardName;
		btn.setAttribute('alt', cardName);
		btn.setAttribute('onclick', 'addCard(this.getAttribute("alt"))');
		btn.innerHTML = cardName + " x1";
		btnGroup.appendChild(btn);
		btn.addEventListener('mouseover', changeDefOver);
		btn.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
			removeCard(this.getAttribute("alt"));
			return false;
		}, false);
		btnGroup.appendChild(btn);
	}
	CountCards()
}

function removeCard(cardName) {
	const existBtn = document.getElementById(cardName + 'card');
	if (existBtn) {
		existBtn.count -= 1;
		if (existBtn.count < 1) {
			existBtn.remove();
		} else {
			existBtn.innerHTML = existBtn.name + " x" + existBtn.count;
		}
	}
	CountCards()
}

function requirement(event) {
	const btn = event.currentTarget;
	btn.data = (btn.data + 1) % 3;
	const colors = ['#FF0000', '#F8F094', '#00FF00']
	btn.style.background = colors[btn.data];
	document.getElementById('btnGroup').innerHTML = '';
	findCards();
	genButtons();
}

function collapseBtnInit() {
	var btn = document.getElementById('unitTypeBtn');
	var div = document.getElementById('cardTypes');
	btn.addEventListener("click", function(){
		if (div.style.display === "block") {
			div.style.display = "none";
		} else {
			div.style.display = "block";
		}
	}, false);
}

function copyButtonInit() {
	document.getElementById('CopyBtn').addEventListener("click", makeDeckString, false);
}

function makeDeckString() {
	document.getElementById('CopyBtn').innerHTML = "Copied!";
	var elements = document.getElementsByClassName("cardbtn");
	var string = "";
	for (var i = 0; i < elements.length; i++) {
		string += elements[i].name+" x"+elements[i].count+", ";
	}
	copyToClipboard(string.slice(0, -2));
	setTimeout(function(){
		document.getElementById('CopyBtn').innerHTML = "Copy Deck";
	}, 2500); 
}
//Source: https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

window.addEventListener('load', (event) => {
	initCriteriaButtons();
	findCards();
	genButtons();
	copyButtonInit();
	collapseBtnInit();
	changeResourceNumber();
});