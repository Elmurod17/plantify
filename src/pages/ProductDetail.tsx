import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { plants } from "@/data/plants";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import PlantCard from "@/components/PlantCard";

const ProductDetail = () => {
  const { id } = useParams();
  const plant = plants.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!plant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Plant not found</h1>
          <Link to="/shop">
            <Button>Back to shop</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(plant);
    }
  };

  const relatedPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <Link to="/shop" className="text-sm text-muted-foreground">
          ← Back to shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 mt-6 mb-16">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-96 object-cover rounded-lg"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">{plant.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">
              {plant.scientificName}
            </p>

            <p className="text-lg font-semibold mb-4">
              ${plant.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground mb-6">{plant.description}</p>

            <div className="mb-6">
              <p className="text-sm">
                <strong>Light:</strong> {plant.light}
              </p>
              <p className="text-sm">
                <strong>Water:</strong> {plant.water}
              </p>
              <p className="text-sm">
                <strong>Care:</strong> {plant.careLevel}
              </p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="border px-3 py-2"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="w-8 text-center">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border px-3 py-2"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <Button onClick={handleAddToCart} disabled={!plant.inStock}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
        {relatedPlants.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related plants</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlants.map((p) => (
                <PlantCard key={p.id} plant={p} />
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
