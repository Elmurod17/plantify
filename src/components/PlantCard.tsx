import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Plant } from '@/data/plants';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface PlantCardProps {
  plant: Plant;
  className?: string;
}

const PlantCard = ({ plant, className }: PlantCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(plant);
  };

  return (
    <Link
      to={`/product/${plant.id}`}
      className={cn(
        'group block bg-card rounded-2xl overflow-hidden shadow-soft card-hover',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-leaf-light to-secondary animate-pulse" />
        )}
        <img
          src={plant.image}
          alt={plant.name}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {plant.originalPrice && (
            <span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
              Sale
            </span>
          )}
          {plant.careLevel === 'easy' && (
            <span className="px-3 py-1 rounded-full bg-leaf text-primary-foreground text-xs font-semibold">
              Easy Care
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={cn(
            'absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
            isWishlisted
              ? 'bg-destructive text-destructive-foreground'
              : 'bg-background/80 backdrop-blur-sm text-muted-foreground hover:bg-background hover:text-foreground'
          )}
        >
          <Heart className={cn('w-5 h-5', isWishlisted && 'fill-current')} />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            variant="nature"
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{plant.rating}</span>
          <span className="text-sm text-muted-foreground">({plant.reviewCount})</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {plant.name}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-1">
          {plant.scientificName}
        </p>

        <div className="flex items-center gap-2 pt-1">
          <span className="text-lg font-bold text-primary">
            ${plant.price.toFixed(2)}
          </span>
          {plant.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${plant.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
