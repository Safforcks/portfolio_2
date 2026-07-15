import styles from "../styles/sidebar.module.css"
import {
    IoHomeOutline,
    IoPersonOutline,
    IoFolderOutline,
    IoCodeSlashOutline,
    IoMailOutline,
} from "react-icons/io5"
import CanvasImage from "./CanvasImage"
import pinguim from "../assets/pinguim.png"
import banner from "../assets/banner_verde.png"
import { Link } from "react-router"

export default function Sidebar(){
    return(
        <aside className={styles.barra}>
            <p className={styles.prompt}>rainer@portfolio:~$ <span className={styles.retangulo}></span></p>
            <CanvasImage 
            src={pinguim}
            alt="Pinguim"  
            className={styles.imagem}
            width={200}
            height={200}
            />
            <div className={styles.separador}></div>
            <nav className={styles.navegador}>
                <ul className={styles.lista}>
                    <li className={styles.link}>
                        <IoHomeOutline className={styles.icone} />
                        <Link to="/" className={styles.hiperlinks}>01. home</Link>
                    </li>
                    <li className={styles.link}>
                        <IoPersonOutline className={styles.icone} />
                        <Link to="/sobre" className={styles.hiperlinks}>02. sobre mim</Link>
                    </li>
                    <li className={styles.link}>
                        <IoFolderOutline className={styles.icone} />
                        <Link to="/projetos" className={styles.hiperlinks}>03. projetos</Link>
                    </li>
                    <li className={styles.link}>
                        <IoCodeSlashOutline className={styles.icone} />
                        <Link to="/habilidades" className={styles.hiperlinks}>04. habilidades</Link>
                    </li>
                    <li className={styles.link}>
                        <IoMailOutline className={styles.icone} />
                        <Link to="/contato" className={styles.hiperlinks}>05. contato</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.separador}></div>
            <div className={styles.sistema}>
                <p className={styles.tituloSistema}>Sistema</p>
                <p><span className={styles.chave}>OS:</span> Arch Linux</p>
                <p><span className={styles.chave}>Kernel:</span> 6.6.15</p>
                <p><span className={styles.chave}>Shell:</span> zsh</p>
                <p><span className={styles.chave}>Editor:</span> Neovim</p>
                <p><span className={styles.chave}>WM:</span> Hyprland</p>
                <p><span className={styles.chave}>Focus:</span> Software and Data</p>
            </div>
            <div className={styles.separador}></div>
            <div className={styles.bannerBox}>
                <CanvasImage src={banner} alt="Banner do portifolio" className={styles.banner} width={410} height={110} />
                <p className={styles.bannerLegenda}>SYSTEM STATUS: ONLINE</p>
            </div>
        </aside>
    )
}