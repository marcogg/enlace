import Footer from '../components/Footer/Footer'
import * as Icon from 'react-bootstrap-icons'
import Nav from '../components/Nav/Nav'

const Profesional = () => {
    return (
        <>
            <Nav />
            {/* ======= Counts Section ======= */}
            <section className="counts" id="profesional">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 align-items-center mt-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={100}>
                                <i className="bi bi-emoji-smile" />
                                <div>
                                    <Icon.MortarboardFill size={36} className='icon orange' />
                                    <span className="purecounter">Solo 21</span>
                                    <p>Jóvenes de cada 100 logran terminar la universidad en México. Solo 1 tendrá un posgrado</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={400}>
                                <div>
                                    <Icon.CashStack size={36} className='icon orange' />
                                    <span className="purecounter">+78%</span>
                                    <p>el salario promedio de alguien con licenciatura en México en comparación de alguien con solo bachillerato</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={800}>
                                <div>
                                    <Icon.Backpack4Fill size={36} className='icon orange' />
                                    <span className="purecounter">$5 MDP</span>
                                    <p>Será el costo promedio de una licenciatura en universidad privada para 2039</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box" data-aos="fade-down" data-aos-delay={1200}>
                                <div>
                                    <Icon.Calendar3 size={36} className='icon orange' />
                                    <span className="purecounter">15 años</span>
                                    <p>Es el promedio de tiempo de un crédito educativo bancarizado, 3 veces más que la duración de la carrera</p>
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
                        <h3>Conoce cómo te protege un plan Profesional</h3>
                        <h4 className='text-center montserrat'>Es un plan de ahorro con inversión para que garantices el futuro profesionalde tus hij@s <b>en caso de fallecimiento accidental tus pequeños estarán cubiertos por la suma asegurada desde el día 1, misma que se les entragará 3 veces.</b> Si tu condición física disminuye se pagarán 2 veces.</h4>
                        <div className="row">
                            <div className="col-xl-5 text-center" data-aos="fade-right" data-aos-delay={100}>
                                <img src="../img/plan-profesional.svg" className="img-fluid p-4" alt />
                            </div>
                            <div className="col-xl-7 d-flex content mt-5">
                                <div className="row align-self-center gy-4">
                                    <div className="col-md-6 icon-box align-items-start" data-aos="fade-up">
                                        <Icon.PersonCheckFill className="icon plans orange" />
                                        <div>
                                            <h4>Elige la edad en que tu hij@ reciba el fideicomiso</h4>
                                            <p>Entre más pronto inicies, es probable que necesites menos dinero porque tienes el tiempo a tu favor, por lo que tu mensualidad podría ser menor de lo que piensas</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <Icon.ShieldCheck className="icon plans orange" />
                                        <div>
                                            <h4>Protegidos desde el día 1</h4>
                                            <p>Tu plan Profesional cuida a tu familia en caso de que faltes o tu condición física se vea limitada para trabajar</p>
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
                                        <Icon.Bank2 className="icon plans orange" />
                                        <div>
                                            <h4>Deducible al 100% para personas físicas y morales</h4>
                                            <p>La retención de los impuestos es perfectamente deducible en tu declaración anual, por lo que podríamos considerar que de cierta manera el SAT paga una parte de tu ahorro.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <Icon.PeopleFill className="icon plans orange" />
                                        <div>
                                            <h4>Protección para mamá y papá</h4>
                                            <p>Beneficio opcional adicional a través del cual tú y tu cónyuge, quedarán protegidos en caso de invalidez o fallecimiento en una misma póliza.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                        <Icon.GenderFemale className="icon plans orange" />
                                        <div>
                                            <h4>Y para mamá...</h4>
                                            <p>Protección para padecimientos frecuentes o exclusivos de su género.*</p>
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

export default Profesional