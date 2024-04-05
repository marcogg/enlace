import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'

const SeguroHogar = () => {
    return (
        <>
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id="hogar">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.BuildingDown size={36} className='icon blue' />
                                    <span className="purecounter">7,774</span>
                                    <p>viviendas dañadas en el sismo de 2017 en CDMX.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.HouseExclamation size={36} className='icon blue' />
                                    <span className="purecounter">280 mil</span>
                                    <p>viviendas fueron dañadas por el huracán OTIS, en Guerrero</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.Incognito size={36} className='icon blue' />
                                    <span className="purecounter">el 6%</span>
                                    <p>de los delitos en México, son robos a casa habitación.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.PeopleFill size={36} className='icon blue' />
                                    <span className="purecounter">+ 20,000</span>
                                    <p>Daminificados en el sismo de 19S de 2017.</p>
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
                        <h3>Cuida tu patrimonio con Enlace + GNP</h3>
                        <h4 className='text-center montserrat'>Protegemos desde los cimientos de tu hogar hasta los contenidos de dentor y fuera de él en caso de robo</h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/seguro-hogar.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.Check2Circle className="icon plans blue" />
                                        <div>
                                            <h4>Hogar esencial</h4>
                                            <p>Protege la casa y contenidos en caso de incendio, incluye la remoción de escombros, y cubre daños a terceros</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.LaptopFill className="icon plans blue" />
                                        <div>
                                            <h4>Hogar vital</h4>
                                            <p>Todas las coberturas del paquete Esencial, más gastos extraordinarios, la rotura de cristales, y daños a equipo electrónico</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <Icon.Incognito className="icon plans blue" />
                                        <div>
                                            <h4>Hogar Plus</h4>
                                            <p>Todas las coberturas de Hogar Esencial y Vital, protege los contenidos por el robo dentro y fuera del hogar.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <Icon.CheckLg className="icon plans blue" />
                                        <div>
                                            <h4>A tu medida</h4>
                                            <p>Arma tu propio paquete y personaliza las sumas aseguradas y las coberturas</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.Telephone className="icon plans blue" />
                                        <div>
                                            <h4>Asistencias</h4>
                                            <p>consulta médica a domicilio, telefónica, servicio funerario y de ambulancia. Plomero, cerrajero, electricista y más. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.ShieldFillCheck className="icon plans blue" />
                                        <div>
                                            <h4>Protegemos hasta tu mascota</h4>
                                            <p>Asistencia veterinaria, apoyo por extravía, responsabilidas civil y más.</p>
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

export default SeguroHogar