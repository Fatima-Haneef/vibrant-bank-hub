import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountSummary from '@/components/dashboard/AccountSummary';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import SpendingAnalytics from '@/components/dashboard/SpendingAnalytics';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Wallet, ArrowLeftRight, Landmark, BellRing, AlertTriangle } from 'lucide-react';

// Sample data - in a real app this would come from your backend
const accountsData = [
  {
    id: '1',
    type: 'Checking',
    name: 'Primary Checking',
    balance: 4750.85,
    currency: 'USD',
    accountNumber: '1234567890',
    change: {
      amount: 1240.33,
      percentage: 35.2,
      increased: true,
    },
  },
  {
    id: '2',
    type: 'Savings',
    name: 'Emergency Fund',
    balance: 12350.42,
    currency: 'USD',
    accountNumber: '0987654321',
    change: {
      amount: 350.42,
      percentage: 2.8,
      increased: true,
    },
  },
  {
    id: '3',
    type: 'Credit Card',
    name: 'Rewards Visa',
    balance: 1240.56,
    currency: 'USD',
    accountNumber: '5555666677778888',
    change: {
      amount: 240.56,
      percentage: 12.5,
      increased: false,
    },
  },
];

const transactionsData = [
  {
    id: 't1',
    date: '2025-04-08T10:30:00',
    description: 'Monthly subscription',
    amount: 9.99,
    currency: 'USD',
    type: 'debit' as 'credit' | 'debit',
    category: 'subscription',
    merchant: {
      name: 'Spotify',
    },
  },
  {
    id: 't2',
    date: '2025-04-07T14:22:00',
    description: 'Lunch with team',
    amount: 42.50,
    currency: 'USD',
    type: 'debit' as 'credit' | 'debit',
    category: 'dining',
    merchant: {
      name: 'Downtown Cafe',
    },
  },
  {
    id: 't3',
    date: '2025-04-05T09:15:00',
    description: 'Salary deposit',
    amount: 3500.00,
    currency: 'USD',
    type: 'credit' as 'credit' | 'debit',
    category: 'income',
    merchant: {
      name: 'ABC Corporation',
    },
  },
  {
    id: 't4',
    date: '2025-04-03T16:45:00',
    description: 'Phone bill payment',
    amount: 89.99,
    currency: 'USD',
    type: 'debit' as 'credit' | 'debit',
    category: 'utilities',
    merchant: {
      name: 'Telecom Inc.',
    },
  },
  {
    id: 't5',
    date: '2025-04-01T11:20:00',
    description: 'Grocery shopping',
    amount: 137.28,
    currency: 'USD',
    type: 'debit' as 'credit' | 'debit',
    category: 'shopping',
    merchant: {
      name: 'Whole Foods Market',
    },
  },
];

const spendingData = [
  {
    id: 'cat1',
    name: 'Food & Dining',
    value: 850.75,
    color: '#10B981',
  },
  {
    id: 'cat2',
    name: 'Shopping',
    value: 620.42,
    color: '#3B82F6',
  },
  {
    id: 'cat3',
    name: 'Transportation',
    value: 410.33,
    color: '#8B5CF6',
  },
  {
    id: 'cat4',
    name: 'Entertainment',
    value: 320.50,
    color: '#F59E0B',
  },
  {
    id: 'cat5',
    name: 'Utilities',
    value: 280.90,
    color: '#EF4444',
  },
  {
    id: 'cat6',
    name: 'Other',
    value: 175.20,
    color: '#6B7280',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">
              Here's your financial overview for April 9, 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
            <Card className="md:col-span-3 card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-left">
                  <BellRing className="h-8 w-8 text-bank-primary" />
                  <div>
                    <h3 className="font-bold">Bill Payment Reminder</h3>
                    <p className="text-sm text-muted-foreground">Your credit card payment of $1,240.56 is due in 3 days.</p>
                    <Button variant="link" className="p-0 h-auto text-bank-primary" asChild>
                      <Link to="/payments">Pay Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3 card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-left">
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                  <div>
                    <h3 className="font-bold">Security Alert</h3>
                    <p className="text-sm text-muted-foreground">We detected a login from a new device. Is this you?</p>
                    <Button variant="link" className="p-0 h-auto text-bank-primary" asChild>
                      <Link to="/security">Review Activity</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-10">
            <AccountSummary accounts={accountsData} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <div className="lg:col-span-8">
              <RecentTransactions transactions={transactionsData} />
            </div>
            <div className="lg:col-span-4">
              <SpendingAnalytics 
                data={spendingData} 
                totalSpending={spendingData.reduce((total, item) => total + item.value, 0)} 
                currency="USD" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient card-hover">
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className="p-3 rounded-full bg-bank-primary/10 text-bank-primary">
                  <CreditCard className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg text-center">Accounts</h3>
                <p className="text-sm text-muted-foreground text-center">
                  View and manage all your bank accounts
                </p>
                <Button asChild className="w-full btn-hover">
                  <Link to="/accounts">View Accounts</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-hover">
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className="p-3 rounded-full bg-bank-primary/10 text-bank-primary">
                  <ArrowLeftRight className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg text-center">Transfers</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Transfer money between accounts or to others
                </p>
                <Button asChild className="w-full btn-hover">
                  <Link to="/transfers">Make Transfer</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-hover">
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className="p-3 rounded-full bg-bank-primary/10 text-bank-primary">
                  <Wallet className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg text-center">Bill Pay</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Pay your bills and manage recurring payments
                </p>
                <Button asChild className="w-full btn-hover">
                  <Link to="/bill-pay">Pay Bills</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-gradient card-hover">
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                <div className="p-3 rounded-full bg-bank-primary/10 text-bank-primary">
                  <Landmark className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg text-center">Loans</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Apply for loans or manage existing ones
                </p>
                <Button asChild className="w-full btn-hover">
                  <Link to="/loans">Explore Loans</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
