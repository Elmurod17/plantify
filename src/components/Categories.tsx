import { Link } from 'react-router-dom';
import { categories } from '@/data/plants';
import { cn } from '@/lib/utils';

const categoryImages: Record<string, string> = {
  indoor: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80',
  outdoor: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  succulents: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80',
  flowers: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80',
};

const Categories = () => {
  return (
    <section className="py-20 bg-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find the perfect plant for every corner of your space
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={cn(
                'group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft card-hover animate-fade-up'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="font-display text-xl font-semibold text-cream mb-1">
                  {category.name}
                </h3>
                <p className="text-cream/80 text-sm mb-2">{category.description}</p>
                <span className="text-cream/60 text-sm">{category.count} plants</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
