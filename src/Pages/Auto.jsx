import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Auto = () => {
    return (
        <>
            {/* Scroll To Top */}
            <ScrollToTop />
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id="seguro-auto">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.CarFrontFill size={36} className='icon grey' />
                                    <span className="purecounter">1<sup>a</sup> causa</span>
                                    <p>de muerte en jóvenes, son los accidentes viales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.CashStack size={36} className='icon grey' />
                                    <span className="purecounter">$3 MDP</span>
                                    <p>Importe que otorgamos en la cobertura de responsabilidad civil, daños a terceros.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.CreditCard2FrontFill size={36} className='icon grey' />
                                    <span className="purecounter">$28,000</span>
                                    <p>Es el importe promedio que tendrías que desembolsar por un percance vial menor, si no contaras con seguro</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.Incognito size={36} className='icon grey' />
                                    <span className="purecounter">166</span>
                                    <p>vehículos son robados diariamente en la Ciudad de México.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Counts Section */}

            <section className='features'>
                <div className='container'>
                    {/* Feature Icons */}
                    <div className="row feature-icons" data-aos="fade-up">
                        <h3>Conoce los beneficios de un seguro de auto Enlace + GNP</h3>
                        <h4 className='text-center montserrat'>El auto es uno de los patrimonios más recurrentes de los mexicanos. Proteger este bien y a sus ocupantes tiene más beneficios con GNP</h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/seguro-auto.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.EvFrontFill className="icon plans orange" />
                                        <div>
                                            <h4>Aseguramos todos los vehículos, incluyendo motos</h4>
                                            <p>Contamos con coberturas especiales para autos eléctricos e híbridos enchufables como: Servicio de grúa por descarga de batería y Responsabilidad Civil por recarga en espacio público</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.PlusCircleFill className="icon plans orange" />
                                        <div>
                                            <h4>Más opciones para protección</h4>
                                            <p>Cero deducible por pérdida total, Daños materiales de llantas y rines, conductor protegido y más.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <Icon.GlobeAmericas className="icon plans orange" />
                                        <div>
                                            <h4>Bonificamos hasta 30% por la renovación</h4>
                                            <p>Al ser un conductor ecológico de bajo kilometraje</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <Icon.Award className="icon plans orange" />
                                        <div>
                                            <h4>Reconocemos tu lealtad</h4>
                                            <p>El costo de la renovación de tu seguro de auto simepre será más barato que un nuevo negocio</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.TagFill className="icon plans orange" />
                                        <div>
                                            <h4>Descuentos del 10%</h4>
                                            <p>Si tienes contratados con GNP seguros de otro ramo.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.CarFrontFill className="icon plans orange" />
                                        <div>
                                            <h4>Protecciones a tu media</h4>
                                            <p>Robo total o parcial, Responsabilidad Civil (daños a terceros), Daños materiales (daños que le ocurren a tu coche) y Pérdida total (cuando el daño de reparación supera el costo del vehículo)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End Feature Icons */}
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Auto