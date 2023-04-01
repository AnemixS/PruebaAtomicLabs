import spaceman5 from "./assets/spaceman-5.png";
import spaceman6 from "./assets/spaceman-6.png";
import spaceman7 from "./assets/spaceman-7.png";
import featureCard1 from "./assets/feature-card-1.png";
import featureCard2 from "./assets/feature-card-2.png";
import featureCard3 from "./assets/feature-card-3.png";

const featureCardsData = [
  {
    image: featureCard1,
    title: "EXPLORA",
    content: [
      <>
        Innovación y <b>creación tecnológica</b>
      </>,
      <>
        <b>UI/UX</b>
      </>,
      <>
        <b>Innovación</b>
      </>,
    ],
    active: false,
  },
  {
    image: featureCard2,
    title: "IMAGINA",
    content: [
      <>
        <b>Estrategia</b> Digital{" "}
      </>,
      <>
        <b>Big Data &</b> Analysis{" "}
      </>,
      <>
        <b>Consultoría</b> Tecnológica
      </>,
      <>
        <b>Reducción</b> de costos TI
      </>,
    ],
    active: true,
  },
  {
    image: featureCard3,
    title: "CONQUISTA",
    content: [
      <>
        Desarrollo tecnológico <b>a la medida</b>
      </>,
      <>
        <b>Ciberseguridad</b>
      </>,
      <>
        <b>Servicios de la Nube</b>
      </>,
    ],
    active: false,
  },
];

const descriptiveCardsData = [
  {
    image: spaceman5,
    content: [
      <>
        Usamos las tecnologías
        <br />
        más modernas
      </>,
      <>
        Innovamos y creamos
        <br />
        proyectos retadores
      </>,
    ],
  },
  {
    image: spaceman7,
    content: [
      <>
        ¡Trabajamos en equipo
        <br />
        rumbo al éxito!
      </>,
      <>
        No tenemos código de
        <br />
        vestimenta
      </>,
    ],
  },
  {
    image: spaceman6,
    content: [
      <>
        Realizamos actividades
        <br />
        para tu bienestar
      </>,
      <>
        ¡Tenemos un parque
        <br />
        frente a la oficina!
      </>,
    ],
  },
];

const tableData = [
  {
    feature: "Equipo inclusivo, honesto y auténtico",
    others: true,
    atomic: true,
  },
  {
    feature: "Puntualidad es nuestro segundo nombre",
    others: true,
    atomic: true,
  },
  {
    feature: "Siempre innovamos en nuestros productos",
    others: true,
    atomic: true,
  },
  {
    feature: "Te ayudamos a crecer e implementar nuevos conocimientos",
    others: false,
    atomic: true,
  },
  {
    feature: "Nos preocupamos por tu bienestar",
    others: false,
    atomic: true,
  },
  {
    feature: "El respeto es una parte fundamental",
    others: false,
    atomic: true,
  },
];

export { featureCardsData, descriptiveCardsData, tableData };
