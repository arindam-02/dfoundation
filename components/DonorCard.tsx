interface DonorProps {
  name: string;
  location: string;
}

const DonorCard = ({ name, location }: DonorProps) => {
  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-hidden  hover:shadow-lg transition-shadow">
        <div className="p-6">
          <h3 className="text-lg font-extrabold text-cyan-800">{name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-semibold">
            {location}
          </p>
        </div>
      </div>
    </>
  );
};

export default DonorCard;
