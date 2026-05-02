interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-blue-600/50 transition-all group">
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-3">{title}</h3>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
