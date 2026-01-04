import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-leaf/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-leaf-light/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf-dark border border-leaf/20">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Sustainably Grown</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest leading-tight">
              Bring Nature
              <span className="block text-gradient">Into Your Home</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Discover our curated collection of beautiful, healthy plants. 
              Handpicked with care for your space and lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button variant="nature" size="xl" className="w-full sm:w-auto">
                  Shop Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Browse Categories
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="w-5 h-5 text-leaf" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-leaf" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Leaf className="w-5 h-5 text-leaf" />
                <span className="text-sm">Expert Care Tips</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-elevated animate-float">
                <img
                  src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80"
                  alt="Beautiful monstera plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
              </div>

              <div className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-card animate-slide-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-leaf-light flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-leaf-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">200+</p>
                    <p className="text-sm text-muted-foreground">Plant Species</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-card animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-mint/30 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
