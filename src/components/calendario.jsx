import { useEffect, useState } from "react";
import styles from "../styles/calendario.module.css"

export default function Calendario() {
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ]

function formatarDoisDigitos(valor) {
    return String(valor).padStart(2, "0")
}

function gerarDiasCalendario(dataAtual) {
    const ano = dataAtual.getFullYear()
    const mes = dataAtual.getMonth()
    const primeiroDiaSemana = new Date(ano, mes, 1).getDay()
    const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate()
    const dias = []

    for (let indice = 0; indice < primeiroDiaSemana; indice += 1) dias.push(null)
    for (let dia = 1; dia <= ultimoDiaMes; dia += 1) dias.push(dia)
    while (dias.length % 7 !== 0) dias.push(null)

    return dias
}

    const [agora, setAgora] = useState(() => new Date())

    useEffect(() => {
        const intervalo = window.setInterval(() => {
            setAgora(new Date())
        }, 1000)

        return () => window.clearInterval(intervalo)
    }, [])

    const calendarioDias = gerarDiasCalendario(agora)
    const horaAtual = `${formatarDoisDigitos(agora.getHours())}:${formatarDoisDigitos(agora.getMinutes())}`
    const dataAtual = `${formatarDoisDigitos(agora.getDate())}/${formatarDoisDigitos(agora.getMonth() + 1)}/${agora.getFullYear()}`
    const tituloMes = `${meses[agora.getMonth()]} ${agora.getFullYear()}`
    const diaAtual = agora.getDate()

    return(
        <div className={styles.cal}>
            <div className={styles.calendarioBox}>
                <p className={styles.calMes}>{tituloMes}</p>
                <div className={styles.calGrade}>
                    {diasSemana.map((diaSemana) => (
                        <p key={diaSemana} className={styles.calDiaSemana}>{diaSemana.slice(0, 3)}</p>
                    ))}
                    {calendarioDias.map((dia, indice) => {
                            if (dia === null) {
                            return <span key={`vazio-${indice}`} className={styles.calDiaVazio}></span>
                        }

                        const classeDia = dia === diaAtual ? styles.calDiaSelecionado : styles.calDia

                        return <span key={dia} className={classeDia}>{dia}</span>
                    })}
                </div>
            </div>
            <div className={styles.calLinha}></div>
            <div className={styles.horaBox}>
                <p className={styles.horaNumero}>{horaAtual}</p>
                <p className={styles.horaDia}>{diasSemana[agora.getDay()]}</p>
                <p className={styles.horaData}>{dataAtual}</p>
            </div>
        </div>
    )
}