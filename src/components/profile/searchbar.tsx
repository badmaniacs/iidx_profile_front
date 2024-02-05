import useSearchForm from '@/hooks/useSearchform';
import Searchresult from './searchresult';
import { useRef } from 'react';

const Searchbar = () => {
  const { formValues, handleInputChange } = useSearchForm();

  const formRef = useRef<HTMLInputElement>(null);

  const inputClearHandler = () => {
    if (formRef.current) {
      formRef.current.value = '';
    }
    formValues.title = '';
  };

  return (
    <>
      <div className="relative flex flex-col border-2 border-black bg-profileback text-white h-[45px]">
        <div className="flex flex-row">
          <select
            name="playtype"
            value={formValues.playtype}
            onChange={handleInputChange}
            className="h-10 border-2 border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          >
            <option key="SP" value="SP">
              SP
            </option>
            <option key="DP" value="DP">
              DP
            </option>
          </select>
          <select
            name="difficulty"
            value={formValues.difficulty}
            onChange={handleInputChange}
            className="h-10 border-2  border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          >
            <option key="N" value="N">
              N
            </option>
            <option key="H" value="H">
              H
            </option>
            <option key="A" value="A">
              A
            </option>
            <option key="L" value="L">
              L
            </option>
          </select>
          <select
            name="level"
            value={formValues.level}
            onChange={handleInputChange}
            className="h-10 border-2  border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          >
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (number) => (
                <option value={number} key={number}>
                  {number}
                </option>
              ),
            )}
          </select>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={formValues.title}
            ref={formRef}
            placeholder="추가하실 곡명을 검색해주세요."
            className="h-10 w-[50%] border-2 border-lgray border-opacity-30 bg-bbblack pl-3 pr-3 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-blue-500 focus:ring-opacity-50 shadow-ring-offset shadow-ring shadow-none"
          ></input>
        </div>
      </div>
      <Searchresult
        formValue={formValues}
        inputClearHandler={inputClearHandler}
      />
    </>
  );
};

export default Searchbar;
