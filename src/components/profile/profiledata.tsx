interface profileDataProps {
  category: string;
  data: string;
}

const Profiledata: React.FC<profileDataProps> = ({ category, data }) => {
  return (
    <div
      className="bg-black ml-5 mb-3 p-2 w-[79%] flex justify-between"
      style={{ fontFamily: 'MonoplexKRWideNerd-Bold' }}
    >
      <p>{category}</p>
      <p>{data}</p>
    </div>
  );
};

export default Profiledata