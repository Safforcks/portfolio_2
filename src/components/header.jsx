import styles from "../styles/header.module.css"
import { Link } from "react-router"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.bolas}>
                <div className={styles.bolaVermelha}></div>
                <div className={styles.bolaLaranja}></div>
                <div className={styles.bolaVerde}></div>
            </div>
            <nav className={styles.navegador} aria-label="Menu principal">
                <ul className={styles.lista}>
                    <li className={styles.link}><Link to="/" className={styles.hiperlinks}>Home</Link></li>
                    <li className={styles.link}><Link to="/sobre" className={styles.hiperlinks}>Sobre</Link></li>
                    <li className={styles.link}><Link to="/projetos" className={styles.hiperlinks}>Projetos</Link></li>
                    <li className={styles.link}><Link to="/habilidades" className={styles.hiperlinks}>Habilidades</Link></li>
                    <li className={styles.link}><Link to="/contato" className={styles.hiperlinks}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}