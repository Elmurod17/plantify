import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories, plants } from '@/data/plants';
import PlantCard from '@/components/PlantCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoryImages: Record<string, string> = {
  indoor: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=1200&q=80',
  outdoor: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
  succulents: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&q=80',
  flowers: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80',
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-nature">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Plant Categories
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Explore our curated collections of beautiful plants for every space and lifestyle.
            </p>
          </div>
        </section>

        {categories.map((category, index) => {
          const categoryPlants = plants.filter((p) => p.category === category.id).slice(0, 4);

          return (
            <section
              key={category.id}
              className={index % 2 === 0 ? 'bg-background' : 'bg-nature'}
            >
              <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
                      <img
                        src={categoryImages[category.id]}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-4xl mb-4 block">{category.icon}</span>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {category.description}. Browse our collection of {category.count} carefully selected plants.
                    </p>
                    <Link to={`/shop?category=${category.id}`}>
                      <Button variant="nature">
                        View All {category.name}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Category Plants */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryPlants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
