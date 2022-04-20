function calculator(str) {
    let userArray = str.split(' '); // разбивает строку на массив

    if (userArray.length < 3) throw new Error('строка не является математической операцией: ' + str);
    if (userArray.length > 3) throw new Error('формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *):' + str);

   let romToAraNum = new Map (); // колекция Римских чисел для ввода (key, value)
    romToAraNum.set('I',1);
    romToAraNum.set('II',2);
    romToAraNum.set('III',3);
    romToAraNum.set('IV',4);
    romToAraNum.set('V',5);
    romToAraNum.set('VI',6);
    romToAraNum.set('VII',7);
    romToAraNum.set('VIII',8);
    romToAraNum.set('IX',9);
    romToAraNum.set('X',10);

    let araToRomNum = new Map (); //колекция Римских чисел для вывода (key, value)
    araToRomNum.set (1,'I');
    araToRomNum.set (2,'II');
    araToRomNum.set (3,'III');
    araToRomNum.set (4,'IV');
    araToRomNum.set (5,'V');
    araToRomNum.set (6,'VI');
    araToRomNum.set (7,'VII');
    araToRomNum.set (8,'VIII');
    araToRomNum.set (9,'IX');
    araToRomNum.set (10,'X');
    araToRomNum.set (11,'XI');
    araToRomNum.set (12,'XII');
    araToRomNum.set (13,'XIII');
    araToRomNum.set (14,'XIV');
    araToRomNum.set (15,'XV');
    araToRomNum.set (16,'XVI');
    araToRomNum.set (17,'XVII');
    araToRomNum.set (18,'XVIII');
    araToRomNum.set (19,'XIX');
    araToRomNum.set (20,'XX');
    araToRomNum.set (21,'XXI');
    araToRomNum.set (22,'XXII');
    araToRomNum.set (23,'XXIII');
    araToRomNum.set (24,'XXIV');
    araToRomNum.set (25,'XXV');
    araToRomNum.set (26,'XXVI');
    araToRomNum.set (27,'XXVII');
    araToRomNum.set (28,'XXVIII');
    araToRomNum.set (29,'XXIX');
    araToRomNum.set (30,'XXX');
    araToRomNum.set (31,'XXXI');
    araToRomNum.set (32,'XXXII');
    araToRomNum.set (33,'XXXIII');
    araToRomNum.set (34,'XXXIV');
    araToRomNum.set (35,'XXXV');
    araToRomNum.set (36,'XXXVI');
    araToRomNum.set (37,'XXXVII');
    araToRomNum.set (38,'XXXVIII');
    araToRomNum.set (39,'XXXIX');
    araToRomNum.set (40,'XL');
    araToRomNum.set (41,'XLI');
    araToRomNum.set (42,'XLII');
    araToRomNum.set (43,'XLIII');
    araToRomNum.set (44,'XLIV');
    araToRomNum.set (45,'XLV');
    araToRomNum.set (46,'XLVI');
    araToRomNum.set (47,'XLVII');
    araToRomNum.set (48,'XLVIII');
    araToRomNum.set (49,'XLIX');
    araToRomNum.set (50,'L');
    araToRomNum.set (51,'LI');
    araToRomNum.set (52,'LII');
    araToRomNum.set (53,'LIII');
    araToRomNum.set (54,'LIV');
    araToRomNum.set (55,'LV');
    araToRomNum.set (56,'LVI');
    araToRomNum.set (57,'LVII');
    araToRomNum.set (58,'LVIII');
    araToRomNum.set (59,'LIX');
    araToRomNum.set (60,'LX');
    araToRomNum.set (61,'LXI');
    araToRomNum.set (62,'LXII');
    araToRomNum.set (63,'LXIII');
    araToRomNum.set (64,'LXIV');
    araToRomNum.set (65,'LXV');
    araToRomNum.set (66,'LXVI');
    araToRomNum.set (67,'LXVII');
    araToRomNum.set (68,'LXVIII');
    araToRomNum.set (69,'LXIX');
    araToRomNum.set (70,'LXX');
    araToRomNum.set (71,'LXXI');
    araToRomNum.set (72,'LXXII');
    araToRomNum.set (73,'LXXIII');
    araToRomNum.set (74,'LXXIV');
    araToRomNum.set (75,'LXXV');
    araToRomNum.set (76,'LXXVI');
    araToRomNum.set (77,'LXXVII');
    araToRomNum.set (78,'LXXVIII');
    araToRomNum.set (79,'LXXIX');
    araToRomNum.set (80,'LXXX');
    araToRomNum.set (81,'LXXXI');
    araToRomNum.set (82,'LXXXII');
    araToRomNum.set (83,'LXXXIII');
    araToRomNum.set (84,'LXXXIV');
    araToRomNum.set (85,'LXXXV');
    araToRomNum.set (86,'LXXXVI');
    araToRomNum.set (87,'LXXXVII');
    araToRomNum.set (88,'LXXXVIII');
    araToRomNum.set (89,'LXXXIX');
    araToRomNum.set (90,'XC');
    araToRomNum.set (91,'XCI');
    araToRomNum.set (92,'XCII');
    araToRomNum.set (93,'XCIII');
    araToRomNum.set (94,'XCIV');
    araToRomNum.set (95,'XCV');
    araToRomNum.set (96,'XCVI');
    araToRomNum.set (97,'XCVII');
    araToRomNum.set (98,'XCVIII');
    araToRomNum.set (99,'XCIX');
    araToRomNum.set (100,'C');

     if (romToAraNum.has(userArray[0]) && romToAraNum.has(userArray[2])) { /* проверка на римские числа
         console.log ('оба числа римских');     */

        if (userArray[1] === '+'){ // обработка + c возвратом Римской
            let resultPlus = (romToAraNum.get(userArray[0]) + romToAraNum.get(userArray[2]));
            return araToRomNum.get(resultPlus);
        } else if (userArray[1] === '-'){ // обработка - с исключением c возвратом Римской
            let resultMinus = (romToAraNum.get(userArray[0]) - romToAraNum.get(userArray[2]));
            if (resultMinus <= 0){
                return ('');
            }
            return araToRomNum.get(resultMinus);
        } else if (userArray[1] === '*'){ // обработка * c возвратом Римской
            let resultMult = (romToAraNum.get(userArray[0]) * romToAraNum.get(userArray[2]));
            return araToRomNum.get(resultMult);
        } else if (userArray[1] === '/') { // обработка / с округлением c возвратом Римской
            let resultDiv = Math.floor(romToAraNum.get(userArray[0]) / romToAraNum.get(userArray[2]));
            if (resultDiv === 0){
                return ('');
            }
            return araToRomNum.get(resultDiv);
        } else {
            throw new Error ('строка не является математической операцией:' + str);
        }
     }

    let romStrToRomNum = new Map (); // колекция Арабских чисел для ввода (key, value)
    romStrToRomNum.set('1',1);
    romStrToRomNum.set('2',2);
    romStrToRomNum.set('3',3);
    romStrToRomNum.set('4',4);
    romStrToRomNum.set('5',5);
    romStrToRomNum.set('6',6);
    romStrToRomNum.set('7',7);
    romStrToRomNum.set('8',8);
    romStrToRomNum.set('9',9);
    romStrToRomNum.set('10',10);

    if (romStrToRomNum.has(userArray[0]) && romStrToRomNum.has(userArray[2])){

        if (userArray[1] === '+'){ // обработка +
            return String(romStrToRomNum.get(userArray[0]) + romStrToRomNum.get(userArray[2]));
        } else if (userArray[1] === '-') { // обработка -
            return String(romStrToRomNum.get(userArray[0]) - romStrToRomNum.get(userArray[2]));
        } else if (userArray[1] === '*') { // обработка *
            return String(romStrToRomNum.get(userArray[0]) * romStrToRomNum.get(userArray[2]));
        } else if (userArray[1] === '/') { // обработка / с округлением
            return String(Math.floor (romStrToRomNum.get(userArray[0]) / romStrToRomNum.get(userArray[2])));
        } else {
            throw new Error ('строка не является математической операцией:' + str);
        }
    }
    if ((romToAraNum.has(userArray[0]) && romStrToRomNum.has(userArray[2])) || (romToAraNum.has(userArray[2]) && romStrToRomNum.has(userArray[0]))) {
        throw new Error ('используются одновременно разные системы счисления:' + str);
    } else throw new Error ('формат математической операции не удовлетворяет заданию - два целых операнда и один оператор (+, -, /, *):' + str);
}

console.log (calculator('I - III')); // вернется строка '3'
console.log (calculator('V - V')); // вернется строка '3'
console.log (calculator('X - II')); // вернется строка '3'
console.log (calculator('I / II')); // вернется строка '3'
console.log (calculator('VI / II'));
console.log (calculator('VII / II'));
console.log (calculator('VII / III'));
