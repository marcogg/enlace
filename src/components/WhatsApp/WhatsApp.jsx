import { Link } from 'react-router-dom'

const Whatsapp = () => {
    return (
        <>
            <div style={{ backgroundColor: '#F16E00', width: 70, height: 70, borderRadius: '50%', position: 'fixed', bottom: 50, right: 5, display: 'block' }}>
                <div style={{ margin: 'auto', display: 'block', position: 'relative', left: '18%', top: '13%', zIndex: 50000 }}>
                    <Link onClick={(e) => {
                        e.preventDefault();
                        window.location = 'https://api.whatsapp.com/send?phone=5215631453998&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20Planes%20Enlace%20+%20GNP'
                    }}>
                        <img src='./../img/whatsapp-outline-01.png' alt='Whatsapp' style={{ width: '47px !important' }} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Whatsapp
