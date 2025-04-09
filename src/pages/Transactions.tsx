
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransactionsList from '@/components/transactions/TransactionsList';

// Sample data for transactions - in a real app, this would come from your backend
const transactionsData = [
  {
    id: 't1',
    date: '2025-04-08T10:30:00',
    description: 'Monthly subscription',
    amount: 9.99,
    currency: 'USD',
    type: 'debit',
    category: 'subscription',
    merchant: {
      name: 'Spotify',
    },
    reference: 'REF12345',
    status: 'completed',
  },
  {
    id: 't2',
    date: '2025-04-07T14:22:00',
    description: 'Lunch with team',
    amount: 42.50,
    currency: 'USD',
    type: 'debit',
    category: 'dining',
    merchant: {
      name: 'Downtown Cafe',
    },
    reference: 'REF23456',
    status: 'completed',
  },
  {
    id: 't3',
    date: '2025-04-05T09:15:00',
    description: 'Salary deposit',
    amount: 3500.00,
    currency: 'USD',
    type: 'credit',
    category: 'income',
    merchant: {
      name: 'ABC Corporation',
    },
    reference: 'REF34567',
    status: 'completed',
  },
  {
    id: 't4',
    date: '2025-04-03T16:45:00',
    description: 'Phone bill payment',
    amount: 89.99,
    currency: 'USD',
    type: 'debit',
    category: 'utilities',
    merchant: {
      name: 'Telecom Inc.',
    },
    reference: 'REF45678',
    status: 'completed',
  },
  {
    id: 't5',
    date: '2025-04-01T11:20:00',
    description: 'Grocery shopping',
    amount: 137.28,
    currency: 'USD',
    type: 'debit',
    category: 'shopping',
    merchant: {
      name: 'Whole Foods Market',
    },
    reference: 'REF56789',
    status: 'completed',
  },
  {
    id: 't6',
    date: '2025-03-28T15:35:00',
    description: 'Online purchase',
    amount: 79.95,
    currency: 'USD',
    type: 'debit',
    category: 'shopping',
    merchant: {
      name: 'Amazon',
    },
    reference: 'REF67890',
    status: 'completed',
  },
  {
    id: 't7',
    date: '2025-03-25T08:50:00',
    description: 'Gas station',
    amount: 45.23,
    currency: 'USD',
    type: 'debit',
    category: 'transportation',
    merchant: {
      name: 'Shell Gas',
    },
    reference: 'REF78901',
    status: 'completed',
  },
  {
    id: 't8',
    date: '2025-03-22T13:10:00',
    description: 'Interest earned',
    amount: 12.87,
    currency: 'USD',
    type: 'credit',
    category: 'income',
    merchant: {
      name: 'VibrantBank',
    },
    reference: 'REF89012',
    status: 'completed',
  },
  {
    id: 't9',
    date: '2025-03-20T09:45:00',
    description: 'Gym membership',
    amount: 59.99,
    currency: 'USD',
    type: 'debit',
    category: 'subscription',
    merchant: {
      name: 'FitLife Gym',
    },
    reference: 'REF90123',
    status: 'completed',
  },
  {
    id: 't10',
    date: '2025-03-15T12:30:00',
    description: 'Money transfer to John',
    amount: 150.00,
    currency: 'USD',
    type: 'debit',
    category: 'transfer',
    merchant: {
      name: 'John Smith',
    },
    reference: 'REF01234',
    status: 'completed',
  },
  {
    id: 't11',
    date: '2025-03-10T11:25:00',
    description: 'Movie tickets',
    amount: 32.50,
    currency: 'USD',
    type: 'debit',
    category: 'entertainment',
    merchant: {
      name: 'Cineplex',
    },
    reference: 'REF12345',
    status: 'completed',
  },
  {
    id: 't12',
    date: '2025-03-05T14:15:00',
    description: 'Internet bill',
    amount: 79.99,
    currency: 'USD',
    type: 'debit',
    category: 'utilities',
    merchant: {
      name: 'FastNet Provider',
    },
    reference: 'REF23456',
    status: 'completed',
  },
  {
    id: 't13',
    date: '2025-03-01T10:00:00',
    description: 'Rent payment',
    amount: 1200.00,
    currency: 'USD',
    type: 'debit',
    category: 'housing',
    merchant: {
      name: 'Sunshine Properties',
    },
    reference: 'REF34567',
    status: 'completed',
  },
  {
    id: 't14',
    date: '2025-04-09T09:00:00',
    description: 'Coffee shop',
    amount: 5.75,
    currency: 'USD',
    type: 'debit',
    category: 'dining',
    merchant: {
      name: 'Urban Brew',
    },
    reference: 'REF45678',
    status: 'pending',
  },
  {
    id: 't15',
    date: '2025-04-09T14:30:00',
    description: 'Check deposit',
    amount: 250.00,
    currency: 'USD',
    type: 'credit',
    category: 'income',
    merchant: {
      name: 'Michael Johnson',
    },
    reference: 'REF56789',
    status: 'pending',
  },
];

const TransactionsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Transaction History</h1>
            <p className="text-muted-foreground">
              Review all your account activities and track your spending
            </p>
          </div>
          
          <TransactionsList transactions={transactionsData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TransactionsPage;
