import { Link } from "react-router-dom";
import { Leaf, Users, Globe, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Leaf, value: "200+", label: "Plant Species" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Award, value: "99%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Emma Green",
    role: "Founder & Plant Expert",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Oak",
    role: "Head Horticulturist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sophie Moss",
    role: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 bg-hero overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-mint/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf-dark border border-leaf/20 mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Growing a Greener World,{" "}
                <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We started Plantify with a simple mission: to make plant
                parenthood accessible and joyful for everyone, while caring for
                our planet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest text-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-leaf/20 mb-4">
                    <stat.icon className="w-7 h-7 text-leaf" />
                  </div>
                  <p className="font-display text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  From a Small Nursery to Your Home
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Plantify began in 2018 as a small family-owned nursery with a
                  big dream. Our founder, Emma Green, grew up surrounded by
                  plants in her grandmother's garden and developed a lifelong
                  passion for bringing the beauty of nature indoors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we work with over 50 local growers who share our
                  commitment to sustainable practices. Every plant is grown with
                  care, packaged with eco-friendly materials, and delivered with
                  love.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that plants have the power to transform spaces,
                  improve well-being, and connect us with nature—even in the
                  heart of the city.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
                    alt="Our nursery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-card border-4 border-background">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80"
                    alt="Plants growing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-nature">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                These principles guide everything we do at Plantify.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainability First",
                  description:
                    "We use eco-friendly growing methods, recyclable packaging, and partner with carbon-neutral shipping providers.",
                  icon: "🌍",
                },
                {
                  title: "Quality Over Quantity",
                  description:
                    "Every plant is hand-selected by our experts to ensure you receive the healthiest specimens.",
                  icon: "✨",
                },
                {
                  title: "Community & Education",
                  description:
                    "We share plant care knowledge freely and foster a community of passionate plant lovers.",
                  icon: "💚",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 shadow-card text-center"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-leaf-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Plant Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Browse our collection and find the perfect plants for your space.
            </p>
            <Link to="/shop">
              <Button variant="nature" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
