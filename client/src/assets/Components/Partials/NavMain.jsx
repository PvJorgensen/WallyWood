import style from '../../Style/NavMain.module.scss'



export const NavMain = () => {
    return(
        <nav className={style.navMain}>
            <ul>
                <li>HOME</li>
                <li>PLAKATER</li>
                <li>OM OS</li>
                <li>KONTAKT</li>
                <li>KURV</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}