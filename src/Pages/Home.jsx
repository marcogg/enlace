import { useEffect } from 'react'
import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles.scss'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import * as Icon from 'react-bootstrap-icons';
import Nav from '../components/Nav/Nav'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion'
import Footer from '../components/Footer/Footer'

const Home = () => {
  useEffect(() => {
    // For Swiper
    register();
  }, [])

  return (
    <>
      {/* NAV */}
      <Nav />

      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h3 data-aos="fade-up" data-aos-delay={200} className='text-orange'>Solo 3 de cada 10 mexicanos ahorran</h3>
              <h1 data-aos="fade-up">Vive tranquilo con protecciones a tu medida</h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>Aseguramos tu vida, tu salud y tu patrimonio</h2>
              <div className='mt-5' data-aos-delay={600}>
                <p>Con el respaldo de </p>
                <img src='../logo-gnp.svg' width={120} />
              </div>
              <div data-aos="fade-up" data-aos-delay={800}>
                <div className="text-center text-lg-start">
                  <Link to={'/#planes'} className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Conoce los planes</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
              <img src="../img/planes-seguro-familia.svg" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </section>{/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                <div className="content">
                  <h3>Acerca de nosotros</h3>
                  <h2>Buscamos trascendencia hacia el futuro mediante conexiones que generan  enlaces sólidos</h2>
                  <p>
                    Somos un grupo de asesores que promueven la estabilidad financiera ante cualquier situación para garantizar la trascendencia económica, patrimonial y personal hacia el futuro.
                    <br />
                    Buscamos generar conciencia mediante conesxiones financieras para nuestras sociedades, que buscan construir futuros llenos de protección y solidez económica.
                  </p>
                  <div className="text-center text-lg-start">
                    <Link to={'/#planes'} className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Conoce nuestras soluciones</span>
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                <img src="../img/about.jpg" className="img-fluid" alt />
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
        {/* ======= Values Section ======= */}
        <section id="values" className="values">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Cómo podemos ayudarte</h2>
              <p>Conoce los 4 tipos de planes</p>
            </header>
            <div className="row">
              <div className="col-lg-3" data-aos="fade-up" data-aos-delay={200}>
                <div className="box">
                  <img src="../img/planes-de-retiro.svg" className="img-fluid" alt />
                  <h3>Planes para el retiro con seguro de vida</h3>
                  <p>Asegura a tu familia en caso de que faltes, tengas una invalidez mientras te preparas para una jubilación plena.</p>
                </div>
              </div>
              <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
                <div className="box">
                  <img src="../img/planes-de-ahorro.svg" className="img-fluid" alt />
                  <h3>Planes de inversión segura para el ahorro</h3>
                  <p>Planes para el retiro, seguros de vida, plan educativo para tus hijos, y de ahorro</p>
                </div>
              </div>
              <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={600}>
                <div className="box">
                  <img src="../img/planes-proteccion-patrimonio.svg" className="img-fluid" alt />
                  <h3>Planes de protección de patrimonio</h3>
                  <p>Seguros para el hogar y de auto</p>
                </div>
              </div>
              <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={600}>
                <div className="box">
                  <img src="../img/seguro-gastos-medicos-mayores.svg" className="img-fluid" alt />
                  <h3>Planes de protección para la salud</h3>
                  <p>Seguro de Gastos Médicos Mayores para ti y tu familia</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Values Section */}
        {/* ======= Counts Section ======= */}
        {/* ======= Features Section ======= */}
        <section id="planes" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Elige la protección que necesites y arma el plan a tu medida</h2>
              <p>Brinda respaldo económico y tranquilidad a ti y tus seres queridos desde $20 al día*</p>
            </header>
            <div className="row">
              <div className="col-lg-6">
                <img src="../img/servicios.svg" className="img-fluid" alt />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={200}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Planes de retiro con seguro de vida e invalidez</h3>
                      <Link to={'/ahorro-para-retiro'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={300}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Planes de ahorro con rendimientos</h3>
                      <Link to={'/plan-de-inversion-para-ahorro'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={400}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Plan educativo para la universidad de tus hijos</h3>
                      <Link to={'/plan-de-ahorro-para-educacion'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={500}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Seguro de Gastos Médicos Mayores</h3>
                      <Link to={'/segurp-gastos-medicos-mayores'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={600}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Seguro de Auto</h3>
                      <Link to={'/seguro-para-auto'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay={700}>
                    <div className="feature-box d-flex flex-wrap align-items-center">
                      <h3>Seguro de Hogar</h3>
                      <Link to={'/segurp-para-hogar'} className='link-main flex-100 mt-4'>Conócelo</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* / row */}
          </div>
        </section>{/* End Features Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Lo que podemos lograr juntos</h2>
              <p>Conoce los beneficios de estar protegidos</p>
            </header>
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="service-box blue">
                  <i className="ri-discuss-line icon" />
                  <i className="bi bi-shield-fill-check" />
                  <h3>Protege a tu familia si faltas</h3>
                  <p>Con un seguro de vida que sea el complemento de tu AFORE. Si llegas a faltar o a tu condición física cambia y ya no puedes desempeñar tu profesión, <b>te daremos a tí o tu familia una suma asegurada dos veces si es por invalidez, o tres si es por muerte.</b></p>
                  <Link to={'/ahorro-para-retiro'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="service-box orange">
                  <i className="ri-discuss-line icon" />
                  <h3>Duplicamos tu inversión el primer año</h3>
                  <p>Con un plan de ahorro Capitaliza inembargable y deducible de impuestos a 10, 15 o 20 años. GNP pone el doble de tu ahorro el primer año.</p>
                  <Link to={'/plan-de-inversion-para-ahorro'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                <div className="service-box green">
                  <i className="ri-discuss-line icon" />
                  <h3>Garantiza la educación de tus hij@s</h3>
                  <p>Invierte un ahorro que funcione como un seguro de vida conyugal para que llegado el momento, tus hijos tengan más opciones para su profesión</p>
                  <Link to={'/plan-de-ahorro-para-educacion'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="service-box red">
                  <i className="ri-discuss-line icon" />
                  <h3>Conduce con la tranquilidad de estar protegido</h3>
                  <p>No queremos que choques, pero si ocurre, estarás protegido en todo sentido. Desde robo o daño parcial de autopartes, hasta gastos médicos de los ocupantes.<b>Con 0% de deducible*</b><small>*Revisa planes</small></p>
                  <Link to={'/seguro-para-auto'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
                <div className="service-box purple">
                  <i className="ri-discuss-line icon" />
                  <h3>Cuida tu patrimonio más grande, tu hogar</h3>
                  <p>Planes desde $260 mensuales. Protege tu hogar contra incendios, desastres naturales y robos. <b>Y recibe asistencias sin costo adicional, hasta para tu peludo amigo</b> 🐈🐕</p>
                  <Link to={'/seguro-para-hogar'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={700}>
                <div className="service-box pink">
                  <i className="ri-discuss-line icon" />
                  <h3>Seguro de Gastos Médicos mayores a tu medida</h3>
                  <p>Escoge los hospitales, doctores y coberturas que se adpaten a tu presupuesto y disfruta de la vida sin preocupaciones.</p>
                  <Link to={'/seguro-gastos-medicos-mayores'} className="read-more"><span>Leer más</span> <i className="bi bi-arrow-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Services Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>F.A.Q</h2>
              <p>Preguntas frecuentes</p>
            </header>
            <div className="row">
              <div className="col-lg-6">
                {/* FAQ REACT BOOSTRAP */}
                <Accordion className="accordion accordion-flush" id="faqlist1">
                  <Accordion.Item eventKey="0" className='accordion-item'>
                    <Accordion.Header className='accordion-header'>Los planes de ahorro ¿son seguros?</Accordion.Header>
                    <Accordion.Body>
                      En Enlace somos especialistas en inversiones, respaldados por <Link onClick={e => { e.preventDefault(); window.location = 'https://www.gnp.com.mx/' }}>GNP</Link>, la principal compañía de seguros en México con la mayor participación de mercado del 14,2 % en 2022. Tu dinero e inversión están completamente seguros.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className='accordion-header'>¿De dónde vienen los rendimientos de los planes de ahorro?</Accordion.Header>
                    <Accordion.Body>
                      En Enlace y <Link onClick={e => { e.preventDefault(); window.location = 'https://www.gnp.com.mx/' }}>GNP</Link> invertimos tu dinero en un portafolio diversificado para lograr tus metas y garantizar tu trascendencia económica, patrimonial y personal. Invertimos en índices regulados gubernamentalmente,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className='accordion-header'>¿Puedo cancelar mi plan en cualquier momento?</Accordion.Header>
                    <Accordion.Body>
                      Sí, pero dependiendo del momento en el que decidas hacerlo, puede que no recibas todo el dinero que hayas invertido hasta ese momento. Revisa las cláusulas de tu contrato.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* END: FAQ REACT BOOSTRAP */}
                {/* F.A.Q List 1*/}
              </div>
              <div className="col-lg-6">
                {/* FAQ 2 REACT BOOSTRAP */}
                <Accordion className="accordion accordion-flush" id="faqlist1">
                  <Accordion.Item eventKey="0" className='accordion-item'>
                    <Accordion.Header className='accordion-header'>¿Mi mensualidad siempre será fija?</Accordion.Header>
                    <Accordion.Body>
                      Sí, en Enlace queremos que inviertas de manera sostenible a largo plazo, por lo que tu mensualidad solamente se ajustará por temas inflacionarios.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className='accordion-header'>Si ya tengo Afore ¿Por qué necesito un plan de inversión adicional?</Accordion.Header>
                    <Accordion.Body>
                      Si empezaste a trabajar después de 1997, tu AFORE no te pagará el 100% de tu último sueldo como sucedía antes. Por lo que si esperas mantener tu nivel de vida en tu jubilación es crucial que empieces a invertir desde ahora. Entre más tiempo falte para tu jubilación, menor es la cantidad que deberías de destinar al ahorro e inversión.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className='accordion-header'>¿Qué ventajas tengo al invertir con Enlace y GNP?</Accordion.Header>
                    <Accordion.Body>
                      A diferencia de invertir con aportaciones voluntarias de tu AFORE, en instituciones bancarias u otros vehículos, todos nuestros planes generan rendimiento por encima de la inflación, además estarás respaldo desde tu primer pago con la suma asegurada de tu plan, puedes hacer tu factura deducible de impuestos, este patrimonio es inembargable, por lo que estará protegido, genera interés compuesto y además cuentas con el respaldo de <Link onClick={e => { e.preventDefault(); window.location = 'https://www.gnp.com.mx/' }}>GNP</Link>.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* END: FAQ 2 REACT BOOSTRAP */}
              </div>
            </div>
          </div>
        </section>{/* End F.A.Q Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Algunos testimonios</h2>
              <p>Más de 30 años protegiendo la estabilidad económica y patrimonial de tu familia.</p>
            </header>
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={200}>
              <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
                <swiper-slide>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      Llevo 6 años capitalizando mi plan Proyecta con seguro de vida y me da una enorme paz saber que podré gozar de un retiro digno. Es un regalo de ti, para tu yo del futuro.
                    </p>
                    <div className="profile mt-auto">
                      <img src="../img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                      <h3>Marco García</h3>
                      <h4>Plan de retiro</h4>
                    </div>
                  </div>
                </swiper-slide>{/* End testimonial item */}
                <swiper-slide>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      Llevo 6 años capitalizando mi plan Proyecta con seguro de vida y me da una enorme paz saber que podré gozar de un retiro digno. Es un regalo de ti, para tu yo del futuro.
                    </p>
                    <div className="profile mt-auto">
                      <img src="../img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                      <h3>Iván García</h3>
                      <h4>Plan de Ahorro</h4>
                    </div>
                  </div>
                </swiper-slide>{/* End testimonial item */}
                <swiper-slide>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      lorem ipsum dolor sit amet, consectetur adip
                    </p>
                    <div className="profile mt-auto">
                      <img src="../img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                      <h3>Otro cliente</h3>
                      <h4>SGMM</h4>
                    </div>
                  </div>
                </swiper-slide>{/* End testimonial item */}
                <swiper-slide>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    </p>
                    <div className="profile mt-auto">
                      <img src="../img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                    </div>
                  </div>
                </swiper-slide>{/* End testimonial item */}
                <swiper-slide>
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                    <p>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    </p>
                    <div className="profile mt-auto">
                      <img src="../img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                    </div>
                  </div>
                </swiper-slide>{/* End testimonial item */}
              </swiper-container>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>{/* End Testimonials Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Contacto</h2>
              <p>¿List@ para vivir sin preocupaciones?</p>
            </header>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-envelope" />
                      <h3>WhatsApp</h3>
                      <p><Icon.Whatsapp className='icon-blue' size={24} /><Link to={e => { e.preventDefault(); window.location = 'https://wa.me/525631453998' }}> +52 56 3145 3998</Link></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-telephone" />
                      <h3>Teléfono</h3>
                      <p><Link to={e => { e.preventDefault(); window.location = 'tel:55 1246 2462' }}>55 1246 2462</Link></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-geo-alt" />
                      <h3>Ubicación</h3>
                      <p>Paseo de la Reforma 144, 1er Piso<br />Col. Juárez, CDMX</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-clock" />
                      <h3>Horario de atención</h3>
                      <p>Lunes - Viernes<br />9:00AM - 06:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Nombre completo" required />
                    </div>
                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Email" required />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Asunto" required />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={6} placeholder="Mensaje" required defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Cargando</div>
                      <div className="error-message" />
                      <div className="sent-message">Tus datos han sido enviados!</div>
                      <button type="submit">Quiero empezar a invertir</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>{/* End Contact Section */}
      </main > {/* End #main */}
      {/* FOOTER */}
      <Footer />
      <Link to={'/#'} className="back-to-top d-flex align-items-center justify-content-center"><Icon.ArrowUp /></Link>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}

    </>
  )
}

export default Home