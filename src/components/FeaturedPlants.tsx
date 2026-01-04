import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { plants } from '@/data/plants';
import PlantCard from './PlantCard';
import { Button } from '@/components/ui/button';

const FeaturedPlants = () => {
  const featuredPlants = plants.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Plants
            </h2>
            <p className="text-muted-foreground">
              Our most popular picks, loved by plant parents everywhere
            </p>
          </div>
          <Link to="/shop">
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlants.map((plant, index) => (
            <div
              key={plant.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlantCard plant={plant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
