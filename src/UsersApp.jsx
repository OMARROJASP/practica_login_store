import {UserList} from "./components/UserList.jsx";
import {useUsers} from "./hooks/useUsers.js";
import {UserModalForm} from "./components/UserModalForm.jsx";
import {UserPage} from "./pages/UserPage.jsx";

export const UsersApp = () => {


    return    (
        <>
        <h1>Store</h1>
            <UserPage/>
        </>
    )
}