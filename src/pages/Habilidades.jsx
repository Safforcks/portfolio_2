import styles from "../styles/habilidades.module.css"
import {
	IoCodeSlashOutline,
	IoConstructOutline,
	IoEarthOutline,
} from "react-icons/io5"
import { TbDatabase } from "react-icons/tb"


const blocosTecnicos = [
	{
		titulo: "dados & análise",
		icone: TbDatabase,
		itens: [
			{ nome: "SQL", img: "https://img.icons8.com/?size=100&id=Ign0QG33bZzq&format=png&color=000000" },
			{ nome: "Python", img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
			{ nome: "Power BI", img: "https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000" },
			{ nome: "PostgreSQL", img: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000" },
			{ nome: "Pandas", img: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000" },
			{ nome: "NumPy", img: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000" },
			{ nome: "Excel", img: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000" },
			
		],
	},
	{
		titulo: "desenvolvimento",
		icone: IoCodeSlashOutline,
		itens: [
			{ nome: "JavaScript", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
			{ nome: "HTML & CSS", img: "https://img.icons8.com/?size=100&id=owWiEaAJmGKK&format=png&color=000000" },
			{ nome: "React JS", img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
			{ nome: "React Native", img: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
			{ nome: "Java", img: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
			{ nome: "C#", img: "https://img.icons8.com/?size=100&id=45490&format=png&color=000000" },
			{ nome: ".NET", img: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" },
			{ nome: "Spring Boot", img: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
		],
	},
	{
		titulo: "idiomas",
		icone: IoEarthOutline,
		itens: [
			{ nome: "Português: nativo", img: "https://img.icons8.com/?size=100&id=zHmH8HpOmM90&format=png&color=000000", full: true },
			{ nome: "Inglês: básico-intermediário", img: "https://img.icons8.com/?size=100&id=t3NE3BsOAQwq&format=png&color=000000",  full: true },
			{ nome: "Libras: fluente", img: "https://alfabetizalibras.pb.utfpr.edu.br/assets/senai_libras.png", full: true },
		],
	},
]

const ferramentas = [
	{ nome: "Visual Studio", img: "https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000"},
	{ nome: "VS Code", img: "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000" },
	{ nome: "Linux (Ubuntu)", img: "https://img.icons8.com/?size=100&id=m6O2bFdG70gw&format=png&color=000000" },
	{ nome: "DBeaver", img: "https://img.icons8.com/?size=100&id=kjaF4LlvyR6g&format=png&color=000000" },
	{ nome: "Jupyter Notebook", img: "https://img.icons8.com/?size=100&id=0JUBXbNc9AaZ&format=png&color=000000" },
]

export default function Habilidades() {
	return (
		<div className={styles.container}>
			<div className={styles.cabecalho}>
				<h1 className={styles.titulo}><span>&gt;</span> habilidades <span className={styles.cursor}>_</span></h1>
                <div className={styles.separador}></div>
				<p className={styles.descricao}>
					Abaixo estão minhas principais habilidades técnicas e as ferramentas que utilizo para desenvolver <span>software</span>, transformar <span>dados</span> em <span>soluções</span> inteligentes e criar <span>experiências</span> digitais eficientes.
				</p>
			</div>
            <div>
                <div className={styles.habilidades}>
                    {blocosTecnicos.map((bloco) => {
                        const IconeBloco = bloco.icone

                        return (
                            <div className={styles.card} key={bloco.titulo}>
                                <div className={styles.cardHeader}>
                                    <IconeBloco className={styles.iconeHeader} aria-hidden="true" />
                                    <p>{bloco.titulo}</p>
                                </div>
                                <div className={styles.separador}></div>
                                <div className={styles.listaTags}>
                                    {bloco.itens.map((item) => {
                                        return (
                                            <div
                                                className={`${styles.tag} ${item.full ? styles.tagFull : ""}`}
                                                key={item.nome}
                                            >
                                                <img src={item.img} alt={item.nome} />
                                                <span>{item.nome}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.cardFerramentas}>
                    <div className={styles.cardHeader}>
                        <IoConstructOutline className={styles.iconeHeader} aria-hidden="true" />
                        <p>ferramentas</p>
                    </div>
                    <div className={styles.separador}></div>
                    <div className={styles.listaFerramentas}>
                        {ferramentas.map((ferramenta) => {
                            return (
                                <div className={styles.tag} key={ferramenta.nome}>
                                    <img src={ferramenta.img} alt={ferramenta.nome} />
                                    <span>{ferramenta.nome}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
		</div>
	)
}
