/* eslint-disable */
import React from "react";
import { useParams } from "react-router-dom";
import EditPage from "../components/page/editPage";
import UserPage from "./../components/page/userPage";
import UsersListPage from "./../components/page/usersListPage";

const Users = ({ location }) => {


    const params = useParams();

    const { userId, edit } = params;

    return (
        <>
            {userId && !edit ? (
                <UserPage userId={userId} />
            ) : edit ? (
                <EditPage user={location.propsSearch} />
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
