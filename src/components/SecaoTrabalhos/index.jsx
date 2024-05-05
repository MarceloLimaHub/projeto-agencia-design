import Card from '../Card'
import './style.css'

export default function SecaoTrabalhos(props) {
    return (
        <section className={`workSection ${props.darkTheme ? 'workSectionDark' : 'workSectionLight'}`}>
            <div className='containerText'>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className='cardContainer limitaSecao'>
                <Card
                    darkTheme={props.darkTheme}
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card 
                    darkTheme={props.darkTheme}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    />
                <Card 
                    darkTheme={props.darkTheme}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
    )
}