
import { CircleAlert, Search, Shield, UserX, Zap } from "lucide-react";

const StatItem = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg card-shadow">
    <div className="mb-3 text-secondary">{icon}</div>
    <div className="text-2xl md:text-3xl font-bold mb-1">{value}</div>
    <div className="text-sm text-gray-500 text-center">{label}</div>
  </div>
);

const PhishingStats = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Phishing By The Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            value="83%" 
            label="of organizations experienced phishing attacks in 2023" 
            icon={<CircleAlert size={36} />} 
          />
          <StatItem 
            value="$4.8M" 
            label="average cost of a phishing attack to a business" 
            icon={<Zap size={36} />} 
          />
          <StatItem 
            value="65%" 
            label="of attackers use spear phishing as primary attack vector" 
            icon={<UserX size={36} />} 
          />
          <StatItem 
            value="37%" 
            label="of untrained users fail to identify phishing attempts" 
            icon={<Search size={36} />} 
          />
        </div>
      </div>
    </section>
  );
};

export default PhishingStats;
