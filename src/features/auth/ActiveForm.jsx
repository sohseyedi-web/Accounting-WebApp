const ActiveForm = ({ show, setShow }) => {
  return (
    <div className="w-full bg-white absolute gap-x-2 shadow -top-24 left-0 rounded-xl flex items-center justify-between p-2">
      <ButtonActive
        show={show}
        onShow={() => setShow(0)}
        value={0}
        title={"ورود"}
      />
      <ButtonActive
        show={show}
        onShow={() => setShow(1)}
        value={1}
        title={"ثبت نام"}
      />
      <ButtonActive
        show={show}
        onShow={() => setShow(2)}
        value={2}
        title={"فراموشی رمز"}
      />
    </div>
  );
};

export default ActiveForm;

const ButtonActive = (props) => {
  const { show, value, title, onShow } = props;

  return (
    <button
      onClick={onShow}
      className={`py-1 w-[33%] text-center rounded-xl transition-all duration-300${
        show == value
          ? "font-medium opacity-100 bg-gray-100"
          : " font-normal opacity-90"
      }`}
    >
      {title}
    </button>
  );
};
