import InputField from "../../ui/InputField";
import { useFormik } from "formik";
import ButtonForm from "./ButtonForm";
import * as Yup from "yup";


const initialValues = {
  forget: "",
};

const validationSchema = Yup.object().shape({
  forget: Yup.string()
    .email("ایمیل صحیح نیست")
    .required("لطفا ایمیل را وارد کنید"),
});

const ForgetPassword = () => {
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
        label={"ایمیل"}
        type={"email"}
        name={"forget"}
        placeHolder={"ایمیل خود را وارد کنید"}
        touched={formik.touched.forget}
        error={formik.errors.forget}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.forget}
      />
      <ButtonForm title={"ارسال ایمیل"} />
    </form>
  );
};

export default ForgetPassword;
