import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  const addItem = (e) => {
    e.preventDefault();
    addToCart(plant);
  };

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };

  return (
    <Link
      to={`/product/${plant.id}`}
      className="block border rounded-lg overflow-hidden bg-white"
    >
      {/* IMAGE */}
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-64 object-cover"
      />

      {/* BODY */}
      <div className="p-4">
        {/* RATING */}
        <div className="flex items-center gap-1 mb-2 text-sm">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{plant.rating}</span>
          <span className="text-muted-foreground">({plant.reviewCount})</span>
        </div>

        {/* NAME */}
        <h3 className="text-lg font-semibold mb-1">{plant.name}</h3>

        <p className="text-sm text-muted-foreground mb-3">
          {plant.scientificName}
        </p>

        {/* PRICE */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold">${plant.price.toFixed(2)}</span>
          {plant.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${plant.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <Button onClick={addItem} className="flex-1">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to cart
          </Button>

          <button onClick={toggleLike} className="p-2 border rounded-md">
            <Heart
              className={`w-5 h-5 ${
                liked ? "text-red-500" : "text-muted-foreground"
              }`}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
