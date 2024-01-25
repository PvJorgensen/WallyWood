


export const ContentWrapper = ({children, title}) => {
    return(
        <div className={style.contentWrapper}>
            <h1>{title}</h1>
            <div>
            {children}
            </div>
        </div>
    )
}