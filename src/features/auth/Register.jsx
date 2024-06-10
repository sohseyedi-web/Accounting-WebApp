import ButtonForm from "./ButtonForm"

const Register = () => {
  return (
    <form>
      <div className="my-3">
        <label htmlFor="text" className="mb-3 block text-lg">
          نام کاربری
        </label>
        <input
          placeholder="نام کاربری خود را وارد کنید"
          type="email"
          className="h-[55px] border border-gray-400 w-full rounded-xl focus:border-gray-600 transition-all duration-300 outline-none px-3 text-lg"
        />
      </div>
      <div className="my-3">
        <label htmlFor="email" className="mb-3 block text-lg">
          ایمیل
        </label>
        <input
          placeholder="ایمیل خود را وارد کنید"
          type="email"
          className="h-[55px] border border-gray-400 w-full rounded-xl focus:border-gray-600 transition-all duration-300 outline-none px-3 text-lg"
        />
      </div>
      <div className="my-3">
        <label htmlFor="email" className="mb-3 block text-lg">
          رمز عبور
        </label>
        <input
          placeholder="رمز خود را وارد کنید"
          type="email"
          className="h-[55px] border border-gray-400 w-full rounded-xl focus:border-gray-600 transition-all duration-300 outline-none px-3 text-lg"
        />
      </div>
      <ButtonForm title={"ثبت نام"} />
    </form>
  )
}

export default Register