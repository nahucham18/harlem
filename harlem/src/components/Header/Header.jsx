import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Status from '../Status/Status'

const Header = ( ) =>{
    return (
        <header className={style.container}>
            <Link to={'.'}>
                <img className={style.logo} src='https://menu.harlemburgas.com.ar/assets/img/logo.png?v=2' alt='harlem'/>
            </Link>
            <Status/>
        </header>
    )
}

export default Header