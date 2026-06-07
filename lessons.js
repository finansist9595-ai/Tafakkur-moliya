// ====================================================
// TAFAKKUR MOLIYA — LESSONS.JS
// Mini App darslari va testlari uchun kontent bazasi
// ====================================================

// Bu faylda darslar, mavzular va test savollari saqlanadi.
// app.js esa faqat ilova logikasi uchun ishlatiladi.

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
