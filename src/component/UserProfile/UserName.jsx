export const UserName = ({name, age}) => {
    console.log(name, typeof age)
    return(
        <div>
            <b>Username: <span>{name}</span></b>
        </div>
    )
}