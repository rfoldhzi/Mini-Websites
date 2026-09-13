const ArtCards = ['Soldier', 'Knight', 'Capital', 'Barbarian', 'Peasant', 'Horse Rider', 'King', 'Archer', 'Bandit', 'Prince', 'Rogue', 'Farmer', 'Catapult', 'Mine', 'Mill', 'Market', 'Guard', 'Defender', 'Raider', 'Hunter', 'Marksman', 'Cow', 'Pig', 'Bank', 'Lumber Yard', 'Warehouse', 'Messenger', 'Royal Guard', 'Guard Captain', 'Royal Knight', 'Angry Mob', 'Jester', 'Book', 'Well Prepared', 'Surprise Attack', 'Builder', 'Dragon', 'Rooster', 'Sentry', 'Expert Archer', 'Knight Officer', 'War Hero', 'Flaming Archer', 'Coward', 'Dark Prince', 'Dark Knight', 'Dark King', 'Moat', 'Log Trap', 'Sword', 'Anvil', 'Crown', 'Front Focused', 'Warning Horn', 'Brawler', 'Winter Soldier', 'Frost Knight', 'Ice Archer', 'Snowman', 'Ice King', 'Plague', 'Rest and Recovery', 'Standoff', 'Snowball', 'Flock', 'Doctor', 'Soldier Squadron', 'Double Cross', 'Two Steps Ahead', 'Bribe', 'Confusion', 'Fear', 'Testudo Formation', 'Warhorn', 'Black Death', 'Hourglass', 'Rally', 'Captain', 'Salmon', 'Giant', 'Regicide', 'Revolution!', 'Decisive Victory', 'Book of Nobility', 'Informant', 'Rumors', 'Snow Bandit', 'Noble Sacrifice', 'Fight Me', 'Disruption', 'Crow', 'Astrolabe', 'Heavy Rain', 'Cloak', 'Rebel', 'Poison', 'Rat', 'Nightmares', 'Dreams', 'Horse', 'Exhaustion', 'Unsanctioned Experiments', 'The Cavalry has arrived', 'Ice Dragon', 'Igloo', 'Preemptive Strike', 'Standard Viking', 'Axe Viking', 'Shield Viking', 'Viking Boat', 'Steep Mountain', 'Trade Market', 'Spike-O-Pult', 'Taskmaster', 'Viking King', 'Booming Economy', 'Heavy Rain', 'Intense Fog', 'Leather Pouch', 'The Fog Has Lifted!', 'Behind Schedule', 'Chaotic Misinformation', 'Take it to the Top', 'Old Memories', 'War Hog', 'Defend the City', 'Wise Dragon'];

var CardDB = {
	"Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["G"],"text":"-","vp":-1,"trait":"Military","type":"Unit","rare":"Common"},
    "Knight":{"cost":["A", "A"],"time":"2","hp":1,"icons":["D", "D"],"spd":3,"tct":"2","res":["A"],"text":"Shielding 1 (at the start of the engagement, place 1 shield on a friendly card)","vp":-1,"trait":"Military, Chivalry","type":"Unit","rare":"BLUE"},
    "Capital":{"cost":[""],"time":"","hp":20,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Fronts: Forward, Left, Right. Water Front: Rear","vp":5,"trait":"Main Base","type":"Base","rare":"Common"},
    "Barbarian":{"cost":["M"],"time":"1","hp":3,"icons":["Dr", "Drw"],"spd":3,"tct":"0","res":["W"],"text":"Presence (when this unit attacks, the opponent must defend with at least one defender)","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Peasant":{"cost":[""],"time":"1","hp":1,"icons":["Dw"],"spd":3,"tct":"0","res":["G"],"text":"-","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Horse Rider":{"cost":["A", "M"],"time":"2","hp":2,"icons":["D", "Bw", "Dr"],"spd":2,"tct":"1","res":["G", "M"],"text":"-","vp":-1,"trait":"Military, Cavalry","type":"Unit","rare":"BLUE"},
    "King":{"cost":["S", "G", "G", "G"],"time":"3","hp":4,"icons":["D", "T", "Tw"],"spd":3,"tct":"4","res":["W", "G", "A"],"text":"During night, summon a peasant from the discard pile.","vp":2,"trait":"Royalty","type":"Unit","rare":"Rare"},
    "Archer":{"cost":["W"],"time":"1","hp":1,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["W", "M"],"text":"-","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"Common"},
    "Bandit":{"cost":["G"],"time":"1","hp":1,"icons":["B", "Dw"],"spd":3,"tct":"0","res":["G"],"text":"-","vp":-1,"trait":"Outlaw","type":"Unit","rare":"Common"},
    "Prince":{"cost":["A", "G", "G", "G"],"time":"2","hp":3,"icons":["D", "D", "Dw", "Dw"],"spd":2,"tct":"4","res":["G", "S"],"text":"-","vp":1,"trait":"Royalty","type":"Unit","rare":"Rare"},
    "Rogue":{"cost":["G", "W"],"time":"1","hp":2,"icons":["D", "B", ""],"spd":3,"tct":"-1","res":["W"],"text":"-","vp":-1,"trait":"Outlaw","type":"Unit","rare":"Common"},
    "Farmer":{"cost":[""],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Guardian Animal","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Catapult":{"cost":["3W", "A", "A"],"time":"4","hp":3,"icons":["B", "Bw", "Bw", "Bw"],"spd":4,"tct":"0","res":["W"],"text":"-","vp":-1,"trait":"Vehicle, Ranged","type":"Unit","rare":"Rare"},
    "Mine":{"cost":["W"],"time":"4","hp":4,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Resource: Exhaust and spend 1 time to gain 1 alloy.","vp":1,"trait":"Production, Structure","type":"Building","rare":"Common"},
    "Mill":{"cost":["W"],"time":"4","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Resource: Exhaust and spend 1 time to gain 1 wood.","vp":1,"trait":"Production, Structure","type":"Building","rare":"Common"},
    "Market":{"cost":["W"],"time":"4","hp":4,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Resource: Exhaust and spend 1 time to gain 1 gold.","vp":1,"trait":"Production, Structure","type":"Building","rare":"Common"},
    "Guard":{"cost":["A"],"time":"1","hp":1,"icons":["Dbw", "Dbw"],"spd":3,"tct":"1","res":["W"],"text":"Guardian 1 (When a friendly unit on the same front takes damage, you exhaust this unit to block 1 damage and place it on this unit.)","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Defender":{"cost":["W", "A"],"time":"2","hp":2,"icons":["Db", "Db"],"spd":3,"tct":"1","res":["A"],"text":"Wall","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Raider":{"cost":["W"],"time":"1","hp":1,"icons":["B", "Bw"],"spd":3,"tct":"0","res":["G"],"text":"Loot 1","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Hunter":{"cost":["G", "W"],"time":"1","hp":1,"icons":["Drw", "Drw"],"spd":3,"tct":"2","res":["M"],"text":"Resource: Exhaust and spend 2 time to gain 1 meat.","vp":-1,"trait":"Civilian, Ranged, Production","type":"Unit","rare":"BLUE"},
    "Marksman":{"cost":["W", "W"],"time":"2","hp":1,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["G"],"text":"Targeted Strike (while attacking, this unit may strike against enemy units that are not defending)","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"BLUE"},
    "Cow":{"cost":["G"],"time":"1","hp":3,"icons":[""],"spd":4,"tct":"0","res":["G"],"text":"Resource: Sacrifice for 2 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Pig":{"cost":[""],"time":"2","hp":2,"icons":[""],"spd":3,"tct":"0","res":["M"],"text":"Resource: Sacrifice for 1 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Bank":{"cost":["A"],"time":"4","hp":6,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Store 5 Gold","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Lumber Yard":{"cost":["A"],"time":"4","hp":6,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Store 5 Wood","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Warehouse":{"cost":["A"],"time":"4","hp":6,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Store 5 Alloy","vp":1,"trait":"Storage, Structure","type":"Building","rare":"Common"},
    "Messenger":{"cost":["G", "G"],"time":"1","hp":1,"icons":["D"],"spd":2,"tct":"+1","res":["S"],"text":"After this unit survives a battle, you may look at the top card of your deck","vp":-1,"trait":"Civilian, Cavalry","type":"Unit","rare":"BLUE"},
    "Royal Guard":{"cost":["A", "G"],"time":"2","hp":3,"icons":["D", "D"],"spd":3,"tct":"2","res":["W"],"text":"Spot Royalty. Guardian 2. Royalty not participating cannot be damaged","vp":-1,"trait":"Court, Military","type":"Unit","rare":"Rare"},
    "Guard Captain":{"cost":["A", "A"],"time":"2","hp":2,"icons":["Dbw", "Dbw"],"spd":3,"tct":"2","res":["G"],"text":"Guardian 2. While this unit is engaged, other friendly Guardians may treat one damage icon as if it were fully black when they strike.","vp":-1,"trait":"Military","type":"Unit","rare":"Rare"},
    "Royal Knight":{"cost":["A", "A"],"time":"2","hp":2,"icons":["D", "D"],"spd":3,"tct":"3","res":["A", "S"],"text":"Spot Royalty. Shielding 2","vp":-1,"trait":"Court, Military","type":"Unit","rare":"Rare"},
    "Angry Mob":{"cost":["W"],"time":"3","hp":3,"icons":["Dr", "B", "B"],"spd":4,"tct":"0","res":[""],"text":"At the end of the day, deal 2 damage to this unit.","vp":-1,"trait":"Civilian, Burning","type":"Unit","rare":"BLUE"},
    "Jester":{"cost":["G"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"1","res":[""],"text":"Presence. Enemies with 0 or less tactics cannot target him.","vp":-1,"trait":"Civilian, Court","type":"Unit","rare":"BLUE"},
    "Book":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade unit. Attached unit gains +1 tactics","vp":-1,"trait":"Book","type":"Upgrade","rare":"BLUE"},
    "Royal Herald":{"cost":["A"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"1","res":["S"],"text":"Decrease the cost of Royal cards by 1 Gold.","vp":-1,"trait":"Musician, Court","type":"Unit","rare":"Rare"},
    "Well Prepared":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when determining advantage while you are defending. You automatically gain the advantage.","vp":-1,"trait":"Strategy","type":"Event","rare":"Common"},
    "Surprise Attack":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when determining advantage while you are attacking. You automatically gain the advantage.","vp":-1,"trait":"Strategy","type":"Event","rare":"Common"},
    "Builder":{"cost":["A"],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Exhaust while playing a building to decrease the time cost by 1","vp":-1,"trait":"Civilian","type":"Unit","rare":"Common"},
    "Dragon":{"cost":["3G", "3M"],"time":"3","hp":4,"icons":["D", "Dr", "Dr", "Br", "Br"],"spd":2,"tct":"2","res":["G"],"text":"Flying. Loot 2. Presence. While attacking, this unit gains 2 extra blast from the no defenders bonus, unless your opponent spends one time. ","vp":2,"trait":"Beast, Ranged, Burning","type":"Unit","rare":"Rare"},
    "Rooster":{"cost":["G"],"time":"1","hp":1,"icons":[""],"spd":2,"tct":"0","res":["M"],"text":"Gain +1 Time at start of day. Resource: Sacrifice for 1 meat","vp":-1,"trait":"Animal","type":"Unit","rare":"Rare"},
    "Sentry":{"cost":["A", "A", "W"],"time":"2","hp":1,"icons":["Db"],"spd":3,"tct":"1","res":["A"],"text":"While this unit is defending, when determining advantage, you may spend 3 time and exhaust this unit. If you do, you gain the advantage.","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Expert Archer":{"cost":["W", "W"],"time":"2","hp":2,"icons":["D", "Dw"],"spd":3,"tct":"1","res":["W", "M"],"text":"When this unit strikes, you may spend one time to deal one extra damage to the target unit.","vp":-1,"trait":"Military, Ranged","type":"Unit","rare":"Rare"},
    "Knight Commander":{"cost":["S", "A", "A", "A"],"time":"3","hp":4,"icons":["D", "D", "Dw", "Tw"],"spd":3,"tct":"5","res":["S"],"text":"This unit can only fight with Chivalry.","vp":1,"trait":"Military, Chivalry","type":"Unit","rare":"Rare"},
    "Knight Officer":{"cost":["A", "A", "A"],"time":"2","hp":3,"icons":["D", "D"],"spd":3,"tct":"3","res":["A"],"text":"Friendly Chivalry gain Guardian 1.","vp":-1,"trait":"Military, Chivalry","type":"Unit","rare":"BLUE"},
    "War Hero":{"cost":["G", "W", "A"],"time":"2","hp":3,"icons":["Dr", "Br"],"spd":3,"tct":"1","res":["G"],"text":"After surviving a battle, this unit heals to full health. You may then spend one gold, one alloy, and one time to place one counter on this unit. For each counter, this unit gains a white unit damage icon and +1 tactics","vp":1,"trait":"Military, Cavalry","type":"Unit","rare":"Rare"},
    "Cannon":{"cost":["A", "A"],"time":"3","hp":2,"icons":["D", "D", "Dw", "B"],"spd":-1,"tct":"","res":["A", "W"],"text":"","vp":-1,"trait":"Defensive, Ranged, Aquatic","type":"Building","rare":"BLUE"},
    "Flaming Archer":{"cost":["W", "W"],"time":"3","hp":1,"icons":["Dr", "Drw"],"spd":3,"tct":"1","res":["W"],"text":"While attacking, this unit gains 1 extra blast from the no defenders bonus, unless your opponent spends 1 time. ","vp":-1,"trait":"Military, Ranged, Burning","type":"Unit","rare":"Rare"},
    "Coward":{"cost":["A"],"time":"0","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"0","res":["A", "G"],"text":"If this unit is the only friendly unit in the engagement, it flees.","vp":-1,"trait":"Military","type":"Unit","rare":"BLUE"},
    "Dark Prince":{"cost":["G", "G", "G", "A"],"time":"2","hp":3,"icons":["D", "D", "Dw", "Dw"],"spd":2,"tct":"3","res":["G", "C"],"text":"Arrogant (this unit must be your chosen leader)","vp":1,"trait":"Dark, Royalty","type":"Unit","rare":"Rare"},
    "Dark Knight":{"cost":["C", "A", "A", "A"],"time":"2","hp":3,"icons":["D", "D", "Bw", "Bw"],"spd":2,"tct":"3","res":["A", "C"],"text":"While fighting alone, this unit automatically has the advantage.","vp":1,"trait":"Dark, Chivalry","type":"Unit","rare":"Rare"},
    "Dark King":{"cost":["C", "G", "G", "G"],"time":"3","hp":4,"icons":["D", "T", "Tw"],"spd":3,"tct":"4","res":["G", "C"],"text":"When determining advantage, you may sacrifice a friendly participating unit on this front to gain the advantage.","vp":2,"trait":"Dark, Royalty","type":"Unit","rare":"Rare"},
    "Moat":{"cost":["G"],"time":"6","hp":8,"icons":[""],"spd":-1,"tct":"","res":["F", "W"],"text":"Units without ranged cannot use white icons on this front.","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Recruit":{"cost":["W"],"time":"0","hp":1,"icons":["D"],"spd":3,"tct":"1","res":["A"],"text":"This unit starts exhausted.","vp":-1,"trait":"Military","type":"Unit","rare":"Common"},
    "Dark Alliance":{"cost":["C", "G"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Action: Spot an outlaw and a dark unit to play an outlaw or dark unit from your discard pile, ignoring the gold and corruption cost.","vp":-1,"trait":"Dark","type":"Event","rare":"Rare"},
    "Log Trap":{"cost":["W", "W"],"time":"2","hp":2,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Strike: Sacrifice this card to deal 1 damage each to up to 4 attackers on the front.","vp":-1,"trait":"Trap","type":"Building","rare":"BLUE"},
    "Knife":{"cost":["A"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Upgrade Outlaw. Attached unit gains a black unit damage icon.","vp":-1,"trait":"Weapon","type":"Upgrade","rare":"BLUE"},
    "Angry Farmer":{"cost":[""],"time":"1","hp":1,"icons":["Bw"],"spd":3,"tct":"0","res":["W"],"text":"Action: Sacrifice this unit and another civilian to summon an angry mob.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Dark Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["C"],"text":"If this unit survives an attack without the undefended bonus, destroy it.","vp":-1,"trait":"Military, Dark","type":"Unit","rare":"BLUE"},
    "Dismount":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M", "A", "G"],"text":"Action: Sacrifice a Cavalry to summon a horse, and a soldier if that unit was military","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Blacksmith":{"cost":["A", "G"],"time":"2","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"0","res":["A"],"text":"Resource: Exhaust this card, spend 2 time, and spend 1 alloy to gain either 2 alloy or 1 gold.","vp":-1,"trait":"Civilian, Production","type":"Unit","rare":"BLUE"},
    "Sword":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Military. Attached unit gains piercing and a black unit damage icon.","vp":-1,"trait":"Weapon","type":"Upgrade","rare":"BLUE"},
    "Heater Shield":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Military. Attached unit gains shielding 1.","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Anvil":{"cost":["A", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade structure. Resource: Exhaust and spend 1 alloy to gain 2 alloy","vp":-1,"trait":"Equipment, Production","type":"Upgrade","rare":"BLUE"},
    "Crown":{"cost":["G", "G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Royalty. While attached card is engaged, other friendly units in the engagement gain guardian royalty. Attached Card has +1 VP","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Front Focused":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W", "S"],"text":"Play when an opponent begins an attack. The opponent can only attack on a single front that you choose.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Raging Flames":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when you gain the undefended bonus. Spot a participating burning unit to deal 2 extra blast, unless the opponent spends 1 time","vp":-1,"trait":"Burning, Attack","type":"Event","rare":"BLUE"},
    "Warning Horn":{"cost":["W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Structure. When this front is attacked, you may exhaust this card to ready a defensive card or a unit with a blue damage icon.","vp":-1,"trait":"Defensive","type":"Upgrade","rare":"BLUE"},
    "Brawler":{"cost":["W"],"time":"0","hp":2,"icons":["D", "D"],"spd":3,"tct":"0","res":["A"],"text":"If ready, this unit must be declared as an attacker or defender, if possible.","vp":-1,"trait":"Outlaw","type":"Unit","rare":"BLUE"},
    "Winter Soldier":{"cost":["A"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":4,"tct":"1","res":["I"],"text":"After this unit deals damage to a enemy card with Burning, exhaust that card.","vp":-1,"trait":"Winter, Military","type":"Unit","rare":"BLUE"},
    "Frost Knight":{"cost":["A", "A", "I"],"time":"2","hp":2,"icons":["D", "D", "Tbw"],"spd":4,"tct":"3","res":["I", "A"],"text":"Shielding 1","vp":-1,"trait":"Winter, Chivalry","type":"Unit","rare":"Rare"},
    "Ice Archer":{"cost":["W", "I"],"time":"2","hp":1,"icons":["D", "Tbw"],"spd":4,"tct":"0","res":["I", "W"],"text":"-","vp":-1,"trait":"Winter, Military, Ranged","type":"Unit","rare":"BLUE"},
    "Snowman":{"cost":[""],"time":"1","hp":1,"icons":["Tbw"],"spd":4,"tct":"0","res":[""],"text":"Resource: Sacrifice this unit for 1 ice.","vp":-1,"trait":"Winter","type":"Unit","rare":"BLUE"},
    "Ice King":{"cost":["I", "G", "G", "G"],"time":"3","hp":4,"icons":["Tb", "Tw"],"spd":4,"tct":"5","res":["I", "S", "G"],"text":"This unit cannot be exhausted by enemies.","vp":2,"trait":"Winter, Royalty","type":"Unit","rare":"Rare"},
    "Plague":{"cost":["C", "C"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on an opponents play area. During night, for each damaged unit that opponent controls, they must deal 1 damage to any of their units. Discard this card if that opponent ever controls no units with damage on them.","vp":-1,"trait":"Disease","type":"Detriment","rare":"Rare"},
    "Rest and Recovery":{"cost":[""],"time":"X","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"X is equal to your remaining time. For every 3 time spent, you may either heal 1 damage from any unit or discard a detriment.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Standoff":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Action: Pick an opponent. You choose a number between 0 and 3 (inclusive). Both you and your opponent lose this much time. Then the opponent does the same, but they choose the number.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Snowball":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["I"],"text":"Upgrade winter unit. Attached unit gains ranged and a black unit damage icon.","vp":-1,"trait":"Weapon, Winter","type":"Upgrade","rare":"BLUE"},
    "Flock":{"cost":["F", "F"],"time":"4","hp":3,"icons":[""],"spd":4,"tct":"-1","res":["F"],"text":"Flying. This unit was a white unit damage icon for each health it has remaining.","vp":-1,"trait":"Animal","type":"Unit","rare":"BLUE"},
    "Doctor":{"cost":["G", "A"],"time":"3","hp":1,"icons":[""],"spd":3,"tct":"1","res":["S"],"text":"During night, heal 1 damage from a friendly unit.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Double Cross":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play when an opponent plays an event. Cancel its effects. You may play the canceled card as if you had played it, paying its costs","vp":-1,"trait":"Cancel","type":"Event","rare":"BLUE"},
    "Two Steps Ahead":{"cost":["Q"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play when an opponent plays an event. Cancel its effects","vp":-1,"trait":"Strategy, Cancel","type":"Event","rare":"BLUE"},
    "Bribe":{"cost":["G", "G", "G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: Choose an enemy unit with gold in their cost, that isn't Chivalry, and has 2 or less tactics. Take control of that unit.","vp":-1,"trait":"Dark","type":"Event","rare":"BLUE"},
    "Confusion":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play on an enemy unit. Treat each of that units black damage icons as white, and each of its white icons as black.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Fear":{"cost":["W", "A", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on an opponent's play area. After that opponent plays a unit, you may discard this card to return that unit to their hand.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Testudo Formation":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play during an engagement. For each partipating shielding unit, you may place 1 shield on any unit.","vp":-1,"trait":"Strategy","type":"Event","rare":"Rare"},
    "Warhorn":{"cost":["W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade a unit. Attached unit gains Presence","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Black Death":{"cost":["4C", "W"],"time":"5","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on an opponent's play area. Deal 1 damage to all of that opponent's non-VP units during night. Discard this card if that opponent ever controls no non-VP units","vp":-1,"trait":"Disease","type":"Detriment","rare":"Rare"},
    "Hourglass":{"cost":["W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade Unit. Action: Spend 1 time and exhaust this card to force an opponent to lose 1 time.","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Rally":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Summon 3 common Civilians.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Captain":{"cost":["A", "A", "G", "G"],"time":"2","hp":2,"icons":["D", "Bw"],"spd":3,"tct":"2","res":["A", "G"],"text":"After this unit is played, summon up to 2 soldiers.","vp":-1,"trait":"Military","type":"Unit","rare":"Rare"},
    "Salmon":{"cost":[""],"time":"1","hp":1,"icons":[""],"spd":3,"tct":"0","res":["G"],"text":"Resource: Sacrifice this unit for 1 fish, or 2 instead if you spot another water unit","vp":-1,"trait":"Water, Animal","type":"Unit","rare":"BLUE"},
    "Giant":{"cost":["M", "M", "M", "M"],"time":"3","hp":5,"icons":["D", "D", "B", "B"],"spd":4,"tct":"0","res":["W"],"text":"-","vp":1,"trait":"-","type":"Unit","rare":"BLUE"},
    "Regicide":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play after an opponent's royalty unit is defeated. Gain 1 VP","vp":-1,"trait":"Goal","type":"Event","rare":"BLUE"},
    "Revolution!":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Action: Sacrifice a royalty unit to ready all friendly civilians and heal all damage from them","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Decisive Victory":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G", "S"],"text":"Play after you destroy a unit with VP. Destroy a target upgrade or detriment.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Book of Nobility":{"cost":["W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade chivalry or military. While this upgrade is on a military they are treated as a chivalry. If this upgrade is on a chivalry it gains shielding 2 and can only fight with other chivalry.","vp":-1,"trait":"Book","type":"Upgrade","rare":"BLUE"},
    "Informant":{"cost":["G"],"time":"2","hp":1,"icons":["D"],"spd":3,"tct":"1","res":["W"],"text":"When this card enters play, you may look at an opponent's hand.","vp":-1,"trait":"Dark","type":"Unit","rare":"BLUE"},
    "Rumors":{"cost":["G"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: An opponent chooses 1 card in their hand, and shows the rest to you. Of the shown cards, choose and discard 1.","vp":-1,"trait":"Dark","type":"Event","rare":"BLUE"},
    "Snow Bandit":{"cost":["G"],"time":"2","hp":1,"icons":["B", "Bw"],"spd":4,"tct":"0","res":["G", "I"],"text":"After attacking or defending, if you had the no defenders bonus and this unit was alive, you may exhaust an enemy building.","vp":-1,"trait":"Winter, Outlaw","type":"Unit","rare":"BLUE"},
    "Noble Sacrifice":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S", "F", "M"],"text":"Strike: Sacrifice a participating unit with at least 2 tactics to have any number of friendly units on the front flee from the battle.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Fight Me":{"cost":["G"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C", "A"],"text":"Choose up to three of your own units. An opponent then chooses that number of their own units, if able. Start a battle with those units ignoring speed cost and not attacking a front.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Disruption":{"cost":["W", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play on an opponents play area. Each card the opponent plays cost 2 additional time. After playing a card, the oppponent may place 1 counter on this card. Discard this card once the counter reaches 3.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Crow":{"cost":["Q"],"time":"1","hp":1,"icons":["Dw"],"spd":2,"tct":"0","res":[""],"text":"Flying. After this unit strikes, it flees","vp":-1,"trait":"Animal, Dark","type":"Unit","rare":"BLUE"},
    "Astrolabe":{"cost":["A"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade unit. When you draw a card from a card effect, you may draw from the bottom of the deck instead","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"Rare"},
    "Heavy Rain":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no unit can use white damage icons. Discard this card during night","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Cloak":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade outlaw. If you have 3 or less time, attached unit cannot be targeted by enemy card effects","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Rebel":{"cost":["A", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Action: Choose an enemy unit. Until the end of the day, you take control of this unit","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Poison":{"cost":["W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play on a non-VP enemy unit. At the end of each day, this unit takes 1 damage.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Rat":{"cost":[""],"time":"1","hp":1,"icons":["D"],"spd":3,"tct":"0","res":["C"],"text":"After this unit strikes, you may sacrifice it to play a detriment from your discard pile, ignoring the time cost.","vp":-1,"trait":"Animal, Dark","type":"Unit","rare":"BLUE"},
    "Nightmares":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on enemy unit. At the start of night, discard a random card from owner's hand, if able. Then they may draw a card.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Dreams":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade character. During night, after drawing cards, you may draw 1 card. Then discard 1 card.","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Horse":{"cost":["M"],"time":"1","hp":1,"icons":[""],"spd":2,"tct":"0","res":["G"],"text":"Action: Attach this card to a non-cavalry unit. Attached card gains Cavalry and reduces its travel time by 1.","vp":-1,"trait":"Animal","type":"Unit","rare":"Common"},
    "Exhaustion":{"cost":["W", "A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play on a ready enemy unit. This unit does not ready at night unless its controller starts the day with 2 less time.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Unsanctioned Experiments":{"cost":["C"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Sacrifice a civilian you control to play a card from your discard pile, paying its cost.","vp":-1,"trait":"Dark","type":"Event","rare":"BLUE"},
    "The Cavalry has arrived":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M", "S"],"text":"Strike: Add any number of unengaged ready friendly Cavalry to this front to participate in the engagement.","vp":-1,"trait":"Strategy","type":"Event","rare":"Rare"},
    "Ice Dragon":{"cost":["3M", "3I"],"time":"3","hp":4,"icons":["B", "B", "Tb", "Tbw"],"spd":3,"tct":"3","res":["I", "G"],"text":"Flying. After this unit strikes as an attacker, exhaust all buildings on this front","vp":2,"trait":"Winter, Beast, Ranged","type":"Unit","rare":"Rare"},
    "Igloo":{"cost":["I"],"time":"2","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"After you play a winter card, you may exhaust this card to draw 1 card","vp":1,"trait":"Winter, Structure","type":"Building","rare":"BLUE"},
    "Preemptive Strike":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play when an opponent begins an attack, before declaring attackers. You attack the opponent first, and then they may choose to attack you.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Standard Viking":{"cost":["W"],"time":"1","hp":1,"icons":["D", "Bw"],"spd":3,"tct":"1","res":["G"],"text":"-","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Axe Viking":{"cost":["W", "A", "A"],"time":"1","hp":2,"icons":["D", "B"],"spd":3,"tct":"1","res":["G", "W"],"text":"While attacking a unit with 1 or more shield tokens, you may also exhaust them as part of your attack.","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Shield Viking":{"cost":["A", "A"],"time":"2","hp":1,"icons":["Dbw"],"spd":4,"tct":"0","res":["A"],"text":"Shielding 1, Guardian 1","vp":-1,"trait":"Viking","type":"Unit","rare":"Common"},
    "Viking Boat":{"cost":["W", "W", "F"],"time":"3","hp":3,"icons":["D", "Drw", "Brw"],"spd":4,"tct":"2","res":["W"],"text":"Rotary Cannon (This unit may deal its blast damage to a different front than the one it is fighting on, even if it is defending), Mod 1 (This unit can only have 1 Modification card attatched to it)","vp":-1,"trait":"Water, Viking, Boat","type":"Unit","rare":"BLUE"},
    "Steep Mountain":{"cost":["A", "A"],"time":"3","hp":7,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"If Vehicle Units attack this front, the opponent must spend 2 time per vehicle attacking. If the opponent cannot spend the time, the vehicles must attack a different front.","vp":-1,"trait":"Terrain","type":"Building","rare":"BLUE"},
    "Trade Market":{"cost":["W"],"time":"3","hp":5,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Resource: Exhaust and spend 1 alloy or wood to gain 2 gold.","vp":1,"trait":"Production, Structure","type":"Building","rare":"Common"},
    "Spike-O-Pult":{"cost":["3A", "W", "W"],"time":"4","hp":2,"icons":["D", "B", "B", "Bw"],"spd":5,"tct":"1","res":["A"],"text":"Armored (enemies must use blast to damage this unit)","vp":-1,"trait":"Vehicle, Ranged","type":"Unit","rare":"Rare"},
    "Taskmaster":{"cost":["W", "W", "M"],"time":"2","hp":1,"icons":["Dw", "Bw"],"spd":3,"tct":"1","res":["M"],"text":"When you play a building, you may exhaust this card and other friendly civilian cards to decrease the time to play the building by 1 for each other civilian exhausted.","vp":-1,"trait":"Civilian","type":"Unit","rare":"BLUE"},
    "Viking King":{"cost":["F", "G", "G", "G"],"time":"4","hp":4,"icons":["D", "Dw", "Tw", "Tw"],"spd":3,"tct":"4","res":["G", "F"],"text":"If you do not have advantage while attacking, all Viking units may use one of their white attack icons during the attack.","vp":2,"trait":"Viking, Royalty","type":"Unit","rare":"Rare"},
    "Booming Economy":{"cost":["S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Upgrade a Production Building. After attached building produces 1 or more gold, ready it.","vp":-1,"trait":"Modification","type":"Upgrade","rare":"BLUE"},
    "Heavy Rain":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no unit can use white damage icons. Discard this card during night.","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Intense Fog":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play at the start of the day. Upgrade play area. For the remainder of the day, no ranged unit can use white damage icons and every Unit has -1 Tactics (to a minimum of 0). Discard this card during night.","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"BLUE"},
    "Leather Pouch":{"cost":["M"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Upgrade viking. Store 1 Wood. This Unit gains Looting 1.","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"Common"},
    "The Fog Has Lifted!":{"cost":["S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade Play Area. Each player's hand size is increased by 2 for the rest of the game.","vp":-1,"trait":"Terrain","type":"Upgrade","rare":"Rare"},
    "Behind Schedule":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when an opponent spends time. The time used is doubled. If this would cause the opponent's time to drop below 0, their time is set to 0 and the action they tried to complete is left incomplete.","vp":-1,"trait":"Strategy","type":"Event","rare":"Unique"},
    "Chaotic Misinformation":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Action: Reveal 3 cards from your hand to your opponents. Then draw 3 cards. Then choose and place 3 cards from your hand on the bottom of your deck.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Take it to the Top":{"cost":["G"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when determining advantage. If you have 2 or more royalty cards in play, all of your units gain +2 Tactics until the end of the attack.","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Old Memories":{"cost":["G", "W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade enemy character. After this unit strikes, deal 1 damage to it","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "War Hog":{"cost":["A"],"time":"3","hp":2,"icons":["B"],"spd":3,"tct":"0","res":["M"],"text":"-","vp":-1,"trait":"Animal, Military","type":"Unit","rare":"BLUE"},
    "Defend the City":{"cost":["A", "W"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W", "A"],"text":"Play after you declare defenders. Each defending unit gains Wall until the end of the battle","vp":-1,"trait":"Strategy","type":"Event","rare":"BLUE"},
    "Wise Dragon":{"cost":["3M", "3S"],"time":"5","hp":3,"icons":["T", "Tw"],"spd":2,"tct":"8","res":["S"],"text":"Flying. After you play a unit or building, you may exhaust that card to draw a card","vp":2,"trait":"Beast, Ranged","type":"Unit","rare":"Rare"},
    "Logging Forest":{"cost":["G"],"time":"4","hp":4,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"After this card enters play, place 5 counters on it. Resource: Exhaust this card, spend 1 time, and remove 1 or 2 counters from this card to gain an equal amount of wood.","vp":1,"trait":"Structure, Production","type":"Building","rare":"Common"},
    "Soldier Battalion":{"cost":["A", "A", "A"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Action: Summon up to 3 Soldiers.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Archer Battalion":{"cost":["W", "W", "W"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Action: Summon up to 3 Archers.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Malnourishment":{"cost":["M"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["F"],"text":"Play on an opponent's play area. Opponent's civilian and military units have 1 less health, to a minimum of 1. As an action, this opponent may spend 2 meat or 2 fish to discard this card.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Scarecrow":{"cost":[""],"time":"1","hp":1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"The front this card is on cannot be attacked by a single unit (two or more units must attack).","vp":-1,"trait":"","type":"Building","rare":"BLUE"},
    "Nullify":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Attach to enemy unit. This unit is treated as having no card text. ","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Daze":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on enemy unit. Attached unit has -1 tactics","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Positivity":{"cost":["Q"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play an attribute upgrade from your discard pile.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Negativity":{"cost":["Q"],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play an attribute detriment from your discard pile. ","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Dodge":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play after an oppent plays an attack event. Cancel that event.","vp":-1,"trait":"Cancel","type":"Event","rare":"BLUE"},
    "Rebellion":{"cost":["A", "A", "A", "A"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Action: Choose up to 3 copies of an enemy unit all controlled by the same opponent. Until the end of the day, you take control of those units.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Shark":{"cost":["F", "F", "M"],"time":"2","hp":3,"icons":["D", "D", "D"],"spd":2,"tct":"1","res":["M"],"text":"After this unit strikes, heal 1 from it. At the end of the day, if this unit is ready, deal 1 damage to it. Action: Spend 1 fish or 1 meat to exhaust this unit.","vp":-1,"trait":"Water, Animal","type":"Unit","rare":"BLUE"},
    "Tree":{"cost":["W"],"time":"1","hp":1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"During night, If you have 2 or more copies of this card in play, you may add a copy of this card from your discard pile to your hand (limit 1 use per night). Resource: Discard this card and spend 1 time to gain 1 wood. ","vp":-1,"trait":"Terrain, Resource","type":"Building","rare":"Common"},
    "Forest":{"cost":["W", "W", "W"],"time":"4","hp":3,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"During night, summon a Tree on this front. Trees gain Guardian Forest.","vp":1,"trait":"Terrain, Production","type":"Building","rare":"Rare"},
    "Flames":{"cost":["W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play on an enemy building. At the start of the night, attached building takes 1 damage. Then, the controller of attached building may start the day with 2 less time to discard this card.","vp":-1,"trait":"Burning","type":"Detriment","rare":"Common"},
    "Inferno":{"cost":["W", "W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play after you gain the undefended bonus. For each copy of Flame on different buildings, you may summon another copy of Flame on a building without Flame that is on the same front.","vp":-1,"trait":"Burning","type":"Event","rare":"Rare"},
    "Ignite":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play when an opponent's building takes damage from a friendly unit. Decrease the damage dealt by 1 to summon Flames on that building.","vp":-1,"trait":"Burning","type":"Event","rare":"BLUE"},
    "Scorched Earth":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Strike: Summon Flames on a friendly building on this front to deal 1 damage each to up to 2 units.","vp":-1,"trait":"Burning, Strategy","type":"Event","rare":"BLUE"},
    "Eternal Flames":{"cost":["W", "W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play on an opponent's building with at least 2 copies of Flames. Discard 2 copies of flames from attached building. During night, summon Flames on any building on this front. ","vp":-1,"trait":"Burning","type":"Detriment","rare":"Rare"},
    "Thin the Crowd":{"cost":["A", "W"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Action: Force all players to remove duplicate units they control until they only control 1 copy of each unit. ","vp":-1,"trait":"Attack","type":"Event","rare":"Rare"},
    "Chill":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["I"],"text":"Action: Exhaust a non-vp enemy unit.","vp":-1,"trait":"Winter","type":"Event","rare":"BLUE"},
    "Mirror Mirror":{"cost":["S", "C"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["", "", ""],"text":"Action: Summon exactly two copies of a unit, and place one of the copies under the control of an opponent.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Corrupt Dragon":{"cost":["3C", "3M"],"time":"3","hp":4,"icons":["D", "Dr", "Br", ""],"spd":2,"tct":"3","res":["C"],"text":"Flying. Presence. During night, you must sacrifice one of your units. Then, force an opponent to choose and sacrifice one of their unit with equal tactics, if able.","vp":2,"trait":"Beast, Ranged, Dark","type":"Unit","rare":"Rare"},
    "Firestorm":{"cost":["5W"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play on opponent's play area if they have at least 4 cards with burning. At the start of night, for every two burning detriments in opponent's area, summon a burning detriment. Discard this card if the opponent ever controls 2 or less burning detriments. This is the only way this card can be removed.","vp":-1,"trait":"Terrain, Burning","type":"Detriment","rare":"Unique"},
    "Ultimate Bargain":{"cost":[""],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Action: Spend 2 VP to summon a card.","vp":-1,"trait":"","type":"Event","rare":"Unique"},
    "Throne Breaker":{"cost":["S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade unit. If this unit deals damage to a particpating unit worth VP, that unit is instantly defeated.","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Mourning Bell":{"cost":["A"],"time":"2","hp":5,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"When played, place a 0 counter on this card. When a friendly unit is defeated, exhaust this card to increase the counter by 1. You start the day with extra time equal to the counter.","vp":1,"trait":"","type":"Building","rare":"Rare"},
    "Redemption by Steel":{"cost":["A", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade chivalry. After played, place a counter at 0 on this card. After attached unit is healed one or more damage, increase the counter by 1. This unit gains 1 damage icon and +1 tactics per count.","vp":-1,"trait":"Chivalry","type":"Upgrade","rare":"BLUE"},
    "Bound Together":{"cost":["A", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade unit. When played from your hand, summon a copy of this card to an enemy unit without it. Sacrafice attached unit if there is only one copy of this card in play. Attached unit cannot be sacraficed otherwise.","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Shooting Star":{"cost":["S", "S"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Action: Play only if you have exactly 3 time remaining. Play the card on top of your deck for free.","vp":-1,"trait":"Night","type":"Event","rare":"Rare"},
    "Corrupt Bargain":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade play area. You draw 1 less card during night. Action: Spend 1 time and deal 1 damage to your capital to draw a card.","vp":-1,"trait":"Dark","type":"Upgrade","rare":"Rare"},
    "Marked":{"cost":["Q"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play on enemy unit. Once this unit is defeated, draw 2 cards.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Sanguine Knight":{"cost":["A", "S", "C"],"time":"4","hp":3,"icons":["D", "T"],"spd":2,"tct":"3","res":["A"],"text":"After a unit is defeated while this unit is engaged and ready, draw 1 card.","vp":1,"trait":"Chivalry","type":"Unit","rare":"Unique"},
    "Ruins":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Only play this card after you destroy an enemy building, and play it on the front that building was on. No buildings may be played on this front. The opponent may as an action spend 4 resources of any type to discard this card. ","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Birch Tree":{"cost":["W"],"time":"1","hp":1,"icons":[""],"spd":-1,"tct":"","res":["W", "I"],"text":'This card counts as having the name "Tree" for card effects. When played on a front without any other Trees, you may add a Tree from your discard pile to your hand. Resource: Discard this card and spend 1 time to gain 1 wood. ',"vp":-1,"trait":"Terrain, Resource, Winter","type":"Building","rare":"Common"},
    "Birch Forest":{"cost":["W", "W", "I"],"time":"4","hp":2,"icons":[""],"spd":-1,"tct":"","res":["W", "I"],"text":"When played, if there are no Trees on this front, summon a Birch Tree. During night, summon a Tree on this front. Trees gain Guardian Birch Forest.","vp":1,"trait":"Terrain, Production, Winter","type":"Building","rare":"Rare"},
    "Endless Reserves":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play after a military unit you control is defeated. You may play that unit from your discard pile, paying its cost.","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Inspiring Speech":{"cost":["S", "S"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play at the start of an engagement. Spot a participating unit with at least 3 tactics to treat all friendly damage icons as if they were black for the duration of the battle","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Spear":{"cost":[""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade civilian, military, or outlaw unit. Attached unit gains a black unit damage icon.  ","vp":-1,"trait":"Weapon","type":"Upgrade","rare":"Common"},
    "Campfire":{"cost":["W"],"time":"1","hp":2,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Exhaust this card after a battle to heal 1 damage from a surviving unit","vp":-1,"trait":"Burning","type":"Building","rare":"BLUE"},
    "Insomnia":{"cost":["A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on enemy unit. At the end of the night, if attached unit is ready, it starts the next day exhausted.","vp":-1,"trait":"Attribute","type":"Detriment","rare":"BLUE"},
    "Gold and Glory":{"cost":["W", "A"],"time":"3","hp":7,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Action: Exhaust this card and spend any amount of gold to increase this card's counter by an equal amount. If the counter is equal to or greater than 10, sacrifice this card to gain 1 VP.","vp":1,"trait":"Goal","type":"Building","rare":"Unique"},
    "National Monument":{"cost":["A", "A", "A", ""],"time":"6","hp":5,"icons":[""],"spd":-1,"tct":"","res":["G"],"text":"Play only if you have 3 VP or less. While you have this card in play, you have +1 VP","vp":1,"trait":"Statue","type":"Building","rare":"Unique"},
    "Wealth of Resources":{"cost":["3W", "3A", "3G"],"time":"6","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Action: Gain 1 VP. You cannot reduce the cost of this card.","vp":-1,"trait":"Goal","type":"Event","rare":"Rare"},
    "You Have 24 Hours":{"cost":["3Q"],"time":"5","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Spot a Royalty to play. Upgrade a damaged structure. At the end of the next day, if it's still attached to its original structure, discard this upgrade to gain 1 VP.","vp":-1,"trait":"Goal","type":"Upgrade","rare":"Unique"},
    "Cultural Victory":{"cost":["S", "S", "S"],"time":"6","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Spot 5 unique cards you own in play to gain 1 VP.","vp":-1,"trait":"Goal","type":"Event","rare":"Unique"},
    "Trial by Fire":{"cost":["W", "W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade unit. Spot a burning card to play. When played, deal 1 damage to attached unit for each burning card in play. Attached unit gains 1 damage icon for each burning card in play. ","vp":-1,"trait":"","type":"Upgrade","rare":"Rare"},
    "Add Fuel to the Fire":{"cost":["W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W", "S"],"text":"Strike: Deal 1 to each building on that front with a burning deteriment. The opponent can choose to block any of this damage by spending 2 time for each damage blocked. ","vp":-1,"trait":"Burning, Attack","type":"Event","rare":"Rare"},
    "Bread":{"cost":["W"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade play area. When played, place 3 counters on card. Target/Strike: Remove 1 counter and spend 1 time to heal 1 damage from unit. If zero counters remain, discard this card. ","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Baker":{"cost":["G", "W"],"time":"2","hp":1,"icons":[""],"spd":3,"tct":"0","res":["W"],"text":"At the start of the day, you may exhaust this card to increment all counters on friendly bread cards by 1. Action: Exhaust this unit and spend 3 time to summon bread. ","vp":-1,"trait":"Civilian","type":"Unit","rare":"Rare"},
    "Cannon Shot":{"cost":["A", "A"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Strike: Deal one damage to an enemy card.","vp":-1,"trait":"Attack","type":"Event","rare":"BLUE"},
    "Mathmatician":{"cost":["2Q"],"time":"6","hp":1,"icons":[""],"spd":3,"tct":"X","res":["S"],"text":"When you play this unit, place two counters set to 0 on it. X is equal to the product of the two counters multiplied together. Action: Exhaust this unit and spend X time to increase either of these counters by 1. ","vp":-1,"trait":"Civilian","type":"Unit","rare":"Rare"},
    "Full House":{"cost":["A", "W", "G"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Action: Spot 5 different units you control worth VP to gain 1 VP","vp":-1,"trait":"Goal","type":"Event","rare":"Unique"},
    "Power of Knowledge":{"cost":["3Q"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Action: Discard 10 other cards from your hand to gain 1 VP","vp":-1,"trait":"Goal","type":"Event","rare":"Rare"},
    "Perfectly Balanced":{"cost":["S", "C"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W", "G", "A"],"text":"Upgrade Play Area. While you and an opponent have the same number of cards in hand, same number of units, and same amount of time, you are treated as having +1 VP.","vp":-1,"trait":"Goal","type":"Upgrade","rare":"Unique"},
    "Dove":{"cost":[""],"time":"1","hp":3,"icons":[""],"spd":2,"tct":"0","res":[""],"text":"Flying. Resource: Play this unit to gain 2 wisdom. After you play this unit, you cannot attack for the remainder of the day","vp":-1,"trait":"Animal","type":"Unit","rare":"Rare"},
    "Outnumber":{"cost":["S"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Upgrade unit. While attached unit is your chosen leader, all friendly units on this front may use white icons if you control more units on this front than the opponent.","vp":-1,"trait":"Strategy","type":"Upgrade","rare":"BLUE"},
    "Fight Fire with Fire":{"cost":["W", "Q"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W", "S"],"text":"Strike: Activate a unit with burning against an enemy unit or building with burning or a burning upgrade or detriment. Deal 2 additional damage to target, unless opponent spends 2 time.","vp":-1,"trait":"Burning, Attack","type":"Event","rare":"BLUE"},
    "Firery Veins":{"cost":["W", "W", "W"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade unit. After a friendly unit is defeated, you may play this card for free on an exhausted unit in this engagement. After attached unit strikes, you may discard this card to summon flames to a building on this front.","vp":-1,"trait":"Burning","type":"Upgrade","rare":"BLUE"},
    "Crown of Ruin":{"cost":["C", "C"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Upgrade Royalty. After you play this card, draw 7 cards. While you control this card, you draw 1 less card during night. You cannot move this card to another unit or discard it.","vp":-1,"trait":"Equipment, Dark","type":"Upgrade","rare":"Unique"},
    "Book of Corruption":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play on dark unit. When played, you may attach up to 3 dark cards facedown from your hand or discard pile. You may play cards attached to this as if they were in your hand. ","vp":-1,"trait":"Book, Dark","type":"Upgrade","rare":"BLUE"},
    "Endless Night":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play at the start of night. Instead of starting the night, deal 1 damage to your capital to have all players gain 3 time and draw 1 card. You start the next turn. You may return this card to your hand after playing.","vp":-1,"trait":"Night","type":"Event","rare":"Rare"},
    "Undying Loyalty":{"cost":["Q"],"time":"3","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Play when one of your units would be defeated. Sacrifice one of your units to instead keep that unit alive at 1 HP. Exhaust that unit. You may pay 1 of any resource to return this card to your hand.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Wildcard":{"cost":[""],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Resource: Gain 1 of any resource","vp":-1,"trait":"Resource","type":"Event","rare":"Rare"},
    "Sheep":{"cost":[""],"time":"2","hp":1,"icons":[""],"spd":4,"tct":"0","res":[""],"text":"Resource: Sacrifice this unit to gain 1 meat. During night, if this unit is ready, you may draw one extra card, these cards are able to go past your hand size. If you do this, exhaust this card and start the day with 1 less time.","vp":-1,"trait":"Animal","type":"Unit","rare":"BLUE"},
    "Stampede":{"cost":["M"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Play during an engagement. Deal 1 damage each, up to X participating enemy units. X is the number of participating friendly animals","vp":-1,"trait":"","type":"Event","rare":"BLUE"},
    "Ram":{"cost":["M"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Strike: Exhaust an animal or beast unit and deal one damage to it to deal 2 damage to an participating enemy unit or 1 damage to an enemy building on the front.","vp":-1,"trait":"Attack","type":"Event","rare":"BLUE"},
    "Cowardice":{"cost":["C"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Play on enemy unit. If this unit is the only enemy unit in the engagement, it must flee.","vp":-1,"trait":"Attribute","type":"Detriment","rare":"BLUE"},
    "Resilience":{"cost":["S"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade unit. When this unit takes damage, you may exhaust this card and discard 1 card to block 1 damage.","vp":-1,"trait":"Attribute","type":"Upgrade","rare":"BLUE"},
    "Just a Little More Time":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":[""],"text":"Action: Gain 1 time.","vp":-1,"trait":"","type":"Event","rare":"Rare"},
    "Growing Forest":{"cost":["W", "W"],"time":"3","hp":2,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Store 8 wood. During night, for every 3 wood stored here, generate 1 wood. When this card takes damage, you may spend any number of wood stored here to block an equal amount of damage.","vp":1,"trait":"Production, Terrain","type":"Building","rare":"Rare"},
    "Rose":{"cost":["Q", "Q", ""],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Play on a non-VP unit. When a another friendly unit heals one or more health, exhaust this card to heal 1 hp. ","vp":-1,"trait":"","type":"Upgrade","rare":"BLUE"},
    "Wither":{"cost":["Q", "Q"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["C"],"text":"Play on enemy unit. When a friendly unit would be healed 1 or more health, instead deal 1 damage to attached unit.","vp":-1,"trait":"","type":"Detriment","rare":"BLUE"},
    "Farm":{"cost":["W", "W"],"time":"3","hp":4,"icons":[""],"spd":-1,"tct":"","res":["M"],"text":"Action: Exhaust this card and spend 1 time and 1 gold to summon a Common animal","vp":1,"trait":"Structure","type":"Building","rare":"BLUE"},
    "Dragon's Hoard":{"cost":["2G", "2M"],"time":"6","hp":12,"icons":[""],"spd":-1,"tct":"","res":["A", "W", "G"],"text":"Store 5 gold. This card starts with 5 gold stored. When an attack is declared on this front, you may ready a beast.","vp":3,"trait":"Structure, Cave","type":"Building","rare":"Rare"},
    "The Devastator":{"cost":["5A"],"time":"3","hp":8,"icons":["D", "D"],"spd":3,"tct":"3","res":["A"],"text":"When this unit takes damage from an attack, deal an equal amount of damage back to the attacker. If this unit heals 1 or more health, choose and discard 1 card from your hand","vp":1,"trait":"Chivalry, Military","type":"Unit","rare":"Unique"},
    "Spiked Armor":{"cost":["A", "A", "A"],"time":"2","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade unit. After attached unit takes 1 or more damage from a unit without ranged, exhaust this upgrade to deal an equal amount of damage to that unit (even if attached unit was defeated).","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"Rare"},
    "Shield Spikes":{"cost":["A"],"time":"1","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["A"],"text":"Upgrade unit. After attached unit loses 1 or more shields from an enemy unit without ranged, 1 damage to that unit.  ","vp":-1,"trait":"Equipment","type":"Upgrade","rare":"BLUE"},
    "Sword of Mercy":{"cost":["S", "S"],"time":"5","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["S"],"text":"Upgrade unit. Attached unit gains +1 tactics and a black damage icon. If attached unit would defeat another, you may instead set the unit to 1 health and have them retreat to draw 2 cards.","vp":-1,"trait":"","type":"Upgrade","rare":"Unique"},
    "Burnt Ashes":{"cost":[""],"time":"0","hp":-1,"icons":[""],"spd":-1,"tct":"","res":["W"],"text":"Play only when a building is defeated by a Flame card's damage. Play on that building's front. Whenever a building is played on this front, you may summon Flames to it, if able.","vp":-1,"trait":"Burning","type":"Detriment","rare":"BLUE"},
}
let cardCount = Object.keys(CardDB).length;
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
const cardTraits = [
	"Animal","Aquatic","Attack","Attribute","Beast","Boat",
	"Book","Burning","Cancel","Cavalry","Chivalry","Civilian",
	"Court","Dark","Defensive","Disease","Equipment",
	"Goal","Military","Music","Outlaw","Production","Ranged",
	"Resource","Royalty","Strategy","Structure","Terrain","Trap",
	"Vehicle","Viking","Water","Weapon","Winter"
];

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
	let traitRequirements = [];
	let traitBans = [];
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
	for (var t of cardTraits) {
		const n = document.getElementById(t).data;
		if (n == 0) {
			traitBans.push(t);
		} else if (n == 2) {
			traitRequirements.push(t);
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

		//Trait requirements and bans
		for (let trait of traitRequirements) {
			if (!CardDB[c]["trait"].includes(trait)) {
				good = false;
			}
		}
		for (let trait of traitBans) {
			if (CardDB[c]["trait"].includes(trait)) {
				good = false;
			}
		}


		// if (!ArtCards.includes(c)) {
		// 	good = false;
		// }
		if (good) {
			matchCards.push(c);
		}
	}
    let goodCount = matchCards.length;
    let selectorCounter = document.getElementById("selectorCounter");
    console.log(selectorCounter.innerHTML)
    selectorCounter.innerHTML = "Showing " + goodCount + "/" + cardCount + " cards"
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
	document.getElementById("deckCount").innerHTML = "_Deck_ " + count + "/50";
}

function initCriteriaButtons() {
	const traitsDiv = document.getElementById('cardTraits');
	for (let i = 0; i < cardTraits.length; i++) {
		let trait = cardTraits[i];
		const btn = document.createElement('button');
		btn.classList.add("buttonStyle");
		btn.classList.add("reqBtn");
		btn.data = "1";
		btn.id = trait;
		btn.innerText = trait
		const img = document.createElement('img');
		img.src = "trait_images/"+trait+".png";
		img.width = "60";
		img.height = "52";
		btn.appendChild(img);
		traitsDiv.appendChild(btn)
	}



	let elements = document.getElementsByClassName("reqBtn");
	for (let i = 0; i < elements.length; i++) {
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
			"Rare": 2,
			"Unique": 1
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
	let btn = document.getElementById('unitTypeBtn');
	let div = document.getElementById('cardTypes');
	btn.addEventListener("click", function(){
		if (div.style.display === "block") {
			div.style.display = "none";
		} else {
			div.style.display = "block";
		}
	}, false);

	let btn2 = document.getElementById('unitTraitsButton');
	let div2 = document.getElementById('cardTraits');
	btn2.addEventListener("click", function(){
		if (div2.style.display === "block") {
			div2.style.display = "none";
		} else {
			div2.style.display = "block";
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