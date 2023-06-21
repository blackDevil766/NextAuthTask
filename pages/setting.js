import { useSession } from "next-auth/react";
import Image from "next/image";

const Setting = () => {
    const { data: session, status, user } = useSession();
console.log(session);
  return (
    <div className="setting-container">
      <h2>hello MR {session.user.name}</h2>
      <img src={session.user.image}/>
    </div>
  )
}

export default Setting


Setting.Layouts = "L2";
