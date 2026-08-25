import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Home,
  Menu,
  MessageCircle,
  MonitorCog,
  Package,
  Settings,
  ShieldCheck,
  UserRound,
  Users,
  Wrench,
  X,
} from "lucide-react";

import "./style.css";

const systems = [
  [
    "TiendaApp",
    "Comercios",
    "tiendaapp.png",
    "Sistema de gestión para comercios, ventas, productos y control de stock.",
    ["Ventas", "Stock", "Productos", "Reportes"],
  ],
  [
    "GrumPet",
    "Veterinarias",
    "grumpet.png",
    "Sistema de gestión para pet shops y negocios dedicados a productos para mascotas.",
    ["Productos", "Ventas", "Stock", "Clientes"],
  ],
  [
    "GrumDent",
    "Salud",
    "grumdent.png",
    "Sistema de gestión para consultorios y profesionales de odontología.",
    ["Pacientes", "Consultas", "Historia clínica", "Gestión"],
  ],
  [
    "Talvena",
    "Salud",
    "talvena.png",
    "Sistema de gestión clínica para organizar pacientes, médicos y consultas.",
    ["Pacientes", "Médicos", "Signos", "Historia médica"],
  ],
  [
    "TallerPro",
    "Servicios",
    "tallerpro.png",
    "Sistema de gestión para talleres mecánicos y seguimiento de reparaciones.",
    ["Clientes", "Vehículos", "Órdenes", "Historial"],
  ],
  [
    "VerdaMax",
    "Comercios",
    "verdadmax.png",
    "Solución orientada a la gestión de comercios de frutas y verduras.",
    ["Productos", "Ventas", "Stock", "Gestión"],
  ],
];

const cats = [
  "Todos",
  "Comercios",
  "Salud",
  "Veterinarias",
  "Servicios",
];

const services = [
  {
    icon: Package,
    title: "Gestión de stock y ventas",
    description:
      "Controlá productos, ventas, stock, clientes y movimientos de tu negocio desde un solo lugar.",
  },
  {
    icon: Users,
    title: "Turnos y pacientes",
    description:
      "Organizá turnos, pacientes, consultas e historias clínicas para consultorios y profesionales.",
  },
  {
    icon: Code2,
    title: "Software a medida",
    description:
      "Desarrollamos sistemas adaptados a los procesos reales de tu comercio, empresa o profesión.",
  },
  {
    icon: Database,
    title: "Datos organizados",
    description:
      "Centralizá la información de tu negocio y accedé a ella de manera rápida y segura.",
  },
];

function App() {
  const [category, setCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;

  const whatsapp =
    "https://wa.me/3804881636?text=Hola%20GRUMEP,%20quiero%20consultar%20por%20un%20sistema";

  const imagePath = (filename) => `${baseUrl}images/${filename}`;

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const filteredSystems =
    category === "Todos"
      ? systems
      : systems.filter((system) => system[1] === category);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="container nav">

          <button
            className="brand"
            onClick={() => goTo("inicio")}
          >
            <b>G</b>

            <span>
              <strong>GRUMEP</strong>
              <small>
                Consultora de Desarrollo de Software
              </small>
            </span>
          </button>

          <nav className={menuOpen ? "open" : ""}>
            <button onClick={() => goTo("inicio")}>
              Inicio
            </button>

            <button onClick={() => goTo("desarrollos")}>
              Desarrollos
            </button>

            <button onClick={() => goTo("servicios")}>
              Servicios
            </button>

            <button onClick={() => goTo("nosotros")}>
              Nosotros
            </button>

            <button
              className="cta"
              onClick={() => goTo("contacto")}
            >
              Contacto
            </button>
          </nav>

          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container heroGrid">

          <div className="heroText">

            <label>
              SOFTWARE QUE SE ADAPTA A TU NEGOCIO
            </label>

            <h1>
              Soluciones digitales para{" "}
              <em>hacer crecer</em> tu negocio.
            </h1>

            <p>
              Desarrollamos sistemas de gestión modernos,
              prácticos y adaptados a las necesidades reales
              de comercios, profesionales y empresas.
            </p>

            <div className="actions">

              <button
                className="primary"
                onClick={() => goTo("desarrollos")}
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

            <div className="mockTitle">
              GRUMEP / SOFTWARE
            </div>

            <main>

              <aside>

                <b>G</b>

                <Home />
                <BarChart3 />
                <Users />
                <Settings />

              </aside>

              <article>

                <small>
                  PANEL DE GESTIÓN
                </small>

                <h3>
                  Tu negocio, bajo control.
                </h3>

                <section>

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
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

              </article>

            </main>

          </div>

        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="stats">

        <div className="container">

          <span>
            <b>6+</b>
            Desarrollos presentados
          </span>

          <span>
            <b>100%</b>
            Adaptables
          </span>

          <span>
            <b>4</b>
            Rubros
          </span>

          <span>
            <b>1</b>
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
                Nuestros <em>desarrollos</em>
              </h2>

            </div>

            <p>
              Conocé los sistemas que estamos desarrollando
              para distintos tipos de negocios y profesionales.
            </p>

          </div>

          <div className="filters">

            {cats.map((item) => (

              <button
                key={item}
                className={
                  category === item
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>

            ))}

          </div>

          <div className="grid">

            {filteredSystems.map((system) => (

              <article
                className="card"
                key={system[0]}
              >

                <div className="image">

                  <img
                    src={imagePath(system[2])}
                    alt={system[0]}
                  />

                  <span>
                    {system[1]}
                  </span>

                </div>

                <div className="body">

                  <h3>
                    {system[0]}
                  </h3>

                  <p>
                    {system[3]}
                  </p>

                  <div className="features">

                    {system[4].map((feature) => (

                      <small key={feature}>
                        {feature}
                      </small>

                    ))}

                  </div>

                  <button
                    onClick={() =>
                      setSelectedSystem(system)
                    }
                  >
                    Ver detalles
                    <ArrowRight />
                  </button>

                </div>

              </article>

            ))}

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
                <em>necesidad</em>
              </h2>

            </div>

            <p>
              No necesitás adaptar tu negocio a un sistema.
              Adaptamos el sistema a tu negocio.
            </p>

          </div>

          <div className="services">

            {services.map(
              ({ icon: Icon, title, description }) => (

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

            <div className="aboutLogoInner">
              G
            </div>

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
              <em>software.</em>
            </h2>

            <p>
              GRUMEP es una consultora enfocada en el
              desarrollo de soluciones de software para
              negocios y profesionales.
            </p>

            <p>
              Buscamos crear herramientas simples de usar,
              útiles para el día a día y preparadas para
              acompañar el crecimiento de cada cliente.
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
              <em>tu idea.</em>
            </h2>

            <p>
              Contanos qué necesitás y evaluamos juntos
              la mejor solución para tu negocio.
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
              <b>G</b>
              <strong>GRUMEP</strong>
            </div>

            <p>
              Consultora de Desarrollo de Software.
            </p>

            <span>
              La Rioja, Argentina
            </span>

          </div>

          <div>

            <h4>
              Navegación
            </h4>

            <button
              onClick={() =>
                goTo("desarrollos")
              }
            >
              Desarrollos
            </button>

            <button
              onClick={() =>
                goTo("servicios")
              }
            >
              Servicios
            </button>

            <button
              onClick={() =>
                goTo("nosotros")
              }
            >
              Nosotros
            </button>

            <button
              onClick={() =>
                goTo("contacto")
              }
            >
              Contacto
            </button>

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
              <MessageCircle />
              WhatsApp
            </a>

            <span>
              380-4881636
            </span>

            <span>
              La Rioja, Argentina
            </span>

          </div>

        </div>

        <div className="copy">
          © 2026 GRUMEP. Todos los derechos reservados.
        </div>

      </footer>

      {/* MODAL */}
      {selectedSystem && (

        <div
          className="modalBg"
          onClick={() =>
            setSelectedSystem(null)
          }
        >

          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close"
              onClick={() =>
                setSelectedSystem(null)
              }
            >
              <X />
            </button>

            <img
              src={imagePath(selectedSystem[2])}
              alt={selectedSystem[0]}
            />

            <label>
              {selectedSystem[1]}
            </label>

            <h2>
              {selectedSystem[0]}
            </h2>

            <p>
              {selectedSystem[3]}
            </p>

            <h4>
              Funcionalidades
            </h4>

            <div className="modalFeatures">

              {selectedSystem[4].map(
                (feature) => (

                  <span key={feature}>
                    <CheckCircle2 />
                    {feature}
                  </span>

                )
              )}

            </div>

            <a
              className="primary"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
              Solicitar demostración
            </a>

          </div>

        </div>

      )}

    </>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);