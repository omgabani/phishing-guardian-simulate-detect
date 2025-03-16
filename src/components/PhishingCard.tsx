
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";

interface PhishingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const PhishingCard = ({ title, description, icon, className = "" }: PhishingCardProps) => {
  return (
    <Card className={`card-shadow hover:shadow-lg transition-shadow h-full ${className}`}>
      <CardContent className="pt-6">
        <div className="flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-center mb-2">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PhishingCard;
