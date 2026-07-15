import styles from "../styles/indisponivel.module.css"
import ProtectedGif from "./ProtectedGif"
import indisponivel from "../assets/Indisponível.gif"

export default function Indisponivel(){
    return(
        <div className={styles.container}>
            <ProtectedGif 
            src={indisponivel} 
            alt="indisponível" 
            className={styles.gif}
            />
            <div className={styles.centro}>
                <h2 className={styles.erro}>[ERROR]</h2>
                <h3 className={styles.legendaErro}>Unsupported viewport</h3>
            </div>
            <div className={styles.card}>
                <p className={styles.texto}>Este portfólio ainda não está disponível para telas médias ou pequenas.</p>
                <p className={styles.texto}>Redimensione a janela ou acesse em um computador.</p>
            </div>
        </div>
    )
}