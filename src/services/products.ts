const products = [
  {
    _id: "20",
    name: "Strålande",
    path: "/butik/örtteer/strålande",
    img: "images/Inate2-1.jpg",
    description: "För en god start på dagen.",
    contents: "pepparmynta, rosblad, ringblomma, ingefära",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "21",
    name: "Stärkande",
    path: "/butik/örtteer/stärkande",
    img: "images/Inate2-1.jpg",
    description:
      "För organ och leder. Ett örtte som främjar en god njur och leverfunktion.",
    contents:
      "maskros, brännäslla, apelsinskal, ingefära, gullris, björkblad, bovete, pepparmynta",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "22",
    name: "Magstärkande",
    path: "/butik/örtteer/magstärkande",
    img: "images/Inate2-1.jpg",
    description: "Främjar en god magfunktion. Förebygger gasiga magar.",
    contents: "pepparmynta, kamomill, fänkål",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "23",
    name: "Balanserande",
    path: "/butik/örtteer/balanserande",
    img: "images/Inate2-1.jpg",
    description: "För den kvinnliga balansen.",
    contents:
      "munkpeppar, passionsblomma, citronmeliss, hagtorn, daggkåpa, jasminblomma, johannesört, hibiskus",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "24",
    name: "Befriande",
    path: "/butik/örtteer/befriande",
    img: "images/Inate2-1.jpg",
    description: "Förebygger luftvägsbekymmer.",
    contents:
      "läkemalva, isop, fläder, kamomill, lakritsrot, kungssljus, svart vinbärsblad, timjan",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "25",
    name: "Lugnande",
    path: "/butik/örtteer/lugnande",
    img: "images/Inate2-1.jpg",
    description: "För en god natts sömn.",
    contents:
      "passionsblomma, kamomill, lindblomma, hagtorn, citronmeliss, valeriana, lavendel",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "26",
    name: "Njutning",
    path: "/butik/örtteer/njutning",
    img: "images/Inate2-1.jpg",
    description: "Förebygger sötsug. Utmärkt som eftermiddagste.",
    contents:
      "pepparmynta, hibiskus, styvmorsviol, apelsinskal, svart vinbärsblad",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "27",
    name: "Gryning",
    path: "/butik/örtteer/gryning",
    img: "images/Inate2-1.jpg",
    description: "För en god start på dagen.",
    contents:
      "svart ekologiskt ceylonte, ingefära, pepparmynta, rosblad, ringblomma, svart vinbärsblad",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "28",
    name: "Skymning",
    path: "/butik/örtteer/skymning",
    img: "images/Inate2-1.jpg",
    description: "För ett gott slut på dagen.",
    contents:
      "rött ekologiskt rooiboste, passionsblomma, kamomill, lindblomma, hagtorn, citronmeliss, valeriana, lavendel",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "29",
    name: "Chai-latte",
    path: "/butik/örtteer/chai-latte",
    img: "images/Inate2-1.jpg",
    description: "Naturliga smaker av choklad, kanel och kardemumma.",
    contents:
      "rött ekologiskt rooiboste, gult te, kardemumma, kanel, svart vinbärsblad",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "30",
    name: "Vilda Hilda",
    path: "/butik/örtteer/vildahilda",
    img: "images/Inate2-1.jpg",
    description: "Rött te med äkta smak av jordgubb och vanilj.",
    contents: "",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "31",
    name: "Spralliga Alice",
    path: "/butik/örtteer/spralligaalice",
    img: "images/Inate2-1.jpg",
    description: "Rött te med äkta smak av äpple och vanilj.",
    contents: "",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "32",
    name: "Friskus",
    path: "/butik/örtteer/friskus",
    img: "images/Inate2-1.jpg",
    description: "Grönt te med äkta smak av citron och honung.",
    contents: "",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "33",
    name: "Baschakrat",
    path: "/butik/örtteer/baschakrat",
    img: "images/Inate2-1.jpg",
    description: "Binjurarna.",
    contents:
      "passionsblomma, hibiskus, kamomill, granatäppleblomma, nyponskal, lakritsrot",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "34",
    name: "Navelchakrat",
    path: "/butik/örtteer/navelchakrat",
    img: "images/Inate2-1.jpg",
    description: "Äggstockar, testiklar.",
    contents:
      "lindblomma, morot, apelsinskal, munkpeppar, fläder, ingefära, kanel",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "35",
    name: "Solar plexuschakrat",
    path: "/butik/örtteer/solarplexuschakrat",
    img: "images/Inate2-1.jpg",
    description: "Bukspottskörteln.",
    contents: "solros, pepparmynta, citronmeliss, stjärnanis, fänkål",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "36",
    name: "Hjärtchakrat",
    path: "/butik/örtteer/hjärtchakrat",
    img: "images/Inate2-1.jpg",
    description: "Brässen.",
    contents: "hagtorn, nässla, svart vinbärsblad, rosblad, nyponskal",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "37",
    name: "Halschakrat",
    path: "/butik/örtteer/halschakrat",
    img: "images/Inate2-1.jpg",
    description: "Sköldkörteln.",
    contents: "eucalyptusblad, blåbär, isop, kungsljus, blåklint, lavendel",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "38",
    name: "Pannchakrat",
    path: "/butik/örtteer/pannchakrat",
    img: "images/Inate2-1.jpg",
    description: "Hypofysen.",
    contents:
      "blå malva, citrongräs, kamomill, koriander, kanel, rosblad, munkpeppar",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "39",
    name: "Kronchakrat",
    path: "/butik/örtteer/kronchakrat",
    img: "images/Inate2-1.jpg",
    description: "Epifysen.",
    contents:
      "ingefära, jasminblomma, pepparmynta, salvia, fläder, ljungblomma, björnbärsblad",
    sizes: [
      { weight: 60, price: 79 },
      { weight: 125, price: 135 },
    ],
    category: {
      _id: "10",
      name: "Örtteer",
      path: "/örtteer",
      img: "images/Inate2-1.jpg",
    },
  },
  {
    _id: "40",
    name: "Grillkrydda",
    path: "/butik/kryddor/grillkrydda",
    img: "images/Inakrydd1-1.jpg",
    description: "Används som allkrydda.",
    contents:
      "Hantverksmässigt malda kryddor utan tillsatser med rent salt hämtat från Himalayas sluttningar. Eftersom jag inte använder mig av klumpförebyggande medel kan du behöva skaka burken.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 50, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "41",
    name: "Het grill",
    path: "/butik/kryddor/hetgrill",
    img: "images/Inakrydd1-1.jpg",
    description: "Med het smak av chilipeppar.",
    contents:
      "Hantverksmässigt malda kryddor utan tillsatser med rent salt hämtat från Himalayas sluttningar. Eftersom jag inte använder mig av klumpförebyggande medel kan du behöva skaka burken.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 50, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "42",
    name: "Vild/Lammgrill",
    path: "/butik/kryddor/vild-lammgrill",
    img: "images/Inakrydd1-1.jpg",
    description:
      "Till viltkött och fågel med bland annat timjan och salvia och rosmarin.",
    contents:
      "Hantverksmässigt malda kryddor utan tillsatser med rent salt hämtat från Himalayas sluttningar. Eftersom jag inte använder mig av klumpförebyggande medel kan du behöva skaka burken.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 50, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "43",
    name: "Flingsalt med dill",
    path: "/butik/kryddor/flingsalt-dill",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "44",
    name: "Flingsalt med ramslök",
    path: "/butik/kryddor/flingsalt-ramslök",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "45",
    name: "Flingsalt med dragon och chili",
    path: "/butik/kryddor/flingsalt-dragon-chili",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "46",
    name: "Flingsalt med örter",
    path: "/butik/kryddor/flingsalt-örter",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "47",
    name: "Flingsalt med fyra lökar",
    path: "/butik/kryddor/flingsalt-fyra-lökar",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "48",
    name: "Flingsalt med dill, fänkål, gräslök",
    path: "/butik/kryddor/flingsalt-dill-fänkål-gräslök",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents: "100% rent flingsalt blandat med olika örter.",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "49",
    name: "Extra knorr",
    path: "/butik/kryddor/extra-knorr",
    img: "images/Inakrydd1-1.jpg",
    description: "En kryddig blandning för fläskrätter.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "50",
    name: "Fina fenan",
    path: "/butik/kryddor/fina-fenan",
    img: "images/Inakrydd1-1.jpg",
    description: "Lämplig till all fisk.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "51",
    name: "Himmel och hav",
    path: "/butik/kryddor/himmelochhav",
    img: "images/Inakrydd1-1.jpg",
    description:
      "Till fågel och fisk. Med bla citronverbena, sichuanpeppar och basilika.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "52",
    name: "Lammkrydda",
    path: "/butik/kryddor/lammkrydda",
    img: "images/Inakrydd1-1.jpg",
    description: "",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "53",
    name: "Persillade",
    path: "/butik/kryddor/persillade",
    img: "images/Inakrydd1-1.jpg",
    description: "Gott i det mesta, passar till pasta och soppor.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "54",
    name: "Salladsörter",
    path: "/butik/kryddor/salladsörter",
    img: "images/Inakrydd1-1.jpg",
    description: "En örtmix, lika god i salladen som i gratängen.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "55",
    name: "Vilda grytan",
    path: "/butik/kryddor/vildagrytan",
    img: "images/Inakrydd1-1.jpg",
    description: "Till söndagssteken eller musitga grytor.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "56",
    name: "Örtmix",
    path: "/butik/kryddor/örtmix",
    img: "images/Inakrydd1-1.jpg",
    description: "Ljuvlig i smakerna.",
    contents:
      "Torkade kryddor helt utan tillsatser. De är fantastiskt goda till kalla såser. Låt gärna såsen dra till sig några timmar innan servering. Fungerar även utmärkt i dippsåsen till chipsen!",
    sizes: [
      { weight: 35, price: 50 },
      { weight: 60, price: 65 },
    ],
    category: {
      _id: "11",
      name: "Kryddor",
      path: "/kryddor",
      img: "images/Inakrydd1-1.jpg",
    },
  },
  {
    _id: "57",
    name: "Skinbalance",
    path: "/butik/salvor&cerat/skinbalance",
    img: "images/scinbalance1-1.jpg",
    description:
      "En stärkande och skyddande creme för ansiktet samt för dig med eksem, klåda ellerbrännsår. För hund används den på hotspot och små sår. Används fördelaktigt som dagceme i ansiktet. Doftar underbart!",
    contents: "ringblomma, bivax, nattljusolja, havtornsolja, zink, kamomill",
    sizes: [
      { weight: 30, price: 190 },
      { weight: 50, price: 270 },
    ],
    category: {
      _id: "12",
      name: "Salvor/Cerat",
      path: "/salvor&cerat",
      img: "images/scinbalance1-1.jpg",
    },
  },
  {
    _id: "58",
    name: "Ringblomssalva",
    path: "/butik/salvor&cerat/ringblomssalva",
    img: "images/scinbalance1-1.jpg",
    description:
      "Mjukgörande och sårläkande universalsalva gjord av ekologiska ingredienser.",
    contents:
      "vetegroddsolja, ringblomsolja, litsea cubeba, kokosolja, havtornsolja",
    sizes: [
      { weight: 30, price: 65 },
      { weight: 50, price: 115 },
    ],
    category: {
      _id: "12",
      name: "Salvor/Cerat",
      path: "/salvor&cerat",
      img: "images/scinbalance1-1.jpg",
    },
  },
  {
    _id: "59",
    name: "Tigerbalsam",
    path: "/butik/salvor&cerat/tigerbalsam",
    img: "images/scinbalance1-1.jpg",
    description:
      "En välgörande balsam för trötta och stela muskler. Denna balsam är värmande och gör gott efter träning eller i massage.",
    contents: "",
    sizes: [
      { weight: 30, price: 65 },
      { weight: 50, price: 115 },
    ],
    category: {
      _id: "12",
      name: "Salvor/Cerat",
      path: "/salvor&cerat",
      img: "images/scinbalance1-1.jpg",
    },
  },
  {
    _id: "60",
    name: "Muggsalva",
    path: "/butik/salvor&cerat/muggsalva",
    img: "images/scinbalance1-1.jpg",
    description:
      "Mugg är en hudinflammation i karleden som uppkommer när den känsliga huden skadas av ex smuts, fukt eller skav. Kraftig mugg kan orsaka hälta men andra symtom kan vara ömhet, svullnad, värmeökning, rodnad. Muggsalvan lindrar och förebygger samt verkar hämande för bakterier. Den är mjukgörande och stärkande. ",
    contents: "mandelolja, tistelolja, ringblomsolja, bivax, eteriska oljor",
    sizes: [
      { weight: 50, price: 90 },
      { weight: 100, price: 150 },
      { weight: 250, price: 350 },
    ],
    category: {
      _id: "12",
      name: "Salvor/Cerat",
      path: "/salvor&cerat",
      img: "images/scinbalance1-1.jpg",
    },
  },
  {
    _id: "61",
    name: "Mage/Tarm",
    path: "/butik/örtblandningar/mage-tarm",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar en sund matspjälkning, tarmfunktion, tarmflora och immunförsvar. Örterna är kända för att vara kramplösande, lugnande, slemlösande. Används förebyggande vid Tjocktarmsinflammation, förstoppning, diarré, tarmluft, kolik mm.",
    contents:
      "salvia, kummin, nässla, kamomill , anis, pepparmynta, fänkål, dillfrö, physaliumfrö, timjan, valeriana, bockhornsklöver, persilja, kanel",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "62",
    name: "Rörelse",
    path: "/butik/örtblandningar/rörelse",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar en god rörlighet i muskler och leder. Används vid akuta problem med överansträngning i muskler, leder och senor. Vid långvaringa problem rek. Leder/Muskler i ca 4 veckor och därefter övergå till Rörelse föra att biehålla elasticitet.",
    contents: "gurkmeja, djävulsklo, msm, vildnypon, nässla, snärjmåra",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "63",
    name: "Leder/Muskler",
    path: "/butik/örtblandningar/leder-muskler",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar leder, muskler, skelett, utrensning, lever och njurfunktion. Örterna är kända för att vara antireumatiska, blodreglerande, stärkande för hår, päls, hornkvalité.",
    contents:
      "gullris, maskros, timjan, kelp, alfalfa, nypon, gurkmeja, nässla, ingefära, djävulsklo, gul senap, stor kardborre, snärjmåra, bovete, björkblad",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "64",
    name: "Immunförsvar",
    path: "/butik/örtblandningar/immunförsvar",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar ett gott immunsvar och inre balans i organen. Används vid fång, svåra fall av eksem, utrensningsproblem och svagt immunförsvar.",
    contents:
      "djävulsklo, alfalfa, nässla, kamomill, pepparmynta, bockhornsklöver, physaliumfrö, timjan, kelp, maskros, gullris, gurkmeja, anis, fänkål, kummin, senap, kanel, salvia, dillfrö, björkblad, snärjmåra, valeriana, ingefära, nypon, persilja",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "65",
    name: "Lugnande hormon",
    path: "/butik/örtblandningar/lugnandehormon",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar en god balans i  nerverna och  hormonerna. Örtblandningarna är kända för att vara lugnande (ej slöande) nervstärkande, hormonbalanserande och för att öka koncentrationen. Används vid brunstproblem, humörsvängingar, nervösa besvär, svårigheter att koppla av.",
    contents:
      "kamomill, valeriana, citronmeliss, hagtorn,  munkpeppar, mejram, lindblomma, passionsblomma",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "66",
    name: "Luftvägar",
    path: "/butik/örtblandningar/luftvägar",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar sunda andningsvägar och lungor. Örterna i blandningen är kända för att vara slemlösande, kramplösande, bakteriedödande, virushämmande. Används vid bronkit, astma, hosta, känsliga luftvägar, halsfluss, inflammation i luftvägarna.",
    contents:
      "timjan, lakritsrot, kamomill, salvia, isop, isländsk mossa, älgört, åkerfräken, läkemalva, pepparmynta, bockhornsklöver, rosmarin, fläderblomma",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "67",
    name: "Metabolbalans",
    path: "/butik/örtblandningar/metabolbalans",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar en god ämnesomsättning och hormonbalans. Ett tillskott för individer med upprepande viktuppgång, fång och problem med basalmetabolismen.",
    contents:
      "munkpeppar, spirulina, gurkmeja, djävulsklo, msm, vildnypon, nässla",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "68",
    name: "Energi",
    path: "/butik/örtblandningar/energi",
    img: "images/Örter1-1.jpg",
    description:
      "En blandning som består av massor med spännande bär, frukter, alger och örter. Främjar en god blodsockerbalans.",
    contents: "",
    sizes: [
      { weight: 125, price: 240 },
      { weight: 300, price: 370 },
      { weight: 500, price: 660 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "69",
    name: "Starka hovar",
    path: "/butik/örtblandningar/starka-hovar",
    img: "images/Örter1-1.jpg",
    description:
      "Främjar starka hovar, klor naglar och hårkvalitet. Används vid sköra hovar, fång, dålig hårrem, problem med trampdynor och klor/hovar/hud. Örterna ökar genomblödningen i de små blodkärlen och är naturligt rika på kisel vilket främjar hår, hud och naglar.",
    contents:
      "kvickrot, kelp, bovete, snärjmåra, brännässla. Örterna är naturligt rika på kisel, kalcium, kalium, järn, magnesium, zink, jod, vit -a, b, c, p.",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
  {
    _id: "70",
    name: "Mage EXTRA",
    path: "/butik/örtblandningar/mage-extra",
    img: "images/Örter1-1.jpg",
    description:
      "En örtblandning som förebygger parasiter och främjar en god tarmflora. Ges i en kur på 5 dagar var 3:e månad.",
    contents: "rödalmsbark, kvassia, fänkål, ålandsrot",
    sizes: [
      { weight: 125, price: 200 },
      { weight: 250, price: 350 },
      { weight: 500, price: 600 },
    ],
    category: {
      _id: "12",
      name: "Örtblandningar",
      path: "/örtblandningar",
      img: "images/Örter1-1.jpg",
    },
  },
];

export const getProducts = () => {
  return products;
};
