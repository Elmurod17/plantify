import { useState } from 'react';
import { Leaf, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Welcome to the plant family! 🌱',
        description: "You'll receive our weekly plant care tips and exclusive offers.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-leaf-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-leaf/20 mb-6">
            <Leaf className="w-8 h-8 text-leaf-dark" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Plant Family
          </h2>

          <p className="text-muted-foreground mb-8">
            Subscribe to get weekly plant care tips, exclusive discounts, and first access to new arrivals.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              required
            />
            <Button type="submit" variant="nature" size="lg">
              Subscribe
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
