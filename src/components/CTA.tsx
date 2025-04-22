import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';


const CTASection = () => {
return (
        <section className="py-12 bg-purple-900 text-white">
            <div className="section-container">
            <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
                <h2 className="section-heading mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how Primitive AI can help your organization harness the power of artificial intelligence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6 animate-bounce-subtle">
                    <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6 animate-bounce-subtle">
                    <Link to="/solutions">
                    <div className="flex items-center">
                        <Users className="mr-2 h-5 w-5" />
                        Request Demo
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