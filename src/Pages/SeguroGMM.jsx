import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'
import { Link } from 'react-router-dom'

const SeguroGMM = () => {
    return (
        <>
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id="sgmm">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.DropletFill size={36} className='icon orange' />
                                    <span className="purecounter">1 de cada 7</span>
                                    <p>muertes en México se relacionan con la diabetes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.EmojiDizzyFill size={36} className='icon orange' />
                                    <span className="purecounter">1 de cada 8</span>
                                    <p>Muertes en méxico se relaciona con tumores malignos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.HospitalFill size={36} className='icon orange' />
                                    <span className="purecounter">+$1 MDP</span>
                                    <p>Es el costo de tratamientos para el cáncer en instituciones privadas sin un seguro médico</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.Watch size={36} className='icon orange' />
                                    <span className="purecounter">Al menos 10</span>
                                    <p>semanas es el tiempo mínimo de espera para intervención quirúrgica en hospitales públicos.</p>
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
                        <h3>Blinda tu salud y la de tu familia con Enlace + GNP</h3>
                        <h4 className='text-center montserrat'>Tenemos convenios con hospitales nacionales que cuentan con tecnología de punta y una alianza de proveedores internacionales. <b>+ de 20,311 MDP pagados en servicios de salud a nuestros asegurados</b></h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/sgmm.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.Check2Circle className="icon plans orange" />
                                        <div>
                                            <h4>Oferta felxible y amplia cobertura</h4>
                                            <p>Respaldamos hospitalización o fallecimeinto. Reposición de prótesis y aparatos ortopédicos y más.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.EmojiSunglasses className="icon plans orange" />
                                        <div>
                                            <h4>Tu personalizas tu plan de acuerdo a tu estilo de vida</h4>
                                            <p>Cero deducible por accidente, protección ante emergencias en el extranjero, sesiones de rehabilitación, protección para tu bebé y más.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <Icon.Globe className="icon plans orange" />
                                        <div>
                                            <h4>Acceso a una amplia red de médicos</h4>
                                            <p>Para atender cualquier especialidad, desde medicina general, hasta neurocirugía.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <Icon.CashStack className="icon plans orange" />
                                        <div>
                                            <h4>Solidez financiera avaladda</h4>
                                            <p>A nivel mundial por la <Link onClick={e => { e.preventDefault(); window.location = 'https://web.ambest.com/home' }}></Link>AM Best Company</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.Award className="icon plans orange" />
                                        <div>
                                            <h4>Líderes en el mercado de SGMM</h4>
                                            <p>A nivel nacional.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.Check className="icon plans orange" />
                                        <div>
                                            <h4>Cobertura garantizada</h4>
                                            <p>en territorio nacional e internacional</p>
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

export default SeguroGMM