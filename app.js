// ====================================================
// TAFAKKUR MOLIYA — APP.JS
// Mini App logikasi: darslar, testlar, ball, reyting, referal
// Darslar va testlar bazasi lessons.js faylida saqlanadi.
// ====================================================


// ====================================================
// 1-QISM: TELEGRAM WEB APP ULANISHI
// ====================================================

const tg = window.Telegram && window.Telegram.WebApp
    ? window.Telegram.WebApp
    : null;

if (tg) {
    tg.expand();
    tg.ready();
}

let foydalanuvchiIsmi = 'Mehmon';
let foydalanuvchiId = 'guest';

if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    foydalanuvchiIsmi = tg.initDataUnsafe.user.first_name || 'Mehmon';
    foydalanuvchiId = tg.initDataUnsafe.user.id || 'guest';
}


// ====================================================
// 2-QISM: DARSLAR BAZASINI TEKSHIRISH
// lessons.js ichida const darslar = [...] bo‘lishi kerak
// ====================================================

const darslarRoyxati =
    typeof darslar !== 'undefined' && Array.isArray(darslar)
        ? darslar
        : [];


// ====================================================
// 3-QISM: FOYDALANUVCHI BALLARI
// ====================================================

function balniYukla() {
    const saqlangan = localStorage.getItem('tafakkur_bal_' + foydalanuvchiId);

    if (saqlangan !== null) {
        return parseInt(saqlangan, 10) || 0;
    }

    return 0;
}

function balniSaqla(bal) {
    localStorage.setItem('tafakkur_bal_' + foydalanuvchiId, bal);
}

let joriyBal = balniYukla();


// ====================================================
// 4-QISM: ILOVA HOLATI
// ====================================================

let joriyDarsIndeksi = 0;
let joriyTestIndeksi = 0;
let javobBerildi = false;


// ====================================================
// 5-QISM: YORDAMCHI FUNKSIYALAR
// ====================================================

function element(id) {
    return document.getElementById(id);
}

function xavfsizMatn(qiymat, fallback = '') {
    if (qiymat === undefined || qiymat === null) return fallback;
    return String(qiymat);
}

function darsMavjudmi() {
    return darslarRoyxati.length > 0;
}

function joriyDarsniOl() {
    if (!darsMavjudmi()) return null;
    return darslarRoyxati[joriyDarsIndeksi] || null;
}

function testQisminiTikla() {
    const testQismi = element('test-qismi');

    if (!testQismi) return;

    testQismi.innerHTML = `
        <p id="test-raqam">Test 1 / 3</p>

        <div class="card">
            <p id="test-savol">Savol yuklanmoqda...</p>
        </div>

        <div id="test-javoblar"></div>

        <div id="test-natija" class="hidden">
            <p id="test-natija-matni"></p>
        </div>

        <button
            id="keyingi-test-btn"
            class="hidden"
            onclick="keyingiTest()">
            Keyingi savol ➡️
        </button>
    `;
}


// ====================================================
// 6-QISM: TAB NAVIGATSIYA
// ====================================================

function showTab(tabNomi) {
    const barchaBolimlar = document.querySelectorAll('.tab-section');

    barchaBolimlar.forEach(function (bolim) {
        bolim.classList.remove('active-section');
    });

    const barchaTugmalar = document.querySelectorAll('.tab-button');

    barchaTugmalar.forEach(function (tugma) {
        tugma.classList.remove('active');
    });

    const tanlanganBolim = element('tab-' + tabNomi);
    if (tanlanganBolim) {
        tanlanganBolim.classList.add('active-section');
    }

    const tanlanganTugma = element('tab-btn-' + tabNomi);
    if (tanlanganTugma) {
        tanlanganTugma.classList.add('active');
    }

    if (tabNomi === 'reyting') {
        reytingniChiqar();
    }

    if (tabNomi === 'dostlar') {
        dostlarBoliminiYukla();
    }
}


// ====================================================
// 7-QISM: DARSNI EKRANGA CHIQARISH
// ====================================================

function darsniChiqar() {
    testQisminiTikla();

    if (!darsMavjudmi()) {
        const sarlavha = element('dars-sarlavha');
        const matn = element('dars-matni');
        const hisob = element('dars-hisobi');

        if (hisob) hisob.textContent = '0 / 0';
        if (sarlavha) sarlavha.textContent = 'Darslar yuklanmadi';
        if (matn) {
            matn.textContent =
                'lessons.js faylida darslar topilmadi. Iltimos, lessons.js fayli index.html ichida app.js dan oldin ulanganini tekshiring.';
        }

        return;
    }

    const dars = joriyDarsniOl();

    if (!dars) return;

    const darsRaqam = element('dars-raqam');
    const darsSarlavha = element('dars-sarlavha');
    const darsMatni = element('dars-matni');
    const testQismi = element('test-qismi');
    const darsTugmasi = element('dars-tugmasi');
    const testniBoshlashBtn = element('testni-boshlash-btn');

    if (darsRaqam) {
        darsRaqam.textContent = (joriyDarsIndeksi + 1) + '-Dars';
    }

    if (darsSarlavha) {
        darsSarlavha.textContent =
            xavfsizMatn(dars.emoji, '📘') + ' ' + xavfsizMatn(dars.mavzu, 'Dars mavzusi');
    }

    if (darsMatni) {
    darsMatni.textContent = xavfsizMatn(dars.matn, 'Dars matni kiritilmagan.');
    darsMatni.style.whiteSpace = 'pre-line';
}

disclaimerKartaniChiqar(dars);

    if (testQismi) {
        testQismi.classList.add('hidden');
    }

    if (darsTugmasi) {
        darsTugmasi.classList.remove('hidden');
    }

    if (testniBoshlashBtn) {
        const testlar = Array.isArray(dars.testlar) ? dars.testlar : [];

        if (testlar.length === 0) {
            testniBoshlashBtn.disabled = true;
            testniBoshlashBtn.textContent = 'Test mavjud emas';
        } else {
            testniBoshlashBtn.disabled = false;
            testniBoshlashBtn.textContent = '📝 Testni Boshlash';
        }
    }

    joriyTestIndeksi = 0;
    javobBerildi = false;

    yangilaNavigatsiya();
    balniChiqar();
}


// ====================================================
// 8-QISM: DARS NAVIGATSIYASI
// ====================================================

function yangilaNavigatsiya() {
    const oldingiTugma = element('oldingi-dars-btn');
    const keyingiTugma = element('keyingi-dars-btn');
    const darsHisobi = element('dars-hisobi');

    const jamiDarslar = darslarRoyxati.length;

    if (darsHisobi) {
        darsHisobi.textContent =
            jamiDarslar > 0
                ? (joriyDarsIndeksi + 1) + ' / ' + jamiDarslar
                : '0 / 0';
    }

    if (oldingiTugma) {
        oldingiTugma.disabled = joriyDarsIndeksi === 0;
        oldingiTugma.style.opacity = joriyDarsIndeksi === 0 ? '0.4' : '1';
    }

    if (keyingiTugma) {
        keyingiTugma.disabled = joriyDarsIndeksi >= jamiDarslar - 1;
        keyingiTugma.style.opacity =
            joriyDarsIndeksi >= jamiDarslar - 1 ? '0.4' : '1';
    }
}

function oldingiDars() {
    if (joriyDarsIndeksi > 0) {
        joriyDarsIndeksi--;
        darsniChiqar();
    }
}

function keyingiDars() {
    if (joriyDarsIndeksi < darslarRoyxati.length - 1) {
        joriyDarsIndeksi++;
        darsniChiqar();
    }
}


// ====================================================
// 9-QISM: TESTNI BOSHLASH VA CHIQARISH
// ====================================================

function testniBoshlash() {
    const dars = joriyDarsniOl();

    if (!dars || !Array.isArray(dars.testlar) || dars.testlar.length === 0) {
        alert('Bu dars uchun test savollari hali kiritilmagan.');
        return;
    }

    testQisminiTikla();

    joriyTestIndeksi = 0;
    javobBerildi = false;

    const darsTugmasi = element('dars-tugmasi');
    const testQismi = element('test-qismi');

    if (darsTugmasi) {
        darsTugmasi.classList.add('hidden');
    }

    if (testQismi) {
        testQismi.classList.remove('hidden');
    }

    testniChiqar();
}

function testniChiqar() {
    const dars = joriyDarsniOl();

    if (!dars || !Array.isArray(dars.testlar)) return;

    const test = dars.testlar[joriyTestIndeksi];

    if (!test) return;

    javobBerildi = false;

    const testRaqam = element('test-raqam');
    const testSavol = element('test-savol');
    const testJavoblar = element('test-javoblar');
    const testNatija = element('test-natija');
    const keyingiTestBtn = element('keyingi-test-btn');

    if (testRaqam) {
        testRaqam.textContent =
            'Test ' + (joriyTestIndeksi + 1) + ' / ' + dars.testlar.length;
    }

    if (testSavol) {
        testSavol.textContent = xavfsizMatn(test.savol, 'Savol kiritilmagan.');
    }

    if (testNatija) {
        testNatija.classList.add('hidden');
        testNatija.classList.remove('togri-rang', 'notogri-rang');
    }

    if (keyingiTestBtn) {
        keyingiTestBtn.classList.add('hidden');
        keyingiTestBtn.textContent = 'Keyingi savol ➡️';
    }

    if (!testJavoblar) return;

    testJavoblar.innerHTML = '';

    const javoblar = Array.isArray(test.javoblar) ? test.javoblar : [];

    javoblar.forEach(function (javobMatni, indeks) {
        const tugma = document.createElement('button');
        tugma.className = 'javob-tugma';
        tugma.textContent = (indeks + 1) + '. ' + javobMatni;

        tugma.addEventListener('click', function () {
            javobniTekshir(indeks, tugma);
        });

        testJavoblar.appendChild(tugma);
    });
}


// ====================================================
// 10-QISM: JAVOBNI TEKSHIRISH
// ====================================================

function javobniTekshir(tanlanganIndeks, bosilganTugma) {
    if (javobBerildi) return;

    javobBerildi = true;

    const dars = joriyDarsniOl();

    if (!dars || !Array.isArray(dars.testlar)) return;

    const test = dars.testlar[joriyTestIndeksi];

    if (!test) return;

    const togriIndeks = Number(test.togri);

    const barchaTugmalar = document.querySelectorAll('.javob-tugma');

    barchaTugmalar.forEach(function (tugma) {
        tugma.disabled = true;
    });

    if (barchaTugmalar[togriIndeks]) {
        barchaTugmalar[togriIndeks].classList.add('togri-javob');
    }

    const natija = element('test-natija');
    const natijaMatni = element('test-natija-matni');

    if (natija) {
        natija.classList.remove('hidden');
    }

    if (tanlanganIndeks === togriIndeks) {
        if (bosilganTugma) {
            bosilganTugma.classList.add('togri-javob');
        }

        if (natija) {
            natija.classList.add('togri-rang');
        }

        if (natijaMatni) {
            natijaMatni.textContent = '✅ To‘g‘ri! +10 ball qo‘shildi!';
        }

        joriyBal += 10;
        balniSaqla(joriyBal);
        balniChiqar();

    } else {
        if (bosilganTugma) {
            bosilganTugma.classList.add('notogri-javob');
        }

        if (natija) {
            natija.classList.add('notogri-rang');
        }

        if (natijaMatni) {
            natijaMatni.textContent =
                '❌ Noto‘g‘ri. To‘g‘ri javob yashil bilan ko‘rsatildi.';
        }
    }

    const keyingiTestBtn = element('keyingi-test-btn');

    if (keyingiTestBtn) {
        keyingiTestBtn.classList.remove('hidden');

        if (joriyTestIndeksi === dars.testlar.length - 1) {
            keyingiTestBtn.textContent = '🏁 Darsni yakunlash';
        } else {
            keyingiTestBtn.textContent = 'Keyingi savol ➡️';
        }
    }
}

function keyingiTest() {
    const dars = joriyDarsniOl();

    if (!dars || !Array.isArray(dars.testlar)) return;

    if (joriyTestIndeksi < dars.testlar.length - 1) {
        joriyTestIndeksi++;
        testniChiqar();
    } else {
        darsYakunlandi();
    }
}


// ====================================================
// 11-QISM: DARS YAKUNLASH
// ====================================================

function darsYakunlandi() {
    const testQismi = element('test-qismi');

    if (!testQismi) return;

    const oxirgiDarsmi = joriyDarsIndeksi >= darslarRoyxati.length - 1;

    testQismi.innerHTML =
        '<div class="yakunlash-xabar">' +
            '<div class="yakunlash-emoji">🎉</div>' +
            '<h3>Dars yakunlandi!</h3>' +
            '<p>Siz bu darsni muvaffaqiyatli yakunladingiz.</p>' +
            '<p class="joriy-bal-yak">Umumiy balingiz: <strong>' + joriyBal + ' ball</strong></p>' +
            '<button class="keyingi-dars-yak-btn" onclick="keyingiDarsYakundan()">' +
                (oxirgiDarsmi ? '🏆 Reytingni Ko‘rish' : '➡️ Keyingi Darsga O‘tish') +
            '</button>' +
        '</div>';
}

function keyingiDarsYakundan() {
    if (joriyDarsIndeksi < darslarRoyxati.length - 1) {
        joriyDarsIndeksi++;
        darsniChiqar();
    } else {
        showTab('reyting');
    }
}


// ====================================================
// 12-QISM: BALLARNI KO‘RSATISH
// ====================================================

function balniChiqar() {
    const balElement = element('joriy-bal');

    if (balElement) {
        balElement.textContent = joriyBal;
    }
}


// ====================================================
// 13-QISM: REYTING BO‘LIMI
// ====================================================

const peshqadamlar = [
    { ism: 'Abdulloh T.', ball: 320 },
    { ism: 'Zulfiya M.', ball: 280 },
    { ism: 'Sardor K.', ball: 250 },
    { ism: 'Nilufar R.', ball: 210 },
    { ism: 'Bobur A.', ball: 180 },
    { ism: 'Kamola S.', ball: 150 },
    { ism: 'Jasur N.', ball: 120 },
    { ism: 'Madina O.', ball: 100 },
    { ism: 'Sherzod B.', ball: 80 },
    { ism: 'Hulkar Y.', ball: 60 }
];

function reytingniChiqar() {
    const mavjud = peshqadamlar.find(function (p) {
        return p.ism === foydalanuvchiIsmi;
    });

    if (mavjud) {
        mavjud.ball = joriyBal;
    } else {
        peshqadamlar.push({
            ism: foydalanuvchiIsmi,
            ball: joriyBal
        });
    }

    peshqadamlar.sort(function (a, b) {
        return b.ball - a.ball;
    });

    const royxatDiv = element('reyting-royxati');

    if (!royxatDiv) return;

    royxatDiv.innerHTML = '';

    peshqadamlar.forEach(function (kishi, indeks) {
        const orn = indeks + 1;

        const qator = document.createElement('div');
        qator.className = 'reyting-qatori';

        if (kishi.ism === foydalanuvchiIsmi) {
            qator.classList.add('mening-qatorim');
        }

        let ornBelgi = orn + '.';

        if (orn === 1) ornBelgi = '🥇';
        if (orn === 2) ornBelgi = '🥈';
        if (orn === 3) ornBelgi = '🥉';

        qator.innerHTML =
            '<span class="reyting-orn">' + ornBelgi + '</span>' +
            '<span class="reyting-ism">' + kishi.ism + '</span>' +
            '<span class="reyting-ball">' + kishi.ball + ' ball</span>';

        royxatDiv.appendChild(qator);

        if (kishi.ism === foydalanuvchiIsmi) {
            const meningOrnim = element('mening-ornim-raqam');
            const meningBalim = element('mening-balim');

            if (meningOrnim) {
                meningOrnim.textContent = orn + '-o‘rin';
            }

            if (meningBalim) {
                meningBalim.textContent = joriyBal + ' ball';
            }
        }
    });
}


// ====================================================
// 14-QISM: DO‘STLAR / REFERAL BO‘LIMI
// ====================================================

function dostlarBoliminiYukla() {
    const botNomi = 'TafakkurMoliyaBot';
    const referalUrl =
        'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchiId;

    const input = element('referal-havola-input');

    if (input) {
        input.value = referalUrl;
    }

    const referalSoni = parseInt(
        localStorage.getItem('tafakkur_referal_' + foydalanuvchiId) || '0',
        10
    );

    const taklifSoni = element('taklif-soni');
    const referalBall = element('referal-ball');

    if (taklifSoni) {
        taklifSoni.textContent = referalSoni;
    }

    if (referalBall) {
        referalBall.textContent = referalSoni * 10;
    }
}

function havolaNusxala() {
    const input = element('referal-havola-input');
    const xabar = element('nusxalandi-xabar');

    if (!input) return;

    const havola = input.value;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(havola).then(function () {
            nusxalandiKorsat(xabar);
        });
    } else {
        input.select();
        document.execCommand('copy');
        nusxalandiKorsat(xabar);
    }
}

function nusxalandiKorsat(xabar) {
    if (!xabar) return;

    xabar.classList.remove('hidden');

    setTimeout(function () {
        xabar.classList.add('hidden');
    }, 2000);
}

function telegramUlash() {
    const botNomi = 'TafakkurMoliyaBot';
    const havola = 'https://t.me/' + botNomi + '?start=ref_' + foydalanuvchiId;

    const matn =
        'Assalomu alaykum! 🕌\n' +
        'Tafakkur Moliya ilovasini sinab ko‘ring!\n' +
        'Islom moliyasini o‘rganib, ball to‘plang.\n\n' +
        'Mening havolam: ' + havola;

    const shareUrl =
        'https://t.me/share/url?url=' +
        encodeURIComponent(havola) +
        '&text=' +
        encodeURIComponent(matn);

    if (tg && tg.openTelegramLink) {
        tg.openTelegramLink(shareUrl);
    } else {
        window.open(shareUrl, '_blank');
    }
}


// ====================================================
// 15-QISM: ILOVANI ISHGA TUSHIRISH
// ====================================================

function ilovaniIshgaTushir() {
    const ismElement = element('foydalanuvchi-ismi');

    if (ismElement) {
        ismElement.textContent = foydalanuvchiIsmi;
    }

    balniChiqar();
    darsniChiqar();
    showTab('talim');
}

document.addEventListener('DOMContentLoaded', ilovaniIshgaTushir);
