import { Recipe } from "./types";

export const recipes: Array<Recipe> = [
  // Breakfast
  {
    slug: "integralni-sendvic",
    title: "Integralni sendvič",
    description: `Sendviči u integralnoj kifli (ili između 2 kriške integralnog hleba). 1 integralnu kiflu presečete na pola, jednu polovinu premažete filadelfija light namazom i
dodate ćureća, pileća prsa ili dimljenog lososa. Na drugu polovinu stavite svežu salatu.`,
  },
  {
    slug: "humus",
    title: "Humus",
    description: `Humus.`,
  },
  {
    slug: "ajvar",
    title: "Ajvar",
    description: `Ajvar.`,
  },
  {
    slug: "proja",
    title: "Proja",
    description: `1 casa kukuruznog brasna, 1 čaša palente, 2 čaše kisele vode, ¼ praška za pecivo, 250
grama spanaća ili blitve naseckane, prsohvat soli. Sve sastojke izmešati po redosledu, 1 čaša
misli se na čašu od 2 dcl. Peče se na papiru za pecenje na 200 stepeni dok lepo ne porumeni.`,
  },
  {
    slug: "integralna-kifla",
    title: "Integralna kifla",
    description: `Integralna kifla / parče hleba - Tonus, Vitas`,
  },
  {
    slug: "integralni-hleb",
    title: "Integralni hleb",
    description: `Tonus, Vitas.`,
  },
  {
    slug: "palenta",
    title: "Palenta",
    description: `U proključalu vodu dodati palentu i mešati dok se ne zgusne.`,
  },
  {
    slug: "brusketi",
    title: "Brusketi",
    description: `Tost hleb premazati paradajzom samlevenim +origano i narendati biljni kačkavalj.`,
  },
  {
    slug: "pileca-prsa",
    title: "Pileća prsa",
    description: `Pileća prsa bez oznake E u aditivima.`,
  },
  {
    slug: "namaz-od-nemasnog-sira",
    title: "Namaz od nemasnog sira",
    description: `Nemasni sir viljuškom izmrviti (150g), dodati samlevene
semenke (lana, susama) oko 30g i peršun ili biljne začine po želji, možete dodati I svezu
crvenu paprika seckanu na kockice, napraviti smešu koju namažete na dvopek.`,
  },
  // lunch
  {
    slug: "muckalica",
    title: "Mućkalica",
    description: `Luk dinstati na vodi, na laganoj vatri da ne zagori. Dodati mu
razno povrće, celer, paškanat, šargarepu I dinstati još malo. Posno meso iseckati na kockice I
dodati povrću da se zajedno dinsta. Kad se meso skoro ne skuva, dodati mu papriku svežu,
tikvicu, I paradajz na kockice ili samleven, dinstati do kuvanja, na kraju dodati biljne začine,
kašiku maslinovog ulja I posoliti.`,
  },
  {
    slug: "posna-muckalica",
    title: "Posna mućkalica",
    description: `Luk dinstati na vodi, na laganoj vatri da ne zagori. Dodati
mu razno povrće, celer, paškanat, šargarepu I dinstati još malo. Pečurke iseckati na kockice I
dodati povrću da se zajedno dinsta. Kad se pečurke izdinstaju, dodati im papriku svežu,
tikvicu, I paradajz na kockice ili samleven, dinstati do kuvanja, na kraju dodati biljne začine,
kašiku maslinovog ulja I posoliti.`,
  },
  {
    slug: "nemasni-sir",
    title: "Nemasni sir",
    description: `Nemasni sir do 5.5% mlečne masti: President, Ela...`,
  },
  {
    slug: "piletina",
    title: "Piletina",
    description: `Belo meso izdinstati na vodi bez dodavanja ulja.`,
  },
  {
    slug: "juneci-cevapi",
    title: "Juneći ćevapi",
    description: `Kupiti ćevape u prodavnici i spremiti ih u vodi bez korišćenja ulja. Meso će samo pustiti masti dovoljno da se i zaprže.`,
  },
  {
    slug: "nemasna-riba",
    title: "Nemasna riba",
    description: `Pastrmka, škarpina, brancin. Staviti u rernu i posle kuvanja jesti bez kožice.`,
  },
  {
    slug: "musaka-sa-tikvicama",
    title: "Musaka sa tikvicama",
    description: `Na vodi dinstati usitnjeni crni luk, dodati mleveno meso, so,
majčinu dušicu, biber i rendani celer i mešati dok meso ne dobije braonkastu boju. Promešati
i skloniti sa ringle. U drugu šerpu (vatrostalnu posudu) na dno poredjati kolutove tikvica
debljine 3-4 mm, a praznine između kolutova popuniti iseckanim tikvicama na kockice.
Preko poredjanih tikvica sipati meso pa preko njega staviti još jedan sloj tikvica. U posudi u
kojoj se pržilo meso umutiti 1 jaje i 2 belanceta, dodati 200ml jogurta i vode do kraja i sa
ovom smesom preliti tikvice i meso. Musaku peći u rerni na 300 stepeni dok se na površini
ne pojavi braonkasta kora.(ukoliko spremate samo za vas, možete napraviti manju količinu i
staviti samo 1 jaje.) Ovu musaku možete pripremati sa karfiolom, pečenom paprikom I
drugim povrcem.`,
  },
  // Drink
  {
    slug: "limunada",
    title: "Limunada",
    description: `Limun iscediti u vodu bez dodavanja šećera.`,
  },
  {
    slug: "kiselo-mleko",
    title: "Kiselo mleko",
    description: `Moja kravica kiselo mleko.`,
  },
  // Salad
  {
    slug: "salata",
    title: "Salata",
    description: `Sezonska salata: krastavac, paradajz, kupus...`,
  },
  {
    slug: "cezar-salata",
    title: "Cezar salata",
    description: `
    150-250g piletine ili ćuretine spremiti na grilu ili roštilju ili izdinstati. Za to vreme zelenu
salatu operite i iseckajte na rezance, Rukolu, iceberg i drugu salatu koju volite
(neograničeno). U isečene salate dodajte gotovo belo meso. Paradajz oljuštite i seckajte na
kriške, stavite u salatu i malo posolite. Salatu prelijte sa 2kašike maslinovog ulja i 2 kašike
senfa, limunovim sokom i promešajte.`,
  },
  {
    slug: "biftek-salata",
    title: "Biftek salata",
    description: `
    150-250g bifteka spremiti na grilu ili roštilju ili izdinstati. Za to vreme zelenu
salatu operite i iseckajte na rezance, Rukolu, iceberg i drugu salatu koju volite
(neograničeno). U isečene salate dodajte gotovo belo meso. Paradajz oljuštite i seckajte na
kriške, stavite u salatu i malo posolite. Salatu prelijte sa 2kašike maslinovog ulja i 2 kašike
senfa, limunovim sokom i promešajte.`,
  },
  // Side dish / prilog
  {
    slug: "tikvice",
    title: "Tikvice",
    description: `Tikvice izgrilovati ili skuvati bez ulja.`,
  },
  {
    slug: "paprika",
    title: "Paprika",
    description: `Paprika izglrilovana na vodi i bez ulja.`,
  },
  // Snack
  {
    slug: "smoothie",
    title: "Smoothie",
    description: `Jedan od mnogih smutija.`,
  },
  {
    slug: "jogurt",
    title: "Jogurt",
    description: `Jogurt od 0 do 3.2% mlečne masti.`,
  },
  {
    slug: "jabuka",
    title: "Jabuka",
    description: `Jabuka.`,
  },
  {
    slug: "breskva",
    title: "Breskva",
    description: `Breskva.`,
  },
  {
    slug: "kajsija",
    title: "Kajsija",
    description: `Kajsija.`,
  },
  {
    slug: "kruska",
    title: "Kruška",
    description: `Kruška.`,
  },
  {
    slug: "tresnja",
    title: "Trešnja",
    description: `Trešnja.`,
  },
  {
    slug: "cia",
    title: "Čia",
    description: `Čia semenke (mlevene).`,
  },
  {
    slug: "supa",
    title: "Supa",
    description: `Pileća supa.`,
  },
];
