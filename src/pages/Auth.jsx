import { MdOutlineHandshake } from "react-icons/md";
import Login from "../features/auth/Login";
import { useState } from "react";
import Register from "./../features/auth/Register";
import ActiveForm from "../features/auth/ActiveForm";
import ForgetPassword from "../features/auth/ForgetPassword";

const Auth = () => {
  const [show, setShow] = useState(0);
  console.log(setShow);

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="rounded-xl relative py-3 md:px-7 px-4 md:w-[480px] w-[90%] bg-white mx-auto shadow space-y-9">
        <div className="flex items-center justify-center gap-x-2 mt-5">
          <span className="text-3xl font-semibold"> ورود به</span>
          <MdOutlineHandshake size={40} className="text-red-500" />
          <h1 className="text-3xl font-semibold text-red-600">کَفِته</h1>
        </div>
        {show == 0 ? <Login /> : show == 1 ? <Register /> : <ForgetPassword />}
        <p className="text-center">
          با ورود به کَفِته ،{" "}
          <span className="font-semibold">قوانین کَفِته</span> را می‌پذیرم
        </p>
        <ActiveForm show={show} setShow={setShow} />
      </div>
    </section>
  );
};

export default Auth;
