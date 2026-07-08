// ====================================================
// TAFAKKUR MOLIYA — LESSONS.JS
// Mini App darslari va testlari uchun kontent bazasi
// ====================================================

// Bu faylda darslar, mavzular va test savollari saqlanadi.
// app.js esa faqat ilova logikasi uchun ishlatiladi.

const darslar = [
  {
    id: 1,
    module_id: 'module_01',
    mavzu: 'Islom moliyasi nima?',
    emoji: '🕌',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Islom moliyasi — shariat tamoyillariga asoslangan moliyaviy tizim bo'lib, u an'anaviy moliyadan bir qator muhim jihatlar bilan farq qiladi. Asosiy farq shundaki, bu tizimda foiz (ribo) taqiqlanadi va barcha operatsiyalar real iqtisodiy faoliyatga bog'liq bo'lishi kerak.

Islom moliyasida foyda olish mumkin, lekin u faqat haqiqiy savdo, xizmat ko'rsatish yoki investitsiya orqali yuzaga kelishi lozim. Ya'ni, pul o'z-o'zidan pul ishlab chiqarmasligi kerak.

Bu tizim ortiqcha noaniqlik (gharar), qimor (maysir) va taqiqlangan tovar yoki xizmatlar bilan bog'liq operatsiyalarni ham istisno qiladi.

Islom moliyasi bugungi kunda global miqyosda rivojlanib bormoqda. Ko'plab mamlakatlar va xalqaro moliya institutlari ushbu tizim asosida mahsulotlar taklif etmoqda. Bu ta'limiy materiallar sizga ushbu soha asoslarini tushunishga yordam beradi.`,
    testlar: [
      {
        savol: 'Islom moliyasining asosiy tamoyili qaysi?',
        javoblar: [
          'Foiz stavkasini oshirish',
          'Shariat tamoyillariga asoslanish',
          'Faqat bank operatsiyalari bilan shug\'ullanish',
          'Davlat tomonidan boshqarilish'
        ],
        togri: 1
      },
      {
        savol: 'Islom moliyasida "ribo" deb nima ataladi?',
        javoblar: [
          'Savdo foydasi',
          'Xizmat haqi',
          'Foiz yoki ortiqcha ustama',
          'Investitsiya daromadi'
        ],
        togri: 2
      },
      {
        savol: 'Islom moliyasida foyda qanday yo\'l bilan olinishi lozim?',
        javoblar: [
          'Pul pul ishlab chiqarishi orqali',
          'Faqat davlat qo\'llab-quvvatlashi bilan',
          'Haqiqiy savdo, xizmat yoki investitsiya orqali',
          'Kredit stavkasini belgilash orqali'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 2,
    module_id: 'module_01',
    mavzu: 'Ribo va foiz tushunchasi',
    emoji: '🚫',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Ribo arabcha so'z bo'lib, "ortiqcha o'sish" yoki "qo'shimcha" degan ma'noni anglatadi. Islom moliyasi doirasida ribo asosan qarz berilgan pulga qo'shiladigan foiz yoki ustamani bildiradi.

Islomiy ta'limotda ribo taqiqlangan kategoriyaga kiradi. Buning sababi shundaki, foizli qarz amalda qarz oluvchini mazlum holga solib qo'yishi mumkin: ular asosiy qarzdan tashqari, vaqt o'tishi bilan tobora ortib boruvchi qo'shimcha to'lovlarni ham amalga oshirishlari zarur.

Islom olimlarining ko'pchiligi bank foizini ribo kategoriyasiga kiritadi, ammo bu masalada turli fiqhiy nuqtai nazarlar mavjud. Shu sababli, amaliy qarorlar uchun mutaxassis xulosasiga murojaat qilish muhim.

Ribo taqiqlanishining iqtisodiy mohiyati ham bor: bu tizim moliyaviy risklarning adolatli taqsimlanishini ta'minlaydi va boylikning bir qo'lda to'planishining oldini oladi.`,
    testlar: [
      {
        savol: '"Ribo" so\'zining asosiy ma\'nosi nima?',
        javoblar: [
          'Savdo shartnomasi',
          'Ortiqcha o\'sish yoki qo\'shimcha',
          'Investitsiya fondasi',
          'Budjet rejasi'
        ],
        togri: 1
      },
      {
        savol: 'Islom moliyasida ribo taqiqlanishining asosiy sababi nima?',
        javoblar: [
          'Davlat byudjetiga zarar keltirishi',
          'Faqat xorijiy valyutaga bog\'liqligi',
          'Qarz oluvchini nohaqlik holga solishi mumkinligi',
          'Bank ishini qiyinlashtirishi'
        ],
        togri: 2
      },
      {
        savol: 'Bank foizi masalasida islom olimlari orasida qanday holat mavjud?',
        javoblar: [
          'Barcha olimlar bir xil xulosaga kelgan',
          'Bu masala umuman muhokama qilinmaydi',
          'Turli fiqhiy nuqtai nazarlar mavjud',
          'Faqat G\'arb olimlari bu masalani o\'rganadi'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 3,
    module_id: 'module_01',
    mavzu: 'Qarz, savdo va foyda farqi',
    emoji: '⚖️',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Islom moliyasini tushunish uchun qarz, savdo va foyda tushunchalarini farqlash muhim.

Qarz (qard) — bir kishi boshqasiga ma'lum miqdorda pul yoki tovar berib, uni o'sha miqdorda qaytarib olishni kutishidir. Islom ta'limotida qarz yaxshi niyat bilan beriladigan ijtimoiy yordam sifatida qaraladi va undan foiz olish ribo hisoblanadi.

Savdo (bay') — tovar yoki xizmatni narx evaziga almashtirishdir. Savdoda narxni ko'tarish, ya'ni foyda olish halol hisoblanadi, chunki bu jarayonda haqiqiy iqtisodiy qiymat yaratiladi.

Foyda — savdo yoki investitsiya natijasida olingan daromad. Foyda olish uchun risk ham bo'lishi lozim: agar kimdir riskni o'z zimmasiga olmasa, foyda huquqi ham yo'q.

Bu uch tushunchaning farqi Islom moliyasining asosiy tamoyilini tushuntiradi: foizli qarz taqiqlanadi, lekin savdo va adolatli investitsiya orqali foyda olish ruxsat etiladi.`,
    testlar: [
      {
        savol: 'Islom moliyasida savdodan foyda olish haqida qanday fikr mavjud?',
        javoblar: [
          'Taqiqlangan, chunki u ribo hisoblanadi',
          'Ruxsat etilgan, chunki haqiqiy qiymat yaratiladi',
          'Faqat xorijiy savdoda ruxsat etilgan',
          'Faqat davlat kompaniyalariga ruxsat etilgan'
        ],
        togri: 1
      },
      {
        savol: 'Islom moliyasida foyda olish uchun qanday shart mavjud?',
        javoblar: [
          'Foyda olish uchun hech qanday shart yo\'q',
          'Faqat bank orqali foyda olish mumkin',
          'Risk ham o\'z zimmasiga olinishi lozim',
          'Foyda miqdori davlat tomonidan belgilanishi kerak'
        ],
        togri: 2
      },
      {
        savol: 'Quyidagilardan qaysi biri Islom moliyasida taqiqlangan?',
        javoblar: [
          'Tovar sotish',
          'Xizmat ko\'rsatish',
          'Qarzga foiz olish',
          'Sheriklikda foyda taqsimlash'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 4,
    module_id: 'module_01',
    mavzu: 'Real aktivga bog\'langan moliya',
    emoji: '🏗️',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Islom moliyasining asosiy tamoyillaridan biri — har qanday moliyaviy operatsiya real aktivga yoki haqiqiy iqtisodiy faoliyatga bog'liq bo'lishi kerakligi.

Real aktiv deganda ko'chmas mulk, asbob-uskuna, tovarlar, ishlab chiqarish vositalari kabi moddiy narsalar yoki haqiqiy xizmatlar tushuniladi. An'anaviy moliyada esa pul o'z-o'zidan pul ishlab chiqarishi mumkin — foiz tizimi orqali.

Bu tamoyil ahamiyatlidir, chunki u moliya sektorini real iqtisodiyot bilan bog'laydi. Spekulyativ moliyaviy operatsiyalar, ya'ni haqiqiy aktivga asoslanmagan kelishuvlar, Islom moliyasida maqbul emas.

Masalan, agar bank mijozga uy sotib olishi uchun mablag' bermoqchi bo'lsa, u foizli kredit berish o'rniga o'zi uyni sotib olib, keyin mijozga foyda ustig ma'lum narxda qayta sotishi yoki ijaraga berishi mumkin. Bu holatda operatsiya real aktivga — uyga — bog'langan bo'ladi.`,
    testlar: [
      {
        savol: 'Islom moliyasida moliyaviy operatsiyalar nimaga bog\'liq bo\'lishi kerak?',
        javoblar: [
          'Faqat davlat kafolatiga',
          'Real aktiv yoki haqiqiy iqtisodiy faoliyatga',
          'Xorijiy valyuta kursiga',
          'Bank reytingiga'
        ],
        togri: 1
      },
      {
        savol: '"Real aktiv" tushunchasi nimani anglatadi?',
        javoblar: [
          'Faqat naqd pulni',
          'Bank hisobvarag\'idagi mablag\'larni',
          'Ko\'chmas mulk, tovar va ishlab chiqarish vositalari kabi moddiy narsalarni',
          'Xorijiy investitsiyalarni'
        ],
        togri: 2
      },
      {
        savol: 'Islom moliyasida spekulyativ operatsiyalar haqida qanday yondashuv mavjud?',
        javoblar: [
          'Ruxsat etilgan, chunki foyda keltiradi',
          'Maqbul emas, chunki real aktivga asoslanmagan',
          'Faqat xorijiy bozorda ruxsat etilgan',
          'Davlat ruxsati bilan mumkin'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 5,
    module_id: 'module_02',
    mavzu: 'Murabaha nima?',
    emoji: '🤝',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etilada.',
    matn: `Murabaha — Islom moliyasida eng keng tarqalgan savdo modellaridan biri. Bu modeldagi asosiy g'oya quyidagicha: moliyalashtiruvchi tomon (masalan, bank) mijoz xohlagan tovarni sotuvchidan o'zi sotib oladi, so'ngra uni oldindan kelishilgan foyda ustimasi bilan mijozga qayta sotadi.

Murababaning muhim jihati shundaki, narx va foyda miqdori shartnoma tuzilishidan avval mijozga to'liq ma'lum qilinadi. Ya'ni, bu tranzaksiyada shaffoflik talab etiladi.

Masalan: mijoz 10 000 dollarlik uskuna olmoqchi. Bank ushbu uskunani sotib olib, mijozga 12 000 dollarga qayta sotadi. Mijoz 2 000 dollarlik foyda ustimasi haqida oldindan xabardor. To'lov muddatli amalga oshirilishi mumkin.

Murabaha foizli kreditdan farqlanadi: bu yerda bank tovarni mulk sifatida o'z zimmasiga oladi, risk ko'taradi va keyin savdo operatsiyasi amalga oshiriladi. Ammo bu modelning shariat jihatidan to\'g\'ri amalga oshirilishi uchun bir qator shartlar bajarilishi zarur.`,
    testlar: [
      {
        savol: 'Murabaha modelida moliyalashtiruvchi tomon qanday harakat qiladi?',
        javoblar: [
          'Mijozga foizli qarz beradi',
          'Tovarni o\'zi sotib olib, keyin mijozga qayta sotadi',
          'Mijozga pul o\'tkazadi va foiz oladi',
          'Faqat kafolat beradi'
        ],
        togri: 1
      },
      {
        savol: 'Murabahahning qaysi xususiyati uni shaffof qiladi?',
        javoblar: [
          'Narx va foyda miqdori shartnomadan oldin mijozga ma\'lum qilinadi',
          'Faqat bank biladi narxni',
          'Hukumat narxni belgilaydi',
          'Narx to\'lov tugagandan keyin aniqlanadi'
        ],
        togri: 0
      },
      {
        savol: 'Murabaha operatsiyasida bank qanday risk ko\'taradi?',
        javoblar: [
          'Hech qanday risk ko\'tarmaydi',
          'Tovarni mulk sifatida o\'z zimmasiga oladi',
          'Faqat valyuta riskini ko\'taradi',
          'Mijozning barcha qarzlarini o\'z zimmasiga oladi'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 6,
    module_id: 'module_02',
    mavzu: 'Murabaha va kredit farqi',
    emoji: '🔍',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Murabaha va an'anaviy kredit tashqi ko'rinishda o'xshash bo'lishi mumkin, lekin ularning mohiyati tubdan farq qiladi.

An'anaviy kreditda bank mijozga pul beradi va vaqt o'tishi bilan foiz hisoblab, qaytarib oladi. Bu yerda foyda pul ustidan hisoblangan foizdir.

Murabahada esa bank avval tovarni o'zi sotib oladi, ya'ni u bir muddat o'sha tovarning mulkdori bo'ladi. Keyin tovarni mijozga ma'lum foyda ustimasi bilan sotadi. Bu yerda foyda savdo operatsiyasidan kelib chiqadi, foizdan emas.

Asosiy farqlar:
— Kreditda bank pul beradi, murabahada bank tovar sotadi.
— Kreditda foiz vaqtga qarab o'sishi mumkin, murabahada narx oldindan belgilanadi va o'zgarmaydi.
— Kreditda bank tovar egasi bo'lmaydi, murabahada bir muddat egasi bo'ladi.

Shuni ta'kidlash muhimki, murabahaning shariat jihatidan to'g'ri amalga oshirilishi uchun uni faqat hujjatda kredit o'rnida murabaha deb atash emas, balki amalda savdo operatsiyasi sifatida to'g'ri tuzilishi zarur.`,
    testlar: [
      {
        savol: 'An\'anaviy kreditda bank qanday foyda oladi?',
        javoblar: [
          'Tovar sotish orqali',
          'Xizmat ko\'rsatish orqali',
          'Pul ustidan hisoblangan foiz orqali',
          'Sug\'urta to\'lovlari orqali'
        ],
        togri: 2
      },
      {
        savol: 'Murabahada narx qachon belgilanadi?',
        javoblar: [
          'To\'lov tugagandan keyin',
          'Har yili qayta hisoblanadi',
          'Shartnoma tuzilgunga qadar oldindan',
          'Bozor kursiga qarab o\'zgaradi'
        ],
        togri: 2
      },
      {
        savol: 'Murabahaning kreditdan asosiy farqi nima?',
        javoblar: [
          'Murabahada to\'lov muddati qisqaroq',
          'Murabahada bank tovarni o\'zi sotib olib, keyin mijozga sotadi',
          'Murabahada foiz stavkasi pastroq',
          'Murabahada faqat katta miqdorlar uchun foydalaniladi'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 7,
    module_id: 'module_02',
    mavzu: 'Murabaha shartlari',
    emoji: '📋',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Murabahaning shariat tamoyillariga mos kelishi uchun bir qator muhim shartlar bajarilishi zarur. Bu shartlar operatsiyani oddiy foizli kreditdan ajratib turadi.

Birinchi shart — mulkchilik. Bank tovarni mijozga sotishdan oldin, u tovarni haqiqatan ham sotib olishi va mulkdori bo'lishi kerak. Faqat hujjatlarda tovar nomi yozish yetarli emas.

Ikkinchi shart — risk. Bank tovar o'z mulkida bo'lgan vaqt davomida unga tegishli risklarni ham ko'tarishi kerak. Masalan, tovar yetkazib berishdan oldin shikastlansa, bu risk bankniki bo'ladi.

Uchinchi shart — shaffoflik. Tovarning asl tannarxi va foyda ustimasi mijozga aniq ma'lum qilinishi shart.

To'rtinchi shart — tovarning halolligi. Sotilayotgan tovar yoki xizmat shariat jihatidan maqbul bo'lishi kerak.

Beshinchi shart — narxning o'zgarmasligi. Kelishilgan narx keyinchalik bir tomonlama o'zgartirilmasligi lozim.

Bu shartlar bajarilmasa, operatsiya mohiyatan foizli kreditga aylanib qolishi xavfi mavjud.`,
    testlar: [
      {
        savol: 'Murabahada bank tovarni mijozga sotishdan oldin nimani amalga oshirishi shart?',
        javoblar: [
          'Faqat hujjat tayyorlashi',
          'Tovarni haqiqatan ham sotib olib, mulkdor bo\'lishi',
          'Davlatdan ruxsat olishi',
          'Boshqa banklarga ma\'lum qilishi'
        ],
        togri: 1
      },
      {
        savol: 'Murabahada "shaffoflik" sharti nima degani?',
        javoblar: [
          'Bank ichki ma\'lumotlarini ochish',
          'Faqat davlatga hisobot berish',
          'Tovarning asl narxi va foyda ustimasi mijozga aniq ma\'lum qilinishi',
          'Boshqa banklarning narxlarini solishtirib ko\'rsatish'
        ],
        togri: 2
      },
      {
        savol: 'Quyidagilardan qaysi holat murabahani noto\'g\'ri qiladi?',
        javoblar: [
          'Tovarni belgilangan narxda sotish',
          'Narxni oldindan kelishish',
          'Shartnoma tuzilgandan keyin narxni bir tomonlama o\'zgartirish',
          'Tovarni oldindan sotib olish'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 8,
    module_id: 'module_03',
    mavzu: 'Musharaka nima?',
    emoji: '🤜🤛',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Musharaka — Islom moliyasida sheriklik modeli bo'lib, ikki yoki undan ortiq tomon birgalikda biron loyiha yoki biznesga mablag' kiritib, foyda va zararni ma'lum nisbatda taqsimlashadi.

Bu model an'anaviy kreditdan tubdan farq qiladi: bankke kredit berishda foyda olishi va zararda qatnashmasligi o'rniga, musharakada barcha sheriklar risklarni birgalikda ko'taradilar.

Musharakaning ikki asosiy turi mavjud:
— Doimiy musharaka: barcha sheriklar doimiy ravishda loyihada qatnashadilar.
— Kamayuvchi musharaka: bir sherik vaqt o'tishi bilan boshqa sherikning ulushini kichik-kichik to'lovlar bilan sotib oladi. Bu model ko'chmas mulk moliyalashtirishda keng ishlatiladi.

Foyda taqsimoti nisbati oldindan kelishib olinadi. Zarar esa kiritilgan kapital miqdoriga proporsional taqsimlanadi.

Musharaka modeli adolatli moliyaviy sheriklik tamoyilini aks ettiradi: kim ko'proq risk olsa, ko'proq foyda ham ko'rishi mumkin. Bu model kichik va o'rta biznesni moliyalashtirishda samarali qo'llanilishi mumkin.`,
    testlar: [
      {
        savol: 'Musharaka modelida ishtirokchilar nimani birgalikda taqsimlashadi?',
        javoblar: [
          'Faqat foydani',
          'Faqat zararni',
          'Foyda va zararni',
          'Faqat kapital kiritimini'
        ],
        togri: 2
      },
      {
        savol: '"Kamayuvchi musharaka" qanday ishlaydi?',
        javoblar: [
          'Foyda vaqt o\'tishi bilan kamayib boradi',
          'Bir sherik boshqa sherikning ulushini asta-sekin sotib oladi',
          'Kapital kiritim vaqt o\'tishi bilan kamaytiriladi',
          'Sheriklar soni vaqt o\'tishi bilan kamayadi'
        ],
        togri: 1
      },
      {
        savol: 'Musharakada zarar qanday taqsimlanadi?',
        javoblar: [
          'Faqat bir sherik barcha zararni ko\'taradi',
          'Teng taqsimlanadi',
          'Kiritilgan kapital miqdoriga proporsional taqsimlanadi',
          'Davlat zararni qoplaydi'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 9,
    module_id: 'module_03',
    mavzu: 'Mudaraba nima?',
    emoji: '💼',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Mudaraba — Islom moliyasida maxsus sheriklik modeli bo'lib, unda bir tomon kapital kiritadi (rabb ul-mol), ikkinchi tomon esa o'z mehnat va ko'nikmasini sarflaydi (mudarib). Foyda oldindan kelishilgan nisbatda taqsimlanadi.

Bu model investor va tadbirkor o'rtasidagi hamkorlikni aks ettiradi: investor pul beradi, tadbirkor esa uni boshqaradi va ishga soladi.

Mudarabaning muhim xususiyati — zarar taqsimoti. Agar loyiha zarar ko'rsa, pul yo'qotish kapital kiritgan tomon zimmasiga tushadi. Mudarib esa o'z vaqti va mehnatini behuda sarflagan bo'ladi. Ammo agar mudarib qasdan yoki ehtiyotsizlik natijasida zarar keltirgani isbotlansa, u javobgar bo'lishi mumkin.

Mudarabaning ikki turi mavjud:
— Mutloq mudaraba: mudarib kapitalni xohlagan halol biznesga kiritishi mumkin.
— Muqayyad mudaraba: investor kapitaldan qanday foydalanishni belgilab qo'yadi.

Bu model islom banklarida depozit va investitsiya operatsiyalarida keng qo'llaniladi.`,
    testlar: [
      {
        savol: 'Mudarabada "rabb ul-mol" kim?',
        javoblar: [
          'Kapital kirituvchi tomon',
          'Mehnat sarflovchi tomon',
          'Davlat nazorat organi',
          'Uchinchi tomon kafilı'
        ],
        togri: 0
      },
      {
        savol: 'Mudarabada oddiy zarar hollarda kim pul yo\'qotadi?',
        javoblar: [
          'Mudarib',
          'Kapital kiritgan tomon',
          'Ikkovi teng',
          'Hech kim, davlat qoplaydi'
        ],
        togri: 1
      },
      {
        savol: '"Muqayyad mudaraba" nima degani?',
        javoblar: [
          'Mudarib capitalni xohlagan joyga kiritadi',
          'Investor kapitaldan qanday foydalanishni belgilab qo\'yadi',
          'Foyda teng taqsimlanadi',
          'Kapital vaqt o\'tishi bilan qaytariladi'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 10,
    module_id: 'module_03',
    mavzu: 'Foyda va zarar taqsimoti',
    emoji: '📊',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Islom moliyasining markaziy tamoyillaridan biri — foyda va zarar taqsimoti (Profit and Loss Sharing, PLS). Bu tamoyil barcha sheriklik modellarida, ayniqsa musharaka va mudarabada yaqqol namoyon bo'ladi.

Bu tizimda har bir ishtirokchi moliyaviy natijalarning bir qismini o'z zimmasi-ga oladi. Biri foyda ko'rsa, hamma foyda ko'radi. Biri zarar ko'rsa, bu zarar belgilangan tartibda taqsimlanadi.

Bu yondashuv an'anaviy moliyadan farqlanadi: an'anaviy kreditda bank foizini to'lash shart, biznes natijasidan qat'i nazar. Islom moliyasida esa moliyalashtiruvchi ham natijada ishtirok etadi.

Foyda taqsimoti nisbati (masalan, 60% va 40%) oldindan aniq kelishib olinadi va shartnomada mustahkamlanadi. Bu nisbat o'zaro kelishuvga bog'liq, qonun bilan belgilanmagan.

Zarar taqsimoti esa odatda kiritilgan kapital miqdoriga proporsionaldir. Ammo modellar turlicha bo'lishi mumkin va amaliy masalalarda mutaxassis maslahatiga murojaat qilish tavsiya etiladi.`,
    testlar: [
      {
        savol: 'Islom moliyasidagi "PLS" tamoyili nimani anglatadi?',
        javoblar: [
          'Private Loan System',
          'Profit and Loss Sharing — foyda va zarar taqsimoti',
          'Public Legal Standard',
          'Personal Liability System'
        ],
        togri: 1
      },
      {
        savol: 'Foyda taqsimoti nisbati qanday belgilanadi?',
        javoblar: [
          'Davlat tomonidan belgilanadi',
          'Har doim teng bo\'ladi',
          'Oldindan o\'zaro kelishuv orqali belgilanadi',
          'Bozor kursiga qarab o\'zgaradi'
        ],
        togri: 2
      },
      {
        savol: 'An\'anaviy kredit va PLS tizimining asosiy farqi nima?',
        javoblar: [
          'Kreditda to\'lov muddati uzoqroq',
          'Kreditda foiz biznes natijasidan qat\'i nazar to\'lanadi, PLS tizimida esa moliyalashtiruvchi natijada ishtirok etadi',
          'PLS tizimida kapital qaytarilmaydi',
          'Kreditda narx oldindan belgilanmaydi'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 11,
    module_id: 'module_04',
    mavzu: 'Ijara modeli',
    emoji: '🏠',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Ijara — Islom moliyasida ijara berish yoki lizing modeli bo'lib, moliyalashtiruvchi aktiv (uy, mashina, uskunalar) sotib olib, uni ma'lum muddat uchun ijaraga beradi.

Bu model an'anaviy lizing bilan o'xshashlik kasb etadi, ammo muhim farqlar mavjud. Ijara modelida mulk moliyalashtiruvchi zimmasida qoladi va u aktiv saqlash, ta'mirlash kabi xarajatlarni ko'taradi. Ijarachiiga faqat foydalanish huquqi o'tadi.

Ijara modelining ikki turi keng tarqalgan:
— Oddiy ijara: muddat tugagandan so'ng aktiv egasiga qaytadi.
— Ijara va iqtino (Ijarah Muntahia Bi Tamlik): ijara davri tugagach, ijarachiga aktivni sotib olish yoki sovg'a sifatida olish imkoni beriladi.

Ijara modeli ko'chmas mulk, transport va tibbiy uskunalar kabi aktivlarni moliyalashtirishda keng qo'llaniladi.

Shariat jihatidan ijara modelining to'g'ri amalga oshirilishi uchun aktiv haqiqatan ham mavjud bo'lishi va mulkchilik xatarlari moliyalashtiruvchi tomonida bo'lishi zarur.`,
    testlar: [
      {
        savol: 'Ijara modelida mulkchilik kiming zimmasida qoladi?',
        javoblar: [
          'Ijarachida',
          'Davlatda',
          'Moliyalashtiruvchida',
          'Uchinchi tomon kafilida'
        ],
        togri: 2
      },
      {
        savol: '"Ijara va iqtino" modeli nima?',
        javoblar: [
          'Faqat oddiy ijara, qaytarish bilan',
          'Ijara davri tugagach, aktivni sotib olish imkoni beriladigan model',
          'Ikki tomonlama ijara shartnomasi',
          'Davlat kafolati bilan ijara'
        ],
        togri: 1
      },
      {
        savol: 'Ijara modelida aktiv saqlash va ta\'mirlash xarajatlari kimga tegishli?',
        javoblar: [
          'Ijarachiga',
          'Teng taqsimlanadi',
          'Moliyalashtiruvchiga',
          'Sug\'urta kompaniyasiga'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 12,
    module_id: 'module_04',
    mavzu: 'Sukuk nima?',
    emoji: '📜',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Sukuk — ko'pincha "Islom obligatsiyasi" deb ataladi, ammo bu tavsif to'liq to'g'ri emas. An'anaviy obligatsiyada investor qarz beradi va foiz oladi. Sukukda esa investor real aktivga yoki loyihaga ulush egasi bo'ladi.

Sukuk emissiyasida emitent (hukumat yoki kompaniya) bir aktivni maxsus yuridik shaxsga (Special Purpose Vehicle) o'tkazadi. Bu yuridik shaxs sukukni chiqaradi. Investorlar sukukni sotib olib, aktivning haqiqiy egalariga aylanadi. Ular daromad sifatida aktivdan tushgan ijara to'lovlari yoki foyda ulushini oladilar.

Sukuk turli asosda tuzilishi mumkin: ijara asosida (Sukuk Ijara), musharaka asosida, murabaha asosida va boshqalar.

Sukuk bozori so'nggi yillarda jadal rivojlandi. Davlatlar va xususiy kompaniyalar bu instrument orqali shariat talablariga mos ravishda mablag' jalb qilmoqda.

Sukukni to'g'ri tuzish murakkab jarayon bo'lib, shariat kengashining tasdig'ini talab qiladi.`,
    testlar: [
      {
        savol: 'Sukuk an\'anaviy obligatsiyadan qanday farq qiladi?',
        javoblar: [
          'Sukukda foiz stavkasi yuqoriroq',
          'Sukukda investor real aktivga ulush egasi bo\'ladi, obligatsiyada esa qarz beradi',
          'Sukuk faqat davlat tomonidan chiqariladi',
          'Sukukning muddati qisqaroq'
        ],
        togri: 1
      },
      {
        savol: 'Sukukda investorlar daromad sifatida nima oladilar?',
        javoblar: [
          'Foiz to\'lovlari',
          'Davlat subsidiyalari',
          'Aktivdan tushgan ijara to\'lovlari yoki foyda ulushi',
          'Valyuta kursi farqidan tushum'
        ],
        togri: 2
      },
      {
        savol: 'Sukukni chiqarish uchun qaysi tasdiqlash zarur?',
        javoblar: [
          'Faqat moliya vazirligi ruxsati',
          'Xalqaro valyuta fondi tasdig\'i',
          'Shariat kengashining tasdig\'i',
          'Hech qanday tasdiqlash kerak emas'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 13,
    module_id: 'module_05',
    mavzu: 'Takaful nima?',
    emoji: '🛡️',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Takaful — Islom tamoyillariga asoslangan o'zaro yordam va himoya tizimi. Bu tizimda ishtirokchilar umumiy fondga mablag' kiritadilar va biror a'zo baxtsiz hodisaga duch kelsa, jamg'arilgan fonddan yordam ko'rsatiladi.

Takaful arabcha "kafalat" so'zidan kelib chiqqan bo'lib, "bir-biriga kafolat berish" degan ma'noni anglatadi. Tizimning asosida o'zaro hamkorlik va birdamlik tamoyili yotadi.

Takaful tizimida pul chiqariladi va fond boshqaruvi uchun operator (takaful kompaniyasi) tayinlanadi. Operator xizmati uchun haq oladi, lekin an'anaviy sug'urtadan farqli o'laroq, u to'plangan pulning to'liq egasi emas.

Fond qoldig'i ishtirokchilar o'rtasida taqsimlanadi yoki keyingi davr uchun qoldiriladi. Fondni investitsiya qilishda ham shariat talablariga mos instrumentlardan foydalaniladi.

Takaful modeli tibbiy, hayot va mulk sug'urtasi kabi sohalarda qo'llaniladi va ko'pgina mamlakatlarda an'anaviy sug'urtaga muqobil sifatida taklif etilmoqda.`,
    testlar: [
      {
        savol: '"Takaful" so\'zining ma\'nosi nima?',
        javoblar: [
          'Islomiy bank',
          'Bir-biriga kafolat berish',
          'Foizsiz qarz',
          'Halol investitsiya'
        ],
        togri: 1
      },
      {
        savol: 'Takaful tizimida operator nima uchun haq oladi?',
        javoblar: [
          'Fond egasi sifatida',
          'Fond boshqaruvi xizmati uchun',
          'To\'plangan puldan foiz sifatida',
          'Davlat vakili sifatida'
        ],
        togri: 1
      },
      {
        savol: 'Takafulda ishtirokchilar nimani birgalikda qiladilar?',
        javoblar: [
          'Qarz oladilar',
          'Umumiy fondga mablag\' kiritadilar va zarur holda bir-biriga yordam ko\'rsatadilar',
          'Foizli depozit ochadilar',
          'Davlatga soliq to\'laydilar'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 14,
    module_id: 'module_05',
    mavzu: 'Takaful va an\'anaviy sug\'urta farqi',
    emoji: '⚖️',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Takaful va an'anaviy sug'urta tashqi ko'rinishda o'xshash maqsadga xizmat qiladi — noxush hodisalardan moliyaviy himoya. Ammo ularning tuzilishi va tamoyillari tubdan farq qiladi.

An'anaviy sug'urtada ishtirokchi premium to'laydi va kompaniya bu pul ustidan nazorat saqlaydi. Kompaniya foizli investitsiyalar amalga oshirishi mumkin. Sug'urta fondida noaniqlik elementi yuqori.

Islom olimlari an'anaviy sug'urtada uchta muammoli element ko'rishadi: ribo (foizli investitsiya), gharar (ortiqcha noaniqlik) va maysir (qimor elementiga o'xshashlik). Ammo bu masalada fiqhiy nuqtai nazarlar turlicha.

Takafuldagi asosiy farqlar:
— Mablag' ishtirokchilarning o'ziga tegishli, kompaniya emas.
— Operator haq oladi, lekin fond egasi emas.
— Investitsiyalar shariat talablariga mos.
— Fond qoldig'i ishtirokchilarga qaytariladi.

Takafuldagi asosiy g'oya o'zaro hamkorlik va birdamlikdir. Ammo amaliy masalalarda mutaxassis maslahatiga murojaat qilish muhim.`,
    testlar: [
      {
        savol: 'An\'anaviy sug\'urtada to\'langan premium pul kimga tegishli bo\'ladi?',
        javoblar: [
          'Ishtirokchiga',
          'Davlatga',
          'Sug\'urta kompaniyasiga',
          'Umumiy jamg\'armaga'
        ],
        togri: 2
      },
      {
        savol: 'Takafulda fond qoldig\'i bilan nima qilinadi?',
        javoblar: [
          'Davlatga o\'tkaziladi',
          'Kompaniya foydasiga qo\'shiladi',
          'Ishtirokchilarga qaytariladi yoki keyingi davr uchun qoldiriladi',
          'Foizli depozitga qo\'yiladi'
        ],
        togri: 2
      },
      {
        savol: 'Islom olimlari an\'anaviy sug\'urtadagi qaysi elementlarni muammoli deb ko\'rishadi?',
        javoblar: [
          'Faqat premiumning yuqori bo\'lishi',
          'Ribo, gharar va maysir elementlari',
          'Shartnoma muddatining uzoqligi',
          'Faqat xorijiy kompaniyalarning ishtirokı'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 15,
    module_id: 'module_06',
    mavzu: 'Zakat nima?',
    emoji: '💛',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Zakat — Islomning besh asosiy rukni (ustuni) dan biri bo'lib, ma'lum miqdorda mol-mulkka ega bo'lgan musulmonlar uchun farz hisoblangan moliyaviy ibodatdir.

Zakat so'zi arabcha "poklanish" va "o'sish" ma'nolarini bildiradi. Zakat berish mol-mulkni poklaydi va jamiyatda boylikning adolatli taqsimlanishiga hissa qo'shadi.

Zakatning asosiy shartlari:
— Nisob: zakat berish uchun mol-mulk ma'lum minimal miqdorga (nisob) yetishi kerak.
— Hawl: mol-mulk bir qamarchalik yil (lunar year) davomida egalikda turilgan bo'lishi kerak.
— Miqdor: odatda zakat zakot beriladigan mol-mulkning 2,5 foizi miqdorida hisoblanadi, lekin turli mol-mulk turlari uchun turli nisbatlar qo'llaniladi.

Zakat belgilangan sakkiz kategoriyaga sarflanadi: faqirlar, miskinlar, zakat yig'uvchilar, muallafallar, qullarni ozod qilish, qarzlilar, Allah yo'lida, va musofirlar.

Zakat hisoblash va to'g'ri taqsimotini amalga oshirish uchun malakali mutaxassis yoki shariat kengashiga murojaat qilish tavsiya etiladi.`,
    testlar: [
      {
        savol: 'Zakat Islomning qancha ruk\'nidan biri hisoblanadi?',
        javoblar: [
          'Uchta',
          'To\'rtta',
          'Beshtadan birı',
          'Yettita'
        ],
        togri: 2
      },
      {
        savol: '"Nisob" tushunchasi nima degani?',
        javoblar: [
          'Zakat berish muddati',
          'Zakat berish uchun zarur bo\'lgan minimal mol-mulk miqdori',
          'Zakat miqdorini hisoblash usuli',
          'Zakat qabul qiluvchilar toifalari'
        ],
        togri: 1
      },
      {
        savol: 'Odatda mol-mulkdan olinadigan zakat miqdori qancha?',
        javoblar: [
          '5 foiz',
          '10 foiz',
          '2,5 foiz',
          '1 foiz'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 16,
    module_id: 'module_06',
    mavzu: 'Waqf nima?',
    emoji: '🕌',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Waqf — Islom huquqida bir mol-mulkni Allah yo'lida vaqf (sadaqa) sifatida ajratish bo'lib, u ma'lum bir ijtimoiy yoki diniy maqsad uchun abadiy band qilinadi.

Waqfning mohiyati shundaki, mol-mulk sotilmaydi yoki meros qilinmaydi — u doimiy ravishda jamiyat manfaatiga xizmat qiladi. Tarixda masjidlar, maktablar, kasalxonalar, ko'priklar va favvoralar waqf orqali qurilgan va ta'minlangan.

Waqfning asosiy turlari:
— Diniy waqf: masjid, mozor va diniy muassasalar uchun.
— Xayriya waqfi: faqirlar, kasallar yoki umumiy jamiyat manfaati uchun.
— Oilaviy waqf: avlodlar uchun, lekin oxirida ijtimoiy maqsadga o'tadi.

Zamonaviy waqf tizimi yangi shakllarda rivojlanmoqda. Naqd waqf, korporativ waqf va sukuk asosidagi waqf kabi innovatsion modellar dunyoning turli mamlakatlarida joriy etilmoqda.

Waqf nafaqat diniy amal, balki jamiyat rivojlanishi va ijtimoiy muammolarni hal etishda kuchli vosita sifatida qaraladi.`,
    testlar: [
      {
        savol: 'Waqfda mol-mulk bilan nima bo\'ladi?',
        javoblar: [
          'Davlatga o\'tkaziladi',
          'Meros sifatida taqsimlanadi',
          'Doimiy ravishda ijtimoiy yoki diniy maqsad uchun band qilinadi',
          'Bozorda sotiladi'
        ],
        togri: 2
      },
      {
        savol: 'Tarixda waqf orqali qurilmagan narsa qaysi?',
        javoblar: [
          'Masjidlar',
          'Maktablar',
          'Harbiy kemasozlik zavodlari',
          'Kasalxonalar'
        ],
        togri: 2
      },
      {
        savol: '"Oilaviy waqf" qanday ishlaydi?',
        javoblar: [
          'Faqat bir oilaga xizmat qiladi va sotilishi mumkin',
          'Avlodlar uchun bo\'lib, oxirida ijtimoiy maqsadga o\'tadi',
          'Faqat diniy marosimlarga ishlatiladi',
          'Davlat tomonidan boshqariladi'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 17,
    module_id: 'module_07',
    mavzu: 'Budjet yuritishning birinchi qadami',
    emoji: '📝',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Shaxsiy yoki oilaviy budjetni yuritish — moliyaviy mustaqillikka erishishning asosiy qadam-laridandir. Islom moliyasi tamoyillariga asoslangan moliyaviy rejalashtirish ham o'z xarajatlarini aniq bilishdan boshlanadi.

Birinchi qadam — daromad va xarajatlarni ro'yxatga olish. Har kuni yoki haftada kirim va chiqimlaringizni yozib boring. Bu oddiy ko'rinadigan amal aslida eng muhimidir.

Ikkinchi qadam — daromad manbalarini aniqlash. Asosiy ish haqi, qo'shimcha daromad, ijara tushumi kabi barcha kiruvchi pul oqimlarini sanab chiqing.

Uchinchi qadam — xarajatlarni doimiy va o'zgaruvchan turlarga ajrating. Uy ijarasi, kommunal to'lovlar doimiy; oziq-ovqat, transport o'zgaruvchan bo'lishi mumkin.

To'rtinchi qadam — oxir oyda hisob-kitob qiling: daromad xarajatdan ko'pmi yoki kaami?

Bu bosqichlar nafaqat moliyaviy, balki ma'naviy jihatdan ham muhim: o'z molini bilish, isrofgarchilikdan saqlanish va adolatli taqsimlash Islomiy qadriyatlar bilan hamohang.`,
    testlar: [
      {
        savol: 'Shaxsiy budjetni yuritishning birinchi qadami nima?',
        javoblar: [
          'Kredit olish',
          'Investitsiya qilish',
          'Daromad va xarajatlarni ro\'yxatga olish',
          'Bank hisobvarag\'i ochish'
        ],
        togri: 2
      },
      {
        savol: 'Uy ijarasi to\'lovi qaysi xarajat turiga kiradi?',
        javoblar: [
          'O\'zgaruvchan xarajat',
          'Doimiy xarajat',
          'Investitsiya xarajati',
          'Ixtiyoriy xarajat'
        ],
        togri: 1
      },
      {
        savol: 'Islom moliyasi nuqtai nazaridan budjet yuritish nima uchun muhim?',
        javoblar: [
          'Faqat kredit olish uchun',
          'Isrofgarchilikdan saqlanish va adolatli taqsimlash uchun',
          'Faqat soliq to\'lash uchun',
          'Bank reytingini oshirish uchun'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 18,
    module_id: 'module_07',
    mavzu: 'Xarajatlarni toifalarga ajratish',
    emoji: '🗂️',
    level: 'beginner',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Xarajatlarni toifalarga ajratish budjetni samarali boshqarishning asosiy usulidir. Bu usul qayerga, qancha pul ketayotganini ko'rish imkonini beradi.

Asosiy xarajat toifalari:

1. Zaruriy ehtiyojlar: oziq-ovqat, ijara, kommunal to'lovlar, tibbiy xizmatlar. Bular hayotning asosiy talablari.

2. Transport: kunlik qatnovlar, yoqilg'i, transport vositasi xizmat ko'rsatish.

3. Ta'lim va rivojlanish: kurslar, kitoblar, treninglar.

4. Sog'liqni saqlash: dori-darmon, tibbiy tekshiruvlar.

5. Oila va ijtimoiy: ziyofatlar, sovg'alar, ehson va sadaqa.

6. Jamg'arma: daromadning ma'lum qismini keyingi maqsadlar uchun ajratish.

7. Sarmoya: uzoq muddatli moliyaviy maqsadlarga yo'naltirilgan mablag'lar.

Mashhur "50-30-20" qoidasi bo'yicha: daromadning 50% zaruriy ehtiyojlarga, 30% istaklar va qo'shimcha xarajatlarga, 20% esa jamg'arma va moliyaviy maqsadlarga ajratiladi. Bu nisbatlar sizning holatingizga qarab o'zgartirilishi mumkin.`,
    testlar: [
      {
        savol: '"50-30-20" qoidasida 20% qaysi maqsadga ajratiladi?',
        javoblar: [
          'Zaruriy ehtiyojlarga',
          'Ko\'ngilochar xarajatlarga',
          'Jamg\'arma va moliyaviy maqsadlarga',
          'Ziyofat va sovg\'alarga'
        ],
        togri: 2
      },
      {
        savol: 'Oziq-ovqat va uy ijarasi qaysi xarajat toifasiga kiradi?',
        javoblar: [
          'Investitsiya',
          'Ko\'ngilochar xarajatlar',
          'Zaruriy ehtiyojlar',
          'Jamg\'arma'
        ],
        togri: 2
      },
      {
        savol: 'Xarajatlarni toifalarga ajratishning asosiy maqsadi nima?',
        javoblar: [
          'Soliq miqdorini kamaytirish',
          'Qayerga qancha pul ketayotganini ko\'rish va boshqarish',
          'Kredit olish imkoniyatini oshirish',
          'Davlatga hisobot berish'
        ],
        togri: 1
      }
    ]
  },
  {
    id: 19,
    module_id: 'module_07',
    mavzu: 'Jamg\'arma rejasi',
    emoji: '🪙',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Jamg'arma — moliyaviy barqarorlik va mustaqillikning asosi. Ammo jamg'arma o'z-o'zidan bo'lmaydi — uni rejalashtirish zarur.

Samarali jamg'arma rejasining asosiy qoidalari:

Birinchi qoida — "avval o'zingizga to'lang". Daromad tushishi bilan, xarajatlardan oldin, ma'lum qismini jamg'arma uchun ajrating. Inson xarajatdan qolgan narsani jamg'arsam desa, odatda qolmaydi.

Ikkinchi qoida — maqsad belgilang. Qaysi maqsad uchun jamg'arayapsiz? Farzand ta'limi, uy, ziyorat yoki favqulodda fond? Har bir maqsad uchun alohida hisob yoki hisobni ajratib qo'ying.

Uchinchi qoida — favqulodda fond. Eng kamida 3-6 oylik xarajatni qoplovchi favqulodda fond yarating. Bu mablag' to'satdan yuzaga keladigan xarajatlar uchun.

To'rtinchi qoida — Islomiy tamoyillarga mos jamg'arma vositalari tanlang. Foizli depozit o'rniga takaful, sukuk yoki shariat talablariga mos fond mahsulotlarini ko'rib chiqing.

Jamg'arma — isrofgarchilikdan saqlanish va kelajak avlodga mas'uliyatli bo'lishning bir ko'rinishi.`,
    testlar: [
      {
        savol: '"Avval o\'zingizga to\'lang" qoidasi nima degani?',
        javoblar: [
          'Barcha qarzlarni avval to\'lash',
          'Daromad tushishi bilan xarajatlardan oldin jamg\'arma uchun pul ajratish',
          'Faqat o\'zingiz uchun xarid qilish',
          'Boshqalarga qarz bermaslik'
        ],
        togri: 1
      },
      {
        savol: 'Favqulodda fond qancha miqdorda bo\'lishi tavsiya etiladi?',
        javoblar: [
          'Bir oylik maosh',
          '3-6 oylik xarajatni qoplovchi miqdor',
          'Yillik daromad miqdori',
          'Uy narxining yarmi'
        ],
        togri: 1
      },
      {
        savol: 'Islom moliyasi tamoyillariga mos jamg\'arma vositasi qaysi?',
        javoblar: [
          'Foizli bank depoziti',
          'Obligatsiya',
          'Shariat talablariga mos sukuk yoki takaful mahsulotlari',
          'Kredit kartasi'
        ],
        togri: 2
      }
    ]
  },
  {
    id: 20,
    module_id: 'module_08',
    mavzu: 'Yakuniy amaliy case: Islom moliyasi va shaxsiy budjet',
    emoji: '🎯',
    level: 'intermediate',
    status: 'draft',
    review_status: 'sharia_review_required',
    disclaimer: 'Bu material ta\'limiy maqsadda tayyorlangan. Fatvo sifatida qabul qilinmaydi. Amaliy masalalarda malakali mutaxassis yoki shariat kengashi xulosasiga murojaat qilish tavsiya etiladi.',
    matn: `Keling, o'rganilgan bilimlarni amaliy misolda ko'rib chiqaylik.

Mirzohid — 30 yoshli yosh mutaxassis. U oylik 5 000 000 so'm daromad oladi. Uning maqsadlari: uy sotib olish, farzandlari uchun ta'lim jamg'armasi va favqulodda fond yaratish.

Budjet taqsimoti:
— 50%: zaruriy xarajatlar (ijara, oziq-ovqat, transport) — 2 500 000 so'm
— 20%: jamg'arma va moliyaviy maqsadlar — 1 000 000 so'm
— 20%: ta'lim va rivojlanish — 1 000 000 so'm
— 10%: sadaqa va ehson (zakat hisobiga kiruvchi ulush) — 500 000 so'm

Uy uchun moliyalashtirish: Mirzohid foizli ipoteka o'rniga kamayuvchi musharaka yoki murabaha modelini ko'rib chiqmoqda. Bu unga shariat tamoyillariga mos ravishda uy egasi bo'lish imkonini beradi.

Sug'urta o'rniga takaful: avtomobil va hayot uchun takaful mahsulotlarini tanlaydi.

Jamg'arma uchun: foizli depozit o'rniga shariat asosidagi fondlarni ko'rib chiqadi.

Bu case barcha o'rganilgan tushunchalarni birlashtirib, amaliy hayot rejasiga tatbiq etish namunasidir.`,
    testlar: [
      {
        savol: 'Mirzohid uy sotib olish uchun qaysi Islomiy modellarni ko\'rib chiqmoqda?',
        javoblar: [
          'Foizli ipoteka',
          'Kamayuvchi musharaka yoki murabaha',
          'Oddiy bank krediti',
          'Davlat subsidiyasi'
        ],
        togri: 1
      },
      {
        savol: 'Case bo\'yicha, daromadning qancha qismi sadaqa va ehsonga ajratilgan?',
        javoblar: [
          '5 foiz',
          '20 foiz',
          '10 foiz',
          '2,5 foiz'
        ],
        togri: 2
      },
      {
        savol: 'Bu yakuniy case qaysi maqsadga xizmat qiladi?',
        javoblar: [
          'Faqat zakat hisoblashni o\'rgatadi',
          'Barcha o\'rganilgan tushunchalarni amaliy hayot rejasiga tatbiq etish namunasidir',
          'Faqat investitsiya masalalarini yoritadi',
          'Faqat kredit olish bosqichlarini ko\'rsatadi'
        ],
        togri: 1
      }
    ]
  }
]; // darslar massivi tugadi


// ====================================================
// MODUL YAKUNIY TESTLARI (AMAL 128)
// Har bir modul tugagach ko'rsatiladigan qisqa yakuniy
// test. Savollar shu modul darslarining tasdiqlangan
// test bankidan tanlab olingan (yangi da'vo qo'shilmagan).
// ====================================================

const modulYakuniyTestlar = {
    module_01: [
        {
            savol: 'Islom moliyasining asosiy tamoyili qaysi?',
            javoblar: [
                'Foiz stavkasini oshirish',
                'Shariat tamoyillariga asoslanish',
                'Faqat bank operatsiyalari bilan shug\'ullanish',
                'Davlat tomonidan boshqarilish'
            ],
            togri: 1
        },
        {
            savol: '"Ribo" so\'zining asosiy ma\'nosi nima?',
            javoblar: [
                'Savdo shartnomasi',
                'Ortiqcha o\'sish yoki qo\'shimcha',
                'Investitsiya fondasi',
                'Budjet rejasi'
            ],
            togri: 1
        },
        {
            savol: 'Islom moliyasida savdodan foyda olish haqida qanday fikr mavjud?',
            javoblar: [
                'Taqiqlangan, chunki u ribo hisoblanadi',
                'Ruxsat etilgan, chunki haqiqiy qiymat yaratiladi',
                'Faqat xorijiy savdoda ruxsat etilgan',
                'Faqat davlat kompaniyalariga ruxsat etilgan'
            ],
            togri: 1
        },
        {
            savol: 'Islom moliyasida moliyaviy operatsiyalar nimaga bog\'liq bo\'lishi kerak?',
            javoblar: [
                'Faqat davlat kafolatiga',
                'Real aktiv yoki haqiqiy iqtisodiy faoliyatga',
                'Xorijiy valyuta kursiga',
                'Bank reytingiga'
            ],
            togri: 1
        },
        {
            savol: 'Islom moliyasida "ribo" deb nima ataladi?',
            javoblar: [
                'Savdo foydasi',
                'Xizmat haqi',
                'Foiz yoki ortiqcha ustama',
                'Investitsiya daromadi'
            ],
            togri: 2
        }
    ]

    // module_02 – module_08 uchun savollar keyinroq shu tuzilma
    // bo'yicha qo'shiladi (har biri kamida 5 ta savol,
    // tegishli modul darslarining test bankidan tanlab olingan).
};
