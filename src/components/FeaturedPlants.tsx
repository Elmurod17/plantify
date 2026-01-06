import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { plants } from "@/data/plants";
import PlantCard from "./PlantCard";
import { Button } from "@/components/ui/button";

const FeaturedPlants = () => {
  const featuredPlants = plants.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Plants
            </h2>
            <p className="text-muted-foreground">
              Our most popular picks, loved by plant parents everywhere
            </p>
          </div>

          <Link to="/shop">
            <Button variant="ghost" className="flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
