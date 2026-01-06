import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-hero py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-leaf/10 text-leaf-dark">
              <Leaf className="w-4 h-4" />
              <span className="text-sm">Sustainably Grown</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6">
              Bring Nature <br /> Into Your Home
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Discover healthy and beautiful plants, carefully selected for your
              home and lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="w-full sm:w-auto flex items-center gap-2"
                >
                  Shop Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/categories">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-leaf" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-leaf" />
                30-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-leaf" />
                Expert Care Tips
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80"
              alt="Beautiful monstera plant"
              className="rounded-3xl max-w-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
