import React, { useState } from "react";
import AuthService from "../../services/authentification/auth";

export function Profile() {


    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                    </h3>
            </header>
            <p>
                <strong>Token:</strong>{" "}
                {currentUser.accessToken}
            </p>
            <p>
                <strong>Id:</strong>{" "}
                {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong>{" "}
                {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    )
}