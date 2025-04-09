
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransferForm from '@/components/transfers/TransferForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftRight, Clock, CalendarCheck, CheckCircle2 } from 'lucide-react';

// Sample accounts data - in a real app, this would come from your backend
const accountsData = [
  {
    id: 'acc1',
    name: 'Primary Checking',
    type: 'Checking',
    number: '1234567890',
    balance: 4750.85,
    currency: 'USD',
  },
  {
    id: 'acc2',
    name: 'Emergency Fund',
    type: 'Savings',
    number: '0987654321',
    balance: 12350.42,
    currency: 'USD',
  },
  {
    id: 'acc3',
    name: 'High-Yield Savings',
    type: 'Savings',
    number: '5678901234',
    balance: 8200.15,
    currency: 'USD',
  },
  {
    id: 'acc4',
    name: 'Joint Checking',
    type: 'Checking',
    number: '9876543210',
    balance: 3250.75,
    currency: 'USD',
  },
];

// Sample recent transfers - in a real app, this would come from your backend
const recentTransfers = [
  {
    id: 'tr1',
    date: '2025-04-07',
    fromAccount: 'Primary Checking',
    toAccount: 'Emergency Fund',
    amount: 500.00,
    status: 'completed',
    reference: 'TREF123456',
  },
  {
    id: 'tr2',
    date: '2025-04-01',
    fromAccount: 'Primary Checking',
    toAccount: 'Credit Card Payment',
    amount: 350.75,
    status: 'completed',
    reference: 'TREF234567',
  },
  {
    id: 'tr3',
    date: '2025-03-25',
    fromAccount: 'Joint Checking',
    toAccount: 'Rent Payment',
    amount: 1200.00,
    status: 'completed',
    reference: 'TREF345678',
  },
  {
    id: 'tr4',
    date: '2025-04-15',
    fromAccount: 'Primary Checking',
    toAccount: 'High-Yield Savings',
    amount: 750.00,
    status: 'scheduled',
    reference: 'TREF456789',
  },
];

const TransfersPage: React.FC = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'scheduled':
        return <CalendarCheck className="h-5 w-5 text-blue-600" />;
      default:
        return <ArrowLeftRight className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Money Transfers</h1>
            <p className="text-muted-foreground">
              Transfer funds between your accounts or to external recipients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <TransferForm accounts={accountsData} />
            </div>
            
            <div className="lg:col-span-2">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Recent Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentTransfers.map((transfer) => (
                      <div key={transfer.id} className="flex items-start space-x-4">
                        <div className="mt-1">
                          {getStatusIcon(transfer.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div className="font-medium">{transfer.fromAccount} → {transfer.toAccount}</div>
                            <div className="font-bold">{formatCurrency(transfer.amount)}</div>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <div>
                              {transfer.status === 'scheduled' ? 'Scheduled for:' : 'Transferred on:'} {formatDate(transfer.date)}
                            </div>
                            <div>Ref: {transfer.reference.slice(-6)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient mt-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Daily Transfer Limit</div>
                      <div className="font-bold">$10,000.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Used Today</div>
                      <div className="font-medium">$0.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Available</div>
                      <div className="font-medium text-green-600">$10,000.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Processing Time</div>
                      <div className="font-medium">Same day</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">International Transfers</div>
                      <div className="font-medium">Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TransfersPage;
