
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  showDemoIcon?: boolean;
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Contact us today to learn how Primitive AI can help your organization harness the power of artificial intelligence.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Request Demo",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/solutions",
  showDemoIcon = true
}: CTASectionProps) => {
  return (
    <section className="py-12 bg-purple-900 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6"
            >
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6"
            >
              <Link to={secondaryButtonLink}>
                <div className="flex items-center">
                  {showDemoIcon && <Users className="mr-2 h-5 w-5" />}
                  {secondaryButtonText}
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
