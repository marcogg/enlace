import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsScrolled(!isScrolled)
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className={`header fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="logo d-flex align-items-center">
                        <img src="./../../logo-enlace-horizontal.svg" width={150} />
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" to={'/'}>Inicio</Link></li>
                            <li><Link className="nav-link scrollto" href="#nosotros">Nosotros</Link></li>
                            <li className="dropdown"><Link href="#"><span>Planes de protección</span> <i className="bi bi-chevron-down" /></Link>
                                <ul>
                                    <li className="dropdown"><Link href="#"><span>Planes financieros</span> <i className="bi bi-chevron-right" /></Link>
                                        <ul>
                                            <li><Link to={'/ahorro-para-retiro'}>Proyecta: Plan para el retiro con seguro de vida e invalidez</Link></li>
                                            <li><Link to={'/plan-de-ahorro-para-educacion'}>Profesional: Plan para la educación de tus hijos</Link></li>
                                            <li><Link to={'/plan-de-inversion-para-ahorro'}>Capitaliza: Para inversión de ahorro con deducibilidad</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to={'/seguro-para-auto'}>Seguro de Auto</Link></li>
                                    <li><Link to={'/seguro-gastos-medicos-mayores'}>Seguro de Gastos Médicos Mayores</Link></li>
                                    <li><Link to={'/seguro-para-hogar'}>Seguro para el hogar</Link></li>
                                </ul>
                            </li>
                            <li><Link className="getstarted scrollto" href="#about">Cotiza ahora</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </>
    )
}

export default Nav