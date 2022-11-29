var hottakeButton = document.querySelector("#hottake-button");
var subjectText = document.querySelector("#subject-text");
var theseText = document.querySelector("#these-text");
var currentSubject = "FKW ist der beste Podcast";

window.onload = function() {
    numberRandom = generaRandom(phSubject.length);
    subjectText.innerHTML = phSubject[numberRandom];
    numberRandom = generaRandom(phThese.length);
    theseText.innerHTML = phThese[numberRandom];
};

hottakeButton.addEventListener('click', game);

function game() {
    const attempts = numberAttempts(3, 12);
    let t1 = 0,
        t2 = 0;

    let slot1 = setInterval(function() {
        numberRandom = generaRandom(phSubject.length);
        subjectText.innerHTML = phSubject[numberRandom];
        console.log(phSubject[numberRandom]);
        t1++;
        if (t1 == attempts) {
            clearInterval(slot1);
            return null;
        }
    }, 100);

    let slot2 = setInterval(function() {
        t2++;
        if (t2 == attempts) {
            clearInterval(slot2);
            return null;
        }
        numberRandom = generaRandom(phThese.length);
        theseText.innerHTML = phThese[numberRandom];
        console.log(phThese[numberRandom]);
    }, 100);
}

function generaRandom(max) {
    return Math.floor((Math.random() * max));
}

function numberAttempts(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var phSubject = [
   
    "Jumbo-Visma",
"UAE Team Emirates",
"INEOS Grenadiers",
"BORA-hansgrohe",
"Intermarché-Wanty-Gobert",
"Quick-Step Alpha Vinyl Team",
"Groupama-FDJ",
"Bahrain Victorious",
"Alpecin-Deceuninck",
"Cofidis",
"Movistar Team",
"Team Arkéa-Samsic",
"Trek-Segafredo",
"Lotto Soudal",
"AG2R Citroën Team",
"Team BikeExchange-Jayco",
"TotalEnergies",
"EF Education-EasyPost",
"Team DSM",
"Israel-Premier Tech",
"Astana Qazaqstan Team",
"Uno-X Pro Cycling Team",
"B&B Hotels-KTM",
"Bingoal Pauwels Sauces WB",
"Bolton Equities Black Spoke",
"EOLO-Kometa Cycling Team",
"Sport Vlaanderen-Baloise",
"Groupama-FDJ Conti",
"Drone Hopper-Androni Giocattoli",
"Bardiani CSF Faizanè",
    "Jeder einzelne Raublinger Radlbua",
    "Tadej Pogacar",
"Wout Van aert",
"Remco Evenepoel",
"Jonas Vingegaard",
"Aleksandr Vlasov",
"Arnaud De lie",
"Stefan Küng",
"Alexander Kristoff",
"Mathieu Van der poel",
"Michael Matthews",
"Alejandro Valverde",
"Sergio Higuita",
"Christophe Laporte",
"Daniel Martinez",
"Arnaud Démare",
"Biniam Girmay",
"Pello Bilbao",
"Richard Carapaz",
"Benoît Cosnefroy",
"Mads Pedersen",
"Enric Mas",
"Jasper Philipsen",
"Primoz Roglic",
"Jai Hindley",
"Juan Ayuso",
"Adam Yates",
"Tim Merlier",
"Matej Mohoric",
"Carlos Rodriguez",
"Mikel Landa",
"Nairo Quintana",
"Geraint Thomas",
"Thymen Arensman",
"Dylan Teuns",
"Guillaume Martin",
"Dylan Groenewegen",
"Joao Almeida",
"Valentin Madouas",
"Hugo Hofstetter",
"Warren Barguil",
"Simon Yates",
"Ben O'connor",
"Ethan Hayter",
"Dylan Van baarle",
"Matteo Trentin",
"David Gaudu",
"Dries Van gestel",
"Fabio Jakobsen",
"Lorenzo Rota",
"Mattias Skjelmose jensen",
"Olav Kooij",
"Tiesj Benoot",
"Neilson Powless",
"Romain Bardet",
"Quinten Hermans",
"Louis Meintjes",
"Sam Bennett",
"Diego Ulissi",
"Marc Hirschi",
"Iván García cortina",
"Axel Zingle",
"Miguel Ángel López",
"Brandon Mcnulty",
"Benjamin Thomas",
"Julien Simon",
"Jesus Herrada",
"Luca Mozzato",
"Amaury Capiot",
"Mauro Schmid",
"Damiano Caruso",
"Matis Louvel",
"Greg Van avermaet",
"Bauke Mollema",
"Simone Consonni",
"Tom Pidcock",
"Tim Wellens",
"Danny Van poppel",
"Anthony Turgis",
"Jan Hirt",
"Ion Izagirre",
"Max Walscheid",
"Victor Campenaerts",
"Vincenzo Nibali",
"Alex Aranburu",
"Andrea Piccolo",
"Caleb Ewan",
"Domenico Pozzovivo",
"Alexis Vuillermoz",
"Jakob Fuglsang",
"Giacomo Nizzolo",
"Mark Cavendish",
"Pavel Sivakov",
"Magnus Sheffield",
"Rigoberto Uran",
"Toms Skujins",
"Ruben Guerreiro",
"Nacer Bouhanni",
"Michael Woods",
"Jasper Stuyven",
"Esteban Chaves",
    "Alberto Bettiol",
"Oliver Naesen",
"Bryan Coquard",
"Dries De bondt",
"Kévin Vauquelin",
"Gerben Thijssen",
"Alexander Kamp",
"Stefano Oldani",
"Julian Alaphilippe",
"Piet Allegaert",
"Natnael Tesfazion",
"Ivan Sosa",
"Rudy Molard",
"Simon Geschke",
"Tobias Foss",
"Søren Kragh Andersen",
"Pierre Latour",
"Mauri Vansevenant",
"Rasmus Tiller",
"Simon Clarke",
"Jhonnatan Narvaez",
"Edward Theuns",
"Jack Haig",
"Jordi Meeus",
"Max Kanter",
"Vincenzo Albanese",
"Filippo Ganna",
"Jay Vine",
"Attila Valter",
"Phil Bauhaus",
"Alessandro Covi",
"Michal Kwiatkowski",
"Bob Jungels",
"Matteo Sobrero",
"Tobias Halland Johannessen",
"Giulio Ciccone",
"Thibaut Pinot",
"Loic Vliegen",
"Gino Mäder",
"Sandy Dujardin",
"Andrea Pasqualon",
"Marco Haller",
"Andrea Bagioli",
"Philippe Gilbert",
"Kasper Asgreen",
"Andreas Leknessund",
"Jan Tratnik",
"Marc Sarreau",
"Santiago Buitrago",
"Emanuel Buchmann",
"Hugo Houle",
"Lucas Plapp",
"Søren Wærenskjold",
"Henok Mulubrhan",
"Peter Sagan",
"Mikkel Honore",
"Yves Lampaert",
"Fernando Gaviria",
"Alexey Lutsenko",
"Anatolii Budiak",
"Nils Politt",
"Florian Sénéchal",
"Jambaljamts Sainbayar",
"Hugh Carthy",
"Orluis Aular",
"Andreas Kron",
"Ben Turner",
"Samuele Battistella",
"Koen Bouwman",
"Corbin Strong",
"Filippo Zana",
"Pascal Ackermann",
"Quentin Pacher",
"Juan Pedro Lopez",
"Patrick Konrad",
"Lennard Kämna",
"James Fouche",
"Fred Wright",
"Jake Stewart",
"Axel Laurance",
"Sebastien Reichenbach",
"Jan Polanc",
"Magnus Cort",
"Mathias Vacek",
"Mathieu Burgaudeau",
"Nicola Conci",
"Stefan Bissegger",
"Carlos Verona",
"Georg Zimmermann",
"Maxim Van gils",
"Tom Devriendt",
"Gonzalo Serrano",
"Xandro Meurisse",
"Reinardt Janse van rensburg",
"Aaron Gate",
"Marc Soler",
"Gianni Marchand",
"Igor Chzhan",
"Robert Stannard",
"Milan Menten",
    "Kenneth Van rooy",
"Andrea Vendrame",
"Taco Van der hoorn",
"Felix Grossschartne",
"Filippo Fiorelli",
"Ben Tulett",
"George Bennett",
"Adrien Petit",
"Pierre Barbier",
"Rafal Majka",
"Richie Porte",
"Gianni Vermeersch",
"Kaden Groves",
"Antonio Pedrero",
"Clément Venturini",
"Jason Tesson",
"Sebastian Molano",
"Steff Cras",
"Giovanni Aleotti",
"Michael Storer",
"Edward Dunbar",
"Valentin Ferron",
"Sep Vanmarcke",
"Victor Lafay",
"Cian Uijtdebroeks",
"Lennert Teugels",
"Jasper De buyst",
"Connor Swift",
"Clément Champoussin",
"Sylvain Moniquet",
"Wilco Kelderman",
"Jenthe Biermans",
"Sasha Weemaes",
"Timothy Dupont",
"Benjamin Dyball",
"Tao Geoghegan hart",
"Tom Sexton",
"Yevgeniy Fedorov",
"Johannes Staune-mittet",
"Jonathan Lastra",
"Lorenzo Fortunato",
"Alessandro Fedeli",
"Coen Vermeltfoort",
"Davide Formolo",
"Rohan Dennis",
"Anthon Charmig",
"Bram Welten",
"Nariyuki Masuda",
"Edvald Boasson-hagen",
"Wout Poels",
"Patrick Bevin",
"Elie Gesbert",
"Jakub Mareczko",
"Alberto Dainese",
"Emiliano Contreras",
"Sjoerd Bax",
"Sam Watson",
"Itamar Einhorn",
"Luka Mezgec",
"Stanislaw Aniolkowski",
"Bruno Armirail",
"Andrey Zeits",
"Matteo Jorgenson",
"Lorrenzo Manzin",
"Daniel Mclay",
"Guillaume Boivin",
"Eduardo Sepulveda",
"Einer Rubio",
"Torstein Træen",
"Madis Mihkels",
"Florian Vermeersch",
"Nikias Arndt",
"Remi Cavagna",
"Dawit Yemane",
"Cristian Rodriguez",
"Alan Banaszek",
"Marceli Boguslawski",
"Laurent Pichon",
"Achraf Ed doghmy",
"Matthew Dinham",
"Sam Welsford",
"Sepp Kuss",
"Sonny Colbrelli",
"Oscar Riesebeek",
"Luis León Sánchez",
"Casper Van uden",
"Anthony Delaplace",
"Mike Teunissen",
"Barnabas Peak",
"Davide Ballerini",
"Mark Stewart",
"Mykhaylo Kononenko",
"Alec Segaert",
"Matevz Govekar",
"Nickolas Zukowsky",
"Felix Gall",
"Hermann Pernsteiner",
"Marijn Van den berg",
"Gustav Basson",
"Geoffrey Bouchard"

    




];

var phThese = [
    "ist komplet overrated",
    "kann nicht abfahren",
    "ist doch schon viel zu alt",
    "ist underrated",
    "... noch nie gehört",
    "👎👎👎",
    "ist unglaublich unsympathisch",
    "ist super sympatisch",
    "wird keine Grand Tour gewinnen",
    "holt kein Top 10 Ergebnis",
    "ist Bahnfahrer, aber nix für die Straße",
    "sollte nicht zur Tour fahren",
    "dem fehlt einfach der Punch",
    "ist mehr so der punchy Typ",
    "ist ein absoluter Sexmann",
    "👍👍👍",
    "hat beim Giro keine Chance",
    "gewinnt noch zwei Monumente",
    "weiß ich nicht...",
    "Sprinter naja",
    "verschenktes Potenzial",
    "an erster Stelle nur im Besenwagen",
    "gewinnt vielleicht als Gravelprofi nochmal was",
    "die größte Hoffnung seit Simon Geschke im Bergtrikot", 
    "ist in 1-2 Jahren einer für Isreal", 
    "sollte mal sein Trikot zumachen",
    "den Namen hab ich noch nie gehört", 
    "naja wie auch immer, ist das ein guter Preis für ein Specialized?",  
    "sitzt so elegant auf dem Rad",
    "könnte Pogacar dieses Jahr gefährlich werden", 
    "fährt heute in Gelb",
    "war mal professioneller Skispringer",
    "sollte Domestique bleiben",
    "fährt ausschließlich Rimbrake um Gewicht einzusparen",  
    "fährt besser nur noch Jedermann-Rennen",
    "schläft schon im gelben Trikot",
    "ist aerodynamisch wie ein Backstein", 
    "fährt besser ab als Pidcock",
    "ist ein Gipelstümer",
    "gewinnt die Tour auf jeden Fall",
    "ist schon längst über seinen Zenit", 
    "der Fußballer?", 
    "ist der nächste Eddy Merckx", 
    "wäre mit dem richtigen Rad einer fürs Podium",
    "muss ich nichts zu sagen oder?", 
    "ich hab grade nicht zugehört, wo fährt der nochmal?",
    "weißt du da vielleicht mehr Lena?", 
    "der sympathische Deutsche", 
    "ist sowas wie der Philipp Hosiner des Radsports",  
    "strebt bald eine Triathlon-Karriere an", 
    "wäre, wenn er straight edge leben würde schneller" 

];

var emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
