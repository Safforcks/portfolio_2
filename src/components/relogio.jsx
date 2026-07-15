import { useEffect, useMemo, useState } from "react"
import styles from "../styles/relogio.module.css"

const LINHAS = 21
const COLUNAS = 41
const CENTRO_X = 20
const CENTRO_Y = 10
const RAIO_X = 14
const RAIO_Y = 8

function criarGrade() {
	return Array.from({ length: LINHAS }, () => Array(COLUNAS).fill(" "))
}

function marcarPonto(grade, x, y, caractere) {
	if (y >= 0 && y < LINHAS && x >= 0 && x < COLUNAS) {
		grade[y][x] = caractere
	}
}

function marcarTextoCentralizado(grade, xCentral, y, texto) {
	const inicioX = Math.round(xCentral - texto.length / 2)

	for (let indice = 0; indice < texto.length; indice += 1) {
		marcarPonto(grade, inicioX + indice, y, texto[indice])
	}
}

function desenharLinha(grade, x1, y1, x2, y2, caractere) {
	const passos = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))

	for (let passo = 1; passo <= passos; passo += 1) {
		const progresso = passo / passos
		const x = Math.round(x1 + (x2 - x1) * progresso)
		const y = Math.round(y1 + (y2 - y1) * progresso)
		marcarPonto(grade, x, y, caractere)
	}
}

function gerarRelogioAscii(dataAtual) {
	const grade = criarGrade()

	for (let angulo = 0; angulo < 360; angulo += 10) {
		const radiano = (angulo * Math.PI) / 180
		const x = Math.round(CENTRO_X + Math.cos(radiano) * RAIO_X)
		const y = Math.round(CENTRO_Y + Math.sin(radiano) * RAIO_Y)
		const caractere = angulo % 90 === 0 ? (angulo % 180 === 0 ? "-" : "|") : "."
		marcarPonto(grade, x, y, caractere)
	}

	for (let hora = 1; hora <= 12; hora += 1) {
		const anguloHora = ((hora / 12) * 360 - 90) * (Math.PI / 180)
		const xNumero = Math.round(CENTRO_X + Math.cos(anguloHora) * 11)
		const yNumero = Math.round(CENTRO_Y + Math.sin(anguloHora) * 6)
		marcarTextoCentralizado(grade, xNumero, yNumero, String(hora))
	}

	const minutos = dataAtual.getMinutes()
	const horas = dataAtual.getHours() % 12
	const anguloMinutos = ((minutos / 60) * 360 - 90) * (Math.PI / 180)
	const anguloHoras = (((horas + minutos / 60) / 12) * 360 - 90) * (Math.PI / 180)

	const pontaMinutosX = Math.round(CENTRO_X + Math.cos(anguloMinutos) * 9)
	const pontaMinutosY = Math.round(CENTRO_Y + Math.sin(anguloMinutos) * 6)
	const pontaHorasX = Math.round(CENTRO_X + Math.cos(anguloHoras) * 6)
	const pontaHorasY = Math.round(CENTRO_Y + Math.sin(anguloHoras) * 4)

	marcarPonto(grade, CENTRO_X, CENTRO_Y, "o")
	desenharLinha(grade, CENTRO_X, CENTRO_Y, pontaMinutosX, pontaMinutosY, "|")
	desenharLinha(grade, CENTRO_X, CENTRO_Y, pontaHorasX, pontaHorasY, "-")
	marcarPonto(grade, pontaMinutosX, pontaMinutosY, "|")
	marcarPonto(grade, pontaHorasX, pontaHorasY, "-")

	return grade.map((linha) => linha.join("")).join("\n")
}

export default function Relogio({ className }) {
	const [agora, setAgora] = useState(() => new Date())

	useEffect(() => {
		const intervalo = window.setInterval(() => {
			setAgora(new Date())
		}, 1000)

		return () => window.clearInterval(intervalo)
	}, [])

	const relogioAscii = useMemo(() => gerarRelogioAscii(agora), [agora])

	return (
        <div className={styles.clock}>
            <pre className={styles.relogioAscii} aria-label="Relogio ASCII em tempo real">
			    {relogioAscii}
		    </pre>
        </div>
		
	)
}
