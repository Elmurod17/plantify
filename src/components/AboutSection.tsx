import { Leaf, Recycle, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Sustainably Grown',
    description: 'All our plants are grown using eco-friendly practices with minimal environmental impact.',
  },
  {
    icon: Recycle,
    title: 'Eco Packaging',
    description: 'We use 100% recyclable and biodegradable packaging materials for all shipments.',
  },
  {
    icon: Heart,
    title: 'Care Support',
    description: 'Get expert plant care advice and tips to keep your green friends thriving.',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Every plant is hand-selected and guaranteed to arrive healthy and vibrant.',
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf-dark border border-leaf/20">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Growing a Greener Future,{' '}
              <span className="text-gradient">One Plant at a Time</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              At Plantify, we believe that everyone deserves to experience the joy and 
              benefits of living with plants. We're committed to making plant parenthood 
              accessible, sustainable, and delightful.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Every plant in our collection is lovingly grown by local nurseries who 
              share our passion for sustainability. We work directly with growers to 
              ensure ethical practices and the highest quality specimens.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-leaf-light flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-leaf-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=600&q=80"
                  alt="Plant nursery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                  alt="Greenhouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80"
                  alt="Plants being cared for"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&q=80"
                  alt="Happy plant owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
