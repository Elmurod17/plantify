import { Leaf, Recycle, Heart, Award } from "lucide-react";

const features = [
  {
    title: "Sustainably Grown",
    description:
      "All our plants are grown using eco-friendly practices with minimal environmental impact.",
    icon: <Leaf className="w-5 h-5 text-leaf-dark" />,
  },
  {
    title: "Eco Packaging",
    description:
      "We use 100% recyclable and biodegradable packaging materials for all shipments.",
    icon: <Recycle className="w-5 h-5 text-leaf-dark" />,
  },
  {
    title: "Care Support",
    description:
      "Get expert plant care advice and tips to keep your green friends thriving.",
    icon: <Heart className="w-5 h-5 text-leaf-dark" />,
  },
  {
    title: "Quality Guarantee",
    description:
      "Every plant is hand-selected and guaranteed to arrive healthy and vibrant.",
    icon: <Award className="w-5 h-5 text-leaf-dark" />,
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-leaf/10 text-leaf-dark border border-leaf/20">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Growing a Greener Future,{" "}
              <span className="text-gradient">One Plant at a Time</span>
            </h2>

            <p className="text-muted-foreground mb-4">
              At Plantify, we believe that everyone deserves to experience the
              joy and benefits of living with plants.
            </p>

            <p className="text-muted-foreground mb-8">
              Every plant is grown by local nurseries that care about
              sustainability and quality as much as we do.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-leaf-light flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                className="rounded-2xl shadow-card"
                src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=600&q=80"
                alt="Plant nursery"
              />
              <img
                className="rounded-2xl shadow-card"
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                alt="Greenhouse"
              />
            </div>

            <div className="space-y-4 pt-8">
              <img
                className="rounded-2xl shadow-card"
                src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80"
                alt="Plant care"
              />
              <img
                className="rounded-2xl shadow-card"
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&q=80"
                alt="Happy plant owner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
