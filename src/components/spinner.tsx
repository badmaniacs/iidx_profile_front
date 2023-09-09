const Spinner = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-white opacity-70 flex items-center justify-center z-50">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  );
};

export default Spinner;
