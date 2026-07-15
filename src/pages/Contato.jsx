import styles from "../styles/contato.module.css"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";


export default function Contato(){
    const { 
        register, 
        reset, 
        handleSubmit, 
        formState: { errors, isSubmitting }} = useForm({ 
            defaultValues: { 
                nome: "", email: "", assunto: "", mensagem: ""
            }
        })

    const [sucesso, setSucesso] = useState(false)
    const [fechar, setFechar] = useState(false)
    const [erroEnvio, setErroEnvio] = useState("")

    async function Submit(data){
        setErroEnvio("")

        if (data._gotcha) return

        const formId = import.meta.env.VITE_FORMSPREE_ID

        if (!formId) {
            setErroEnvio("O envio ainda não foi configurado. Adicione o ID do Formspree no arquivo .env.")
            return
        }

        try {
            const resposta = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    nome: data.nome.trim(),
                    email: data.email.trim(),
                    assunto: data.assunto.trim(),
                    mensagem: data.mensagem.trim(),
                    _subject: `[Portfólio] ${data.assunto.trim()}`,
                    _gotcha: data._gotcha,
                }),
            })

            if (!resposta.ok) {
                const resultado = await resposta.json().catch(() => null)
                const mensagem = resultado?.errors?.[0]?.message
                throw new Error(mensagem || "Não foi possível enviar a mensagem.")
            }

            reset()
            setSucesso(true)
        } catch (erro) {
            setErroEnvio(
                erro.message || "Não foi possível enviar agora. Tente novamente em alguns instantes."
            )
        }
    }

    function fecharSucesso() {
        setFechar(true)
        setTimeout(() => {
            setSucesso(false)
            setFechar(false)
        }, 400)
    }

    return(
        <div className={styles.container}>
            <div className={styles.primeiroLado}>
                <div className={styles.cabecalho}>
                    <p className={styles.titulo}>
                        <span>&gt;</span>
                        contato
                        <span className={styles.cursor}>_</span>
                    </p>
                    <div className={styles.separador}></div>
                    <p className={styles.textoIntro}>
                        Estou aberto a oportunidades de estágio, projetos de desenvolvimento de software, análise de dados e colaborações em que eu possa aprender, contribuir e transformar ideias em soluções reais. Vamos conversar!
                    </p>
                </div>
                <div className={styles.caixa}>
                    <div className={styles.cabecalhoFormulario}>
                        <p><span>&gt;</span> formulário</p>
                        <div className={styles.bolas}>
                            <div className={styles.vermelha}></div>
                            <div className={styles.laranja}></div>
                            <div className={styles.verde}></div>
                        </div>
                    </div>
                    <form className={styles.formulario} onSubmit={handleSubmit(Submit)} noValidate>
                        <div className={styles.cardFormulario}>
                        <label htmlFor="nome">nome</label>
                        {errors.nome?.message && <p className={styles.erro}>{errors.nome.message}</p>}
                        </div>
                        <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        placeholder="Seu nome"
                        {...register("nome",{ 
                            required: "Seu nome é obrigatório.",
                            validate: {
                                nomeValido: (value) => /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u.test(value.trim()) || "Use apenas letras no nome.",
                                minLength: (value) => value.trim().length > 2 || "Informe um nome válido, por favor."
                            }
                        })}
                        />
                        <div className={styles.cardFormulario}>
                        <label htmlFor="email">e-mail</label>
                        {errors.email?.message && <p className={styles.erro}>{errors.email.message}</p>}
                        </div>
                        <input type="email"
                        name="email" 
                        id="email"
                        placeholder="Seu e-mail"
                        autoComplete="email"
                        {...register("email",{ 
                            required: "Seu e-mail é obrigatório.",
                            validate: {
                                validarEmail: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Digite um e-mail válido.",
                            }
                        })} 
                        />
                        <div className={styles.cardFormulario}>
                        <label htmlFor="assunto">assunto</label>
                        {errors.assunto?.message && <p className={styles.erro}>{errors.assunto.message}</p>}
                        </div>
                        <input type="text"
                        name="assunto" 
                        id="assunto"
                        placeholder="assunto da mensagem"
                        {...register("assunto", {
                            required: "Digite um assunto, por favor.",
                            validate: {
                                ausente: (value) => value.trim().length > 0 || "Digite um assunto, por favor.",
                                minLength: (value) => value.trim().length > 3 || "O assunto não é suficiente."
                                }
                            }
                        )} 
                        />
                        <div className={styles.cardFormulario}>
                        <label htmlFor="mensagem">mensagem</label>
                        {errors.mensagem?.message && <p className={styles.erro}>{errors.mensagem.message}</p>}
                        </div>
                        <textarea
                        name="mensagem" 
                        id="mensagem"
                        placeholder="Escreva sua mensagem..."
                        {...register("mensagem",{
                            required: "Escreva uma mensagem, por favor.",
                            minLength: {
                                value: 50,
                                message: "Escreva pelo menos 50 caracteres."
                            }
                        })} 
                        />
                        <input
                            type="text"
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                            className={styles.honeypot}
                            {...register("_gotcha")}
                        />
                       <div style={{display: "flex", width: "100%"}}>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={isSubmitting}
                            >
                                <span>&gt;</span>
                                {isSubmitting ? "enviando..." : "enviar mensagem"}
                            </button> 
                            {erroEnvio && (
                                <div className={styles.erroEnvio}>
                                    <p role="alert" aria-live="assertive">
                                    <span>[ERRO]</span> {erroEnvio}
                                    </p>
                                </div>
                                
                            )}
                       </div>
                        
                    </form>
                </div>
            </div>
            <div className={styles.segundoLado}>
                <div className={styles.caixa2}>
                    <div className={styles.cabecalhoInformacao}>
                         <p><span>&gt;</span> informações</p>
                    </div>
                    <div className={styles.separador}></div>
                    <div className={styles.caixaInformacao}>
                        <div className={styles.cardInformacao}>
                            <MdOutlineMailOutline className={styles.icone}/>
                            <div className={styles.informacoes}>
                                <p className={styles.corInformacao}>e-mail</p>
                                <a
                                href="mailto:safforckssacks@gmail.com"
                                className={styles.styleInformacao}
                                >
                                    safforckssacks@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className={styles.cardInformacao}>
                            <FaLinkedin  className={styles.icone}/>
                            <div className={styles.informacoes}>
                                <p className={styles.corInformacao}>linkedin</p>
                                <a 
                                href="https://www.linkedin.com/in/rainer-sacks-726825349/"
                                className={styles.styleInformacao}
                                target="_blank"
                                rel="noreferrer"
                                >
                                    linkedin.com/in/rainer-sacks
                                </a>
                            </div>
                        </div>
                        <div className={styles.cardInformacao}>
                            <FaGithub  className={styles.icone}/>
                            <div className={styles.informacoes}>
                                <p className={styles.corInformacao}>github</p>
                                <a 
                                href="https://github.com/Safforcks"
                                className={styles.styleInformacao}
                                target="_blank"
                                rel="noreferrer"
                                >
                                    github.com/Safforcks
                                </a>
                            </div>
                        </div>
                        <div className={styles.cardInformacao}>
                            <CiLocationOn   className={styles.icone}/>
                            <div className={styles.informacoes}>
                                <p className={styles.corInformacao}>localização</p>
                                <p className={styles.styleInformacao}>Rio de Janeiro, Brasil</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.caixa2}>
                    <div className={styles.cabecalhoConectar}>
                        <p><span>&gt;</span> vamos nos conectar</p>
                    </div>
                    <div className={styles.separador}></div>
                    <div className={styles.caixaConectar}>
                        <p className={styles.textoConectar}>Se preferir, me envie um e-mail direto ou me conecte pelas redes.</p>
                        <p className={styles.comando}>rainer@portfolio:~$ connect --me</p>
                        <div className={styles.dicaBox}>
                            <FaRegLightbulb className={styles.iconeDica}/>
                            <p className={styles.textoDica}>boas conexões constroem grandes projetos.</p>
                        </div>
                    </div>
                </div>
            </div>
            {sucesso && (
                <div className={styles.overlaySucesso} role="presentation">
                <div
                    className={`${styles.cardSucesso} ${fechar ? styles.fechando : ''}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="titulo-sucesso"
                    aria-describedby="descricao-sucesso"
                >
                    <img 
                    src="https://img.icons8.com/?size=100&id=xdgabzX5Ui5N&format=png&color=00FF01" 
                    alt="sucesso" 
                    className={styles.iconeMensagem}
                    />
                    <p className={styles.mensagemEnviada} id="titulo-sucesso">Mensagem enviada!</p>
                    <p className={styles.legendaMensagem} id="descricao-sucesso">Recebi seus dados de contato e sua mensagem no meu e-mail.</p>
                    <div className={styles.separador}></div>
                    <button className={styles.botaoMensagem} onClick={fecharSucesso}>Ok!</button>
                </div>
                </div>
            )}
        </div>
    )
}