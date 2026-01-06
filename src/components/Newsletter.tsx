import { useState } from "react";
import { Leaf, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    toast({
      title: "Subscribed",
      description: "You will receive updates and plant care tips.",
    });

    setEmail("");
  };

  return (
    <section className="py-20 bg-leaf-light">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Leaf className="w-10 h-10 text-leaf-dark" />
          </div>

          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>

          <p className="text-muted-foreground mb-8">
            Get simple plant care tips and updates.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 px-3 rounded-md border"
              required
            />

            <Button type="submit" size="lg" className="flex items-center gap-2">
              Subscribe
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam. You can unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
