import { Link } from "react-router-dom";
import { categories } from "@/data/plants";

const categoryImages = {
  indoor:
    "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80",
  outdoor:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  succulents:
    "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
  flowers:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
};

const Categories = () => {
  return (
    <section className="py-20 bg-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Find the perfect plant for every corner of your space
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative rounded-2xl overflow-hidden shadow-soft hover:opacity-95 transition"
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 w-full p-4 text-center text-white">
                <div className="text-3xl mb-1">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
                <span className="text-xs opacity-70">
                  {category.count} plants
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
