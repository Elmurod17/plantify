import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Minus, Plus, ChevronLeft, Sun, Droplets, Leaf, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { plants } from '@/data/plants';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import PlantCard from '@/components/PlantCard';

const ProductDetail = () => {
  const { id } = useParams();
  const plant = plants.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  if (!plant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Plant not found</h1>
          <Link to="/shop">
            <Button variant="nature">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(plant);
    }
    toast({
      title: 'Added to cart! 🌿',
      description: `${quantity} x ${plant.name} added to your cart.`,
    });
  };

  const relatedPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-card">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover"
            />
            {plant.originalPrice && (
              <span className="absolute top-4 left-4 px-4 py-2 rounded-full bg-destructive text-destructive-foreground font-semibold">
                Sale
              </span>
            )}
          </div>

          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-leaf-light text-leaf-dark text-sm font-medium capitalize">
              {plant.category}
            </span>

            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {plant.name}
              </h1>
              <p className="text-muted-foreground italic">{plant.scientificName}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < Math.floor(plant.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <span className="font-medium">{plant.rating}</span>
              <span className="text-muted-foreground">({plant.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">
                ${plant.price.toFixed(2)}
              </span>
              {plant.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${plant.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {plant.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Sun className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                <p className="text-sm font-medium text-foreground">Light</p>
                <p className="text-xs text-muted-foreground">{plant.light}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Droplets className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <p className="text-sm font-medium text-foreground">Water</p>
                <p className="text-xs text-muted-foreground">{plant.water}</p>
              </div>
              <div className="p-4 rounded-xl bg-secondary text-center">
                <Leaf className="w-6 h-6 mx-auto mb-2 text-leaf" />
                <p className="text-sm font-medium text-foreground">Care Level</p>
                <p className="text-xs text-muted-foreground capitalize">{plant.careLevel}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {plant.petFriendly && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mint/30 text-forest text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Pet Friendly
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm capitalize">
                {plant.size} size
              </span>
              {plant.inStock ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-leaf-light text-leaf-dark text-sm">
                  <CheckCircle className="w-4 h-4" />
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 bg-secondary rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-background transition-colors duration-300"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-background transition-colors duration-300"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <Button
                variant="nature"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!plant.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={cn(
                  'h-12 w-12',
                  isWishlisted && 'border-destructive text-destructive'
                )}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={cn('w-5 h-5', isWishlisted && 'fill-current')} />
              </Button>
            </div>
          </div>
        </div>

        {relatedPlants.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlants.map((relatedPlant) => (
                <PlantCard key={relatedPlant.id} plant={relatedPlant} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
