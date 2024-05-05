import './style.css'

export default function Banner(props) {
    return (
        <section className='sectionBanner'>
            <div className={`containerImg ${props.darkTheme? 'containerDark' : 'containerLight'}`}></div>

            <div className='textContainer'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}