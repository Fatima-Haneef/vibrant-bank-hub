
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ShieldCheck, Zap, PiggyBank, Users, CreditCard, TrendingUp } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bank-primary to-bank-secondary text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Modern Banking for a Brighter Financial Future
                </h1>
                <p className="text-lg mb-8 text-bank-light">
                  Experience seamless, secure, and smarter banking with VibrantBank. 
                  Manage your money with confidence and reach your financial goals faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-bank-primary hover:bg-bank-light">
                    <Link to="/register">Open an Account</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link to="/login">Login to Banking</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                  <img src="https://placehold.co/600x400?text=Banking+App+Demo" alt="Banking App Demo" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-bank-primary mb-4">Why Choose VibrantBank?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with personalized service to provide
                a banking experience that's truly exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-bank-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-bank-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Secure Banking</h3>
                <p className="text-muted-foreground">
                  Bank with confidence knowing your money and data are protected by 
                  industry-leading security measures and encryption.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-bank-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-bank-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Fast Transfers</h3>
                <p className="text-muted-foreground">
                  Send and receive money instantly between accounts, with quick and
                  easy domestic and international transfers.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-bank-primary/10 rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-bank-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Smart Savings</h3>
                <p className="text-muted-foreground">
                  Reach your savings goals faster with automated savings tools, 
                  competitive interest rates, and personalized insights.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 px-4 bg-bank-light">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-bank-primary mb-4">Complete Banking Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for personal and business financial management
                in one integrated platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <CreditCard className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Checking Accounts</h3>
                <p className="text-muted-foreground mb-4">
                  Feature-rich checking accounts with no monthly fees, overdraft protection,
                  and rewards on debit card purchases.
                </p>
                <Link to="/services/checking" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <PiggyBank className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Savings Accounts</h3>
                <p className="text-muted-foreground mb-4">
                  High-yield savings options with automated savings tools to help
                  you reach your financial goals faster.
                </p>
                <Link to="/services/savings" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <TrendingUp className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Investment Services</h3>
                <p className="text-muted-foreground mb-4">
                  Grow your wealth with our range of investment options, from stocks
                  and bonds to managed portfolios.
                </p>
                <Link to="/services/investments" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <Users className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Business Banking</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive business banking solutions to help your company
                  manage cash flow, payroll, and growth.
                </p>
                <Link to="/services/business" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <CreditCard className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Credit Cards</h3>
                <p className="text-muted-foreground mb-4">
                  Rewarding credit card options with competitive rates, cash back,
                  travel benefits, and fraud protection.
                </p>
                <Link to="/services/cards" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <Zap className="h-10 w-10 text-bank-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-bank-primary">Loans & Financing</h3>
                <p className="text-muted-foreground mb-4">
                  Personal loans, mortgages, and financing options with competitive
                  rates and flexible terms to fit your needs.
                </p>
                <Link to="/services/loans" className="text-bank-primary font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-bank-secondary to-bank-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience better banking?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have switched to VibrantBank 
              for a more secure, convenient, and rewarding banking experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-bank-primary hover:bg-bank-light">
                <Link to="/register">Open an Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
