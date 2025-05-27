const Register = ({login}) => {
    return (
        <>
            <h1>Cadastro</h1>
            <form method="post" action="http://localhost:3000/users">
                <input type="text" name="name" placeholder="Nome" />
                
                <input type="email" name="email" placeholder="Email"/>
                
                <input type="password" name="password" placeholder="Senha"/>

                <div className="center-column ">
                    <input type="submit" value="Cadastrar" className="btn"/>
                    <button onClick={()=>{login("login")}}>Login</button>
                </div>
            </form>
            
        </>
    );
}


export { Register };