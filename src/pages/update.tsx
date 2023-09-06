import useGeneratePass from '@/hooks/useGeneratePass';
import useGetProfile from '@/hooks/useUpdateProfile';
import Link from 'next/link';

const Update = () => {
  const { generateHandler, status, canGenerate } = useGeneratePass();
  const {updateHandler} = useGetProfile();
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-16">
      <div className="col-span-2 flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">
          Personal Updater Token
        </h2>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="code flex items-center">
            <div className="flex-1 relative h-[48px]">
              <div className="overflow-hidden overflow-ellipsis absolute left-0 top-0 w-full h-full leading-[48px] pr-4">
                <span className="opacity-50">{status}</span>
              </div>
            </div>
            <div className="h-full flex items-center justify-center">
              <button
                className="btn btn-primary"
                disabled={!canGenerate}
                onClick={generateHandler}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">Getting started</h2>
        <div className="flex flex-col gap-4">
          After Generate Token
          <div className="code">
            javascript:$.getScript(&quot;https://iidxdatascraper.s3.ap-northeast-2.amazonaws.com/bundle.js&quot;)
          </div>
          <p>
            Open F12 in the e-amusegment gate, copy and paste the following
            script, and run it.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold svelte-1vnrqhj">Using Updater</h2>
        <div className="flex flex-col gap-4">
          <p>
            When the update is loaded, please enter the token and proceed with
            the operation.
          </p>
        </div>
      </div>
      <button onClick={updateHandler}>update</button>
    </div>
  );
};

export default Update;
