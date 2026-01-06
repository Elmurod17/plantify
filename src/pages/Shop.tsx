import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlantCard from "@/components/PlantCard";
import { plants, categories } from "@/data/plants";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  const filteredPlants = plants.filter((plant) => {
    const matchSearch =
      plant.name.toLowerCase().includes(search.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "all" || plant.category === category;

    const matchPrice =
      price === "all" ||
      (price === "under25" && plant.price < 25) ||
      (price === "25to50" && plant.price >= 25 && plant.price <= 50) ||
      (price === "over50" && plant.price > 50);

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Shop Plants</h1>
        <p className="text-muted-foreground mb-6">
          Browse all available plants
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="all">All prices</option>
            <option value="under25">Under $25</option>
            <option value="25to50">$25 - $50</option>
            <option value="over50">Over $50</option>
          </select>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredPlants.length} plants
        </p>

        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-20">
            No plants found
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
