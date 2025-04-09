
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccountSummaryProps {
  accounts: {
    id: string;
    type: string;
    name: string;
    balance: number;
    currency: string;
    accountNumber: string;
    change: {
      amount: number;
      percentage: number;
      increased: boolean;
    };
  }[];
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ accounts }) => {
  const [showBalances, setShowBalances] = React.useState(true);

  const totalBalance = accounts.reduce((total, account) => total + account.balance, 0);

  const toggleShowBalances = () => {
    setShowBalances(!showBalances);
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-bank-primary">Account Summary</h2>
          <p className="text-muted-foreground">Overview of your financial accounts</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={toggleShowBalances}
          className="mt-2 sm:mt-0 flex items-center"
        >
          {showBalances ? (
            <>
              <EyeOff className="mr-2 h-4 w-4" />
              Hide Balances
            </>
          ) : (
            <>
              <Eye className="mr-2 h-4 w-4" />
              Show Balances
            </>
          )}
        </Button>
      </div>
      
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Total Balance</CardTitle>
          <CardDescription>Combined value of all accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            {showBalances ? formatCurrency(totalBalance, 'USD') : '••••••'}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {accounts.map((account) => (
          <Card key={account.id} className="card-gradient card-hover">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-sm text-muted-foreground">{account.type}</CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground">{account.name}</CardDescription>
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded flex items-center ${
                  account.change.increased ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {account.change.increased ? (
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                  )}
                  {account.change.percentage}%
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">
                {showBalances ? formatCurrency(account.balance, account.currency) : '••••••'}
              </div>
              <p className="text-xs text-muted-foreground">
                Account: {account.accountNumber.slice(0, 4)}...{account.accountNumber.slice(-4)}
              </p>
            </CardContent>
            <CardFooter className="pt-2">
              <div className="text-xs text-muted-foreground flex items-center">
                {account.change.increased ? (
                  <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1 text-red-500" />
                )}
                <span className={account.change.increased ? 'text-green-600' : 'text-red-600'}>
                  {formatCurrency(account.change.amount, account.currency)} this month
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountSummary;
