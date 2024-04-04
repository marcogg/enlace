import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <h4>Suscríbete a nuestro NewsLetter</h4>
                                <p>Enviamos correos de valiosa información de vez en cuando. Nada de spam ✉️</p>
                            </div>
                            <div className="col-lg-6">
                                <form action method="post">
                                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-12 footer-info">
                                <Link to={'/'} className="logo d-flex align-items-center">
                                    <img src="../logo-enlace-horizontal.svg" width={120} />
                                </Link>
                                <p>Buscamos generar conciencia mediante conexiones financieras para nuestras sociedades, que buscan construir futuros llenos de proteccion y solidez económica.</p>
                                <div className="social-links mt-3">
                                    <Link onClick={e => { e.preventDefault(); window.location = 'https://www.facebook.com/edisa785/?locale=es_LA' }} className="facebook"><Icon.Facebook className="bi bi-facebook" /></Link>
                                    <Link onClick={e => { e.preventDefault(); window.location = 'https://www.instagram.com/edisa785/' }} className="instagram"><Icon.Instagram className="bi bi-instagram" /></Link>
                                    <Link onClick={e => { e.preventDefault(); window.location = 'https://www.linkedin.com/company/edisa785/' }} className="linkedin"><Icon.Linkedin className="bi bi-linkedin" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contáctanos</h4>
                                <p>
                                    Paseo de la Reforma 144, 1er Piso<br />
                                    Col. Juárez, CDMX<br />
                                    <strong>Teléfono:  </strong>
                                    <Link to={e => { e.preventDefault(); window.location = 'tel:55 1246 2462' }}>55 1246 2462</Link><br />
                                    <strong>WhatsApp:  </strong>
                                    <Icon.Whatsapp className='icon-blue' size={12} /><Link to={e => { e.preventDefault(); window.location = 'https://wa.me/525631453998' }}> +52 56 3145 3998</Link>
                                </p>
                            </div>
                            <div className="col-lg-4 col-6 footer-links">
                                <h4>Nuestros Planes</h4>
                                <ul>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>Plan Proyecta: PPR + Seguro de vida</Link></li>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>Pan Capitaliza: Inversión de Ahorros</Link></li>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>Plan Profesional: Ahorro para educación + Seguro Vida</Link></li>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>SGMM</Link></li>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>Seguro de auto</Link></li>
                                    <li><Icon.ChevronBarRight className="bi bi-chevron-right" /> <Link to={''}>Seguro para hogar</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        © Copyright <strong><span>Enlace</span></strong>. Todos los derechos reservados
                    </div>
                    <div className="credits">
                    </div>
                </div>
            </footer>{/* End Footer */}
        </>
    )
}

export default Footer