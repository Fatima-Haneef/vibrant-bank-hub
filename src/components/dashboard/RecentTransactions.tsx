
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, ShoppingBag, CreditCard, Smartphone, Zap, Coffee, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  category: string;
  merchant: {
    name: string;
    logo?: string;
  };
}

const transactionIcons: Record<string, React.ReactNode> = {
  shopping: <ShoppingBag className="h-4 w-4" />,
  dining: <Coffee className="h-4 w-4" />,
  utilities: <Zap className="h-4 w-4" />,
  subscription: <CreditCard className="h-4 w-4" />,
  mobile: <Smartphone className="h-4 w-4" />,
  gift: <Gift className="h-4 w-4" />,
};

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <Card className="card-gradient">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your recent account activity</CardDescription>
        </div>
        <Link to="/transactions">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
              <div className="flex items-center">
                <div className={`mr-3 p-2 rounded-full ${
                  transaction.type === 'credit' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transactionIcons[transaction.category] || (
                    transaction.type === 'credit' 
                      ? <ArrowUpRight className="h-4 w-4" /> 
                      : <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm">{transaction.merchant.name}</div>
                  <div className="text-xs text-muted-foreground">{transaction.description}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className={`font-semibold ${
                  transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'} 
                  {formatCurrency(transaction.amount, transaction.currency)}
                </div>
                <div className="text-xs text-muted-foreground">{formatDate(transaction.date)}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
