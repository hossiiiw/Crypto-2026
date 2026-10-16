import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AppAuthContext } from "../context/Auth/AuthContext";

function Register() {
  const { t } = useTranslation();
  const { login, registerHandler } = useContext(AppAuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language" || "en"),
  );

  const registerFormHandler = (data) => {
    // console.log(userInfo);
    registerHandler(data);
    reset();
  };

  login && navigate("/");

  return (
    <>
      <main className="grid min-h-[calc(98vh-64px)] text-app-text place-items-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-app-text/10 bg-app-surface p-7 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-app-primary text-xl font-black">
              C
            </div>
            <h1 className="mt-5 text-3xl font-black">
              {t("register.title-1")}
            </h1>
            <p className="mt-2 text-sm text-app-text-muted">
              {t("register.title-2")}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(registerFormHandler)}
            className="mt-8 space-y-4"
          >
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-firstname")}
              {...register("firstname", { required: "Enter your firstname" })}
            />
            <p>{errors.firstname && errors.firstname.message}</p>
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-lastname")}
              {...register("lastname", { required: "Enter your lastname" })}
            />
            <p>{errors.lastname && errors.lastname.message}</p>
            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-phone")}
              {...register("number", { required: "Enter your phone number" })}
            />
            <p>{errors.number && errors.number.message}</p>

            <input
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-app-primary"
              placeholder={t("register.input-email")}
              type="email"
              {...register("email", { required: "Enter ypur email" })}
            />
            <p>{errors.email && errors.email.message}</p>
            <div className="relative">
              <span
                onClick={() => {
                  setToggle(!toggle);
                }}
                className={
                  language === "en"
                    ? "absolute right-3 top-3 cursor-pointer"
                    : "absolute left-3 top-3 cursor-pointer"
                }
              >
                {toggle ? <Eye /> : <EyeOff />}
              </span>
              <input
                id="password"
                className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-primary"
                placeholder={t("login.input-pass")}
                type={toggle ? "text" : "password"}
                {...register("password", {
                  required: t("login.pass-re"),
                  minLength: {
                    value: 8,
                    message: t("login.pass-min"),
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                    message: t("login.pass-pattern"),
                  },
                })}
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <button
              type="submit"
              className="w-full rounded-xl bg-app-primary py-3 font-bold cursor-pointer hover:bg-app-primary-hover"
            >
              {t("register.create")}
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-app-text-muted">
            <span className="h-px flex-1 bg-app-text/10"></span>
            {t("register.or")}
            <span className="h-px flex-1 bg-app-text/10"></span>
          </div>
          <button className="w-full rounded-xl border border-app-text/10 py-3 font-semibold">
            {t("register.google")}
          </button>
          <p className="mt-6 text-center text-sm text-app-text-muted">
            {t("register.title-3")}
            <Link className="font-bold text-app-primary" to="/login">
              {t("register.title-4")}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
