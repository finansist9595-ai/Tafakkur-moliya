// ================================================
// APP.JS — TAFAKKUR MOLIYA
// Barcha mantiq shu faylda
// ================================================


// ================================================
// 1. TELEGRAM MINI APP — ISHGA TUSHIRISH
// ================================================

// Telegram ob'ektini olamiz
const tg = window.Telegram.WebApp;

// Ilovani to'liq ekranga ochish
tg.expand();

// Telegram mavzusiga mos rang o'rnatish
tg.setHeaderColor('#1b4332');


// ================================================
// 2. FOYDALANUVCHI MA'LUMOTLARI
// ================================================

// Telegram dan foydalanuvchi ma'lumotini olamiz
// Agar Telegram dan ochilmasa, sinov ma'lumotlari ishlatiladi
let foydalanuvchi = {
    id: 0,
    ism: 'Mehmon',
    bal: 0,
    referalSoni: 0
};

// Telegram foydalanuvchi ma'lumotini yuklash
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    foydalanuvchi.id = tg.initDataUnsafe.user.id;
    foydalanuvchi.ism = tg.initDataUnsafe.user.first_name || 'Foydalanuvchi';
}

// LocalStorage dan saqlangan ballarni yuklaymiz
function ballarniYukla() {
    const saqlangan = localStorage.getItem('tafakkur_bal_' + foydalanuvchi.id);
    if (saqlangan) {
        foydalanuvchi.bal = parseInt(saqlangan);
    }
    const referalSaqlangan = localStorage.getItem('tafakkur_referal_' + foydalanuvchi.id);
    if (referalSaqlangan) {
        foydalanuvchi.referalSoni = parseInt(referalSaqlangan);
    }
}

// Ballarni LocalStorage ga saqlaymiz
function ballarniSaqla() {
    localStorage.setItem('tafakkur_bal_' + foydalanuvchi.id, foydalanuvchi.bal);
    localStorage.setItem('tafakkur_referal_' + foydalanuvchi.id, foydalanuvchi.referalSoni);
}


// ================================================
// 3. DARSLAR MA'LUMOTLARI
// ================================================

// Darslar ro'yxati — keyinchalik ko'proq qo'shishingiz mumkin
const darslar = [
    {
        id: 1,
        sarlavha: "Ribo (Foiz) nima?",
        matn: "Ribo — bu qarz berish yoki olishda belgilangan qo'shimcha to'lov (foiz) hisoblanadi. Islom moliyasida ribo qat'iyan man etilgan. Chunki u adolatsizlikka olib keladi: kuchli tomonlar kuchsizlardan foyda ko'radi. Quron karimda: 'Aloh ribodan kelgan daromadni yo'q qiladi, sadaqalarni esa ko'paytiradi' (2:276) deyilgan."
    },
    {
        id: 2,
        sarlavha: "Murabaha nima?",
        matn: "Murabaha — bu Islom moliyasidagi savdo shartnomasi turi. Bunda bank yoki moliya muassasasi tovarni sotib oladi va uni mijozga muayyan foyda (margin) bilan sotadi. Foiz yo'q — faqat savdo foydasi bor. Masalan: bank 10 mln so'mlik mashina sotib olib, uni 12 mln so'mga qismlarga bo'lib sotadi."
    },
    {
        id: 3,
        sarlavha: "Zakat nima?",
        matn: "Zakat — Islomning besh asosiy ustunidan biri. Bu mol-mulkning majburiy tozalanishi hisoblanadi. Nisob (minimal chegara) ga yetgan har bir musulmon yiliga bir marta o'z boyligining 2.5 foizini zakatga berishi shart. Zakat — bu sadaqa emas, balki faqirlarning boylarga nisbatan huquqi."
    },
    {
        id: 4,
        sarlavha: "Mushoraka nima?",
        matn: "Mushoraka — bu Islom moliyasidagi sherikchilik shartnomasi. Ikki yoki undan ortiq tomon birgalikda biznesga sarmoya kiritadi va foyda hamda zararni kelishilgan nisbatda taqsimlaydi. Bu oddiy bank kreditidan farqli — bank ham xavfni o'z zimmasiga oladi."
    },
    {
        id: 5,
        sarlavha: "Takaful nima?",
        matn: "Takaful — Islom sug'urtasi. Oddiy sug'urtadan farqi: ishtirokchilar o'zaro yordam uchun jamg'arma hosil qiladi. Agar birovga zarar yetsa, jamg'armadan qoplanadi. Kompaniya faqat boshqaruv xizmati uchun haq oladi. Shu tarzda ribo va garar (noaniqlik) dan qochiladi."
    }
];

// Hozirgi dars indeksi
let joriyDarsIndeksi = 0;

// LocalStorage dan oxirgi o'qilgan darsni yuklaymiz
function darsIndeksiniYukla() {
    const saqlangan = localStorage.getItem('tafakkur_dars_' + foydalanuvchi.id);
    if (saqlangan) {
        joriyDarsIndeksi = parseInt(saqlangan);
        // Agar indeks darslar sonidan oshib ketsa, 0 ga qaytaramiz
        if (joriyDarsIndeksi >= darslar.length) {
            joriyDarsIndeksi = 0;
        }
    }
}


// ================================================
// 4. TEST SAVOLLARI MA'LUMOTLARI
// ================================================

// Har bir darsga mos test savollari
const testlar = [
    {
        darsId: 1,
        savol: "Islom moliyasida ribo nima?",
        javoblar: [
            "Qarz berish va olishda belgilangan foiz to'lov",
            "Savdo kelishuvi turi",
            "Islomiy sug'urta",
            "Zakat to'lovi"
        ],
        togriJavobIndeksi: 0
    },
    {
        darsId: 2,
        savol: "Murabaha qanday ishlaydi?",
        javoblar: [
            "Bank foiz bilan qarz beradi",
            "Bank tovarni sotib olib, foyda bilan mijozga sotadi",
            "Ikki tomon birgalikda sarmoya kiritadi",
            "Faqirlar uchun yordam jamg'armasi"
        ],
        togriJavobIndeksi: 1
    },
    {
        darsId: 3,
        savol: "Zakat necha foiz hisoblanadi?",
        javoblar: [
            "5 foiz",
            "10 foiz",
            "2.5 foiz",
            "1 foiz"
        ],
        togriJavobIndeksi: 2
    },
    {
        darsId: 4,
        savol: "Mushorakada kim xavfni o'z zimmasiga oladi?",
        javoblar: [
            "Faqat mijoz",
            "Faqat bank",
            "Hukumat",
            "Barcha sheriklar birgalikda"
        ],
        togriJavobIndeksi: 3
    },
    {
        darsId: 5,
        savol: "Takaful qanday Islomiy sug'urta prinsipi asosida ishlaydi?",
        javoblar: [
            "Kompaniya foyda olish uchun sarmoya kiritadi",
            "Ishtirokchilar o'zaro yordam jamg'armasini hosil qiladi",
            "Davlat kafolat beradi",
            "Foiz asosida ishlaydi"
        ],
        togriJavobIndeksi: 1
    }
];

// Joriy test holati
let joriyTestIndeksi = 0;
let javobBerildi = false;


// ================================================
// 5. REYTING MA'LUMOTLARI (Namuna)
// ================================================

// Haqiqiy loyihada bu server dan keladi
// Hozir namuna ma'lumotlar ishlatiladi
let reytingMalumotlari = [
    { ism: "Abdulloh T.",  bal: 150 },
    { ism: "Zulfiya M.",   bal: 130 },
    { ism: "Sardor K.",    bal: 115 },
    { ism: "Nilufar R.",   bal: 95  },
    { ism: "Bobur A.",     bal: 80  },
    { ism: "Kamola S.",    bal: 70  },
    { ism: "Jasur N.",     bal: 55  },
    { ism: "Madina O.",    bal: 40  },
    { ism: "Sherzod B.",   bal: 30  },
    { ism: "Hulkar Y.",    bal: 20  }
];


// ================================================
// 6. TAB (BO'LIM) ALMASHTIRISH FUNKSIYASI
// ================================================

function showTab(tabNomi) {

    // Barcha bo'limlarni yashiramiz
    const barcha_sectionlar = document.querySelectorAll('.tab-section');
    barcha_sectionlar.forEach(function(section) {
        section.classList.remove('active-section');
    });

    // Barcha tab tugmalardan "active" klassini olib tashlaymiz
    const barcha_tugmalar = document.querySelectorAll('.tab-button');
    barcha_tugmalar.forEach(function(tugma) {
        tugma.classList.remove('active');
    });

    // Tanlangan bo'limni ko'rsatamiz
    const tanlangan_section = document.getElementById('tab-' + tabNomi);
    if (tanlangan_section) {
        tanlangan_section.classList.add('active-section');
    }

    // Tanlangan tab tugmasini faollashtirамiz
    const tanlangan_tugma = document.getElementById('tab-btn-' + tabNomi);
    if (tanlangan_tugma) {
        tanlangan_tugma.classList.add('active');
    }

    // Reyting bo'limi ochilganda reytingni yangilaymiz
    if (tabNomi === 'reyting') {
        reytingniKorsат();
    }

    // Do'stlar bo'limi ochilganda referal ma'lumotlarini yuklaymiz
    if (tabNomi === 'dostlar') {
        dostlarBoliminiYukla();
    }
}


// ================================================
// 7. TA'LIM BO'LIMI FUNKSIYALARI
// ================================================

// Darsni ekranga chiqarish
function darsniKorsat() {
    const dars = darslar[joriyDarsIndeksi];

    // Dars sarlavhasi va matnini o'rnatamiz
    document.getElementById('dars-sarlavha').textContent = dars.sarlavha;
    document.getElementById('dars-matni').textContent    = dars.matn;

    // Darsga mos testni chiqaramiz
    testniKorsat(joriyDarsIndeksi);

    // Joriy ballarni ko'rsatamiz
    balniKorsat();
}

// Testni ekranga chiqarish
function testniKorsat(darsIndeksi) {
    const test = testlar[darsIndeksi];
    joriyTestIndeksi = darsIndeksi;
    javobBerildi = false;

    // Savol matnini o'rnatamiz
    document.getElementById('test-savol-matni').textContent = test.savol;

    // Natija va keyingi tugmalarni yashiramiz
    const natija = document.getElementById('test-natija');
    natija.classList.add('hidden');
    natija.classList.remove('togri-natija', 'notogri-natija');

    document.getElementById('keyingi-savol-btn').classList.add('hidden');

    // Javob tugmalarini yaratamiz
    const javoblarDiv = document.getElementById('test-javoblar');
    javoblarDiv.innerHTML = ''; // Avvalgisini tozalaymiz

    test.javoblar.forEach(function(javob, indeks) {
        const tugma = document.createElement('button');
        tugma.className = 'javob-tugma';
        tugma.textContent = javob;

        // Tugmaga bosilganda javobni tekshiramiz
        tugma.onclick = function() {
            javobniTekshir(indeks);
        };

        javoblarDiv.appendChild(tugma);
    });
}

// Javobni tekshirish
function javobniTekshir(tanlangan_indeks) {

    // Agar javob allaqachon berilgan bo'lsa, qayta bosishni oldini olamiz
    if (javobBerildi) {
        return;
    }
    javobBerildi = true;

    const test = testlar[joriyTestIndeksi];
    const tugmalar = document.querySelectorAll('.javob-tugma');
    const natija   = document.getElementById('test-natija');
    const natijaMatni = document.getElementById('test-natija-matni');

    // To'g'ri javobni yashil, noto'g'rini qizil qilamiz
    tugmalar.forEach(function(tugma, indeks) {
        tugma.disabled = true; // Barcha tugmalarni o'chiramiz
        if (indeks === test.togriJavobIndeksi) {
            tugma.classList.add('togri');
        }
    });

    // Agar tanlangan javob to'g'ri bo'lsa
    if (tanlangan_indeks === test.togriJavobIndeksi) {
        tugmalar[tanlangan_indeks].classList.add('togri');
        natija.classList.remove('hidden');
        natija.classList.add('togri-natija');
        natijaMatni.textContent = '✅ To\'g\'ri! +10 ball qo\'shildi!';

        // 10 ball qo'shamiz
        foydalanuvchi.bal += 10;
        ballarniSaqla();
        balniKorsat();

    } else {
        // Noto'g'ri javob
        tugmalar[tanlangan_indeks].classList.add('notogri');
        natija.classList.remove('hidden');
        natija.classList.add('notogri-natija');
        natijaMatni.textContent = '❌ Noto\'g\'ri. To\'g\'ri javob yashil bilan belgilandi.';
    }

    // Keyingi savol tugmasini ko'rsatamiz
    document.getElementById('keyingi-savol-btn').classList.remove('hidden');
}

// Keyingi savolga o'tish
function keyingiSavol() {
    // Keyingi darsga o'tamiz
    joriyDarsIndeksi++;

    // Agar oxirgi darsgacha yetib kelsak, boshiga qaytamiz
    if (joriyDarsIndeksi >= darslar.length) {
        joriyDarsIndeksi = 0;
        alert('🎉 Barcha darslarni tugatdingiz! Boshidan boshlanmoqda.');
    }

    // Yangi dars indeksini saqlaymiz
    localStorage.setItem('tafakkur_dars_' + foydalanuvchi.id, joriyDarsIndeksi);

    // Yangi darsni ko'rsatamiz
    darsniKorsat();
}

// Ballarni ekranda yangilash
function balniKorsat() {
    document.getElementById('joriy-bal').textContent = foydalanuvchi.bal;
}


// ================================================
// 8. REYTING BO'LIMI FUNKSIYALARI
// ================================================

function reytingniKorsат() {

    // Foydalanuvchini reytingga qo'shamiz (agar u ro'yxatda yo'q bo'lsa)
    const mavjud = reytingMalumotlari.find(function(r) {
        return r.ism === foydalanuvchi.ism;
    });

    if (mavjud) {
        mavjud.bal = foydalanuvchi.bal; // Ballarni yangilaymiz
    } else {
        reytingMalumotlari.push({
            ism: foydalanuvchi.ism,
            bal: foydalanuvchi.bal
        });
    }

    // Reytingni ballar bo'yicha saralamiz (kattadan kichikka)
    reytingMalumotlari.sort(function(a, b) {
        return b.bal - a.bal;
    });

    // Reyting ro'yxatini ekranda yaratamiz
    const royxatDiv = document.getElementById('reyting-royxati');
    royxatDiv.innerHTML = '';

    reytingMalumotlari.forEach(function(kishi, indeks) {
        const orn = indeks + 1;

        // O'rin ikonkasi
        let ornMatni = orn + '.';
        let ornKlass = '';
        if (orn === 1) { ornMatni = '🥇'; ornKlass = 'birinchi';  }
        if (orn === 2) { ornMatni = '🥈'; ornKlass = 'ikkinchi';  }
        if (orn === 3) { ornMatni = '🥉'; ornKlass = 'uchinchi';  }

        // Qator elementini yaratamiz
        const qator = document.createElement('div');
        qator.className = 'reyting-qatori';

        // Agar bu hozirgi foydalanuvchi bo'lsa, ajratib ko'rsatamiz
        if (kishi.ism === foydalanuvchi.ism) {
            qator.style.backgroundColor = '#d8f3dc';
            qator.style.borderColor = '#2d6a4f';
        }

        qator.innerHTML =
            '<span class="reyting-orn ' + ornKlass + '">' + ornMatni + '</span>' +
            '<span class="reyting-ism">' + kishi.ism + '</span>' +
            '<span class="reyting-ball">' + kishi.bal + ' ball</span>';

        royxatDiv.appendChild(qator);

        // Foydalanuvchining o'rnini topamiz
        if (kishi.ism === foydalanuvchi.ism) {
            document.getElementById('mening-ornim').textContent = orn;
            document.getElementById('mening-balim-reyting').textContent = kishi.bal;
        }
    });
}


// ================================================
// 9. DO'STLAR BO'LIMI FUNKSIYALARI
// ================================================

// Do'stlar bo'limini yuklash
function dostlarBoliminiYukla() {

    // Referal havolasini yaratamiz
    // Bot nomi: @TafakkurMoliyaBot (o'zingizning bot nomingizni qo'ying)
    const botNomi = 'TafakkurMoliyaBot';
    const referalHavola = 'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchi.id;

    // Havolani input ga o'rnatamiz
    document.getElementById('referal-havola-input').value = referalHavola;

    // Statistikani yangilaymiz
    document.getElementById('taklif-soni').textContent  = foydalanuvchi.referalSoni;
    document.getElementById('referal-ball').textContent = foydalanuvchi.referalSoni * 10;

    // Do'stlar ro'yxatini chiqaramiz
    dostlarRoyxatiniKorsat();
}

// Do'stlar ro'yxatini chiqarish
function dostlarRoyxatiniKorsat() {
    const royxatDiv = document.getElementById('dostlar-royxati');

    // LocalStorage dan do'stlar ro'yxatini yuklaymiz
    const saqlangan = localStorage.getItem('tafakkur_dostlar_' + foydalanuvchi.id);
    const dostlar = saqlangan ? JSON.parse(saqlangan) : [];

    if (dostlar.length === 0) {
        royxatDiv.innerHTML = '<p id="dostlar-yuklanmoqda">Hali hech kim taklif qilinmagan.</p>';
        return;
    }

    royxatDiv.innerHTML = '';

    dostlar.forEach(function(dost) {
        const qator = document.createElement('div');
        qator.className = 'dost-qatori';
        qator.innerHTML =
            '<span class="dost-avatar">👤</span>' +
            '<span class="dost-ism">' + dost.ism + '</span>' +
            '<span class="dost-ball">+10 ball</span>';
        royxatDiv.appendChild(qator);
    });
}

// Referal havolani nusxalash
function havolaNusxala() {
    const input = document.getElementById('referal-havola-input');
    const havola = input.value;

    // Telegram Mini App ichida clipboard ishlatamiz
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(havola).then(function() {
            nusxalandiKorsat();
        });
    } else {
        // Eski usul (ba'zi brauzerlar uchun)
        input.select();
        document.execCommand('copy');
        nusxalandiKorsat();
    }
}

// "Nusxalandi!" xabarini ko'rsatish
function nusxalandiKorsat() {
    const xabar = document.getElementById('nusxalandi-xabar');
    xabar.classList.remove('hidden');

    // 2 soniyadan so'ng yashirамiz
    setTimeout(function() {
        xabar.classList.add('hidden');
    }, 2000);
}

// Telegram orqali ulashish
function telegramUlash() {
    const botNomi  = 'TafakkurMoliyaBot';
    const havola   = 'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchi.id;
    const xabar    = 'Assalomu alaykum! 🕌 Tafakkur Moliya ilovasini ko\'rib chiqing! ' +
                     'Islom moliyasini o\'rganib, ball to\'plang. ' +
                     'Mening havolam orqali kiring: ' + havola;

    // Telegram share URL
    const shareUrl = 'https://t.me/share/url?url=' +
                     encodeURIComponent(havola) +
                     '&text=' +
                     encodeURIComponent(xabar);

    // Telegram Mini App orqali ochamiz
    tg.openTelegramLink(shareUrl);
}


// ================================================
// 10. ILOVANI ISHGA TUSHIRISH
// ================================================

// Sahifa to'liq yuklangandan so'ng ishga tushadi
window.onload = function() {

    // Saqlangan ballarni yuklaymiz
    ballarniYukla();

    // Oxirgi o'qilgan dars indeksini yuklaymiz
    darsIndeksiniYukla();

    // Birinchi darsni ko'rsatamiz
    darsniKorsat();

    // Telegram ga tayyor ekanligini bildiramiz
    tg.ready();
};
