import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import { Button } from "@/components/ui/button";

const categoryImages = {
  indoor:
    "https://images.unsplash.com/photo-1545241047-6083a3684587?w=1200&q=80",
  outdoor:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
  succulents:
    "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=1200&q=80",
  flowers:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Plant Categories</h1>
          <p className="text-muted-foreground">Browse plants by category</p>
        </section>

        {categories.map((category) => {
          const categoryPlants = plants
            .filter((p) => p.category === category.id)
            .slice(0, 4);

          return (
            <section key={category.id} className="py-16 border-t">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  <img
                    src={categoryImages[category.id]}
                    alt={category.name}
                    className="rounded-lg w-full h-64 object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <Link to={`/shop?category=${category.id}`}>
                      <Button>View all</Button>
                    </Link>
                  </div>
                </div>

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
