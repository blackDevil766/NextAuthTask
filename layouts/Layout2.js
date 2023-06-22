import { useEffect, useState } from "react";
import Header from "../componants/header";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const Layout2 = ({ children }) => {
  const [load, setLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const locked = async () => {
      const session = getSession();
      console.log(session);
      if (!session) {
        router.push("/");
      } else {
        setLoad(false);
      }
    };
    locked();
  }, [router]);

  return (
    <>
      {load ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <Header />
          <div>
            <main className="about-container">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout2;
