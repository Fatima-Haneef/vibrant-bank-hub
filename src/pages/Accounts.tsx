
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountsList from '@/components/accounts/AccountsList';

// Sample accounts data - in a real app, this would come from your backend
const accountsData = {
  checking: [
    {
      id: 'ch1',
      type: 'Checking',
      name: 'Primary Checking',
      number: '1234567890',
      balance: 4750.85,
      currency: 'USD',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
    {
      id: 'ch2',
      type: 'Checking',
      name: 'Joint Checking',
      number: '9876543210',
      balance: 3250.75,
      currency: 'USD',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
  ],
  savings: [
    {
      id: 'sv1',
      type: 'Savings',
      name: 'Emergency Fund',
      number: '0987654321',
      balance: 12350.42,
      currency: 'USD',
      interestRate: 2.5,
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
    {
      id: 'sv2',
      type: 'Savings',
      name: 'High-Yield Savings',
      number: '5678901234',
      balance: 8200.15,
      currency: 'USD',
      interestRate: 3.75,
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
    {
      id: 'sv3',
      type: 'Savings',
      name: 'Vacation Fund',
      number: '2345678901',
      balance: 2500.00,
      currency: 'USD',
      interestRate: 2.5,
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
  ],
  credit: [
    {
      id: 'cc1',
      type: 'Credit Card',
      name: 'Rewards Visa',
      number: '5555666677778888',
      balance: 1240.56,
      currency: 'USD',
      availableCredit: 3759.44,
      dueDate: '2025-04-25',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
    {
      id: 'cc2',
      type: 'Credit Card',
      name: 'Travel Mastercard',
      number: '4444333322221111',
      balance: 650.25,
      currency: 'USD',
      availableCredit: 9349.75,
      dueDate: '2025-04-18',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
  ],
  investment: [
    {
      id: 'inv1',
      type: 'Investment',
      name: 'Retirement Account',
      number: '3456789012',
      balance: 78500.42,
      currency: 'USD',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
    {
      id: 'inv2',
      type: 'Investment',
      name: 'Stock Portfolio',
      number: '6789012345',
      balance: 25750.88,
      currency: 'USD',
      status: 'active' as 'active' | 'inactive' | 'pending',
    },
  ],
};

const AccountsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Accounts</h1>
            <p className="text-muted-foreground">
              Manage all your bank accounts and view their details
            </p>
          </div>
          
          <AccountsList accounts={accountsData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountsPage;
