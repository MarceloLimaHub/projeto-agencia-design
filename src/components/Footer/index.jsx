import Image from 'next/image'
import Logo from '../../../public/logo.png'
import iconeFacebook from '../../../public/facebook.png'
import iconeTwitter from '../../../public/twitter.png'
import iconeLinkedin from '../../../public/linkedin.png'
import iconeDribble from '../../../public/dribble.png'
import iconeBehance from '../../../public/behance.png'
import iconeGooglePlus from '../../../public/google-plus.png'
import './style.css'

export default function Footer(props) {
    return (
        <footer className={`footer ${props.darkTheme? 'footerDark' : 'footerLight'}`}>
            <Image src={Logo} className='imgLogo'/>
            <p className='paragraph'>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

            <div className='socialContainer'>
                <Image src={iconeFacebook} className='socialIcon'/>
                <Image src={iconeTwitter} className='socialIcon'/>
                <Image src={iconeLinkedin} className='socialIcon'/>
                <Image src={iconeDribble} className='socialIcon'/>
                <Image src={iconeBehance} className='socialIcon'/>
                <Image src={iconeGooglePlus} className='socialIcon'/>
            </div>

            <div className='copyright'>
                <p>Copyright 2022 &copy;<span>Marcelo Lima</span></p>
            </div>
        </footer>
    )
}