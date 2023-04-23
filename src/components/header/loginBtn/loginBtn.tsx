const LoginBtn = () => {
  return (
    <div className="w-2/5 flex justify-end order-2 md:order-3 md:w-1/6">
      <button
        type="button"
        className="font-secondary border-2 text-center font-medium border-lightblue text-lightblue rounded-md px-5 py-1 first-letter:capitalize hover:text-white hover:bg-lightblue transition-all"
      >
        log in
      </button>
    </div>
  );
};
export default LoginBtn;
