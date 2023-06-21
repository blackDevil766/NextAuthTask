import React from "react";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import validator from "email-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcBusinessman } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header2 = () => {
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });

  const [pageState, setPageState] = useState({
    error: "",
    processing: false,
  });

  const handleAuth = async () => {
    setPageState((old) => ({ ...old, processing: true, error: "" }));
    signIn("credentials", {
      ...authState,
      redirect: false,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setPageState((old) => ({ ...old, processing: false, error: "" }));
        } else {
          setPageState((old) => ({
            ...old,
            processing: false,
            error: response.error,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
        setPageState((old) => ({ ...old, processing: false, error: "" }));
      });
  };

  console.log(authState);
  const { data: session, status, user } = useSession();

  if (status === "authenticated") {
    const token = session.user;
  } else {
    console.log(status);
  }

  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpen = () => setOpenSignUp(true);
  const handleClose = () => setOpenSignUp(false);

  const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <header>
      <div className="nav-container">
        <Link className="homeLink" href="/">
          <h1>
            <span>Swipe</span> Wire
          </h1>
        </Link>
        

        <div>
          <ul className="user-authentication">
            {status === "unauthenticated" && (
              <li className="login">
                <Button id="logs" onClick={handleOpen}>
                  <FcMinus className="signInIco" />
                  Sign Up
                </Button>
              </li>
            )}

            <Modal
              open={openSignUp}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box component="form" sx={style}>
                <h1 className=" box-title">Sign Up</h1>

                <TextField id="outlined-basic" label="Email" variant="filled" />
                <TextField
                  id="filled-basic"
                  type="text"
                  label="Password"
                  variant="filled"
                />
                <br />
                <Button type="submit" variant="contained" color="success">
                  Sign Up
                </Button>
              </Box>
            </Modal>

            {status === "unauthenticated" && (
              <li className="signIn">
                <Button id="logs" onClick={handleOpenSignIn}>
                  <FcBusinessman className="signInIco" />
                  sign In
                </Button>
              </li>
            )}

            <Modal
              open={openSignIn}
              onClose={handleCloseSignIn}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* {
                pageState.error !== '' && <Alert severity="error">{pageState.error}</Alert>
              } */}
              <Box component="form" sx={style}>
                <h1 className=" box-title">Sign In</h1>

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  onChange={(s) =>
                    setAuthState((pre) => ({ ...pre, email: s.target.value }))
                  }
                  value={authState.email}
                />
                <TextField
                  id="filled-basic"
                  type="text"
                  label="Password"
                  variant="filled"
                  onChange={(s) =>
                    setAuthState((pre) => ({
                      ...pre,
                      password: s.target.value,
                    }))
                  }
                  value={authState.password}
                />
                <br />
                <Button
                  disabled={pageState.processing}
                  onClick={handleAuth}
                  variant="contained"
                  color="success"
                >
                  Sign In
                </Button>

                <div>
                  <a className="github" href="/api/auth/signin">
                    <AiFillGithub />
                  </a>
                </div>
              </Box>
            </Modal>

            {status === "authenticated" && (
              <li className="signIn">
                <Button
                  href="/api/auth/signout"
                  id="logs"
                  variant="contained"
                  color="error"
                >
                  {/* <FcBusinessman className="signInIco" /> */}
                  sign Out
                </Button>
              </li>
            )}

            <li className="cart">
              <Link href="/cart">
                <Button variant="contained" id="logs">
                  <MdOutlineShoppingCart className="signInIco" />
                  Cart
                </Button>
              </Link>
            </li>

            {status === "authenticated" && (
              <li>
                <Link href="http://localhost:3000/setting">
                  <img className="userSittingIco" src={session.user.image} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header2;

