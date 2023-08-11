// training

const courses = [
  {
    name: "Energiterapiutbildning",
    date: "Ej fastställt",
    location: "Färlöv, (på min gård)",
    description: (
      <p>
        En kurs i 6 steg där vi går igenom:
        <br />
        1: Männiksokroppens anatomi, fysiologi och organens samverkan enligt
        östeländsk filosofi.
        <br />
        2: Kostens betydelse, naturmedicin, homeopati och immunbiologi.
        <br />
        3: Kinesisk medicin, eteriska oljor, meridiansystemet.
        <br />
        4: Subtila energisystem - Chackra, aura mm. Telepati och healing samt
        dess olika frekvenser. Sammanlänkningen mellan hormonsystemet, auran och
        nervsystemet.
        <br />
        5: Kanalisering, psykometri, regression. Olika arbetsredskap samt hur
        man balanserar sig själv i sitt arbete.
        <br />
        6: Vad är ande, själ och väsen. Intuition, hjälpare och guidar. Hur får
        man kontakt med en hjälpare.
      </p>
    ),
    price: "Ej fastställt",
    notes: "",
    img: "images/2023-200-2.jpg",
    backgroundColor: "",
    color: "",
  },
  {
    name: "Regndroppsterapi",
    date: (
      <p>
        28 april, 13.00 - 18.00,
        <br />
        29 april, 10.00 - 16.00
      </p>
    ),
    location: "Färlöv, (på min gård)",
    description: (
      <p>
        I denna kurs lär du dig Regndroppsmassage som är en varsam och rogivande
        behandling som främjar hälsa och läkning på många plan.
        Regndroppstekniken utvecklades på 1980-talet av Gary Youngdag som
        kombinerat gamla healingmetoder från Tibet och Lakota Indianderna med
        modern forskning kring de eteriska oljornas läkande och stärkande
        effekt. Från början var syftet att att behandla besvär med rygg och
        nacke, men efter hand visade det sig fungera på andra problem såsom
        mentala, känslomässiga och fysiska. Flera olika tekniker används i
        behandlingen tillsammans med de djupverkande oljorna såsom akupressur,
        reflexologi och speciella fjäderlätta strykningar. Var och en av dessa
        tekniker är bra för sig men i kombination blir resultatet avsevärt
        bättre. Under helgen varvar vi teori med praktik.
      </p>
    ),
    price: "1995:-",
    notes: "Lunch, fika och oljor ingår.",
    img: "images/INA27-1.jpg",
    backgroundColor: "#011B10",
    color: "white",
  },
  {
    name: "Naturlig Djurfriskvård",
    date: "14 maj",
    location: "Österlen, Ecotopia",
    description: (
      <p>
        I denna kurs lär du dig vilka läkeväxter och homeopatiska medel du
        enkelt kan använda för att stödja ditt djurs hälsa. Kursen tar även upp
        frågor kring vad som är naturligt för respektive djur att äta och vilka
        samband som finns mellan våra djurs foderintag och ökade ohälsa. Kursen
        vänder sig främst till dig med hund, katt eller häst men givetvis är
        alla djurägare välkomna.
      </p>
    ),

    price: "Ej fastställt",
    notes: "",
    img: "images/2023-200-2.jpg",
    backgroundColor: "",
    color: "",
  },
  {
    name: "Den vilda trädgården",
    date: "20 maj, 10.00-16.00",
    location: "Färlöv, (på min gård)",
    description: (
      <p>
        Lär dig mer om vad som växer runt knuten, om vad som är ätbart och gott
        samt vilka växter som har fantastiska hälsofördelar. Denna dag går vi ut
        i trädgård och naturen runt knuten och lär om växterna vi gallrar bort
        eller kanske inte ens ser. Vi plockar med oss och använder i matlagning
        som vi sedan avnjuter tillsammans.
      </p>
    ),

    price: "975:-",
    notes: "Studiematerial, lunch och fika ingår. ",
    img: "images/INA27-1.jpg",
    backgroundColor: "#011B10",
    color: "white",
  },
  {
    name: "Örtvandring",
    date: (
      <p>
        28 maj, 19 augusti,
        <br />9 september
      </p>
    ),
    location: "Österlen, Ecotopia",
    description: (
      <p>
        Denna dag går vi ut och botaniserar bland örter och vilda växter. Vi
        vandrar på Österlen backlandskap både på hed och i skog. Du får du
        möjlighet att inhämta örtkunskap samtidigt som du är ute och vandrar. Vi
        lägger in pauser med sund rawfood mat smaksatt med vilda växter. En dag
        både för kropp och själ.
      </p>
    ),

    price: "Ej fastställt",
    notes: "",
    img: "images/2023-200-2.jpg",
    backgroundColor: "",
    color: "",
  },
  {
    name: "Yoga och vandring med ätbara vilda växter",
    date: "11 juni",
    location: "Vitaby, Grevlunda Yoga",
    description: (
      <p>
        Vi startar dagen med ett skönt Hatayogapass i en vacker studio. Mattor
        och dyl finns på plats och inga förkunskaper krävs. Därefter blir det
        vegetarisk glutenfri lunch och efteråt beger vi oss i den vilda vackra
        naturen runt husknuten. Vandringen är ca 4 km lång och ganska
        lättvandrad. Under vandringen stannar vi och botaniserar bland våra
        ätbara växter i naturen.
      </p>
    ),

    price: "Ej fastställt",
    notes: "",
    img: "images/INA27-1.jpg",
    backgroundColor: "#011B10",
    color: "white",
  },
  {
    name: "Örtmedicin steg 1",
    date: "12 augusti",
    location: "Österlen, Ecotopia",
    description: (
      <p>
        Nu är det hög tid att börja plocka örter och sammanställa sitt eget
        naturapotek. I denna kurs får du både möjlighet att inhämta
        grundläggande örtkunskap och gå ut i naturen för att sedan när du kommer
        hem börja plocka och torka örter till ditt eget naturapotek.
        <br />
        Denna kurs bygger på ett inledande kunskapsintag om örtmedicin för
        människor och djur. Detta genom att lära sig mer om vilda växter och
        vilka man kan använda i sin vardag. Vilka örter man bör plocka och vad
        man kan använda dem till. Vilka växter, s.k. medicinalväxter, som
        används som läkemedel och som man framställer läkemedel ur.
      </p>
    ),

    price: "Ej fastställt",
    notes: "",
    img: "images/2023-200-2.jpg",
    backgroundColor: "",
    color: "",
  },
  {
    name: "Örtmedicin steg 2",
    date: "13 augusti",
    location: "Österlen, Ecotopia",
    description: (
      <p>
        Under många år har Catharina Ehlo varit kursledare för fullbokade
        grundkurser i örtmedicin. På begäran av deltagare är det nu dags för
        denna fortsättningskurs. Denna kurs utgör en fördjupning av de läkande
        ämnen som återfinns i olika läkeörter och om homeopatiska läkeväxter.
        Homeopatin är den andra mest använda komplimenterande behandlingen i
        världen. Många av homeopatins preparat har sitt ursprung i läkeväxter.
        Homeopati är ett behandlingskoncept, som utarbetades av den tyske
        läkaren Samuel Hahnemann (1755-1843) ”om en substans framkallar symptom
        hos en frisk, är det möjligt att med samma substans bota liknande
        symptom hos en sjuk (similia similibus curentur)”. En gemensam nämnare
        för alla preparaten är den stora utspädningen. I kursen ingår därför
        också vilka potenser man använder.
        <br />
        Catharina Ehlo lägger grunden för nya tankar kring medicin samtidigt som
        hon vill öka förståelsen för skillnaden mellan symtombehandlande
        skolmedicin och botande alternativ- och komplementärmedicin.
      </p>
    ),

    price: "Ej fastställt",
    notes: "",
    img: "images/INA27-1.jpg",
    backgroundColor: "#011B10",
    color: "white",
  },
];

export const getCourses = () => {
  return courses;
};
