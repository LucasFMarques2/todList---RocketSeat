import style from './style.module.css'
import logo from '../../assets/logo.svg'

export function Header(){
    return(
        <div className={style.header}>
            <img src={logo} alt="Logo todo List" />
        </div>
    )
}