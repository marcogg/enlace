import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Capitaliza = () => {
    return (
        <>
            {/* Scroll To Top */}
            <ScrollToTop />
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id="capitaliza">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.PiggyBankFill size={36} className='icon blueEnlace' />
                                    <span className="purecounter">73%</span>
                                    <p>De los jóvenes que ahorran, lo hacen a través de medios informales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.CupFill size={36} className='icon blueEnlace' />
                                    <span className="purecounter">Hasta 12%</span>
                                    <p>de tu ingreso puede estar siendo gasto hormiga, compras que probablemente no gozas tanto y aún así haces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.HouseFill size={36} className='icon blueEnlace' />
                                    <span className="purecounter">Ahorrar 10%</span>
                                    <p>De tu ingreso puede ayudarte a tangibilizar tus metas de mediano y largo plazo, si lo inviertes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.CurrencyDollar size={36} className='icon blueEnlace' />
                                    <span className="purecounter">X2</span>
                                    <p>GNP duplica tu ahorro el primer año en tu plan Capitaliza. Por cada $1 que pongas, GNP pondrá otro.</p>
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
                        <h3>Conoce cómo te ayuda un plan de Ahorro Capitaliza</h3>
                        <h4 className='text-center montserrat'>Establece <b>hasta 5 metas para tu ahorro a través de portafolios</b> dinámicos y protege mientras proteges a tu familia en caso de que faltes. Primas mensaules desde $1,000</h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/plan-capitaliza.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.Bullseye className="icon plans orange" />
                                        <div>
                                            <h4>Establece tu meta a 10, 15 o 20 años</h4>
                                            <p>Contarás con hasta 5 metas para tu ahorro, con portafolios dináicos, donde podrás hacer aportaciones adicionales.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.PiggyBankFill className="icon plans orange" />
                                        <div>
                                            <h4>GNP duplica tu inversión el primer año</h4>
                                            <p>Tu plan capitaliza funciona como un fondo de ahorro el primer año, donde por casa $1 que pongas, GNP podrá uno más</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <Icon.GraphUpArrow className="icon plans orange" />
                                        <div>
                                            <h4>Rendimientos sobre la inflación</h4>
                                            <p>Al invertir en UDIS (Unidades de Inversión) tus ahorros mantienen su poder adquisitivo, puedes escoger un plan dolarizado.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <Icon.BarChartFill className="icon plans orange" />
                                        <div>
                                            <h4>Tu ahorro no bancarizado, genera interés compuesto</h4>
                                            <p>Al no estar bancarizado, tu ahorro no está gravado, por lo que es una mucho mejor opción que otros vehículos de inversión</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.AwardFill className="icon plans orange" />
                                        <div>
                                            <h4>Disfruta de premios de lealtad</h4>
                                            <p>Este premio se otorga por cada objetivo de ahorro definido.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.Wallet2 className="icon plans orange" />
                                        <div>
                                            <h4>Protege a tu familia aún si ya no estás.</h4>
                                            <p>Si el/la asegurad@ llega a faltar, tus beneficierios recibirán <b>Ahorro + Premio de Lealtad + Suma asegurada + Intereses Acumulados</b></p>
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

export default Capitaliza