import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex justify-center mb-4">
              <Leaf className="w-8 h-8 text-leaf" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Plantify
            </h1>
            <p className="text-muted-foreground">
              We help people bring plants into their homes in a simple and
              enjoyable way.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Plantify started as a small family nursery. Our goal was simple:
                make it easy for people to care for plants.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we work with local growers and focus on healthy,
                well-grown plants that fit modern living spaces.
              </p>
              <p className="text-muted-foreground">
                We believe plants improve homes, mood, and everyday life.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt="Nursery"
              className="rounded-xl w-full"
            />
          </div>
        </section>

        <section className="py-20 bg-leaf-light text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Plant Journey</h2>
          <p className="text-muted-foreground mb-6">
            Find plants that fit your home and lifestyle.
          </p>
          <Link to="/shop">
            <Button size="lg">Shop Now</Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
