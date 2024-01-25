import style from '../../Style/Header.module.scss'
import { NavMain } from './NavMain'


export const Header = () => {
    return (
        <>
            <header className={style.headerMain}>
                <h1>WallyWood</h1>
                <NavMain></NavMain>
            </header>
        </>
    )
}