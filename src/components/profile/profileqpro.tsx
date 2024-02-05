interface ProfileqproProps {
  qpro: string;
}

const Profileqpro: React.FC<ProfileqproProps> = ({ qpro }) => {
  return (
    <div className="col-span-2 ">
      <picture>
        <img
          src={`${qpro}?timestamp=${new Date().getTime()}`}
          alt="qpro"
          className="w-full h-auto"
          style={{ marginLeft: '-20px' }}
        />
      </picture>
    </div>
  );
};

export default Profileqpro;
