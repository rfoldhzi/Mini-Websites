const ArtCards = ['Soldier', 'Knight', 'Capital', 'Barbarian', 'Peasant', 'Horse Rider', 'King', 'Archer', 'Bandit', 'Prince', 'Rogue', 'Farmer', 'Catapult', 'Mine', 'Mill', 'Market', 'Guard', 'Defender', 'Raider', 'Hunter', 'Marksman', 'Cow', 'Pig', 'Bank', 'Lumber Yard', 'Warehouse', 'Messenger', 'Royal Guard', 'Guard Captain', 'Royal Knight', 'Angry Mob', 'Jester', 'Book', 'Well Prepared', 'Surprise Attack', 'Builder', 'Dragon', 'Rooster', 'Sentry', 'Expert Archer', 'Knight Officer', 'War Hero', 'Flaming Archer', 'Coward', 'Dark Prince', 'Dark Knight', 'Dark King', 'Moat', 'Log Trap', 'Sword', 'Anvil', 'Crown', 'Front Focused', 'Warning Horn', 'Brawler', 'Winter Soldier', 'Frost Knight', 'Ice Archer', 'Snowman', 'Ice King', 'Plague', 'Rest and Recovery', 'Standoff', 'Snowball', 'Flock', 'Doctor', 'Soldier Squadron', 'Double Cross', 'Two Steps Ahead', 'Bribe', 'Confusion', 'Fear', 'Testudo Formation', 'Warhorn', 'Black Death', 'Hourglass', 'Rally', 'Captain', 'Salmon', 'Giant', 'Regicide', 'Revolution!', 'Decisive Victory', 'Book of Nobility', 'Informant', 'Rumors', 'Snow Bandit', 'Noble Sacrifice', 'Fight Me', 'Disruption', 'Crow', 'Astrolabe', 'Heavy Rain', 'Cloak', 'Rebel', 'Poison', 'Rat', 'Nightmares', 'Dreams', 'Horse', 'Exhaustion', 'Unsanctioned Experiments', 'The Cavalry has arrived', 'Ice Dragon', 'Igloo', 'Preemptive Strike', 'Standard Viking', 'Axe Viking', 'Shield Viking', 'Viking Boat', 'Steep Mountain', 'Trade Market', 'Spike-O-Pult', 'Taskmaster', 'Viking King', 'Booming Economy', 'Heavy Rain', 'Intense Fog', 'Leather Pouch', 'The Fog Has Lifted!', 'Behind Schedule', 'Chaotic Misinformation', 'Take it to the Top', 'Old Memories', 'War Hog', 'Defend the City', 'Wise Dragon'];

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
			if (!CardDB[c]["trait"].includes(trait) && !CardDB[c]["text"].toLowerCase().includes(trait.toLowerCase())) {
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
	let auxCount = 0;
	for (var i = 0; i < elements.length; i++) {
		if (CardDB[elements[i].name]["aux"]) {
			auxCount += Number(elements[i].count);
		} else {
			count += Number(elements[i].count);
		}
	}
	document.getElementById("deckCount").innerHTML = "Deck " + count + "/40";
	document.getElementById("auxDeckCount").innerHTML = "Aux Deck " + auxCount + "/20";
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

		let count = 0
		// Count how many there are
		for (var c in CardDB) {
			if (CardDB[c]["trait"].includes(trait) || CardDB[c]["text"].toLowerCase().includes(trait.toLowerCase())) {
				count++;
			}
		}
		btn.innerHTML = trait + "<br>x"+count;

		const img = document.createElement('img');
		img.src = "trait_images/"+trait.toLowerCase()+".png";
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
		btn.classList.add(CardDB[text]["type"]+"Class")
		btn.classList.add(CardDB[text]["rare"]+"Class")
		if (CardDB[text]["aux"]) {
			btn.style.color = "#ffe761"
		}
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
	const btnGroup3 = document.getElementById('btnGroup3');

	const existBtn = document.getElementById(cardName + 'card');

	if (existBtn) {
		const Rarity = {
			"Common": 8,
			"BLUE": 4,
			"": 4,
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
		btn.classList.add(CardDB[cardName]["rare"]+"Class")
		btn.classList.add(CardDB[cardName]["type"]+"Class")
		
		btn.addEventListener('mouseover', changeDefOver);
		btn.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
			removeCard(this.getAttribute("alt"));
			return false;
		}, false);
		if (CardDB[cardName]["aux"]) {
			btnGroup3.appendChild(btn);
		} else {
			btnGroup.appendChild(btn);
		}
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