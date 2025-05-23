//Numbers

// katta miqdordagi numberlarni o'qishga osonroq bo'lishi uchun underscore dan foydalaniladi
// console.log(100_000_000); // =100000000
//lekin bu son stringda bo'lsa "1_000_000" uni numberga o'tkazilsa NaN chiqadi _ underscore belgisini nemberga o'tkazuvchi metodlar tanimaydi
// let num = "1_000_000";
// console.log(parseInt(num)); // lekin parseInt ga berilganda parse integer faqat birinchi number qiymatini qaytaradi yani 1 qaytdi

// // 0 lar sonini qisqartirish uchun birinchi raqamdan keyin e yozib keyin 0 lar soni yoziladi
// console.log(1e6); // 1 000 000
// console.log(1e6 + 1); // 1 000 001
// console.log(1e-6); // 0.000 001

//=========================================================================
// toFixed(parametr) - bu metod float sonlarni nuqtadan keyin nechta raqamini qaytarishini belgilaydi.
//parametr ga berilgan raqamga teng ravishda nuqtadan keyingi raqamlarni qaytaradi

// let num = 0.1234;
// console.log(num.toFixed(2)); // 0.12

//Kamchiliklari
//1) qaytargan qiymatini yaxlitlab qaytaradi
//2) strining qiymat qaytaradi
// 3) string numberlar ustida ishlay olmaydi

//================================================================
//Number() - bu metod string tipidagi numberlarni number tipiga o'tkazish uchun ishlatiladi
// let num = "123";
// console.log(Number(num)); // 123

//Kamchiligi
// 1) agar string numberlar ustida arifmetik amal bajarilgan bo'lsa ("1+2"), uni o'qiy olmaydi
// Number() faqat string number qiymatlarni izlaydi "1+2" da + ishorasi borligi sababli uni raqam sifatida tanimaydi

// let num1 = "1 +2";

// console.log(Number(num1)); // NaN

//==================================================================

// parseInt vs parseFloat  - bu ikkala metodlar string tipidagi raqamlarni number tipiga o'tkazish uchun ishlatiladi
// parseInt() - string raqamdan integer number qaytaradi
//parseFloat() - string raqamdan float raqam qaytaradi, ammo agar string number integer bo'lsa parseFloat integer raqam qaytaradi

// let stringNum = "1.22";

// console.log(parseInt(stringNum)); // 1
// console.log(parseFloat(stringNum)); // 1.22

//Avzalligi
//1) parseInt ikkilik sanoq sistemasida berilgan string raqamni o'nlik sanoq sistemasiga aylantirib qaytara oladi

// console.log(parseInt("101", 2));

//Kamchiliklari
// Har ikkala metod string number ichida o'ziga tegishli qismni izlaydi
//ya'ni agar "0.1 + 0.2" string raqam berilsa parseInt faqat o'zi topgan birinchi raqamni qaytaradi yani 0 ni qaytaradi
// parseFloat esa o'zi topgan birinchi float raqamni qaytaradi ya'ni 0.1 ni qaytaradi

// let numStr = "0.1 + 0.2";
// console.log(parseInt(numStr)); // 0
// console.log(parseFloat(numStr)); // 0.1

//=========================================================================

//eval() string tipidagi numberlar orasida arifmetik amallar bajarilgan bo'lsa
// o'sha arifmetik amalni bajarib natijani numberga aylantirib qaytaradi

// const num = "1+2";
// const num1 = "123";
// console.log(eval(num)); // 3
// console.log(eval(num1)); // 123

//================================================================

//toString() - bu metod asosan string metodi hisoblanadi, lekin number tipidagi malumotni stringga o'zgartirishi mumkin
// qiziq tomoni u agar parametr olsa numberni ikkilik sanoq sistemasiga o'tkazib string xolatda qaytarishi mumkin

// let num = 5;

// console.log(num.toString()); // '5'
// console.log(num.toString(2)); // '101'  - 5ni ikkilik sanoq sistemasidagi qiymati

//=======================================================================================

// toPrecision() - bu metod parametriga nechi sonini olsa berilgan raqamning shuncha raqamini qaytaradi
// agar berilgan raqam 0 dan kichik bolsa 0. dan keyin birinchi 0 bo'lmagan raqamdan boshlab qayradi

// let num = 12345;
// let num1 = 0.12345;
// let num2 = 0.00012345;

// console.log(num.toPrecision(3)); // 1.23e+4
// console.log(num1.toPrecision(3)); // 0.123
// console.log(num2.toPrecision(3)); //0.000123

// console.log(num.toPrecision(3) === 12345); //false

// Kamchiligi
//1) string qiymat qaytaradi
//2) intiger sonlarda scientific numberlar qaytaradi va raqamni floatga aylantiradi

// ===========================================================================

// Math - bu javascript build in kutubxona ya'ni javascriptning o'zida joylashgan kutubxona
// uning birqancha metodlari mavjud

// console.log(Math.PI); // PI ning to'liq qiymatini qaytaradi

//Math.abs() - berilgan sonning musbat qismini qaytarib beradi yoki musbatga o'girib beradi

// let num = -123;
// console.log(Math.abs(num)); //123

// Math.round() berilgan float raqamni yaxlitlab integerga aylantirib qaytaradi, yaxlitlash nuqtadan keyingi sonning qiymatiga bog'liq

// let num = 3.4;
// let num1 = 3.5;

// console.log(Math.round(num)); // 3
// console.log(Math.round(num1)); //4

//Math.floor() = berilgan float raqamni pastga qarab yaxlitlaydi

// console.log(Math.floor(3.8)) // 3
// console.log(Math.floor(-3.8)) // -4

//Math.ceil() = berilgan float raqamni o'zak qismidan yuqori raqamga yaxlitlaydi
// console.log(Math.ceil(3.01)); //4

//Math.trunc() = floor ga o'xshash lekin bu metod berilgan float raqamni float qismini olib tashlab faqat o'zak qismini qaytaradi
// console.log(Math.trunc(3.8)) // 3
// console.log(Math.trunc(-3.8)) // -3

//Math.random() = 0 dan 1 gacha bo'lgan ixtiyoriy raqamlar ketma ketligini qaytaradi

// console.log(Math.random()); // ixtiyoriy raqam
// randomdan unumli foydalanish uchun matematik amallardan foydalanish kerak

// console.log(Math.trunc(Math.random() * 10));
//Math.trunc ishlatilganda 10 raqami hech qachon chiqmaydi agar 10 raqami ham chiqishini istasak ceildan foydalanishimiz mumkin
// console.log(Math.ceil(Math.random() * 10));

//Math.min() = parametrga berilgan raqamlarning ichidan eng kichigini qaytaradi

// console.log(Math.min(3, 5, 32, 10, 21));

// array yoki tyuple listdagi raqamlarni ichidan eng kichigini aniqlay olmaydi faqat parametriga berilgan raqamni ichidan aniqlaydi
// let num = (3, 5, 32, 10, 21); // x

//Math.max() = parametriga berilgan raqamlar ichidan eng kattasini qaytaradi

//Math.pow(par1, par2) = birinchi parametrdagi raqamni ikkinichi parametrdagi daraga oshiradi

// console.log(2, 3); //8

// Math.sqrt() berilgan sonning kvadrat ildizini qaytaradi
// Math.cbrt() berilgan sonning kub ildizini qaytaradi

// console.log(Math.sqrt(9)); //3
// console.log(Math.cbrt(27)); //3
