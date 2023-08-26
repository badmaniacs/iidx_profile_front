import Link from 'next/link';

const Update = () => {

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-16">
      <div className="col-span-2 flex items-center gap-2 bg-theme-800 p-4 -mt-16">
        <p className="flex-1">
          In another tab of your browser, you must log in to an e-amagement
          account with a basic course enabled
        </p>
        <Link
          className="btn flex gap-2 mx-auto btn-small btn-primary"
          href="https://p.eagate.573.jp/"
        >
          e-amusement
        </Link>
      </div>
      <div className="col-span-2 flex items-center text-center flex-col gap-8 mb-16">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
