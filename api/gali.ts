const tulu: string[] = ['bvc', 'bywarsi', 'randay', 'runday', 'sulle', 'boli', 'rande', 'naidamaga', 'naidamone', 'darvesi','bhosdike'];
let tuluGali: string[] = tulu.map(name => name.toLowerCase())
const tamil: string[] = ['thevdiya','siruki','kepmari','punda','kabodhi','molathai','munda','vakalwoyi'];
let tamilGali: string[] = tamil.map(name => name.toLowerCase())
const hindi: string[] = ["bhadhwaloda", "maabahinchod", "haraamzaade", "muth", "dalle","lavde", "bc", "amiyo", "chuchi", "Ass", "Asshole", "Betichod", "Bhadava", "Bhadva", "lund ke baal", "jhaat ke baal" , "gand ke keede", "chuttad aadmi", "Bhadwa", "Bhadwe", "Bhenchod", "Bhosadike", "BhosriWala", "bhosad pappu", "Bur", "Chod", "cunt", "Chodu", "Chudai", "Chudan", "Chunni", "Chus", "chut", "chutiya", "chutmarike", "Chutia", "Clit", "FART", "FUCKER", "fuck", "gand", "Fucker", "gandu", "Gaandfat", "Gadha", "Gay", "HOOKER", "Haraami", "Hijda", "Illegitimate", "Jhaant", "Jhaat", "Jhant", "Kutta", "Lauda", "laude", "Lavde", "Madar", "Madarchod", "Moot", "Mootna", "PUSSY", "Paad", "Penis", "Pig", "Piss", "Prostitute", "Raand", "Rand", "Randi", "Rundi", "Saala", "Sala", "Suck", "bamboo", "bambu", "bhoot", "bhosda", "breast", "breasts", "choot", "chootia", "chuda", "chinal", "chut", "cock", "cunt", "fart", "fuck", "gay", "jhat", "kute", "kutte", "lassan", "loda lassan", "pimp", "prostitute", "randwa", "suck", "tits", "whore", "lode", "jhatu", "lovday", "loday", "lovde", "makichut", "botkimakichut", "terimaaki", "gandmara", "gandmedanda", "madarcho", "maderchod", "Bhadve", "tmkc", "mc", "bc", "makichu", "Chodi", "jhatkebal", "randu", "lund", "chadarmod", "ashwin","tits","tatto-ke-saudagar","Dick head","Bastard","Bitch","cunt","pussy","ballhead","balls","jhat ke lund","jhantu","Bahin ki lodi k"];
let hindiGali: string[] = hindi.map(name => name.toLowerCase());
let hindiG: string[] = ["रंडी", "रांड", "भोसड़े", "लण्ड", "औलाद", "चुदाई", "कूत्ते", "कूतिया", "बच्चकलप", "मादरचोद", "पिस्सू", "सुअर", "गांड", "लौड़ा","चुत", "चुतिया", "गांडू", "तेरी माँ की", "तेरी बहन की", "झंटू", "लुंड", "पुसी"];
const english: string[] = ["fucker","smd","4r5e","birthofloosedick","dirtofdickhead" , "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "stupid", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx","banchod"]
let englishGali: string[] = english.map(name => name.toLowerCase());
const melayu: string[] = ["celaka", "barua", "puki", "pukimak", "burit", "babi", "keparat", "sial", "pantat", "kote", "haram", "pepet", "tetek", "kopek", "pungkok", "pepek", "juboq", "jubur"];
let melayuGali: string[] = melayu.map(name => name.toLowerCase());
const marathi: string[] = ["kutrya", "halkat", "besharam","bail","bhaitad","gand", "bulleya", "puchhi", "bhikArachoT", "bhok", "ghal", "Bhosdicha", "lavdeya", "Aandya", "chinal","yedzava","aaichigand"];
let marathiGali: string[] = marathi.map(name => name.toLowerCase());
const hindiGaali: string[] = ['behenkelode','macharkijhant','chutmarike','kutreya','lawdeya','randiputram','tattokesaudagar','burkeburade','lundkedhakkhan','lukke','gandfatikebhadwe','bsdiwale','gaaandmarale','lundekekesh','jaahtu',"chudakkad","chutkechatore","totichor","teribehenkabhosda","lodiye","maa ki kirikiri teri","randichod","bhen ke laude","bhen ke takke","chinaal","gaandfatike","gundak","jhaatu","chut ke dhakan"]
const bengali: string[] = ["madarchod", "chudi", "bokachoda", "khankirchele", "khanki", "gudmarani", "podmarani", "rendirchele", "bichirbal", "banchod", "bnchod", "magi", "kuttachoda", "hatichoda", "dianorsorchoda", "teponmagi", "rendimagi", "paglachoda", "bal", "besshamagi", "homochoda", "bara", "garmarani", "satavhanga", "vhangavhagi", "kalanichoda", "chutmarani", "barachoda", "garpaka", "khankimargir gud", "chodonmagi", "chodon64", "chudir vhai", "bal" , "barar bal" , "bara", "dhon"]
let bengaliGali: string[] = bengali.map(name => name.toLowerCase());
const odia: string[] = ['maghia', 'banda', 'randi', 'chodipua', 'gandimara', 'bedhachua', 'bedha','kanachoda'];
let odiaGali: string[] = odia.map(name => name.toLowerCase())
const nepali: string[] = ["Chikxu","hariyo puti","kando","chak","sala","rando","poka","machikni","muji","raadi","randi","randi ko ban" ,"radikoban","bhalu","besya","chik","chiknu","puti","lado","randikochoro","randi ko choro","machikne","maachikne"]
let nepaliGali: string[] = nepali.map(name => name.toLowerCase());
const bihari: string[] = ["bahanchod","aar","baklol","bawaseer ho ka","bhadwa","bhethi","bhosda","bhoor","tor maiyaa ke chodu","larchat","laar","dogla","chinar","chota chetan","bahettar","bapchodi","chinaar","burchatta","burchodi","tohar bahini kr bur","bin pendi ke lota","maiya jake gaand maraaye","tohr matari randi"]
let bihariGali: string[] = bihari.map(name => name.toLowerCase());
let urdu: string[] = ["phaphole","khabees","khushmarani ke","kocha","nasoor","aamas","tashreef lal kar dunga","badbakht","mardood","kamina"];
const urduGali:string[] = urdu.map(name => name.toLowerCase());
const bangla: string[] = ["suorer baccha", "bessa" , "baalchoda" , "saapchoda" , "gandu er chele", "gudmukho" , "abalchoda" , "chodongandu", "dhyamnachoda", "dhyamna","laurachoda", "atalchoda"];
const banglaGali : string[] = bangla.map(name => name.toLowerCase());
let punjabiG: string[]=["BooDaBoja","DhaunNappDeyangeTuhaddi","OndaPhudduLaggeAi","teri maa di pudi","teri pan di lun","bhen di lun","teri maa da fudda","pen de laude","teri bund maar deni"];
const punjabiGali:string[] = punjabiG.map(name => name.toLowerCase());
const konkani: string[] = ['avayzovnya', 'zovnya', 'maayzovnya', 'chediyechya', 'fokya', 'fodya', 'fodrechya', 'raandechya', 'zovkya'];
let konkaniGali: string[] = konkani.map(name => name.toLowerCase())
const arabic: string[] = ["khanzeer","telhas teeze","Gawad","Hemar","Chelb","ayreh Feek"]
let arabicGali: string[] = arabic.map(name => name.toLowerCase())
let telugu : string[] = ["Lanja", "amma ni denga","sulli","dengey","modda gudu","sulli cheeku","denga","sanka naku", "modda","aathu","puku"];
const teluguGali : string[] = telugu.map(name=> name.toLowerCase())
let bohotgandiwali : string[] = ["andi mandi sandi .... ", "labda ka sarkar","dhatt teri mkc","muh me lele btc","gaand faad","nikal bsdk","bhenchod"];
const bohotgandiwaliGali : string[] = bohotgandiwali.map(name=> name.toLowerCase())
let assamese : string[] = ["kela", "kukurpuali","maksudu","lewra","boinaksuda","sutmarni","kukur","mokkel","baal","sutiya","pukor"];
const assameseGali : string[] = assamese.map(name=> name.toLowerCase())
const gali: string[] = [...hindiGali, ...tuluGali, ...hindiG, ...englishGali, ...melayuGali, ...marathiGali, ...hindiGaali, ...bengaliGali,...nepaliGali,...urduGali, ...konkaniGali, ...punjabiGali,...banglaGali, ...arabicGali, ... teluguGali, ...assameseGali];
// DONT ADD ANY LINES AFTER THIS LINE
module.exports = gali;

