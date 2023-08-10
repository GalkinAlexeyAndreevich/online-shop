import React, { useContext } from "react";
import { Context } from "../..";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to={SHOP_ROUTE}>
                    Девайс для тебя
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            style={{ marginLeft: "10px" }}
                            onClick={() => {
                                user.setIsAuth(false);
                                navigate(LOGIN_ROUTE)
                            }}>
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => {
                                user.setIsAuth(true);
                                navigate(SHOP_ROUTE)
                            }}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
