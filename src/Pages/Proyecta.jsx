import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'

const Proyecta = () => {
    return (
        <>
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id='retiro'>
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.PersonWheelchair size={36} className='icon blue' />
                                    <span className="purecounter">70%</span>
                                    <p>De las personas que quedan discapacitadas, no vuelven a encontrar un empleo*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.PeopleFill size={36} className='icon blue' />
                                    <span className="purecounter">3 de 10</span>
                                    <p>Adultos mayores deberán trabajar para sobrevivir y 2 vivirán en pobreza para el año 2035</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.CreditCardFill size={36} className='icon blue' />
                                    <span className="purecounter">$2 MDP</span>
                                    <p>Es el costo en promedio por cada hijo que desembolsa una familia hasta antes de su independencia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.GraphDownArrow size={36} className='icon blue' />
                                    <span className="purecounter">solo 1%</span>
                                    <p>De los jubilados en México, poseen el 100% de su último sueldo como pensión</p>
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
                        <h3>Conoce cómo te protege un plan Proyecta</h3>
                        <h4 className='text-center montserrat'>Es un plan de proteccion económica, que funciona como un PPR (Plan Personal para el Retiro). Desde tu primer pago, <b>tus beneficiarios estarán protegidos con una suma asegurada</b> en caso de que faltes o tu capacidad física cambie que te impida desempeñar tu oficio o prefesión.</h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/plan-personal-para-el-retiro.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.Hourglass className="icon plans" />
                                        <div>
                                            <h4>Capitaliza tu ahorro durante 10 años</h4>
                                            <p>Pasando el periodo de capitalización, solo será cuestión de tiempo para que el interés compuesto genere los rendimientos para ti. A mayor tiempo, mayores ganancias.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.ShieldCheck className="icon plans" />
                                        <div>
                                            <h4>Ahorro seguro</h4>
                                            <p>Tu inversión en un portafolio diversificado para sacar el máximo rendimiento, sin poner en riesgo tu patrimonio. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <Icon.ArrowUpRightCircle className="icon plans" />
                                        <div>
                                            <h4>Rendimientos sobre la inflación</h4>
                                            <p>Al invertir en UDIS (Unidades de Inversión) tus ahorros mantienen su poder adquisitivo, al calcular rendimientos por encima de la tasa inflacionaria.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <Icon.Bank2 className="icon plans" />
                                        <div>
                                            <h4>Deducible al 100% para personas físicas y morales</h4>
                                            <p>La retención de los impuestos es perfectamente deducible en tu declaración anual, por lo que podríamos considerar que de cierta manera el SAT paga una parte de tu ahorro.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.PersonWorkspace className="icon plans" />
                                        <div>
                                            <p className='caption'>Si eres una empresa...</p>
                                            <h4>Protege a empleados en puestos clave</h4>
                                            <p>Puedes ofrecer esta prestación como beneficios, con efectos deducibles para tu contabilidad. nosotros nos encargamos de generar los rendimientos para tu empleado</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.HandThumbsUp className="icon plans" />
                                        <div>
                                            <p className='caption'>Si eres una empresa...</p>
                                            <h4>Seguridad para tus inversionistas</h4>
                                            <p>Proteger a los socios de la empresa con un plan Proyecta puede ayudarte a brindar más estabilidad en la expectativa de tu empresa y atraer más capital para inversión.</p>
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

export default Proyecta