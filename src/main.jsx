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
  Settings,
  ShieldCheck,
  Users,
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
];

const categories = [
  "Todos",
  "Comercios",
  "Salud",
  "Veterinarias",
  "Servicios",
];

const services = [
  {
    icon: MonitorCog,
    title: "Gestión de ventas y stock",
    description:
      "Sistemas para controlar productos, ventas, compras, stock y reportes de tu negocio.",
  },
  {
    icon: Users,
    title: "Turnos y pacientes",
    description:
      "Soluciones para consultorios, profesionales y centros de atención.",
  },
  {
    icon: Code2,
    title: "Desarrollo a medida",
    description:
      "Software creado según los procesos y necesidades reales de cada empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte y evolución",
    description:
      "Mantenimiento, mejoras y nuevas funcionalidades para acompañar el crecimiento.",
  },
];

function App() {
  const [category, setCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);

  const baseUrl = import.meta.env.BASE_URL;

  const whatsappDemo =
    "https://wa.me/5493804881636?text=Hola%20GRUMEP,%20quiero%20solicitar%20una%20demostración%20de%20uno%20de%20sus%20sistemas.";

  const whatsappContact =
    "https://wa.me/5493804881636?text=Hola%20GRUMEP,%20quiero%20consultar%20sobre%20desarrollo%20de%20software.";

  const facebookUrl = "https://www.facebook.com/GRUMEPconsultoras";

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
      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => goTo("inicio")}>
            <img
              src={`${baseUrl}images/logo.png`}
              alt="GRUMEP"
              className="brandLogo"
            />

            <span>
              <strong>GRUMEP</strong>
              <small>Consultora de Desarrollo de Software</small>
            </span>
          </button>

          <nav className={menuOpen ? "open" : ""}>
            <button onClick={() => goTo("inicio")}>Inicio</button>
            <button onClick={() => goTo("desarrollos")}>
              Desarrollos
            </button>
            <button onClick={() => goTo("servicios")}>Servicios</button>
            <button onClick={() => goTo("nosotros")}>Nosotros</button>

            <button
              className="navCta"
              onClick={() => goTo("contacto")}
            >
              Contacto
            </button>
          </nav>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section id="inicio" className="hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <label>SOFTWARE QUE SE ADAPTA A TU NEGOCIO</label>

            <h1>
              Soluciones digitales para{" "}
              <em>hacer crecer</em> tu negocio.
            </h1>

            <p>
              Desarrollamos sistemas de gestión modernos, prácticos y
              adaptados a las necesidades reales de comercios,
              profesionales y empresas.
            </p>

            <div className="actions">
              <button
                className="primary"
                onClick={() => goTo("desarrollos")}
              >
                Ver nuestros desarrollos
                <ArrowRight size={19} />
              </button>

              <a
                className="secondary"
                href={whatsappDemo}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={19} />
                Solicitar una demostración
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
            <div className="mockTop">GRUMEP / SOFTWARE</div>

            <main>
              <aside>
                <div className="mockLogo">
                  <img
                    src={`${baseUrl}images/logo.png`}
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
                <small>PANEL DE GESTIÓN</small>

                <h3>Tu negocio, bajo control.</h3>

                <section className="mockStats">
                  <span>
                    Ventas
                    <strong>$ 1.250.000</strong>
                  </span>

                  <span>
                    Productos
                    <strong>1.284</strong>
                  </span>

                  <span>
                    Clientes
                    <strong>428</strong>
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

      {/* ================= STATS ================= */}

      <section className="stats">
        <div className="container statsGrid">
          <span>
            <b>4+</b>
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

      {/* ================= DESARROLLOS ================= */}

      <section id="desarrollos" className="section">
        <div className="container">
          <div className="heading">
            <div>
              <label>PORTAFOLIO</label>

              <h2>
                Nuestros <em>desarrollos</em>
              </h2>
            </div>

            <p>
              Conocé los sistemas que estamos desarrollando para
              distintos tipos de negocios y profesionales.
            </p>
          </div>

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid">
            {filteredSystems.map((system) => (
              <article className="card" key={system[0]}>
                <div className="image">
                  <img
                    src={`${baseUrl}images/${system[2]}`}
                    alt={system[0]}
                  />

                  <span>{system[1]}</span>
                </div>

                <div className="body">
                  <h3>{system[0]}</h3>

                  <p>{system[3]}</p>

                  <div className="features">
                    {system[4].map((feature) => (
                      <small key={feature}>{feature}</small>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedSystem(system)}
                  >
                    Ver detalles
                    <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolioNote">
            <Database />
            <p>
              Estamos incorporando nuevos desarrollos al
              portafolio de GRUMEP.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}

      <section id="servicios" className="section dark">
        <div className="container">
          <div className="heading light">
            <div>
              <label>SERVICIOS</label>

              <h2>
                Software para cada <em>necesidad</em>
              </h2>
            </div>

            <p>
              No necesitás adaptar tu negocio a un sistema.
              Adaptamos el sistema a tu negocio.
            </p>
          </div>

          <div className="services">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="service" key={service.title}>
                  <Icon />

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= NOSOTROS ================= */}

      <section id="nosotros" className="section about">
        <div className="container aboutGrid">
          <div className="aboutLogo">
            <img
              src={`${baseUrl}images/logo.png`}
              alt="GRUMEP Consultora"
            />

            <strong>GRUMEP</strong>

            <span>Consultora de Desarrollo de Software</span>
          </div>

          <div>
            <label>SOBRE GRUMEP</label>

            <h2>
              Transformamos ideas en <em>software.</em>
            </h2>

            <p>
              GRUMEP es una consultora enfocada en el desarrollo de
              soluciones de software para negocios y profesionales.
            </p>

            <p>
              Buscamos crear herramientas simples de usar, útiles
              para el día a día y preparadas para acompañar el
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

      {/* ================= CONTACTO ================= */}

      <section id="contacto" className="contact">
        <div className="container contactBox">
          <div>
            <label>¿TENÉS UN PROYECTO?</label>

            <h2>
              Hablemos sobre <em>tu idea.</em>
            </h2>

            <p>
              Contanos qué necesitás y evaluamos juntos la mejor
              solución para tu negocio.
            </p>
          </div>

          <a
            className="primary"
            href={whatsappContact}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="container footer">
          <div className="footerBrand">
            <div className="fbrand">
              <img
                src={`${baseUrl}images/logo.png`}
                alt="GRUMEP"
              />

              <strong>GRUMEP</strong>
            </div>

            <p>Consultora de Desarrollo de Software.</p>
          </div>

          <div>
            <h4>Navegación</h4>

            <button onClick={() => goTo("inicio")}>Inicio</button>

            <button onClick={() => goTo("desarrollos")}>
              Desarrollos
            </button>

            <button onClick={() => goTo("servicios")}>
              Servicios
            </button>

            <button onClick={() => goTo("nosotros")}>
              Nosotros
            </button>

            <button onClick={() => goTo("contacto")}>
              Contacto
            </button>
          </div>

          <div>
            <h4>Contacto</h4>

            <a
              href={whatsappContact}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <span>La Rioja, Argentina</span>
          </div>
        </div>

        <div className="copy">
          © 2026 GRUMEP. Todos los derechos reservados.
        </div>
      </footer>

      {/* ================= MODAL ================= */}

      {selectedSystem && (
        <div
          className="modalBg"
          onClick={() => setSelectedSystem(null)}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelectedSystem(null)}
            >
              <X />
            </button>

            <img
              src={`${baseUrl}images/${selectedSystem[2]}`}
              alt={selectedSystem[0]}
            />

            <label>{selectedSystem[1]}</label>

            <h2>{selectedSystem[0]}</h2>

            <p>{selectedSystem[3]}</p>

            <h4>Funcionalidades</h4>

            <div className="modalFeatures">
              {selectedSystem[4].map((feature) => (
                <span key={feature}>
                  <CheckCircle2 />
                  {feature}
                </span>
              ))}
            </div>

            <a
              className="primary"
              href={whatsappDemo}
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

createRoot(document.getElementById("root")).render(<App />);