import './style.css'

export default function Card(props) {
    return (
        <div className={`cardBox ${props.darkTheme? 'cardDark' : 'cardLight'}`}>
            <p className='primeiroParagrafo'>{props.data}</p>
            <h4>{props.titulo}</h4>
            <p className='segundoParagrafo'>{props.empresa}</p>
            <p>{props.paragrafo}</p>
        </div>
    )
}