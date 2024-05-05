import './style.css'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import iconeSol from '../../../public/sun.png'
import iconeLua from '../../../public/moon.png'

export default function Header(props) {
    return (
        <header className={`header ${props.darkTheme? 'headerDark' : 'headerLight'}`}>
            <Image src={Logo} alt='Logo' className='imgLogo'/>
            <button className={`button ${props.darkTheme? 'buttonDark' : 'buttonLight'}`} onClick={props.changeTheme}>
                <Image src={props.darkTheme? iconeSol : iconeLua} alt='' className='imgButton'/>
            </button>
        </header>
    )
}
