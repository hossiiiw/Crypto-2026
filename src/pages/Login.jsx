import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AppAuthContext } from "../context/Auth/AuthContext";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useContext(AppAuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { getUserInfo } = useContext(AppAuthContext);
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language" || "en"),
  );

  const onSubmitForm = (data) => {
    const result = getUserInfo(data.email, data.password);

    if (result.success) {
      // console.log("ورود موفق بود", result.user);
      navigate("/dashboard");
      reset();
    } else {
      console.log(result.message);
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    setLanguage(lang);
  }, [language]);

  login && navigate("/dashboard");
  return (
    <>
      <main className="grid min-h-[calc(99vh-64px)] place-items-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-app-text/10 bg-app-surface p-7 shadow-2xl text-app-text">
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-app-primary text-xl font-black">
              C
            </div>

            <h1 className="mt-5 text-3xl font-black">{t("login.wellcome")}</h1>

            <p className="mt-2 text-sm text-app-text-muted">
              {t("login.title-2")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="mt-8 space-y-4"
          >
            <input
              id="email"
              className="w-full rounded-xl border border-app-text/10 bg-app-input px-4 py-3 outline-none focus:border-primary"
              placeholder={t("login.input-email")}
              type="email"
              {...register("email", { required: t("login.email-m") })}
            />
            {errors.email && <p>{errors.email.message}</p>}
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
            <label className="flex items-center gap-2 text-sm text-app-text-muted">
              <input type="checkbox" />
              {t("login.remember")}
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-app-primary py-3 font-bold hover:bg-app-primary-hover cursor-pointer"
            >
              {t("login.login-btn")}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-app-text-muted">
            <span className="h-px flex-1 bg-app-text/10"></span>
            {t("login.or")}
            <span className="h-px flex-1 bg-app-text/10"></span>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl border border-app-text/10 py-3 font-semibold cursor-pointer"
          >
            {t("login.google")}
          </button>

          <p className="mt-6 text-center text-sm text-app-text-muted">
            {t("login.title-1")}
            <Link className="font-bold text-app-primary" to="/register">
              {t("login.title-3")}
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
