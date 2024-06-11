import { useFormik } from "formik";
import ButtonForm from "./ButtonForm";
import * as Yup from "yup";
import InputField from "../../ui/InputField";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل صحیح نیست")
    .required("لطفا ایمیل را وارد کنید"),
  password: Yup.string()
    .min(8, "رمز عبور کمتر از 8 کلمه است")
    .required("رمز عبور را وارد کنید"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label={"ایمیل"}
        type={"email"}
        name={"email"}
        placeHolder={"ایمیل خود را وارد کنید"}
        touched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <InputField
        label={"رمز عبور"}
        type={"password"}
        name={"password"}
        placeHolder={"رمز عبور خود را وارد کنید"}
        touched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <ButtonForm title={"ورود"} />
    </form>
  );
};

export default Login;
