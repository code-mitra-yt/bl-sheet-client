import { cn } from "@/lib/utils";
import { FeatureType } from "@/types";

interface FeatureCardProps {
  item: FeatureType;
}

const FeatureCard = ({ item }: FeatureCardProps) => {
  return (
    <div className="p-3 sm:p-6 rounded-lg border">
      <item.Icon className={cn(item.color)} size={30} />
      <h1 className="text-foreground font-semibold mt-4">{item.title}</h1>
      <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>
    </div>
  );
};

export default FeatureCard;
