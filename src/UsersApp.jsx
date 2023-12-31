
import {UserPage} from "./pages/UserPage.jsx";
import {useAuth} from "./auth/hooks/useAuth.js";
import {Navbar} from "./components/layout/Navbar.jsx";
import {LoginPage} from "./auth/pages/LoginPage.jsx";

export const UsersApp = () => {
    const { login, handlerLogin, handlerLogout } = useAuth();

    return    (
        <>

            {
                login.isAuth ?
                    (
                       <>
                           <Navbar login={ login }
                                   handlerLogout={handlerLogout}/>
                           <UserPage/>
                       </>

                    ):
                    <LoginPage handlerLogin={handlerLogin}/>
            }

        </>
    )
}