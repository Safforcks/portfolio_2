import { useEffect, useRef, useState } from "react"
import styles from "../styles/projetos.module.css"
import repositorios from "../data/projetos.json"
import { FaGithub } from "react-icons/fa"
import {
    IoChevronBackOutline,
    IoChevronForwardOutline,
    IoGameControllerOutline,
    IoSettingsOutline,
    IoCartOutline,
    IoDesktopOutline,
    IoServerOutline,
} from "react-icons/io5"
import { AiOutlineLinux } from "react-icons/ai"
import { CiMobile3 } from "react-icons/ci"

const icones = {
    CiMobile3,
    IoCartOutline,
    AiOutlineLinux,
    IoServerOutline,
    IoGameControllerOutline,
    IoDesktopOutline,
    IoSettingsOutline,
}

export default function Projetos() {
    const listaRef = useRef(null)
    const [progresso, setProgresso] = useState(0)
    const [podeVoltar, setPodeVoltar] = useState(false)
    const [podeAvancar, setPodeAvancar] = useState(true)
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(1)
    const [inicioVisivel, setInicioVisivel] = useState(1)
    const [fimVisivel, setFimVisivel] = useState(1)

    function atualizarEstadoRolagem() {
        const elemento = listaRef.current
        if (!elemento) return

        const primeiroCard = elemento.querySelector(`.${styles.card}`)
        if (primeiroCard) {
            const estilo = window.getComputedStyle(elemento)
            const valorGap = estilo.columnGap || estilo.gap || "0"
            const gap = Number.parseFloat(valorGap) || 0
            const larguraCard = primeiroCard.getBoundingClientRect().width
            const estimativa = Math.floor((elemento.clientWidth + gap) / (larguraCard + gap))
            const visiveis = Math.max(1, Math.min(repositorios.length, estimativa))
            const passo = Math.max(1, larguraCard + gap)
            const distanciaMaxima = elemento.scrollWidth - elemento.clientWidth
            const chegouNoFim = distanciaMaxima > 0 && elemento.scrollLeft >= distanciaMaxima - 4

            const inicio = chegouNoFim
                ? Math.max(1, repositorios.length - visiveis + 1)
                : Math.max(1, Math.min(repositorios.length, Math.floor(elemento.scrollLeft / passo) + 1))

            const fim = chegouNoFim
                ? repositorios.length
                : Math.max(inicio, Math.min(repositorios.length, inicio + visiveis - 1))

            setQuantidadeVisivel(visiveis)
            setInicioVisivel(inicio)
            setFimVisivel(fim)
        }

        const distanciaMaxima = elemento.scrollWidth - elemento.clientWidth

        if (distanciaMaxima <= 0) {
            setProgresso(0)
            setPodeVoltar(false)
            setPodeAvancar(false)
            return
        }

        const percentual = (elemento.scrollLeft / distanciaMaxima) * 100
        setProgresso(percentual)
        setPodeVoltar(elemento.scrollLeft > 4)
        setPodeAvancar(elemento.scrollLeft < distanciaMaxima - 4)
    }

    useEffect(() => {
        atualizarEstadoRolagem()

        const elemento = listaRef.current
        if (!elemento) return undefined

        window.addEventListener("resize", atualizarEstadoRolagem)
        return () => window.removeEventListener("resize", atualizarEstadoRolagem)
    }, [])

    function rolar(direcao) {
        if (!listaRef.current) return
        listaRef.current.scrollBy({
            left: direcao * 320,
            behavior: "smooth",
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <p className={styles.titulo}>
                    <span>&gt;</span>
                    projetos
                    <span className={styles.cursor}>_</span>
                </p>
                <div className={styles.separador}></div>
                <p className={styles.textoIntro}>
                    Aqui estão alguns dos <span>projetos</span> que desenvolvi para transformar ideias em soluções reais. Cada projeto representa um <span>desafio</span>, <span>aprendizado</span> e <span>evolução</span> constante.
                     Clique em um <span>projeto</span> para ver mais detalhes.
                </p>
            </div>
            <div className={styles.projetos}>
                <div className={styles.viewport}>
                    <button
                        type="button"
                        className={styles.seta}
                        style={{left: "-15px"}}
                        onClick={() => rolar(-1)}
                        disabled={!podeVoltar}
                        aria-label="Rolar projetos para a esquerda"
                    >
                        <IoChevronBackOutline />
                    </button>
                    <div
                        className={styles.rolagemHorizontal}
                        ref={listaRef}
                        onScroll={atualizarEstadoRolagem}
                    >
                        {repositorios.map((repositorio) => {
                            const Icone = icones[repositorio.icone]
                            return (
                                <div className={styles.card} key={repositorio.link}>
                                    <p className={styles.tipo}>{repositorio.tipo}</p>
                                    <Icone className={styles.icone} />
                                    <p className={styles.cardTitulo}>{repositorio.titulo}</p>
                                    <div className={styles.separador}></div>
                                    <p className={styles.descricao}>{repositorio.descricao}</p>
                                    <div className={styles.cardTecnologias}>
                                        {repositorio.tecnologias.map((tecnologia, index) => (
                                            <p className={styles.tecnologias} key={index}>
                                                {tecnologia}
                                            </p>
                                         ))}
                                    </div>
                                    
                                    <button
                                        type="button"
                                        onClick={() => window.open(repositorio.link, "_blank", "noopener,noreferrer")}
                                        className={styles.botao}
                                    >
                                        &gt; ver repositório <FaGithub style={{fontSize: "20px"}} />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <button
                        type="button"
                        className={styles.seta}
                        style={{right: "-10px"}}
                        onClick={() => rolar(1)}
                        disabled={!podeAvancar}
                        aria-label="Rolar projetos para a direita"
                    >
                        <IoChevronForwardOutline />
                    </button>
                </div>
                <div className={styles.linhaRolagem}>
                    <div className={styles.linhaProgresso} style={{ width: `${Math.max(progresso, 6)}%` }}></div>
                </div>
                <p className={styles.mensagem}>[ Role para ver mais projetos | {inicioVisivel}-{fimVisivel} de {repositorios.length} ]</p>
            </div>
        </div>
    )
}