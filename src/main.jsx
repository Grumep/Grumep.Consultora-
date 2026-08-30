import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  Home,
  Menu,
  MessageCircle,
  MonitorCog,
  Play,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import "./style.css";

/* =========================================================
   CONFIGURACIÓN DE LOS SISTEMAS
========================================================= */

const systems = [
  {
    name: "TiendaApp",
    category: "Comercios",
    image: "tiendaapp.png",
    video: "tiendaapp.mp4",
    description:
      "Sistema de gestión para comercios, ventas, productos y control de stock.",
    features: [
      "Ventas",
      "Stock",
      "Productos",
      "Reportes",
    ],

    /* =====================================================
       LICENCIAS TIENDAAPP
    ===================================================== */

    pricing: {
      demo: true,

      plans: [
        {
          name: "Básico",
          price: "$60.000",
          period: "por mes",
          description:
            "Ideal para comenzar a gestionar tu comercio.",
          features: [
            "Licencia mensual",
            "Gestión de ventas",
            "Control de stock",
            "Gestión de productos",
            "Reportes",
          ],
        },

        {
          name: "Pro",
          price: "$120.000",
          period: "por año",
          description:
            "Una opción pensada para trabajar durante todo el año.",
          features: [
            "Licencia por 12 meses",
            "Pago único",
            "Gestión de ventas",
            "Control de stock",
            "Gestión de productos",
            "Reportes",
          ],
        },

        {
          name: "Premium",
          price: "$250.000",
          period: "permanente",
          description:
            "Licencia sin vencimiento para tu comercio.",
          featured: true,
          features: [
            "Licencia permanente",
            "Pago único",
            "Sin renovación",
            "Gestión de ventas",
            "Control de stock",
            "Gestión de productos",
            "Reportes",
          ],
        },
      ],
    },
  },

  {
    name: "GrumPet",
    category: "Veterinarias",
    image: "grumpet.png",
    video: "Grumpet.mp4",
    description:
      "Sistema de gestión para pet shops y negocios dedicados a productos para mascotas.",
    features: [
      "Productos",
      "Ventas",
      "Stock",
      "Clientes",
    ],
  },

  {
    name: "GrumDent",
    category: "Salud",
    image: "grumdent.png",
    video: "grumdent.mp4",
    description:
      "Sistema de gestión para consultorios y profesionales de odontología.",
    features: [
      "Pacientes",
      "Consultas",
      "Historia clínica",
      "Gestión",
    ],
  },

  {
    name: "Talvena",
    category: "Salud",
    image: "talvena.png",
    video: "talvena.mp4",
    description:
      "Sistema de gestión clínica para organizar pacientes, médicos y consultas.",
    features: [
      "Pacientes",
      "Médicos",
      "Signos",
      "Historia médica",
    ],
  },

  {
    name: "TallerPro",
    category: "Servicios",
    image: "tallerpro.png",
    video: "tallerpro.mp4",
    description:
      "Sistema de gestión para talleres mecánicos y seguimiento de reparaciones.",
    features: [
      "Clientes",
      "Vehículos",
      "Órdenes",
      "Historial",
    ],
  },

  {
    name: "VerdaMax",
    category: "Comercios",
    image: "verdadmax.png",
    video: "verdadmax.mp4",
    description:
      "Solución orientada a la gestión de comercios de frutas y verduras.",
    features: [
      "Productos",
      "Ventas",
      "Stock",
      "Gestión",
    ],
  },
];

const categories = [
  "Todos",
  "Comercios",
  "Salud",
  "Veterinarias",
  "Servicios",
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [category, setCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(null);

  const base = import.meta.env.BASE_URL;

  const whatsapp =
    "https://wa.me/543804881636?text=Hola%20GRUMEP,%20quiero%20consultar%20por%20un%20sistema";

  /* =======================================================
     DETECTAR PÁGINA DE DEMOSTRACIÓN
  ======================================================= */

  const getDemoFromHash = () => {
    const hash = window.location.hash;

    if (!hash.startsWith("#/sistemas/")) {
      return null;
    }

    const slug = hash
      .replace("#/sistemas/", "")
      .toLowerCase();

    const system = systems.find(
      (item) =>
        item.name.toLowerCase().replace(/\s+/g, "") ===
        slug
    );

    return system || null;
  };

  useEffect(() => {
    const updatePage = () => {
      setCurrentDemo(getDemoFromHash());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    updatePage();

    window.addEventListener(
      "hashchange",
      updatePage
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updatePage
      );
    };
  }, []);

  /* =======================================================
     NAVEGACIÓN
  ======================================================= */

  const go = (id) => {
    if (window.location.hash) {
      window.location.hash = "";
    }

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);

    setMenuOpen(false);
  };

  const openDemo = (system) => {
    const slug = system.name
      .toLowerCase()
      .replace(/\s+/g, "");

    window.location.hash = `/sistemas/${slug}`;

    setMenuOpen(false);
  };

  const closeDemo = () => {
    window.location.hash = "";

    setCurrentDemo(null);

    setTimeout(() => {
      document
        .getElementById("desarrollos")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  };

  /* =======================================================
     SI ESTAMOS EN UNA DEMOSTRACIÓN
  ======================================================= */

  if (currentDemo) {
    return (
      <>
        {/* HEADER */}

        <header className="header">
          <div className="container nav">
            <button
              className="brand"
              onClick={closeDemo}
            >
              <img
                className="brandLogo"
                src={`${base}images/logo.png`}
                alt="GRUMEP"
              />

              <span>
                <strong>GRUMEP</strong>

                <small>
                  Consultora de Desarrollo de Software
                </small>
              </span>
            </button>

            <button
              className="navCta"
              onClick={() => {
                window.location.href = whatsapp;
              }}
            >
              Contactar
            </button>
          </div>
        </header>

        <main className="demoPage">
          <div className="container">

            {/* VOLVER */}

            <button
              className="backButton"
              onClick={closeDemo}
            >
              <ArrowLeft />
              Volver a desarrollos
            </button>

            {/* CABECERA */}

            <div className="demoHeader">
              <div>
                <label>
                  DEMOSTRACIÓN DEL SISTEMA
                </label>

                <h1>
                  {currentDemo.name}
                </h1>

                <p>
                  {currentDemo.description}
                </p>
              </div>
            </div>

            {/* VIDEO */}

            <section className="demoVideo">
              <div className="videoHeader">
                <Play />

                <span>
                  Demostración de {currentDemo.name}
                </span>
              </div>

              <video
                controls
                playsInline
                preload="metadata"
                poster={`${base}images/${currentDemo.image}`}
              >
                <source
                  src={`${base}videos/${currentDemo.video}`}
                  type="video/mp4"
                />

                Tu navegador no puede reproducir este
                video.
              </video>
            </section>

            {/* INFORMACIÓN */}

            <section className="demoInfo">
              <div className="demoDescription">
                <label>
                  SOBRE EL SISTEMA
                </label>

                <h2>
                  Una solución pensada para tu negocio.
                </h2>

                <p>
                  {currentDemo.description}
                </p>

                <p>
                  GRUMEP desarrolla soluciones de software
                  adaptadas a las necesidades reales de
                  cada negocio y profesional.
                </p>
              </div>

              <div className="demoFeatures">
                <label>
                  FUNCIONALIDADES
                </label>

                <h3>
                  Principales características
                </h3>

                <div className="featureList">
                  {currentDemo.features.map(
                    (feature) => (
                      <span key={feature}>
                        <CheckCircle2 />
                        {feature}
                      </span>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* =================================================
                PLANES DE TIENDAAPP
            ================================================= */}

            {currentDemo.name === "TiendaApp" &&
              currentDemo.pricing && (
                <section className="pricingSection">

                  <div className="pricingHeader">

                    <label>
                      LICENCIAS TIENDAAPP
                    </label>

                    <h2>
                      Elegí la licencia que mejor se
                      adapte a tu comercio.
                    </h2>

                    <p>
                      Probá TiendaApp durante el período
                      de demostración. Una vez finalizado
                      el demo, el sistema solicitará la
                      activación de una licencia para
                      continuar utilizándolo.
                    </p>

                  </div>

                  {/* AVISO DEMO */}

                  <div className="demoNotice">

                    <Clock />

                    <div>
                      <strong>
                        ¿Cómo funciona el demo?
                      </strong>

                      <span>
                        Probás TiendaApp → finaliza el
                        demo → el sistema solicita
                        activación → elegís tu licencia.
                      </span>
                    </div>

                  </div>

                  {/* PLANES */}

                  <div className="pricingGrid">

                    {currentDemo.pricing.plans.map(
                      (plan) => (
                        <article
                          className={`pricingCard ${
                            plan.featured
                              ? "featured"
                              : ""
                          }`}
                          key={plan.name}
                        >

                          {plan.featured && (
                            <span className="pricingBadge">
                              RECOMENDADO
                            </span>
                          )}

                          <h3>
                            {plan.name}
                          </h3>

                          <div className="pricingPrice">
                            {plan.price}
                          </div>

                          <span className="pricingPeriod">
                            {plan.period}
                          </span>

                          <p>
                            {plan.description}
                          </p>

                          <div className="pricingFeatures">

                            {plan.features.map(
                              (feature) => (
                                <span key={feature}>
                                  <CheckCircle2 />
                                  {feature}
                                </span>
                              )
                            )}

                          </div>

                          <a
                            className="primary pricingButton"
                            href={`https://wa.me/543804881636?text=Hola%20GRUMEP,%20quiero%20consultar%20por%20la%20licencia%20${encodeURIComponent(
                              plan.name
                            )}%20de%20TiendaApp`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <MessageCircle />

                            Consultar licencia
                          </a>

                        </article>
                      )
                    )}

                  </div>

                  <div className="pricingFooter">
                    <CheckCircle2 />

                    <span>
                      Todas las licencias requieren
                      activación para continuar
                      utilizando TiendaApp después
                      del período de demostración.
                    </span>
                  </div>

                </section>
              )}

            {/* IMAGEN */}

            <section className="demoScreenshot">

              <label>
                VISTA DEL SISTEMA
              </label>

              <h2>
                Conocé {currentDemo.name}
              </h2>

              <img
                src={`${base}images/${currentDemo.image}`}
                alt={currentDemo.name}
              />

            </section>

            {/* CONTACTO */}

            <section className="demoContact">

              <div>

                <label>
                  {currentDemo.name === "TiendaApp"
                    ? "¿QUERÉS CONTINUAR UTILIZANDO TIENDAAPP?"
                    : "¿TE INTERESA ESTE SISTEMA?"}
                </label>

                <h2>
                  {currentDemo.name === "TiendaApp"
                    ? "Elegí tu licencia."
                    : "Solicitá una demostración."}
                </h2>

                <p>
                  {currentDemo.name === "TiendaApp"
                    ? "Una vez finalizado el período de demostración, podés activar TiendaApp eligiendo la licencia que mejor se adapte a tu comercio."
                    : `Contactanos por WhatsApp y conocé cómo podemos adaptar ${currentDemo.name} a tu negocio.`}
                </p>

              </div>

              <a
                className="primary"
                href={
                  currentDemo.name === "TiendaApp"
                    ? "https://wa.me/543804881636?text=Hola%20GRUMEP,%20quiero%20consultar%20por%20una%20licencia%20de%20TiendaApp"
                    : whatsapp
                }
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />

                {currentDemo.name === "TiendaApp"
                  ? "Consultar licencias"
                  : "Solicitar demostración"}
              </a>

            </section>

          </div>
        </main>

        {/* FOOTER */}

        <footer>

          <div className="container footer">

            <div>

              <div className="fbrand">

                <img
                  src={`${base}images/logo.png`}
                  alt="GRUMEP"
                />

                <strong>
                  GRUMEP
                </strong>

              </div>

              <p>
                Consultora de Desarrollo de Software.
              </p>

            </div>

            <div>

              <h4>
                Contacto
              </h4>

              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 380 488-1636
              </a>

              <span>
                La Rioja, Argentina
              </span>

            </div>

          </div>

          <div className="copy">
            © 2026 GRUMEP. Todos los derechos
            reservados.
          </div>

        </footer>
      </>
    );
  }

  /* =======================================================
     PÁGINA PRINCIPAL
  ======================================================= */

  const list =
    category === "Todos"
      ? systems
      : systems.filter(
          (system) =>
            system.category === category
        );

  return (
    <>
      {/* HEADER */}

      <header className="header">

        <div className="container nav">

          <button
            className="brand"
            onClick={() => go("inicio")}
          >

            <img
              className="brandLogo"
              src={`${base}images/logo.png`}
              alt="GRUMEP"
            />

            <span>

              <strong>
                GRUMEP
              </strong>

              <small>
                Consultora de Desarrollo de Software
              </small>

            </span>

          </button>

          <nav
            className={
              menuOpen ? "open" : ""
            }
          >

            <button
              onClick={() => go("inicio")}
            >
              Inicio
            </button>

            <button
              onClick={() => go("desarrollos")}
            >
              Desarrollos
            </button>

            <button
              onClick={() => go("servicios")}
            >
              Servicios
            </button>

            <button
              onClick={() => go("nosotros")}
            >
              Nosotros
            </button>

            <button
              className="navCta"
              onClick={() => go("contacto")}
            >
              Contacto
            </button>

          </nav>

          <button
            className="menuButton"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>

        </div>

      </header>

      {/* HERO */}

      <section
        id="inicio"
        className="hero"
      >

        <div className="container heroGrid">

          <div className="heroContent">

            <label>
              SOFTWARE QUE SE ADAPTA A TU NEGOCIO
            </label>

            <h1>
              Soluciones digitales para{" "}
              <em>
                hacer crecer
              </em>{" "}
              tu negocio.
            </h1>

            <p>
              Desarrollamos sistemas de gestión modernos,
              prácticos y adaptados a las necesidades
              reales de comercios, profesionales y
              empresas.
            </p>

            <div className="actions">

              <button
                className="primary"
                onClick={() =>
                  go("desarrollos")
                }
              >
                Ver nuestros desarrollos

                <ArrowRight />
              </button>

              <a
                className="secondary"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />

                Solicitar demostración
              </a>

            </div>

            <div className="trust">

              <span>
                <CheckCircle2 />
                Desarrollo personalizado
              </span>

              <span>
                <CheckCircle2 />
                Soporte
              </span>

              <span>
                <CheckCircle2 />
                Soluciones escalables
              </span>

            </div>

          </div>

          {/* MOCKUP */}

          <div className="mock">

            <div className="mockTop">
              GRUMEP / SOFTWARE
            </div>

            <main>

              <aside>

                <div className="mockLogo">

                  <img
                    src={`${base}images/logo.png`}
                    alt="GRUMEP"
                  />

                </div>

                <button>
                  <Home />
                </button>

                <button>
                  <BarChart3 />
                </button>

                <button>
                  <Users />
                </button>

                <button>
                  <Settings />
                </button>

              </aside>

              <article>

                <small>
                  PANEL DE GESTIÓN
                </small>

                <h3>
                  Tu negocio, bajo control.
                </h3>

                <section className="mockStats">

                  <span>
                    Ventas

                    <strong>
                      $ 1.250.000
                    </strong>
                  </span>

                  <span>
                    Productos

                    <strong>
                      1.284
                    </strong>
                  </span>

                  <span>
                    Clientes

                    <strong>
                      428
                    </strong>
                  </span>

                </section>

                <div className="chart">

                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>

                </div>

              </article>

            </main>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="container statsGrid">

          <span>
            <b>
              6+
            </b>

            Desarrollos presentados
          </span>

          <span>
            <b>
              100%
            </b>

            Adaptables
          </span>

          <span>
            <b>
              4
            </b>

            Rubros
          </span>

          <span>
            <b>
              1
            </b>

            Objetivo: hacer crecer tu negocio
          </span>

        </div>

      </section>

      {/* DESARROLLOS */}

      <section
        id="desarrollos"
        className="section"
      >

        <div className="container">

          <div className="heading">

            <div>

              <label>
                PORTAFOLIO
              </label>

              <h2>
                Nuestros{" "}
                <em>
                  desarrollos
                </em>
              </h2>

            </div>

            <p>
              Conocé los sistemas que estamos
              desarrollando para distintos tipos
              de negocios y profesionales.
            </p>

          </div>

          {/* FILTROS */}

          <div className="filters">

            {categories.map(
              (cat) => (
                <button
                  key={cat}
                  className={
                    category === cat
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setCategory(cat)
                  }
                >
                  {cat}
                </button>
              )
            )}

          </div>

          {/* CARDS */}

          <div className="grid">

            {list.map(
              (system) => (
                <article
                  className="card"
                  key={system.name}
                >

                  {/* IMAGEN CLICKEABLE */}

                  <div
                    className="image demoClickable"
                    onClick={() =>
                      openDemo(system)
                    }
                  >

                    <img
                      src={`${base}images/${system.image}`}
                      alt={system.name}
                    />

                    <span>
                      {system.category}
                    </span>

                    <div className="imageOverlay">

                      <Play />

                      Ver demostración

                    </div>

                  </div>

                  <div className="body">

                    <h3>
                      {system.name}
                    </h3>

                    <p>
                      {system.description}
                    </p>

                    <div className="features">

                      {system.features.map(
                        (feature) => (
                          <small
                            key={feature}
                          >
                            {feature}
                          </small>
                        )
                      )}

                    </div>

                    <button
                      onClick={() =>
                        openDemo(system)
                      }
                    >
                      Ver demostración

                      <ArrowRight />

                    </button>

                  </div>

                </article>
              )
            )}

          </div>

          <div className="portfolioNote">

            <CheckCircle2 />

            Sistemas desarrollados y
            adaptables a cada negocio.

          </div>

        </div>

      </section>

      {/* SERVICIOS */}

      <section
        id="servicios"
        className="section dark"
      >

        <div className="container">

          <div className="heading light">

            <div>

              <label>
                SERVICIOS
              </label>

              <h2>
                Software para cada{" "}
                <em>
                  necesidad
                </em>
              </h2>

            </div>

            <p>
              No necesitás adaptar tu negocio a
              un sistema. Adaptamos el sistema a
              tu negocio.
            </p>

          </div>

          <div className="services">

            {[
              [
                MonitorCog,
                "Gestión de stock y ventas",
                "Controlá productos, ventas, clientes y stock desde un solo lugar.",
              ],

              [
                Code2,
                "Desarrollo a medida",
                "Software creado según los procesos reales de tu empresa.",
              ],

              [
                Database,
                "Turnos y fichas",
                "Organización de pacientes, profesionales, consultas e información.",
              ],

              [
                ShieldCheck,
                "Soporte y evolución",
                "Mantenimiento, mejoras y nuevas funcionalidades para tu sistema.",
              ],

            ].map(
              ([
                Icon,
                title,
                description,
              ]) => (
                <div
                  className="service"
                  key={title}
                >

                  <Icon />

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* NOSOTROS */}

      <section
        id="nosotros"
        className="section about"
      >

        <div className="container aboutGrid">

          <div className="aboutLogo">

            <img
              src={`${base}images/logo.png`}
              alt="GRUMEP"
            />

            <strong>
              GRUMEP
            </strong>

            <span>
              Consultora de Desarrollo de Software
            </span>

          </div>

          <div>

            <label>
              SOBRE GRUMEP
            </label>

            <h2>
              Transformamos ideas en{" "}
              <em>
                software.
              </em>
            </h2>

            <p>
              GRUMEP es una consultora enfocada
              en el desarrollo de soluciones de
              software para negocios y
              profesionales.
            </p>

            <p>
              Buscamos crear herramientas simples
              de usar, útiles para el día a día y
              preparadas para acompañar el
              crecimiento de cada cliente.
            </p>

            <div className="points">

              <span>
                <CheckCircle2 />
                Tecnología aplicada a problemas reales
              </span>

              <span>
                <CheckCircle2 />
                Sistemas fáciles de usar
              </span>

              <span>
                <CheckCircle2 />
                Desarrollo pensado para crecer
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className="contact"
      >

        <div className="container contactBox">

          <div>

            <label>
              ¿TENÉS UN PROYECTO?
            </label>

            <h2>
              Hablemos sobre{" "}
              <em>
                tu idea.
              </em>
            </h2>

            <p>
              Contanos qué necesitás y evaluamos
              juntos la mejor solución para tu
              negocio.
            </p>

          </div>

          <a
            className="primary"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />

            Contactar por WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="container footer">

          <div>

            <div className="fbrand">

              <img
                src={`${base}images/logo.png`}
                alt="GRUMEP"
              />

              <strong>
                GRUMEP
              </strong>

            </div>

            <p>
              Consultora de Desarrollo de Software.
            </p>

          </div>

          <div>

            <h4>
              Navegación
            </h4>

            <button
              onClick={() =>
                go("desarrollos")
              }
            >
              Desarrollos
            </button>

            <button
              onClick={() =>
                go("servicios")
              }
            >
              Servicios
            </button>

            <button
              onClick={() =>
                go("contacto")
              }
            >
              Contacto
            </button>

          </div>

          <div className="footerContact">

            <h4>
              Contacto
            </h4>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 380 488-1636
            </a>

            <span>
              La Rioja, Argentina
            </span>

          </div>

        </div>

        <div className="copy">
          © 2026 GRUMEP. Todos los derechos
          reservados.
        </div>

      </footer>
    </>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);