import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutDescription = {
    label: "Om",
    description:
      "Stjärnörter och Själens Stjärna är en oas för dem som söker naturligt välbefinnande och en plats där själen kan finna ro. Genom Catharinas breda kunskap och kärlek till örter och terapiformer skapas en värld av läkning och balans för alla som söker det bästa för sin hälsa och sitt välmående.",
    img: "images/MensesCrampEliminator_1800x1200.webp",
  };

  return (
    <div>
      <p>
        Catharina Ehlo - Skaparen bakom Själens Stjärna och Stjärnörter
        <br />
        Välkommen till Stjärnörter och Själens Stjärna, där Catharina Ehlo
        driver sitt örtmedicinska företag och erbjuder helande behandlingar för
        både människor och djur. Med över 20 års erfarenhet inom örtmedicin och
        terapiformer som bowenterapi, bonitologi och kraniosakralterapi
        skräddarsyr hon behandlingsprogram för att främja balans och läkning.
      </p>
      <br />
      <p>
        En Passion för Naturens Egna Apotek
        <br /> Catharina har alltid haft ett mångårigt intresse av örter, djur
        och olika behandlingsformer. För henne är det självklart och naturligt
        att arbeta nära naturens egna apotek och sätta kroppens egna
        läkningsprocess i fokus. Genom Själens Stjärna har hon framgångsrikt
        utfört behandlingar på sin egen praktik och nu, genom Stjärnörter, tar
        hon fram egna produkter som främjar en sund kropp, med endast naturens
        krafter.
      </p>
      <br />
      <p>
        En Holistisk Syn på Hälsa
        <br />
        Catharina strävar efter att skapa en uppåtgående spiral mot välmående,
        läkning och växande. Hon tror på att kropp, själ och känslor delar en
        gemensam energi, och att vara medveten om sin egen energi är nyckeln
        till balans och harmoni. I hennes behandlingsmetoder står den enskilda
        människan alltid i fokus, för hon vet att varje individ är unik, även om
        de kan ha liknande sjukdomsbilder.
      </p>
      <br />
      <p>
        En Delad Kunskap
        <br />
        Catharina delar gärna med sig av sin kunskap och har hållit utbildningar
        både på sin gård och på platser som Ecotopia på Österlen. Genom kurser
        och örtvandringar sprider hon kunskapen om växter och metoder för att
        främja hållbar djurfriskvård och välmående för både människor och djur.
        Hennes engagemang sträcker sig även till att erbjuda kurser i
        energiterapi och regndroppsmassage.
        <br />
        <br />
        Stjärnörter och Själens Stjärna är en oas för dem som söker naturligt
        välbefinnande och en plats där själen kan finna ro. Genom Catharinas
        breda kunskap och kärlek till örter och terapiformer skapas en värld av
        läkning och balans för alla som söker det bästa för sin hälsa och sitt
        välmående.
      </p>
      <br />
      <p style={{ fontStyle: "italic", fontSize: "40px", fontWeight: "bold" }}>
        "Catharina Ehlo har lång erfarenhet från sin egen praktik och är
        inspirerad av Hildegard från Bingen, sin tids stora naturläkare, som
        levde som abbedissa på 1100-talet. Hon lägger grunden för nya tankar
        kring medicin samtidigt som hon vill öka förståelsen för skillnaden
        mellan symtombehandlande veterinärmedicin och botande alternativ- och
        komplementärmedicin. Catharina lever för och med djur. Idag tre hästar,
        tio katter och två hundar. Hon är känd för sin djurkommunikativa ådra
        och har även bedrivit hästuppfödning i större skala på gården där hon
        bor och har sin praktik." <br />
        /Ecotopia
      </p>
    </div>
  );
}

export default About;
