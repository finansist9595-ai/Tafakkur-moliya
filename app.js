// ====================================================
// 13-QISM: DARSNI EKRANGA CHIQARISH
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
                'lessons.js faylida darslar topilmadi. lessons.js fayli index.html ichida app.js dan oldin ulanganini tekshiring.';
        }

        return;
    }

    const dars = joriyDarsniOl();

    if (!dars) return;

    oxirgiDarsniSaqla(joriyDarsIndeksi);

    const darsRaqam = element('dars-raqam');
    const darsSarlavha = element('dars-sarlavha');
    const darsMatni = element('dars-matni');
    const testQismi = element('test-qismi');
    const darsTugmasi = element('dars-tugmasi');
    const testniBoshlashBtn = element('testni-boshlash-btn');

    if (darsRaqam) {
        const tugallanganSoni = tugallanganDarslarSoni();
        const progressFoiz = darslarRoyxati.length > 0
            ? Math.round((tugallanganSoni / darslarRoyxati.length) * 100)
            : 0;

        const darsHolati = dars.id && darsTugallanganmi(dars.id)
            ? '✅ Tugallangan'
            : '⏳ Jarayonda';

        darsRaqam.innerHTML = `
            <span class="dars-meta-qator">
                ${joriyDarsIndeksi + 1}-DARS
            </span>

            <span class="dars-holat">
                ${darsHolati}
            </span>

            <span class="modul-nomi">
                Modul: ${modulNominiOl(dars.module_id)}
            </span>

            <span class="dars-daraja">
                ${darajaNominiOl(dars.level)}
            </span>

            <div class="progress-wrapper">
                <div class="progress-bar" style="width: ${progressFoiz}%"></div>
            </div>

            <span class="progress-foiz">
                ${progressFoiz}% yakunlandi • ${tugallanganSoni} / ${darslarRoyxati.length} dars
            </span>
        `;
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
    joriyTestTogriSoni = 0;
    joriyTestYangiBall = 0;

    yangilaNavigatsiya();
    balniChiqar();

    const katalog = element('darslar-katalogi');

    if (katalog && !katalog.classList.contains('hidden')) {
        katalogniChiqar();
    }
}


// ====================================================
// 14-QISM: DARS NAVIGATSIYASI
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
// 15-QISM: DARS KATALOGI
// ====================================================

function katalogniOchYop() {
    const katalog = element('darslar-katalogi');

    if (!katalog) return;

    if (katalog.classList.contains('hidden')) {
        katalogniChiqar();
        katalog.classList.remove('hidden');
    } else {
        katalog.classList.add('hidden');
    }
}

function katalogniChiqar() {
    const katalog = element('darslar-katalogi');

    if (!katalog || !darsMavjudmi()) return;

    katalog.innerHTML = '';

    const sarlavha = document.createElement('div');
    sarlavha.className = 'katalog-sarlavha';
    sarlavha.textContent = 'Darsni tanlang';
    katalog.appendChild(sarlavha);

    const modullar = {};

    darslarRoyxati.forEach(function (dars, indeks) {
        const moduleId = dars.module_id || 'module_other';

        if (!modullar[moduleId]) {
            modullar[moduleId] = [];
        }

        modullar[moduleId].push({
            dars: dars,
            indeks: indeks
        });
    });

    Object.keys(modullar).forEach(function (moduleId) {
        const modulBloki = document.createElement('div');
        modulBloki.className = 'katalog-modul-bloki';

        const modulHeader = document.createElement('div');
        modulHeader.className = 'katalog-modul-header';

        modulHeader.innerHTML = `
            <span class="katalog-modul-nomi">
                ${modulNominiOl(moduleId)}
            </span>
            <span class="katalog-modul-soni">
                ${modullar[moduleId].length} ta dars
            </span>
        `;

        modulBloki.appendChild(modulHeader);

        modullar[moduleId].forEach(function (item) {
            const dars = item.dars;
            const indeks = item.indeks;

            const tugma = document.createElement('button');
            tugma.className = 'katalog-dars-tugma';

            if (indeks === joriyDarsIndeksi) {
                tugma.classList.add('active-katalog-dars');
            }

            const tugallangan = dars.id && darsTugallanganmi(dars.id);

            if (tugallangan) {
                tugma.classList.add('tugallangan-katalog-dars');
            }

            const statusMatni = tugallangan ? '✅ Tugallangan' : '⏳ Boshlanmagan';

            tugma.innerHTML = `
                <span class="katalog-dars-raqam">${indeks + 1}-dars</span>

                <span class="katalog-dars-nomi">
                    ${xavfsizMatn(dars.emoji, '📘')} ${xavfsizMatn(dars.mavzu, 'Dars mavzusi')}
                </span>

                <span class="katalog-dars-meta">
                    ${darajaNominiOl(dars.level)}
                </span>

                <span class="katalog-dars-status">
                    ${statusMatni}
                </span>
            `;

            tugma.onclick = function () {
                darsgaOt(indeks);
            };

            modulBloki.appendChild(tugma);
        });

        katalog.appendChild(modulBloki);
    });
}

function darsgaOt(indeks) {
    if (indeks < 0 || indeks >= darslarRoyxati.length) return;

    joriyDarsIndeksi = indeks;
    darsniChiqar();

    const katalog = element('darslar-katalogi');

    if (katalog) {
        katalog.classList.add('hidden');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ====================================================
// 16-QISM: TESTNI BOSHLASH VA CHIQARISH
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
    joriyTestTogriSoni = 0;
    joriyTestYangiBall = 0;

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
// 17-QISM: KEYINGI TEST TUGMASI
// ====================================================

function keyingiTestTugmasiniChiqar(dars) {
    const eskiBtn = element('keyingi-test-btn');

    if (eskiBtn) {
        eskiBtn.remove();
    }

    const testQismi = element('test-qismi');

    if (!testQismi) return;

    const btn = document.createElement('button');
    btn.id = 'keyingi-test-btn';
    btn.className = 'keyingi-test-btn-visible';

    if (joriyTestIndeksi === dars.testlar.length - 1) {
        btn.textContent = '🏁 Darsni yakunlash';
    } else {
        btn.textContent = 'Keyingi savol ➡️';
    }

    btn.onclick = function () {
        keyingiTest();
    };

    testQismi.appendChild(btn);
}


// ====================================================
// 18-QISM: JAVOBNI TEKSHIRISH
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
        natija.classList.remove('togri-rang', 'notogri-rang');
    }

    const lessonId = dars.id || (joriyDarsIndeksi + 1);
    const testIndex = joriyTestIndeksi;

    if (tanlanganIndeks === togriIndeks) {
        joriyTestTogriSoni++;

        if (bosilganTugma) {
            bosilganTugma.classList.add('togri-javob');
        }

        if (natija) {
            natija.classList.add('togri-rang');
        }

        if (!ballOldinBerilganmi(lessonId, testIndex)) {
            joriyBal += 10;
            joriyTestYangiBall += 10;

            balniSaqla(joriyBal);
            ballBerilganDebBelgila(lessonId, testIndex);
            balniChiqar();

            if (natijaMatni) {
                natijaMatni.textContent = '✅ To‘g‘ri! +10 ball qo‘shildi!';
            }
        } else {
            if (natijaMatni) {
                natijaMatni.textContent = '✅ To‘g‘ri! Bu savol uchun ball oldin berilgan.';
            }
        }
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

    keyingiTestTugmasiniChiqar(dars);
}


// ====================================================
// 19-QISM: KEYINGI TEST
// ====================================================

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
// 20-QISM: DARS YAKUNLASH
// ====================================================

function darsYakunlandi() {
    const testQismi = element('test-qismi');

    if (!testQismi) return;

    const dars = joriyDarsniOl();

    if (dars && dars.id) {
        darsniTugallanganQil(dars.id);
    }

    progressKartaniYangila();

    const oxirgiDarsmi = joriyDarsIndeksi >= darslarRoyxati.length - 1;

    const jamiSavollar = dars && Array.isArray(dars.testlar)
        ? dars.testlar.length
        : 0;

    const natijaFoizi = jamiSavollar > 0
        ? Math.round((joriyTestTogriSoni / jamiSavollar) * 100)
        : 0;

    testQismi.innerHTML =
        '<div class="yakunlash-xabar">' +
            '<div class="yakunlash-emoji">🎉</div>' +
            '<h3>Dars yakunlandi!</h3>' +
            '<p>Siz bu darsni muvaffaqiyatli yakunladingiz.</p>' +

            '<div class="test-stat-karta">' +
                '<p><strong>Natija:</strong> ' + joriyTestTogriSoni + ' / ' + jamiSavollar + ' ta to‘g‘ri</p>' +
                '<p><strong>Foiz:</strong> ' + natijaFoizi + '%</p>' +
                '<p><strong>Bu urinishda olingan ball:</strong> +' + joriyTestYangiBall + '</p>' +
            '</div>' +

            '<p class="joriy-bal-yak">Umumiy balingiz: <strong>' + joriyBal + ' ball</strong></p>' +

            '<div class="yakunlash-actions">' +
                '<button class="keyingi-dars-yak-btn" onclick="keyingiDarsYakundan()">' +
                    (oxirgiDarsmi ? '🏆 Reytingni ko‘rish' : '➡️ Keyingi darsga o‘tish') +
                '</button>' +

                '<button class="qayta-korish-yak-btn" onclick="darsniQaytaKorish()">' +
                    '🔁 Darsni qayta ko‘rish' +
                '</button>' +

                '<button class="katalog-yak-btn" onclick="kataloggaQaytishYakundan()">' +
                    '📚 Darslar katalogiga qaytish' +
                '</button>' +
            '</div>' +
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

function kataloggaQaytishYakundan() {
    darsniChiqar();

    const katalog = element('darslar-katalogi');

    if (katalog) {
        katalogniChiqar();
        katalog.classList.remove('hidden');
    }

    const katalogBloki = element('katalog-bloki') || element('darslar-katalogi');

    if (katalogBloki) {
        katalogBloki.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function darsniQaytaKorish() {
    darsniChiqar();

    const testQismi = element('test-qismi');

    if (testQismi) {
        testQismi.classList.add('hidden');
    }

    const darsTugmasi = element('dars-tugmasi');

    if (darsTugmasi) {
        darsTugmasi.classList.remove('hidden');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ====================================================
// 21-QISM: BALLARNI KO‘RSATISH
// ====================================================

function balniChiqar() {
    const balElement = element('joriy-bal');

    if (balElement) {
        balElement.textContent = joriyBal;
    }

    progressKartaniYangila();
}


// ====================================================
// 22-QISM: REYTING BO‘LIMI
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
// 23-QISM: DO‘STLAR / REFERAL BO‘LIMI
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
// 24-QISM: ILOVANI ISHGA TUSHIRISH
// ====================================================

function ilovaniIshgaTushir() {
    const ismElement = element('foydalanuvchi-ismi');

    if (ismElement) {
        ismElement.textContent = foydalanuvchiIsmi;
    }

    joriyDarsIndeksi = oxirgiDarsIndeksiniYukla();

    balniChiqar();
    darsniChiqar();
    showTab('talim');
}


// ====================================================
// 25-QISM: HTML ONCLICK UCHUN GLOBAL FUNKSIYALAR
// ====================================================

window.showTab = showTab;
window.oldingiDars = oldingiDars;
window.keyingiDars = keyingiDars;
window.katalogniOchYop = katalogniOchYop;
window.testniBoshlash = testniBoshlash;
window.davomEttirish = davomEttirish;
window.keyingiDarsYakundan = keyingiDarsYakundan;
window.kataloggaQaytishYakundan = kataloggaQaytishYakundan;
window.darsniQaytaKorish = darsniQaytaKorish;
window.havolaNusxala = havolaNusxala;
window.telegramUlash = telegramUlash;


document.addEventListener('DOMContentLoaded', ilovaniIshgaTushir);
