const { executablePath } = require('puppeteer');
const ptr = require('puppeteer');
const delay = require('delay');
const chalk = require('chalk');
const moment = require('moment');

function random_item(kata2)
{
  
return kata2[Math.floor(Math.random()*kata2.length)];
     
}

var kata2 = [
     "Tetap Semangat Commentnya bang, didepan ada yang menanti",
     "Tetap chat walaupun mata bengkak",
     "Tetap comment walaupun mata ini udah ga kuat",
     "seangat abang abangku,kita gas kan",
     "mata bengkak tetap chat bhhhhhhh",
     "jangan lupa ngopi biar kuat kita chat",
	 "no og no gg",
	 "semnagt bang",
	 "iwa",
	 "I'll have you know I've written over fifty novels",
"Just go ahead and press that button.",
"The hawk didn’t understand why the ground squirrels didn’t want to be his friend.",
"It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.",
"Jeanne wished she has chosen the red button.",
"She wore green lipstick like a fashion icon.",
"Joe discovered that traffic cones make excellent megaphones.",
"You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war",
"abc123 ",
"password ",
"passwd ",
"123456 ",
"newpass ",
"notused ",
"Hockey ",
"internet ",
"asshole ",
"Maddock ",
"12345678 ",
"newuser ",
"computer ",
"Internet ",
"Mickey ",
"qwerty ",
"fiction ",
"Cowboys ",
"Jordan ",
"Hatton ",
"test ",
"Michael ",
"ou812 ",
"orange ",
"1234 ",
"Beavis ",
"123 ",
"tigger ",
"Soccer ",
"shadow ",
"Purple ",
"Sports ",
"dragon ",
"michael ",
"wheeling ",
"mustang ",
"Monkey ",
"Qwerty ",
"School ",
"Snoopy ",
"Vikings ",
"jennifer ",
"money ",
"Justin ",
"mickey ",
"0246 ",
"a1b2c3 ",
"chris ",
"david ",
"foobar ",
"Robert ",
"buster ",
"harley ",
"jordan ",
"stupid ",
"* ",
"apple ",
"fred ",
"123abc ",
"Amanda ",
"Dakota ",
"summer ",
"sunshine ",
"andrew ",
"hello ",
"maggie ",
"monday ",
"pascal ",
"patrick ",
"Dallas ",
"Jessica ",
"Nicole ",
"Sendit ",
"Smokey ",
"baseball ",
"daniel ",
"diamond ",
"joshua ",
"michelle ",
"mike ",
"silver ",
"1q2w3e ",
"Friends ",
"George ",
"Shadow ",
"Summer ",
"bandit ",
"coffee ",
"falcon ",
"fuckyou ",
"pepper ",
"richard ",
"thomas ",
"undead ",
"!@#$% ",
"Andrew ",
"Buster ",
"Cowboy ",
"Eagles ",
"Elwood ",
"Master ",
"Nathan ",
"changeme ",
"charlie ",
"golf ",
"green ",
"linda ",
"merlin ",
"monkey ",
"nite ",
"secret ",
"soccer ",
"steve ",
"1234567 ",
"Apples ",
"Dragon ",
"Flower ",
"Mustang ",
"Pepper ",
"george ",
"guest ",
"hockey ",
"james ",
"koko ",
"matthew ",
"pookie ",
"robert ",
"xxx ",
"Dolphin ",
"Killer ",
"Miller ",
"Packers ",
"Tigger ",
"alex ",
"canada ",
"john ",
"master ",
"Chicago ",
"Kitten ",
"Polaris ",
"Spanky ",
"Tennis ",
"Thomas ",
"Tweety ",
"hammer ",
"letmein ",
"magic ",
"murphy ",
"scooter ",
"service ",
"snoopy ",
"sophie ",
"thx1138 ",
"tiger ",
"Ashley ",
"Basket ",
"Ginger ",
"Nirvana ",
"Teacher ",
"Yellow ",
"blue ",
"dave ",
"hunter ",
"sarah ",
"thursday ",
"welcome ",
"Bandit ",
"Volley ",
"aaaaaa ",
"ashley ",
"bear ",
"boomer ",
"calvin ",
"dallas ",
"friday ",
"happy ",
"jason ",
"madison ",
"martin ",
"mother ",
"nicole ",
"purple ",
"ranger ",
"123go ",
"Airhead ",
"Braves ",
"Sparky ",
"angela ",
"brandy ",
"cindy ",
"dakota ",
"donald ",
"football ",
"ncc1701 ",
"shannon ",
"soleil ",
"taylor ",
"tuesday ",
"Abcdef ",
"August ",
"Footbal ",
"Heather ",
"Johnson ",
"Maggie ",
"Matthew ",
"Michelle ",
"Monday ",
"Pookie ",
"Rabbit ",
"Richard ",
"Smiley ",
"amanda ",
"anthony ",
"camaro ",
"carmen ",
"cowboy ",
"genesis ",
"jesus ",
"joseph ",
"justin ",
"miller ",
"ncc1701d ",
"pamela ",
"picture ",
"princess ",
"rabbit ",
"rocket ",
"sierra ",
"steven ",
"success ",
"tennis ",
"victoria ",
"willow ",
"Abcdefg ",
"Bubba ",
"Charlie ",
"Compute ",
"Computer ",
"Fuckyou ",
"Hammer ",
"Jeremy ",
"Library ",
"Password ",
"Runner ",
"Scooter ",
"Shorty ",
"Silver ",
"Taylor ",
"Tigers ",
"Travis ",
"Viper ",
"digital ",
"duke ",
"freedom ",
"gandalf ",
"ginger ",
"heather ",
"iloveyou ",
"jessica ",
"killer ",
"lizard ",
"loser ",
"mark ",
"monica ",
"oscar ",
"peanut ",
"pentium ",
"peter ",
"phoenix ",
"piglet ",
"rainbow ",
"runner ",
"sam ",
"saturn ",
"scott ",
"skippy ",
"startrek ",
"temp ",
"111111 ",
"123123 ",
"2welcome ",
"Basebal ",
"Batman ",
"Brandy ",
"Cassie ",
"Dustin ",
"Fishing ",
"Harley ",
"Hunter ",
"Orlando ",
"Peaches ",
"Scotty ",
"Steven ",
"Voyager ",
"andrea ",
"ass ",
"avalon ",
"batman ",
"brandon ",
"bubba ",
"casey ",
"eagle ",
"frog1 ",
"fuckme ",
"info ",
"love ",
"marie ",
"misty ",
"natasha ",
"newyork ",
"nss ",
"poohbear ",
"rachel ",
"turtle ",
"walter ",
"wizard ",
"00000000 ",
"Daniel ",
"Friday ",
"Hornets ",
"Joshua ",
"Online ",
"Rodman ",
"Science ",
"andy ",
"asdf ",
"august ",
"austin ",
"beavis ",
"brenda ",
"brian ",
"butthead ",
"charles ",
"cheese ",
"doctor ",
"dolphin ",
"flower ",
"jonathan ",
"junior ",
"knight ",
"marley ",
"maverick ",
"molson ",
"morgan ",
"mouse ",
"nathan ",
"nissan ",
"rebecca ",
"shalom ",
"smile ",
"sparky ",
"stephen ",
"whatever ",
"william ",
"696969 ",
"Anthony ",
"Casper ",
"Helpme ",
"Jessie ",
"Mother ",
"Pebbles ",
"Pentium ",
"Secret ",
"Sonics ",
"Viking ",
"Wolves ",
"access ",
"alpha ",
"angel ",
"ath ",
"banane ",
"bob ",
"bond007 ",
"booger ",
"boris ",
"chicken ",
"cookie ",
"elephant ",
"elvis ",
"emily ",
"eric ",
"france ",
"gizmo ",
"goober ",
"horses ",
"island ",
"jeffrey ",
"jerry ",
"joe ",
"jupiter ",
"justice ",
"lisa ",
"lucky ",
"mindy ",
"missy ",
"muffin ",
"music ",
"protel ",
"rose ",
"sandy ",
"sharon ",
"snake ",
"spider ",
"spring ",
"test1 ",
"tommy ",
"toyota ",
"vincent ",
"wqsb ",
"7777 ",
"8675309 ",
"Barney ",
"Bowling ",
"Camaro ",
"Casio ",
"Cookie ",
"Froggy ",
"Golfer ",
"Junior ",
"Knights ",
"Lakers ",
"Melissa ",
"Patrick ",
"Rachel ",
"Raiders ",
"Reggie ",
"Shelly ",
"Shithead ",
"Speedy ",
"Thunder ",
"Windows ",
"albert ",
"alexande ",
"america7 ",
"banana ",
"barbara ",
"barney ",
"billy ",
"biteme ",
"black ",
"chelsea ",
"claire ",
"connie ",
"debbie ",
"delta ",
"dennis ",
"eeyore ",
"fishing ",
"fucker ",
"helpme ",
"honda ",
"indiana ",
"jackson ",
"jasmine ",
"karen ",
"kevin ",
"lestat ",
"logan ",
"louis ",
"louise ",
"micro ",
"mitchell ",
"nirvana ",
"none ",
"paul ",
"pepsi ",
"perry ",
"phantom ",
"pierre ",
"rascal ",
"red ",
"reddog ",
"roger ",
"sanjose1 ",
"simon ",
"star ",
"superman ",
"tom ",
"topgun ",
"wilson ",
"654321 ",
"Aikman ",
"Animal ",
"Avatar ",
"Basketb ",
"Gandalf ",
"Hacker ",
"Hendrix ",
"Hunting ",
"Iceman ",
"Leslie ",
"Letmein ",
"Scooby ",
"Snicker ",
"System ",
"Tazman ",
"Tootsie ",
"Turtle ",
"abcd1234 ",
"adg ",
"amber ",
"anna ",
"annie ",
"arthur ",
"benjamin ",
"bill ",
"boston ",
"braves ",
"buddy ",
"cgj ",
"control ",
"coyote ",
"daisy ",
"dog ",
"dorothy ",
"douglas ",
"edward ",
"faith ",
"family ",
"fish ",
"fisher ",
"ford ",
"freak1 ",
"friend ",
"grant ",
"iceman ",
"jack ",
"jeremy ",
"jim ",
"library ",
"marcel ",
"molly ",
"mountain ",
"nat ",
"nicarao ",
"olivia ",
"pat ",
"pearljam ",
"pmc ",
"ppp ",
"prince ",
"ryan ",
"salmon ",
"school ",
"skeeter ",
"special ",
"spencer ",
"stinky ",
"sunflowe ",
"teacher ",
"test123 ",
"tony ",
"travel ",
"viper ",
"wally ",
"winston ",
"winter ",
"wolf ",
"yellow ",
"zephyr ",
"ziggy ",
"!@#$%^ ",
"1928 ",
"2112 ",
"90210 ",
"Arthur ",
"Biteme ",
"Blackie ",
"Boomer ",
"Bubbles ",
"Carrie ",
"Charles ",
"Denise ",
"Fender ",
"Fluffy ",
"Fucker ",
"Fuckme ",
"Golfing ",
"Intel ",
"Jasmine ",
"Joseph ",
"Knight ",
"Lindsey ",
"Loser ",
"Orange ",
"Peanut ",
"People ",
"Porsche ",
"Rebecca ",
"Rhonda ",
"Sanders ",
"Speech ",
"Tanner ",
"Teresa ",
"Turbo ",
"Volleyb ",
"Wrestle ",
"alaska ",
"apples ",
"asdfgh ",
"bigdog ",
"boss ",
"casper ",
"cat ",
"chapman ",
"chocolat ",
"christin ",
"classroo ",
"cocacola ",
"coke ",
"cougar ",
"cricket ",
"crystal ",
"danny ",
"david1 ",
"dean ",
"disney ",
"einstein ",
"elizabet ",
"felix ",
"fox ",
"frank ",
"giants ",
"grace ",
"gregory ",
"hannah ",
"hendrix ",
"hola ",
"howard ",
"jake ",
"janice ",
"jesus1 ",
"julian ",
"kelsey ",
"kitten12 ",
"lacrosse ",
"lakers ",
"larry ",
"leslie ",
"marina ",
"matt ",
"melissa ",
"millie ",
"montana ",
"moose ",
"morris ",
"orion ",
"pantera ",
"paris ",
"piano ",
"pizza ",
"please ",
"popcorn ",
"q1w2e3 ",
"radio ",
"sales ",
"sammy ",
"shelly ",
"shithead ",
"stanley ",
"steelers ",
"stimpy ",
"student ",
"susan ",
"sydney ",
"tammy ",
"testtest ",
"texas ",
"thunder ",
"tweety ",
"victory ",
"virginia ",
"willie ",
"willy ",
"win95 ",
"zapata ",
"1 ",
"Alaska ",
"Alicia ",
"Bailey ",
"Banana ",
"Beaner ",
"Bigdog ",
"Blazer ",
"Blondie ",
"Brandon ",
"Center ",
"Cheese ",
"Chicken ",
"Chris ",
"Compaq ",
"Dreams ",
"Falcon ",
"Family ",
"Fisher ",
"Flyers ",
"Friend ",
"FuckYou ",
"Global ",
"Gopher ",
"Guitar ",
"Gymnast ",
"Hearts ",
"Huskers ",
"Kinder ",
"Larson ",
"Lestat ",
"Lindsay ",
"Minnie ",
"Muffin ",
"Pamela ",
"Panther ",
"Picard ",
"Pyramid ",
"Raider ",
"Rainbow ",
"Reddog ",
"Sampler ",
"Shannon ",
"Shotgun ",
"Sierra ",
"Skeeter ",
"Spanish ",
"Stacey ",
"Student ",
"Trixie ",
"Xanadu ",
"Yankees ",
"Zombie ",
"a12345 ",
"a1b2c3d4 ",
"abc ",
"adidas ",
"alexis ",
"angie ",
"april ",
"asdfjkl; ",
"baby ",
"betty ",
"bilbo ",
"bonnie ",
"booboo ",
"bradley ",
"brooke ",
"caitlin ",
"carrie ",
"chip ",
"chris1 ",
"christy ",
"cinder ",
"claude ",
"claudia ",
"colorado ",
"cowboys ",
"curtis ",
"daytek ",
"donna ",
"duck ",
"dusty ",
"eagle1 ",
"enigma ",
"francis ",
"francois ",
"franklin ",
"froggy ",
"gabriel ",
"ghost ",
"gopher ",
"grover ",
"happy1 ",
"helen ",
"henry ",
"honey ",
"horse ",
"house ",
"jackie ",
"jean ",
"jenny ",
"joey ",
"kelly ",
"laura ",
"lauren ",
"lincoln ",
"loveme ",
"margaret ",
"mary ",
"max ",
"mercedes ",
"mercury ",
"michel ",
"midnight ",
"mine ",
"mirror ",
"mozart ",
"nicholas ",
"nothing ",
"oliver ",
"packard ",
"pass ",
"peace ",
"phil ",
"porsche ",
"psycho ",
"pumpkin ",
"punkin ",
"puppy123 ",
"randy ",
"remember ",
"robin ",
"rosebud ",
"sadie ",
"sampson ",
"samson ",
"samuel ",
"simple ",
"smiley ",
"snowball ",
"spike ",
"starwars ",
"stever ",
"storm ",
"sun ",
"support ",
"suzanne ",
"sweetie ",
"sweetpea ",
"system ",
"tamara ",
"tech ",
"teresa ",
"terry ",
"theresa ",
"thumper ",
"victor ",
"vision ",
"water ",
"winner ",
"xavier ",
"yamaha ",
"121212 ",
"ABC123 ",
"America ",
"Arctic ",
"Austin ",
"Bonnie ",
"Cheryl ",
"Dorothy ",
"Drizzt ",
"Emmitt ",
"Farmer ",
"Flipper ",
"Goldie ",
"Goober ",
"Griffey ",
"Groovy ",
"Hotdog ",
"Jackson ",
"Jeffrey ",
"Jester ",
"Jimbo ",
"Johnny ",
"Kristi ",
"Lauren ",
"Lizard ",
"Louise ",
"Lover ",
"Montana ",
"Murphy ",
"NCC1701 ",
"PPP ",
"Pacers ",
"Packer ",
"Patches ",
"Peter ",
"RedDog ",
"Reebok ",
"Rosebud ",
"Sango ",
"Shadows ",
"Sharon ",
"Skippy ",
"Stanley ",
"Startrek ",
"Sunshin ",
"Swimmer ",
"TEACHERS ",
"Tinman ",
"Wildcat ",
"William ",
"Willie ",
"Wilson ",
"Yamaha ",
"aaron ",
"abigail ",
"alice ",
"allen ",
"amour ",
"animal ",
"archie ",
"bailey ",
"basf ",
"basketba ",
"beaver ",
"bingo ",
"blazer ",
"blonde ",
"bullshit ",
"business ",
"caroline ",
"cfj ",
"chicago ",
"clancy ",
"class ",
"cloclo ",
"colleen ",
"columbia ",
"connect ",
"country ",
"demo ",
"dixie ",
"domino ",
"donkey ",
"dreamer ",
"e ",
"eagles ",
"eddie ",
"farmer ",
"fgh ",
"fire ",
"flipper ",
"flowers ",
"floyd ",
"fluffy ",
"freddy ",
"friends ",
"frodo ",
"frog ",
"garden ",
"global ",
"golfer ",
"grumpy ",
"hansolo ",
"hawk ",
"health ",
"heidi ",
"help ",
"holly ",
"hoops ",
"iguana ",
"indigo ",
"italia ",
"jane ",
"jasper ",
"jessie ",
"jewels ",
"johnny ",
"joker ",
"judith ",
"katherin ",
"kids ",
"kingfish ",
"kristi ",
"laurie ",
"legend ",
"lindsay ",
"london ",
"loveyou ",
"lucy ",
"mac ",
"marc ",
"marilyn ",
"market ",
"marlboro ",
"marty ",
"maryjane ",
"matrix ",
"maxwell ",
"nancy ",
"nascar ",
"nelson ",
"network ",
"newcourt ",
"newton ",
"packers ",
"panther ",
"papa ",
"parker ",
"patricia ",
"penguin ",
"pickle ",
"porsche9 ",
"rain ",
"raven ",
"robbie ",
"robert1 ",
"rocky ",
"roses ",
"sabrina ",
"sailing ",
"sandra ",
"science ",
"scotty ",
"seven ",
"shoes ",
"smiles ",
"smokey ",
"snickers ",
"speedy ",
"spooky ",
"stephani ",
"strat ",
"stuart ",
"sunny ",
"sunset ",
"telecom ",
"temporal ",
"tigers ",
"time ",
"tinker ",
"tomcat ",
"trebor ",
"tristan ",
"truck ",
"video ",
"viper1 ",
"visa ",
"volvo ",
"warren ",
"weasel ",
"webmaste ",
"white ",
"woody ",
"xanadu ",
"zaphod ",
"!@#$%^ ",
"007 ",
"1022 ",
"13579 ",
"4444 ",
"666666 ",
"6969 ",
"Adidas ",
"Asdfgh ",
"Asshole ",
"Awesome ",
"Biology ",
"Bond007 ",
"Booboo ",
"Bradley ",
"Buffalo ",
"Calvin ",
"Canada ",
"Celtics ",
"Chester ",
"Colleen ",
"Connie ",
"Cooper ",
"Cracker ",
"Digital ",
"Disney ",
"Doobie ",
"Dream ",
"Dwight ",
"Eatme ",
"Farming ",
"Florida ",
"Flowers ",
"Gizmo ",
"Goalie ",
"Golden ",
"Gunner ",
"Harvey ",
"Homer ",
"Jasper ",
"Kristy ",
"Krystal ",
"Laser ",
"Maddog ",
"Marino ",
"Marvin ",
"Natasha ",
"Nelson ",
"October ",
"Parker ",
"Passwor ",
"Petunia ",
"Prince ",
"Pumpkin ",
"Qwert ",
"Ranger ",
"Sammie ",
"Senior ",
"Shirley ",
"Slayer ",
"Spunky ",
"Tandy ",
"Trouble ",
"Vette ",
"Warren ",
"Wheels ",
"Winter ",
"Zxcvbnm ",
"_ ",
"absolut ",
"adam ",
"adrian ",
"alexandr ",
"allo ",
"alpine ",
"anderson ",
"athena ",
"badger ",
"beagle ",
"beatles ",
"belle ",
"bitch ",
"bluebird ",
"bonjour ",
"bulldog ",
"bunny ",
"californ ",
"captain ",
"carol ",
"carole ",
"cedic ",
"chanel ",
"chester1 ",
"chloe ",
"coco ",
"coltrane ",
"compaq ",
"compton ",
"cooper ",
"corona ",
"cyclone ",
"dancer ",
"darwin ",
"dawn ",
"denise ",
"derek ",
"diablo ",
"digital1 ",
"direct1 ",
"dodger ",
"doogie ",
"dookie ",
"doom ",
"dragon1 ",
"dreams ",
"duckie ",
"dylan ",
"ellen ",
"export ",
"ferrari ",
"ferret ",
"firebird ",
"forest ",
"fuckoff ",
"garfield ",
"gateway ",
"gold ",
"goofy ",
"grateful ",
"guitar ",
"gunner ",
"heart ",
"herbert ",
"herman ",
"hermes ",
"history ",
"houston ",
"inside ",
"ironman ",
"isis ",
"italy ",
"jasmin ",
"jeanne ",
"julie ",
"kathleen ",
"keith ",
"kermit ",
"kimberly ",
"king ",
"koala ",
"kristen ",
"kristin ",
"laser ",
"leonard ",
"lionking ",
"macha ",
"macintos ",
"maddog ",
"major ",
"maxime ",
"melanie ",
"mexico ",
"mikey ",
"monet ",
"monique ",
"moon ",
"mouse1 ",
"napoleon ",
"ne1469 ",
"nellie ",
"niners ",
"olive ",
"one ",
"online ",
"oxford ",
"pacific ",
"painter ",
"panda ",
"pandora ",
"peaches ",
"peewee ",
"penelope ",
"picasso ",
"plato ",
"pluto ",
"police ",
"popeye ",
"portland ",
"power ",
"random ",
"raymond ",
"reality ",
"renee ",
"royal ",
"running ",
"salut ",
"samantha ",
"santa ",
"sassy ",
"scarlet ",
"scorpio ",
"scout ",
"sergei ",
"seven7 ",
"sexy ",
"shark ",
"sheba ",
"sheena ",
"sheila ",
"shelby ",
"simba ",
"singer ",
"skiing ",
"snow ",
"spanky ",
"stargate ",
"steele ",
"stella ",
"sunday ",
"sunrise ",
"sylvia ",
"tara ",
"tasha ",
"techno ",
"timothy ",
"toby ",
"today ",
"training ",
"trouble ",
"tyler ",
"unicorn ",
"violet ",
"walker ",
"wayne ",
"wendy ",
"whisky ",
"windsurf ",
"winnie ",
"wolves ",
"xfiles ",
"zebra ",
"zxcvbnm ",
"000000 ",
"007007 ",
"10sne1 ",
"1313 ",
"131313 ",
"1701d ",
"1a2b3c ",
"4runner ",
"54321 ",
"Aaaaaa ",
"Amiga ",
"Angela ",
"Animals ",
"Archie ",
"Badboy ",
"Balls ",
"Beaver ",
"BigBird ",
"Boner ",
"Booger ",
"Boston ",
"Brandi ",
"Brazil ",
"Brenda ",
"Button ",
"COWBOY ",
"Carol ",
"Chiefs ",
"Chipper ",
"Chrissy ",
"Coffee ",
"Cougar ",
"Country ",
"Curtis ",
"DRAGON ",
"Dennis ",
"Digger ",
"Doctor ",
"Firebird ",
"Frankie ",
"Gambit ",
"Gemini ",
"German ",
"Giants ",
"Grandma ",
"Grover ",
"Hanson ",
"Hawkeye ",
"Heidi ",
"Hobbit ",
"Hotrod ",
"Howard ",
"Iguana ",
"Ironman ",
"JSBach ",
"Jackie ",
"January ",
"Jennifer ",
"Joker ",
"Lakota ",
"Looney ",
"Malibu ",
"Masters ",
"Michell ",
"Mikey ",
"Monster ",
"OU812 ",
"Oliver ",
"Paladin ",
"Phillip ",
"Pickle ",
"Please ",
"Psycho ",
"Puppies ",
"Racing ",
"Rasta ",
"Reality ",
"Renee ",
"Rosie ",
"Russell ",
"Skiing ",
"Snowbal ",
"Spider ",
"Spring ",
"Squirt ",
"Studly ",
"Stupid ",
"Surfer ",
"Sweets ",
"Sydney ",
"Tester ",
"Thumper ",
"Timothy ",
"Violet ",
"Walleye ",
"Webster ",
"Wizard ",
"Zaphod ",
"Zorro ",
"Zxcvb ",
"aaa ",
"abcde ",
"abcdefg ",
"acura ",
"alex1 ",
"allison ",
"amy ",
"anne ",
"apache ",
"apollo ",
"apollo13 ",
"ariel ",
"artist ",
"asdfg ",
"asdfjkl ",
"attila ",
"babylon5 ",
"bamboo ",
"basket ",
"beaner ",
"bears ",
"beer ",
"benny ",
"bernard ",
"bertha ",
"bigbird ",
"bigred ",
"bird33 ",
"birdie ",
"blizzard ",
"bluesky ",
"bobby ",
"bootsie ",
"brewster ",
"bright ",
"bruce ",
"brutus ",
"bubba1 ",
"bubbles ",
"buck ",
"buffalo ",
"butler ",
"buzz ",
"byteme ",
"cactus ",
"camera ",
"candy ",
"canon ",
"cassie ",
"catalog ",
"cats ",
"celica ",
"celine ",
"cfi ",
"challeng ",
"champion ",
"cheryl ",
"chico ",
"christia ",
"chuck ",
"clark ",
"college ",
"conrad ",
"cool ",
"copper ",
"courtney ",
"craig ",
"crapp ",
"crawford ",
"creative ",
"crow ",
"cruise ",
"dance ",
"danielle ",
"darren ",
"database ",
"deadhead ",
"december ",
"deedee ",
"deliver ",
"detroit ",
"dilbert ",
"doc ",
"dogbert ",
"dominic ",
"elsie ",
"enter ",
"entropy ",
"etoile ",
"europe ",
"explorer ",
"fireman ",
"fish1 ",
"flamingo ",
"flash ",
"fletcher ",
"flip ",
"foxtrot ",
"french1 ",
"gabriell ",
"gaby ",
"galaxy ",
"galileo ",
"garlic ",
"gasman ",
"gator ",
"gemini ",
"general ",
"gerald ",
"gilles ",
"go ",
"goforit ",
"golden ",
"gone ",
"graymail ",
"greenday ",
"greg ",
"gretzky ",
"hacker ",
"hal9000 ",
"harold ",
"harrison ",
"harry ",
"harvey ",
"hector ",
"hell ",
"home ",
"homer ",
"hootie ",
"hotdog ",
"ib6ub9 ",
"icecream ",
"idiot ",
"imagine ",
"indian ",
"insane ",
"intern ",
"ireland ",
"irish ",
"isabelle ",
"jacob ",
"jaguar ",
"jason1 ",
"jenifer ",
"jenni ",
"jenny1 ",
"jensen ",
"john316 ",
"judy ",
"julie1 ",
"kelly1 ",
"kennedy ",
"kevin1 ",
"kim ",
"knicks ",
"lady ",
"lee ",
"leon ",
"lindsey ",
"ljf ",
"logical ",
"lucky1 ",
"lynn ",
"majordom ",
"mariah ",
"marine ",
"mario ",
"mariposa ",
"martin1 ",
"math ",
"maurice ",
"me ",
"memphis ",
"metal ",
"michael. ",
"michele ",
"minnie ",
"mirage ",
"mitch ",
"modem ",
"mom ",
"moocow ",
"ncc1701e ",
"nebraska ",
"nemesis ",
"netware ",
"news ",
"nguyen ",
"number9 ",
"open ",
"opus ",
"patches ",
"penny ",
"pete ",
"petey ",
"phish ",
"photo ",
"pierce ",
"pomme ",
"porter ",
"psalms ",
"puppy ",
"pyramid ",
"python ",
"quality ",
"qwaszx ",
"qwert ",
"raiders ",
"raquel ",
"robotech ",
"ronald ",
"rosie ",
"russell ",
"ruy ",
"savage ",
"scotch ",
"scruffy ",
"sean ",
"seattle ",
"security ",
"shadow1 ",
"shanti ",
"shirley ",
"shorty ",
"shotgun ",
"skipper ",
"slayer ",
"smashing ",
"snapple ",
"sniper ",
"snoopdog ",
"snowman ",
"sparrow ",
"sports ",
"sprite ",
"spunky ",
"stacey ",
"star69 ",
"start ",
"station ",
"stealth ",
"sunny1 ",
"super ",
"surfer ",
"target ",
"taurus ",
"teddy ",
"teddy1 ",
"tester ",
"testing ",
"theboss ",
"thunderb ",
"tim ",
"topcat ",
"topher ",
"trevor ",
"tricia ",
"trixie ",
"tucker ",
"vader ",
"valerie ",
"veronica ",
"viking ",
"voodoo ",
"warcraft ",
"warner ",
"warrior ",
"watson ",
"webster ",
"wesley ",
"western ",
"wheels ",
"wilbur ",
"williams ",
"wisdom ",
"wolf1 ",
"wolfgang ",
"wrangler ",
"xcountry ",
"yankees ",
"zachary ",
"zeus ",
"zombie ",
"zorro ",
"!@#$%^ ",
"0007 ",
"0249 ",
"1225 ",
"1234qwer ",
"14430 ",
"1951 ",
"1p2o3i ",
"1qw23e ",
"1sanjose ",
"21122112 ",
"2222 ",
"369 ",
"5252 ",
"5555 ",
"5683 ",
"777 ",
"80486 ",
"888888 ",
"911 ",
"92072 ",
"99999999 ",
"@#$%^ ",
"Action ",
"Aggies ",
"Albert ",
"Alyssa ",
"Andrea ",
"Angela1 ",
"Author ",
"Babies ",
"Bananas ",
"Barbara ",
"Barbie ",
"Basketba ",
"Bastard ",
"Beatles ",
"Bigfoot ",
"Blaster ",
"Blowme ",
"Bookit ",
"Brasil ",
"Broncos ",
"Browns ",
"Buddha ",
"Butthead ",
"Buttons ",
"Cancer ",
"Carlos ",
"Champs ",
"ChangeMe ",
"Changeme ",
"Chelsea ",
"Chevy ",
"Chevy1 ",
"Christ ",
"Christop ",
"Chucky ",
"Cindi ",
"Cleaner ",
"Clover ",
"Coolman ",
"Copper ",
"Cricket ",
"Darwin ",
"Death ",
"Defense ",
"Denver ",
"Detroit ",
"Dexter ",
"Doggie ",
"Doggy ",
"Dookie ",
"Drums ",
"Edward ",
"Elaine ",
"Elvis ",
"Espanol ",
"Except ",
"Football ",
"Francis ",
"Freedom ",
"Frosty ",
"Fubar ",
"Garden ",
"Garfield ",
"Garrett ",
"Gordon ",
"Hamster ",
"Hawaii ",
"Hello ",
"Herman ",
"Hershey ",
"History ",
"Hockey1 ",
"Honda1 ",
"Isabelle ",
"Jaeger ",
"Jaguar ",
"Jeanne ",
"Jimbob ",
"Junebug ",
"Kathryn ",
"Kayla ",
"Killme ",
"Kittens ",
"Kombat ",
"Kristen ",
"Kristin ",
"Lennon ",
"Letter ",
"Light ",
"Little ",
"Loveme ",
"Marley ",
"Marshal ",
"Martha ",
"Martin ",
"Maveric ",
"Maxwell ",
"Merlin ",
"Mittens ",
"Morris ",
"Nascar ",
"Newton ",
"Nissan ",
"Number1 ",
"Packard ",
"Pantera ",
"Peewee ",
"Penguin ",
"Piglet ",
"Popcorn ",
"Popeye ",
"Puckett ",
"Raistlin ",
"Raymond ",
"Reader ",
"Reading ",
"Rebels ",
"Redskin ",
"Reefer ",
"Retard ",
"Ripper ",
"Robbie ",
"Ronald ",
"Rooster ",
"Roping ",
"Royals ",
"Russel ",
"Samson ",
"Sarah1 ",
"Scarlett ",
"Service ",
"Shooter ",
"Sidney ",
"Simple ",
"Skater ",
"Skidoo ",
"Skinny ",
"Smiles ",
"Sniper ",
"Special ",
"Spirit ",
"Sprite ",
"Stimpy ",
"Strider ",
"Success ",
"SunShine ",
"Superman ",
"Susan ",
"Sweetie ",
"Tamara ",
"Tanker ",
"Tardis ",
"Tasha ",
"Taurus ",
"Theman ",
"Theresa ",
"Tiffany ",
"Tomcat ",
"Tractor ",
"Trevor ",
"Trucks ",
"Trumpet ",
"Vampire ",
"Vanessa ",
"Victoria ",
"Warez ",
"Warrior ",
"Weezer ",
"Welcome1 ",
"Whales ",
"Whateve ",
"Wicked ",
"Willy ",
"Woodland ",
"Ziggy ",
"a ",
"abby ",
"abcd ",
"abcdef ",
"action ",
"active ",
"advil ",
"aeh ",
"alfred ",
"aliens ",
"alison ",
"alpha1 ",
"amanda1 ",
"amelie ",
"andre ",
"angels ",
"angus ",
"apple1 ",
"ariane ",
"arizona ",
"asdfghjk ",
"aspen ",
"asterix ",
"awesome ",
"aylmer ",
"bach ",
"barry ",
"basil ",
"baskeT ",
"beanie ",
"beautifu ",
"benoit ",
"benson ",
"bernie ",
"bfi ",
"bigmac ",
"bigman ",
"binky ",
"biology ",
"bird ",
"blondie ",
"blowfish ",
"bmw ",
"bobcat ",
"boogie ",
"booster ",
"boots ",
"bozo ",
"bridge ",
"bridges ",
"buffy ",
"bull ",
"bullet ",
"butch ",
"button ",
"buttons ",
"caesar ",
"campbell ",
"camping ",
"canced ",
"canela ",
"cannon ",
"cannonda ",
"cardinal ",
"carl ",
"carlos ",
"carolina ",
"cascade ",
"castle ",
"catfish ",
"cccccc ",
"center ",
"cesar ",
"chance ",
"chaos ",
"charity ",
"charlie1 ",
"charlott ",
"cherry ",
"chevy ",
"china ",
"chiquita ",
"christop ",
"church ",
"clipper ",
"cobra ",
"concept ",
"cookies ",
"corrado ",
"corwin ",
"cosmos ",
"cougars ",
"cracker ",
"cuddles ",
"cutie ",
"cynthia ",
"cyrano ",
"daddy ",
"dan ",
"dasha ",
"dead ",
"denali ",
"depeche ",
"design ",
"deutsch ",
"dexter ",
"dgj ",
"diana ",
"diane ",
"dickhead ",
"director ",
"dirk ",
"dodgers ",
"dollars ",
"dolphins ",
"don ",
"doom2 ",
"doug ",
"dougie ",
"dragonfl ",
"dude ",
"dundee ",
"e-mail ",
"easter ",
"eclipse ",
"electric ",
"elliot ",
"energy ",
"eugene ",
"excalibu ",
"express ",
"fiona ",
"fireball ",
"first ",
"fletch ",
"flight ",
"florida ",
"fool ",
"fountain ",
"fozzie ",
"frederic ",
"frogs ",
"front242 ",
"fugazi ",
"fun ",
"future ",
"gambit ",
"garnet ",
"gary ",
"genius ",
"georgia ",
"gibson ",
"glenn ",
"goat ",
"goblue ",
"gocougs ",
"godzilla ",
"gofish ",
"gordon ",
"grandma ",
"graphic ",
"gray ",
"gretchen ",
"groovy ",
"guess ",
"guido ",
"guinness ",
"h2opolo ",
"hanna ",
"hanson ",
"happyday ",
"hazel ",
"hello1 ",
"homebrew ",
"honda1 ",
"horizon ",
"hornet ",
"image ",
"impala ",
"informix ",
"irene ",
"isaac ",
"jamaica ",
"james1 ",
"jan ",
"japan ",
"jared ",
"jazz ",
"jeanette ",
"jeff ",
"jimbo ",
"jkm ",
"joanna ",
"joel ",
"johnson ",
"jojo ",
"jordan23 ",
"josh ",
"josie ",
"julia ",
"justin1 ",
"kathy ",
"katie ",
"kenneth ",
"khan ",
"kingdom ",
"kitty ",
"kleenex ",
"kramer ",
"laddie ",
"ladybug ",
"lamer ",
"larry1 ",
"law ",
"ledzep ",
"light ",
"liverpoo ",
"lloyd ",
"looney ",
"lorraine ",
"lovely ",
"lucas ",
"lulu ",
"magnum ",
"mailer ",
"mailman ",
"malcolm ",
"mantra ",
"marcus ",
"maria ",
"mars ",
"marvin ",
"master1 ",
"mayday ",
"mazda1 ",
"medical ",
"megan ",
"memory ",
"meow ",
"metallic ",
"midori ",
"mikael ",
"mike1 ",
"miki ",
"miles ",
"million ",
"mimi ",
"minou ",
"miranda ",
"misha ",
"mishka ",
"mission ",
"molly1 ",
"money1 ",
"monopoly ",
"montreal ",
"mookie ",
"moomoo ",
"moroni ",
"mortimer ",
"naomi ",
"nautica ",
"nesbitt ",
"new ",
"nick ",
"niki ",
"nikita ",
"nimrod ",
"nirvana1 ",
"norman ",
"nugget ",
"nurse ",
"oatmeal ",
"obiwan ",
"october ",
"olivier ",
"oranges ",
"orchid ",
"pacers ",
"packer ",
"parrot ",
"passion ",
"paula ",
"pearl ",
"pedro ",
"peggy ",
"percy ",
"petunia ",
"philip ",
"phoenix1 ",
"pinkfloy ",
"pirate ",
"pisces ",
"planet ",
"play ",
"playboy ",
"player ",
"players ",
"poiuyt ",
"politics ",
"polo ",
"pookie1 ",
"praise ",
"preston ",
"prof ",
"promethe ",
"property ",
"public ",
"quebec ",
"quest ",
"qwerty12 ",
"racerx ",
"racoon ",
"rambo1 ",
"raptor ",
"redrum ",
"redwing ",
"republic ",
"research ",
"reynolds ",
"reznor ",
"rhonda ",
"ricky ",
"river ",
"robinhoo ",
"rock ",
"roman ",
"roxy ",
"roy ",
"ruby ",
"rufus ",
"rugby ",
"rusty ",
"ruth ",
"rux ",
"safety ",
"sailor ",
"sally ",
"sapphire ",
"sarah1 ",
"sasha ",
"saskia ",
"sbdc ",
"scarlett ",
"scooby ",
"scooter1 ",
"scorpion ",
"scuba1 ",
"septembe ",
"shawn ",
"shelley ",
"sherry ",
"shit ",
"skidoo ",
"slacker ",
"smiths ",
"snuffy ",
"soccer1 ",
"softball ",
"sonny ",
"space ",
"spain ",
"speedo ",
"spitfire ",
"ssssss ",
"steph ",
"sting1 ",
"stingray ",
"stormy ",
"strawber ",
"sugar ",
"sunbird ",
"sundance ",
"supra ",
"surf ",
"suzuki ",
"sweety ",
"swimming ",
"sylvie ",
"symbol ",
"t-bone ",
"tacobell ",
"taffy ",
"tango ",
"tanya ",
"tarzan ",
"tattoo ",
"tequila ",
"test2 ",
"theatre ",
"theking ",
"tiffany ",
"tigre ",
"timber ",
"tina ",
"tintin ",
"tootsie ",
"toronto ",
"tracy ",
"trek ",
"trident ",
"trumpet ",
"turbo ",
"twins ",
"user1 ",
"utopia ",
"valentin ",
"valhalla ",
"vanilla ",
"velvet ",
"venus ",
"vermont ",
"vicky ",
"volley ",
"wanker ",
"warriors ",
"whitney ",
"wolfMan ",
"wolverin ",
"wombat ",
"wonder ",
"wright ",
"xxxx ",
"yoda ",
"yomama ",
"young ",
"yvonne ",
"zenith ",
"zeppelin ",
"zhongguo "
           
		   ];


(async() => 
    {
        
        const width = 1200
         const height = 700

        const browser = await ptr.launch({
            headless: false,
            defaultViewport: {
                width,
                height
            }
        });
        const page = await browser.newPage();

        await page.goto('https://discord.com/channels/903058328442249226/903059418038534164',{waitUntil: 'load'});
        var readlineSync = require('readline-sync');
        var cekip = readlineSync.question(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] ENTER KALO SUDAH LOGIN `));
      
         
       for (i = 1;i < 100000; i++)
        {
            await page.bringToFront()
            const general = "#channels > div > div:nth-child(20) > div"
            const idindonesia = "#channels > div > div:nth-child(22) > div"
			const inindia = "#channels > div > div:nth-child(23) > div"
			const bdbangladesh = "#channels > div > div:nth-child(24) > div"
			const france = "#channels > div > div:nth-child(25) > div"
			//const ngnigeria = "#channels > div > div:nth-child(26) > div"
			//const persia = "#channels > div > div:nth-child(27) > div"
			//const pkpakistan = "#channels > div > div:nth-child(28) > div"
			//const phphilipines = "#channels > div > div:nth-child(29) > div"
			//const ththailand = "#channels > div > div:nth-child(30) > div"
			//const russia = "#channels > div > div:nth-child(31) > div"
//const vnvietnam = "#channels > div > div:nth-child(32) > div"

            const comment ="#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div.content-98HsJk > div.chat-3bRxxu > div.content-yTz4x3 > main > form > div:nth-child(1) > div > div > div.scrollableContainer-2NUZem.webkit-HjD9Er > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP > div"
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}] Memulai Comment dichannel`))
            await page.click(general)
            await page.click(general)
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter')
            await delay(5000)
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di General `))
            await page.click(idindonesia)
            await page.click(idindonesia)
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter');
            await delay(5000)
			console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di idindonesia `))
            await page.click(inindia)
            await page.click(inindia)
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter');
            await delay(5000)
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di inindia `))
			await page.click(bdbangladesh)
            await page.click(bdbangladesh)
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter');
            await delay(5000)
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di bdbangladesh `))
			await page.click(france)
            await page.click(france)
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter');
            await delay(5000)
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di france `))			
			
            await delay(2000)
            await page.type(comment,random_item(kata2))
            await delay(2000)
            await page.keyboard.press('Enter');
            await delay(5000)
            console.log(chalk.yellow(`[${(moment().format('HH:mm:ss'))}]Success Comment di persia `))           


        };
        
        
    }
    
)();
 

        