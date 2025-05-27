const Login = ({register}) => {
    return (
        <>
            <h1>Login</h1>
            <form method="post" action="http://localhost:3000/login">
                <input type="email" name="email" placeholder="Email"/>
                
                <input type="password" name="password" placeholder="Senha"/>

                <div className="center-column ">
                    <input type="submit" value="Login" className="btn"/>
                    <button onClick={()=>{register("register")}}>Cadastro</button>
                </div>
            </form>
            
        </>
    );
}


export { Login };