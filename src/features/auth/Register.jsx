import { useFormik } from "formik";
import ButtonForm from "./ButtonForm";
import * as Yup from "yup";
import InputField from "../../ui/InputField";

const initialValues = {
  email: "",
  userName:"",
  password: "",
};

const validationSchema = Yup.object({
  userName: Yup.string()
    .required("لطفا نام کاربری را وارد کنید")
    .min(3, "نام کاربری کوتاه است"),
  email: Yup.string()
    .email("ایمیل صحیح نیست")
    .required("لطفا ایمیل را وارد کنید"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور کمتر از 8 کلمه است"),
});

const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        label={"نام کاربری"}
        type={"text"}
        name={"userName"}
        placeHolder={"نام کاربری خود را وارد کنید"}
        touched={formik.touched.userName}
        error={formik.errors.userName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
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

      <ButtonForm title={"ثبت نام"} />
    </form>
  );
};

export default Register;
