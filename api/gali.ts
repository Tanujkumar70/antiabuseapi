const tulu: string[] = ['bvc','bywarsi','randay','runday','sulle','boli','rande', 'naidamaga','naidamone','darvesi'];
let tuluGali: string[] = tulu.map(name => name.toLowerCase())
const hindi: string[] = ["Ass","Asshole","Betichod","Bhadava","Bhadva","Bhadwa","Bhadwe","Bhenchod","Bhosadike","BhosriWala","Bur","Chod","cunt","Chodu","Chudai","Chudan","Chunni","Chus","chut","chutiya","chutmarike","Chutia","Clit","FART","FUCKER","fuck","gand","Fucker","gandu","Gaandfat","Gadha","Gay","HOOKER","Haraami","Hijda","Illegitimate","Jhaant","Jhaat","Jhant","Kutta","Lauda","laude","Lavde","Madar","Madarchod","Moot","Mootna","PUSSY","Paad","Penis","Pig","Piss","Prostitute","Raand","Rand","Randi","Rundi","Saala","Sala","Suck","bamboo","bambu","bhoot","bhosda","breast","breasts","choot","chootia","chuda","chut","cock","cunt","fart","fuck","gay","jhaat","kute","lassan","pimp","prostitute","randwa","suck","tits","whore"];
let hindiGali: string[] = hindi.map(name => name.toLowerCase());
let hindiG : string[] = ["रंडी","रांड","भोसड़े","लण्ड","औलाद","चुदाई","कूत्ते","कूतिया","बच्चकलप","मादरचोद","पिस्सू","सुअर","गांड","randu","lund","लौड़ा"];
const gali: string[] = [...hindiGali, ...tuluGali, ...hindiG];
module.exports=galy;
