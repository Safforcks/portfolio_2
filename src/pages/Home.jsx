import styles from "../styles/home.module.css"
import { IoTerminalOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router";

import Calendario from "../components/calendario";
import Relogio from "../components/relogio";
import AsciiArt from "../components/asciiArt";

export default function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.primeiroLado}>
                <p className={styles.saudacao}>Olá, bem-vindo!</p>
                <p className={styles.titulo}>Eu sou</p>
                <p className={styles.nome}>Rainer Sacks<span className={styles.cursor}>_</span></p>
                <div className={styles.badgeCargo}>
                    <IoTerminalOutline className={styles.iconeTerminal}/>
                    <p className={styles.textoCargo}>Estudante de Engenharia de Software</p>
                </div>
                <div className={styles.separador}></div>
                <p className={styles.fraseImpacto}>Transformando ideias em código.</p>
                <p className={styles.fraseImpacto}>Construindo soluções, aprendendo todos os dias.</p>
                <AsciiArt/>
                <p className={styles.descricao}>Este não é apenas um portfólio.</p>
                <p className={styles.descricao}>É um espaço onde compartilho projetos, estudos, experimentos e a minha evoluação como desenvolvedor.</p>
                <p className={styles.descricao}>Sinta-se à vontade para explorar.</p>
                <div className={styles.areaAcao}>
                    <Link to="/sobre" className={styles.botao}>[ começar exploração ]</Link>
                    <IoArrowBackOutline className={styles.iconeArrow} />
                </div>
            </div>
            <div className={styles.segundoLado}>
                <div className={styles.cardCal}>
                    <div className={styles.menu}>
                        <div className={styles.menuTitulo}>
                            <p>rainer@portfolio:~$ cal</p>
                        </div>
                        <div className={styles.bolaVerde}></div>
                    </div>
                    <Calendario/>
                </div>
                <div className={styles.cardClock}>
                    <div className={styles.menu}>
                        <div className={styles.menuTitulo}>
                            <p>rainer@portfolio:~$ clock</p>
                        </div>
                        <div className={styles.bolaVerde}></div>
                    </div>
                    <div className={styles.clock}>
                        <Relogio/>
                    </div>
                </div>
                <div className={styles.cardAutor}>
                    <div className={styles.menu}>
                        <div className={styles.menuTitulo}>
                            <p> 
                                <span className={styles.autorPrompt}>&gt;</span> RS
                                <span className={styles.cursor}>_</span>
                            </p>
                        </div>
                        <div className={styles.bolaVerde}></div>
                    </div>
                    <div className={styles.autorConteudo}>
                        <p className={styles.autorLabel}>AUTOR</p>
                        <p className={styles.autorNome}>Rainer Sacks</p>
                        <div className={styles.autorLinha}></div>
                        <p className={styles.autorRodape}>© 2026</p>
                    </div>
                </div>
            </div>
        </div>
    )
}