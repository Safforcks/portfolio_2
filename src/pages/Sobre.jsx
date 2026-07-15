import styles from "../styles/sobre.module.css"
import CanvasImage from "../components/CanvasImage"
import perfil from "../assets/perfil.png"
import { IoRocketOutline, IoStarOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb"

export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.cardPerfil}>
                <div className={styles.perfilFrame}>
                    <span className={styles.corner + " " + styles.cornerTL}></span>
                    <span className={styles.corner + " " + styles.cornerTR}></span>
                    <span className={styles.corner + " " + styles.cornerBL}></span>
                    <span className={styles.corner + " " + styles.cornerBR}></span>
                    <CanvasImage src={perfil} alt="perfil" className={styles.perfil} width={250} height={250} />
                </div>
                <div className={styles.cardTexto}>
                    <p className={styles.titulo}><span className={styles.arrow}>&gt;</span> sobre mim<span className={styles.cursor}>_</span></p>
                    <div className={styles.separador}></div>
                    <p className={styles.texto}>
                        Sou estudante de <span>Engenharia de Software </span> 
                        no Instituto Infnet, com previsão de conclusão em dezembro de 2028. Sou uma pessoa bem ligada à tecnologia, não apenas por gostar de computadores, mas por querer entender como as coisas funcionam, testar limites, desenvolver projetos próprios e transformar ideias em soluções reais.
                    </p>
                    <p className={styles.texto}>
                        Tenho forte interesse nas áreas de <span>Software</span> e <span>Dados</span>, além de <span>desenvolvimento web</span>, <span>bancos de dados</span>, <span>automação</span> e <span>análise de dados</span>. Gosto de criar projetos que resolvem problemas reais, explorando desde a estrutura dos sistemas até a forma como os dados podem ser organizados, tratados e utilizados para gerar valor.
                    </p>
                    <p className={styles.texto}>
                        Concluí cursos como Google Data Analytics, Excel Skills for Business e uma especialização em <span>PostgreSQL</span>, além de continuar estudando <span>Power BI</span>, <span>Java</span> com <span>Spring Boot</span> e <span>C#</span> com <span>.NET</span>.
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.cardResumo}>
                    <div className={styles.parteResumo}>
                        <div>
                            <TbTargetArrow className={styles.icone} />
                            <p className={styles.tituloResumo}>Missão</p>
                        </div>
                        <div className={styles.separador}></div>
                        <p className={styles.textoResumo}>
                            Usar dados e software para gerar valor, automatizar processos e apoiar decisões inteligentes.
                        </p>
                    </div>
                    <div className={styles.parteResumo}>
                        <div>
                            <IoRocketOutline className={styles.icone} />
                            <p className={styles.tituloResumo}>Visão</p>
                        </div>
                        <div className={styles.separador}></div>
                        <p className={styles.textoResumo}>
                            Tornar-me uma referência como profissional de Software e Dados, contribuindo para projetos inovadores que gerem valor e impacto positivo.
                        </p>
                    </div>
                    <div className={styles.parteResumo}>
                        <div>
                            <IoStarOutline className={styles.icone} />
                            <p className={styles.tituloResumo}>Valores</p>
                        </div>
                        <div className={styles.separador}></div>
                        <ul className={styles.listaValores}>
                            <li><span className={styles.arrow}>&gt;</span> Ética e responsabilidade</li>
                            <li><span className={styles.arrow}>&gt;</span> Aprendizado contínuo</li>
                            <li><span className={styles.arrow}>&gt;</span> Qualidade</li>
                            <li><span className={styles.arrow}>&gt;</span> Impacto positivo</li>
                        </ul>
                    </div>
                </div>
        
            </div> 
        </div>
    )
}