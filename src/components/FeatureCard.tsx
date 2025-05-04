import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-light rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-4">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
}

export default FeatureCard;
