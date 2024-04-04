import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'

const Proyecta = () => {
    return (
        <>
            <Nav />
            <section className='features'>
                <div className='container'>
                    {/* Feature Icons */}
                    <div className="row feature-icons" data-aos="fade-up">
                        <h3>Conoce cómo te protege un plan Proyecta</h3>
                        <h4 className='text-center montserrat'>Es un plan de proteccion económica, que funciona como un PPR (Plan Personal para el Retiro). Desde tu primer pago, <b>tus beneficiarios estarán protegidos con una suma asegurada</b> en caso de que faltes o tu capacidad física cambie que te impida desempeñar tu oficio o prefesión.</h4>
                        <div className="row">
                            <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/plan-personal-para-el-retiro.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-8 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box" data-aos="fade-up">
                                        <i className="ri-line-chart-line" />
                                        <div>
                                            <h4>Capitaliza tu ahorro durante 10 años</h4>
                                            <p>Pasando el periodo de capitalización, solo será cuestión de tiempo para que el interés compuesto genere los rendimientos para ti. A mayor tiempo, mayores ganancias.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <i className="ri-stack-line" />
                                        <div>
                                            <h4>Ahorro seguro</h4>
                                            <p>Tu inversión en un portafolio diversificado para sacar el máximo rendimiento, sin poner en riesgo tu patrimonio. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <i className="ri-brush-4-line" />
                                        <div>
                                            <h4>Rendimientos sobre la inflación</h4>
                                            <p>Al invertir en UDIS (Unidades de Inversión) tus ahorros mantienen su poder adquisitivo, al calcular rendimientos por encima de la tasa inflacionaria.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <i className="ri-magic-line" />
                                        <div>
                                            <h4>Deducible al 100% para personas físicas y morales</h4>
                                            <p>La retención de los impuestos es perfectamente deducible en tu declaración anual, por lo que podríamos considerar que de cierta manera el SAT paga una parte de tu ahorro.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <i className="ri-command-line" />
                                        <div>
                                            <p className='caption'>Si eres una empresa...</p>
                                            <h4>Protege a empleados en puestos clave</h4>
                                            <p>Puedes ofrecer esta prestación como beneficios, con efectos deducibles para tu contabilidad. nosotros nos encargamos de generar los rendimientos para tu empleado</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <i className="ri-radar-line" />
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