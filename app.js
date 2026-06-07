
// ====================================================
// TAFAKKUR MOLIYA — APP.JS
// Ilovaning barcha funksiyalari shu yerda
// ====================================================


// ====================================================
// 1-QISM: TELEGRAM WEB APP ULANISHI
// ====================================================

// Telegram ob'ektini olamiz
const tg = window.Telegram.WebApp;

// Ilovani to'liq ekranga yoyamiz
tg.expand();

// Telegram ga ilova tayyor ekanligini bildirамiz
tg.ready();

// Telegram tema ranglarini olamiz
// Agar Telegram rangi bo'lmasa, o'zimizning yashil rangimiz ishlatiladi
const tgRang      = tg.themeParams.button_color      || '#1b4332';
const tgMatnRang  = tg.themeParams.button_text_color || '#ffffff';

// Foydalanuvchi ma'lumotlarini Telegram dan olamiz
let foydalanuvchiIsmi = 'Mehmon';
let foydalanuvchiId   = 0;

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    foydalanuvchiIsmi = tg.initDataUnsafe.user.first_name || 'Mehmon';
    foydalanuvchiId   = tg.initDataUnsafe.user.id || 0;
}


// ====================================================
// 2-QISM: FOYDALANUVCHI BALLARI (LocalStorage)
// ====================================================

// Foydalanuvchi balini LocalStorage dan yuklaymiz
// LocalStorage — bu brauzer ichidagi kichik xotira
function balniYukla() {
    const saqlangan = localStorage.getItem('tafakkur_bal_' + foydalanuvchiId);
    if (saqlangan !== null) {
        return parseInt(saqlangan);
    }
    return 0; // Birinchi marta kirsa, 0 ball
}

// Ballarni LocalStorage ga saqlaymiz
function balniSaqla(bal) {
    localStorage.setItem('tafakkur_bal_' + foydalanuvchiId, bal);
}

// Joriy foydalanuvchi bali
let joriyBal = balniYukla();


// ====================================================
// 3-QISM: DARSLAR MA'LUMOTLARI
// 3 ta mavzu, har birida 3 ta test — jami 9 ta test
// ====================================================

const darslar = [

    // --------------------------------------------------
    // 1-DARS: ISLOM MOLIYASI ASOSLARI
    // --------------------------------------------------
    {
        id: 1,
        mavzu: 'Islom Moliyasi Asoslari',
        emoji: '📖',
        matn: `Islom moliyasi — bu Islom shariatiga asoslangan moliyaviy tizim. Uning asosiy tamoyillari:

- Ribo (foiz) man etilgan
- Foyda va zarar birgalikda taqsimlanadi
- Haqiqiy tovar yoki xizmatga asoslanishi shart
- Zararli sohalarga (spirt, qimor) sarmoya kiritish taqiqlangan

Islom moliyasi dunyoda tez rivojlanmoqda — hozirda 3 trillion dollardan ortiq aktivni boshqaradi.`,

        testlar: [
            {
                savol: "Islom moliyasining asosiy taqiqlangan elementi qaysi?",
                javoblar: [
                    "Savdo qilish",
                    "Ribo (foiz)",
                    "Sarmoya kiritish",
                    "Sherikchilik"
                ],
                togri: 1  // 0 dan boshlanadi, ya'ni 2-javob to'g'ri
            },
            {
                savol: "Islom moliyasida foyda va zarar kimlar o'rtasida taqsimlanadi?",
                javoblar: [
                    "Faqat bank oladi",
                    "Faqat mijoz ko'radi",
                    "Barcha sheriklar birgalikda",
                    "Davlat oladi"
                ],
                togri: 2
            },
            {
                savol: "Islom moliyasi dunyoda necha trillion dollarlik aktivni boshqaradi?",
                javoblar: [
                    "1 trillion",
                    "5 trillion",
                    "3 trillion",
                    "10 trillion"
                ],
                togri: 2
            }
        ]
    },

    // --------------------------------------------------
    // 2-DARS: RIBO (FOIZ)
    // --------------------------------------------------
    {
        id: 2,
        mavzu: 'Ribo — Foizning Islomiy Hukmи',
        emoji: '🚫',
        matn: `Ribo — bu qarz berish yoki olishda olinadigan belgilangan qo'shimcha to'lov. Islomda qat'iyan taqiqlangan.

Nega taqiqlangan?
- Adolatsizlik: kuchsiz odamdan foiz olish uni yanada kambag'allashtiradi
- Mehnat yo'q: pul "o'z-o'zidan" ko'payishi noto'g'ri
- Xavf yo'q: bank har doim yutadi, mijoz yo'qotishi mumkin

Quron (2:275): "Alloh savdoni halol, riboni harom qildi."

Islom moliyasida foiz o'rniga — savdo foydasi, ijara haqi yoki sherikchilik foydasi ishlatiladi.`,

        testlar: [
            {
                savol: "Ribo nima?",
                javoblar: [
                    "Islomiy savdo shartnomasi",
                    "Qarzga belgilangan foiz to'lov",
                    "Zakat to'lovi",
                    "Sug'urta turi"
                ],
                togri: 1
            },
            {
                savol: "Islomda ribo taqiqlangan asosiy sabab nima?",
                javoblar: [
                    "Davlat soliqlarini kamaytiradi",
                    "Inflyatsiyani oshiradi",
                    "Adolatsizlikka va ekspluatatsiyaga olib keladi",
                    "Savdoni kamaytiradi"
                ],
                togri: 2
            },
            {
                savol: "Islom moliyasida foiz o'rniga nima ishlatiladi?",
                javoblar: [
                    "Jarima to'lovlari",
                    "Davlat subsidiyalari",
                    "Savdo foydasi yoki sherikchilik daromadi",
                    "Valyuta almashinuvi"
                ],
                togri: 2
            }
        ]
    },

    // --------------------------------------------------
    // 3-DARS: MURABAHA
    // --------------------------------------------------
    {
        id: 3,
        mavzu: 'Murabaha — Islomiy Kreditlash',
        emoji: '🤝',
        matn: `Murabaha — bu Islom moliyasidagi eng keng tarqalgan shartnoma turi.

Qanday ishlaydi?
1. Mijoz bankdan mashina yoki uy olmoqchi
2. Bank o'sha tovarni sotuvchidan sotib oladi
3. Bank tovarni mijozga belgilangan foyda bilan sotadi
4. Mijoz to'lovni qismlarga bo'lib to'laydi

Misol:
- Mashina narxi: 100 mln so'm
- Bank foydasi: 20 mln so'm (oldindan belgilangan)
- Mijoz jami to'laydi: 120 mln so'm — lekin bu foiz emas, savdo narxi!

Oddiy kreditdan farqi: foiz har oy o'zgarmaydi, narx boshidanoq aniq belgilanadi.`,

        testlar: [
            {
                savol: "Murabahada bank avval nima qiladi?",
                javoblar: [
                    "Mijozga naqd pul beradi",
                    "Tovarni o'zi sotib oladi",
                    "Kafolat beradi",
                    "Sug'urta tuzadi"
                ],
                togri: 1
            },
            {
                savol: "Murabahada narx qachon belgilanadi?",
                javoblar: [
                    "Har oy qayta hisoblanadi",
                    "Oxirida aniqlanadi",
                    "Shartnoma tuzilganda boshidanoq",
                    "Bank xohlagan vaqtda"
                ],
                togri: 2
            },
            {
                savol: "Murabaha oddiy kreditdan asosiy farqi nima?",
                javoblar: [
                    "Murabaha bepul",
                    "Bank tovarni sotib olib, savdo sifatida beradi — foiz emas",
                    "Faqat boy odamlar uchun",
                    "Davlat kafolati bor"
                ],
                togri: 1
            }
        ]
    }

]; // darslar massivi tugadi


// ====================================================
// 4-QISM: HOLAT O'ZGARUVCHILARI
// (Ilovaning hozirgi holati)
// ====================================================

let joriyDarsIndeksi  = 0;   // Qaysi dars ko'rsatilmoqda (0, 1, 2)
let joriyTestIndeksi  = 0;   // Qaysi test ko'rsatilmoqda (0, 1, 2)
let javobBerildi      = false; // Test javob berilganmi?
let darsOqildi        = false; // Dars o'qildi tugmasi bosildimi?


// ====================================================
// 5-QISM: TAB (PASTKI MENYU) FUNKSIYASI
// ====================================================

function showTab(tabNomi) {

    // Barcha bo'limlarni yashiramiz
    const barcha = document.querySelectorAll('.tab-section');
    barcha.forEach(function(b) {
        b.classList.remove('active-section');
    });

    // Barcha tab tugmalardan "active" ni olib tashlaymiz
    const tugmalar = document.querySelectorAll('.tab-button');
    tugmalar.forEach(function(t) {
        t.classList.remove('active');
    });

    // Tanlangan bo'limni ko'rsatamiz
    const section = document.getElementById('tab-' + tabNomi);
    if (section) {
        section.classList.add('active-section');
    }

    // Tanlangan tugmani faollashtirамiz
    const tugma = document.getElementById('tab-btn-' + tabNomi);
    if (tugma) {
        tugma.classList.add('active');
    }

    // Har bir tab ochilganda kerakli ma'lumotlarni chiqaramiz
    if (tabNomi === 'reyting') {
        reytingniChiqar();
    }

    if (tabNomi === 'dostlar') {
        dostlarBoliminiYukla();
    }
}


// ====================================================
// 6-QISM: TA'LIM BO'LIMI FUNKSIYALARI
// ====================================================

// Darsni ekranga chiqarish
function darsniChiqar() {

    const dars = darslar[joriyDarsIndeksi];

    // Mavzu raqami va sarlavhasini chiqaramiz
    document.getElementById('dars-raqam').textContent =
        joriyDarsIndeksi + 1 + '-Dars';

    document.getElementById('dars-sarlavha').textContent =
        dars.emoji + ' ' + dars.mavzu;

    // Dars matnini chiqaramiz
    document.getElementById('dars-matni').textContent = dars.matn;

    // Dars navigatsiya tugmalarini yangilaymiz
    yangilaNavigatsiya();

    // Test qismini yashiramiz — avval darsni o'qish kerak
    document.getElementById('test-qismi').classList.add('hidden');
    document.getElementById('dars-tugmasi').classList.remove('hidden');

    // Holat o'zgaruvchilarini qayta o'rnatamiz
    darsOqildi      = false;
    joriyTestIndeksi = 0;

    // Ballarni yangilaymiz
    balniChiqar();
}

// Dars navigatsiya tugmalarini yangilash (oldingi/keyingi)
function yangilaNavigatsiya() {
    const oldingiTugma = document.getElementById('oldingi-dars-btn');
    const keyingiTugma = document.getElementById('keyingi-dars-btn');
    const darsHisobi   = document.getElementById('dars-hisobi');

    // Dars hisoblagichi: "1 / 3" shaklida
    darsHisobi.textContent =
        (joriyDarsIndeksi + 1) + ' / ' + darslar.length;

    // Birinchi darsdaman — "Oldingi" tugmasini o'chiramiz
    if (joriyDarsIndeksi === 0) {
        oldingiTugma.disabled = true;
        oldingiTugma.style.opacity = '0.4';
    } else {
        oldingiTugma.disabled = false;
        oldingiTugma.style.opacity = '1';
    }

    // Oxirgi darsdaman — "Keyingi" tugmasini o'chiramiz
    if (joriyDarsIndeksi === darslar.length - 1) {
        keyingiTugma.disabled = true;
        keyingiTugma.style.opacity = '0.4';
    } else {
        keyingiTugma.disabled = false;
        keyingiTugma.style.opacity = '1';
    }
}

// Oldingi darsga o'tish
function oldingiDars() {
    if (joriyDarsIndeksi > 0) {
        joriyDarsIndeksi--;
        darsniChiqar();
    }
}

// Keyingi darsga o'tish
function keyingiDars() {
    if (joriyDarsIndeksi < darslar.length - 1) {
        joriyDarsIndeksi++;
        darsniChiqar();
    }
}

// "Testni boshlash" tugmasi bosilganda
function testniBoshlash() {
    darsOqildi = true;
    joriyTestIndeksi = 0;

    // Dars tugmasini yashiramiz, test qismini ko'rsatamiz
    document.getElementById('dars-tugmasi').classList.add('hidden');
    document.getElementById('test-qismi').classList.remove('hidden');

    // Birinchi testni chiqaramiz
    testniChiqar();
}

// Testni ekranga chiqarish
function testniChiqar() {

    const dars = darslar[joriyDarsIndeksi];
    const test = dars.testlar[joriyTestIndeksi];

    javobBerildi = false;

    // Test raqami: "Test 1 / 3" shaklida
    document.getElementById('test-raqam').textContent =
        'Test ' + (joriyTestIndeksi + 1) + ' / ' + dars.testlar.length;

    // Savol matnini chiqaramiz
    document.getElementById('test-savol').textContent = test.savol;

    // Natija qismini yashiramiz
    const natija = document.getElementById('test-natija');
    natija.classList.add('hidden');
    natija.classList.remove('togri-rang', 'notogri-rang');

    // Keyingi savol tugmasini yashiramiz
    document.getElementById('keyingi-test-btn').classList.add('hidden');

    // Javob tugmalarini yaratamiz
    const javoblarDiv = document.getElementById('test-javoblar');
    javoblarDiv.innerHTML = ''; // Avvalgini tozalaymiz

    test.javoblar.forEach(function(javobMatni, indeks) {

        const tugma = document.createElement('button');
        tugma.className = 'javob-tugma';
        tugma.textContent = (indeks + 1) + '. ' + javobMatni;

        // Tugma bosilganda javobni tekshiramiz
        tugma.addEventListener('click', function() {
            javobniTekshir(indeks, tugma);
        });

        javoblarDiv.appendChild(tugma);
    });
}

// Javobni tekshirish
function javobniTekshir(tanlangan, bosildigan_tugma) {

    // Agar javob allaqachon berilgan bo'lsa — qayta bosilmasin
    if (javobBerildi) return;
    javobBerildi = true;

    const dars = darslar[joriyDarsIndeksi];
    const test = dars.testlar[joriyTestIndeksi];

    // Barcha tugmalarni olamiz va o'chiramiz (disabled)
    const barcha_tugmalar = document.querySelectorAll('.javob-tugma');
    barcha_tugmalar.forEach(function(t) {
        t.disabled = true;
    });

    // To'g'ri javob tugmasini har doim yashil qilamiz
    barcha_tugmalar[test.togri].classList.add('togri-javob');

    // Natija bo'limi
    const natija      = document.getElementById('test-natija');
    const natijaMatni = document.getElementById('test-natija-matni');

    natija.classList.remove('hidden');

    if (tanlangan === test.togri) {
        // ✅ TO'G'RI JAVOB
        bosildigan_tugma.classList.add('togri-javob');
        natija.classList.add('togri-rang');
        natijaMatni.textContent = '✅ To\'g\'ri! +10 ball qo\'shildi!';

        // 10 ball qo'shamiz va saqlaymiz
        joriyBal += 10;
        balniSaqla(joriyBal);
        balniChiqar();

    } else {
        // ❌ NOTO'G'RI JAVOB
        bosildigan_tugma.classList.add('notogri-javob');
        natija.classList.add('notogri-rang');
        natijaMatni.textContent = '❌ Noto\'g\'ri. To\'g\'ri javob yashil bilan ko\'rsatildi.';
    }

    // Keyingi tugmani ko'rsatamiz
    const keyingiBtn = document.getElementById('keyingi-test-btn');
    keyingiBtn.classList.remove('hidden');

    // Oxirgi test bo'lsa tugma matnini o'zgartiramiz
    if (joriyTestIndeksi === dars.testlar.length - 1) {
        keyingiBtn.textContent = '🏁 Darsni yakunlash';
    } else {
        keyingiBtn.textContent = 'Keyingi savol ➡️';
    }
}

// Keyingi test savoliga o'tish
function keyingiTest() {

    const dars = darslar[joriyDarsIndeksi];

    if (joriyTestIndeksi < dars.testlar.length - 1) {
        // Hali savollar bor — keyingisiga o'tamiz
        joriyTestIndeksi++;
        testniChiqar();

    } else {
        // Barcha savollar tugadi — dars yakunlandi
        darsYakunlandi();
    }
}

// Dars yakunlanganda
function darsYakunlandi() {

    const testQismi = document.getElementById('test-qismi');

    // Yakunlash xabarini chiqaramiz
    testQismi.innerHTML =
        '<div class="yakunlash-xabar">' +
            '<div class="yakunlash-emoji">🎉</div>' +
            '<h3>Dars yakunlandi!</h3>' +
            '<p>Siz bu darsni muvaffaqiyatli tugatdingiz.</p>' +
            '<p class="joriy-bal-yak">Umumiy balingiz: <strong>' + joriyBal + ' ball</strong></p>' +
            '<button class="keyingi-dars-yak-btn" onclick="keyingiDarsYakundan()">' +
                (joriyDarsIndeksi < darslar.length - 1
                    ? '➡️ Keyingi Darsga O\'tish'
                    : '🏆 Reytingni Ko\'rish') +
            '</button>' +
        '</div>';
}

// Yakunlash xabaridan keyingi darsga yoki reytingga o'tish
function keyingiDarsYakundan() {

    if (joriyDarsIndeksi < darslar.length - 1) {
        joriyDarsIndeksi++;
        darsniChiqar();
        // Test qismini yashirib, darsni ko'rsatamiz
        document.getElementById('test-qismi').classList.add('hidden');
        document.getElementById('dars-tugmasi').classList.remove('hidden');
    } else {
        // Oxirgi dars tugadi — reytingga o'tamiz
        showTab('reyting');
    }
}

// Ballarni ekranda ko'rsatish
function balniChiqar() {
    const balElement = document.getElementById('joriy-bal');
    if (balElement) {
        balElement.textContent = joriyBal;
    }
}


// ====================================================
// 7-QISM: REYTING BO'LIMI
// ====================================================

// Namuna peshqadamlar ro'yxati
// Haqiqiy loyihada bu serverdan keladi
const peshqadamlar = [
    { ism: 'Abdulloh T.',  ball: 320, emoji: '🥇' },
    { ism: 'Zulfiya M.',   ball: 280, emoji: '🥈' },
    { ism: 'Sardor K.',    ball: 250, emoji: '🥉' },
    { ism: 'Nilufar R.',   ball: 210, emoji: '4️⃣'  },
    { ism: 'Bobur A.',     ball: 180, emoji: '5️⃣'  },
    { ism: 'Kamola S.',    ball: 150, emoji: '6️⃣'  },
    { ism: 'Jasur N.',     ball: 120, emoji: '7️⃣'  },
    { ism: 'Madina O.',    ball: 100, emoji: '8️⃣'  },
    { ism: 'Sherzod B.',   ball: 80,  emoji: '9️⃣'  },
    { ism: 'Hulkar Y.',    ball: 60,  emoji: '🔟'  }
];

function reytingniChiqar() {

    // Foydalanuvchini ro'yxatga qo'shamiz yoki yangilaymiz
    const mavjud = peshqadamlar.find(function(p) {
        return p.ism === foydalanuvchiIsmi;
    });

    if (mavjud) {
        mavjud.ball = joriyBal;
    } else {
        peshqadamlar.push({
            ism:   foydalanuvchiIsmi,
            ball:  joriyBal,
            emoji: '👤'
        });
    }

    // Ballar bo'yicha saralamiz (kattadan kichikka)
    peshqadamlar.sort(function(a, b) { return b.ball - a.ball; });

    // Ro'yxatni ekranga chiqaramiz
    const royxatDiv = document.getElementById('reyting-royxati');
    royxatDiv.innerHTML = '';

    peshqadamlar.forEach(function(kishi, indeks) {

        const orn  = indeks + 1;
        const qator = document.createElement('div');
        qator.className = 'reyting-qatori';

        // Hozirgi foydalanuvchi — ajratib ko'rsatamiz
        if (kishi.ism === foydalanuvchiIsmi) {
            qator.classList.add('mening-qatorim');
        }

        // Birinchi 3 o'rin uchun maxsus belgi
        let ornBelgi = orn + '.';
        if (orn === 1) ornBelgi = '🥇';
        if (orn === 2) ornBelgi = '🥈';
        if (orn === 3) ornBelgi = '🥉';

        qator.innerHTML =
            '<span class="reyting-orn">'  + ornBelgi     + '</span>' +
            '<span class="reyting-ism">'  + kishi.ism    + '</span>' +
            '<span class="reyting-ball">' + kishi.ball   + ' ball</span>';

        royxatDiv.appendChild(qator);

        // Foydalanuvchining o'rnini "Mening o'rnim" bo'limida chiqaramiz
        if (kishi.ism === foydalanuvchiIsmi) {
            document.getElementById('mening-ornim-raqam').textContent = orn + '-o\'rin';
            document.getElementById('mening-balim').textContent        = joriyBal + ' ball';
        }
    });
}


// ====================================================
// 8-QISM: DO'STLAR BO'LIMI (REFERAL)
// ====================================================

function dostlarBoliminiYukla() {

    const botNomi    = 'TafakkurMoliyaBot'; // O'zingizning bot nomingiz
    const referalUrl = 'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchiId;

    // Referal havolani input ga o'rnatamiz
    const input = document.getElementById('referal-havola-input');
    if (input) {
        input.value = referalUrl;
    }

    // Referal statistikani chiqaramiz
    const referalSoni = parseInt(localStorage.getItem('tafakkur_referal_' + foydalanuvchiId) || '0');
    const elem1 = document.getElementById('taklif-soni');
    const elem2 = document.getElementById('referal-ball');
    if (elem1) elem1.textContent = referalSoni;
    if (elem2) elem2.textContent = referalSoni * 10;
}

// Havolani nusxalash
function havolaNusxala() {

    const input  = document.getElementById('referal-havola-input');
    const xabar  = document.getElementById('nusxalandi-xabar');
    const havola = input.value;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(havola).then(function() {
            nusxalandiKorsat(xabar);
        });
    } else {
        // Eski usul
        input.select();
        document.execCommand('copy');
        nusxalandiKorsat(xabar);
    }
}

// "Nusxalandi!" xabarini 2 soniya ko'rsatish
function nusxalandiKorsat(xabar) {
    xabar.classList.remove('hidden');
    setTimeout(function() {
        xabar.classList.add('hidden');
    }, 2000);
}

// Telegram orqali ulashish
function telegramUlash() {

    const botNomi  = 'TafakkurMoliyaBot';
    const havola   = 'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchiId;
    const matn     =
        'Assalomu alaykum! 🕌\n' +
        'Tafakkur Moliya ilovasini sinab ko\'ring!\n' +
        'Islom moliyasini o\'rganib, ball to\'plang.\n\n' +
        'Mening havolam: ' + havola;

    const shareUrl =
        'https://t.me/share/url?url=' +
        encodeURIComponent(havola) +
        '&text=' +
        encodeURIComponent(matn);

    tg.openTelegramLink(shareUrl);
}


// ====================================================
// 9-QISM: ILOVANI ISHGA TUSHIRISH
// Sahifa to'liq yuklangandan so'ng bajariladi
// ====================================================

window.onload = function() {

    // Birinchi darsni chiqaramiz
    darsniChiqar();

    // Foydalanuvchi ismini header da ko'rsatamiz
    const ismElement = document.getElementById('foydalanuvchi-ismi');
    if (ismElement) {
        ismElement.textContent = foydalanuvchiIsmi;
    }

    // Joriy ballarni ko'rsatamiz
    balniChiqar();

    // Ta'lim tabini boshida faol qilamiz
    showTab('talim');
};
