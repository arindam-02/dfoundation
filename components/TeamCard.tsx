import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden  hover:shadow-lg transition-shadow">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt="teamMember"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-extrabold text-lime-700">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
