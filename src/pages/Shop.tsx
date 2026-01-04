import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlantCard from "@/components/PlantCard";
import { plants, categories } from "@/data/plants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under25", label: "Under $25", min: 0, max: 25 },
  { id: "25to50", label: "$25 - $50", min: 25, max: 50 },
  { id: "50to100", label: "$50 - $100", min: 50, max: 100 },
  { id: "over100", label: "Over $100", min: 100, max: Infinity },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || plant.category === selectedCategory;
      const priceRange = priceRanges.find(
        (range) => range.id === selectedPrice
      );
      const matchesPrice = priceRange
        ? plant.price >= priceRange.min && plant.price < priceRange.max
        : true;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPrice]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop All Plants
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of beautiful, healthy plants
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search plants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">
          <aside
            className={cn(
              "fixed md:relative inset-y-0 left-0 z-40 w-72 bg-background md:bg-transparent p-6 md:p-0 transform md:transform-none transition-transform duration-300 border-r md:border-none",
              isFilterOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            )}
          >
            <button
              className="md:hidden absolute top-4 right-4"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg transition-colors duration-300",
                    selectedCategory === "all"
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  All Plants
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2",
                      selectedCategory === category.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Price Range
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg transition-colors duration-300",
                      selectedPrice === range.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {isFilterOpen && (
            <div
              className="fixed inset-0 bg-foreground/20 z-30 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          <div className="flex-1">
            <p className="text-muted-foreground mb-6">
              Showing {filteredPlants.length}{" "}
              {filteredPlants.length === 1 ? "plant" : "plants"}
            </p>

            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant, index) => (
                  <div
                    key={plant.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <PlantCard plant={plant} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  No plants found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
