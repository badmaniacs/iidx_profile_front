const Forgotpasswrod = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-8">
      <h2 className="text-2xl font-bold">Forgot Password</h2>
      <div className="flex flex-col gap-8 w-80">
        <form className="flex flex-col gap-4">
          <input type="text" name="email" placeholder="Email" />
          <button className="btn flex gap-2 btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpasswrod;
