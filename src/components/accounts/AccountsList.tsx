
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CreditCard, Download, FileText, Shield, PiggyBank, Briefcase, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Account {
  id: string;
  type: string;
  name: string;
  number: string;
  balance: number;
  currency: string;
  interestRate?: number;
  availableCredit?: number;
  dueDate?: string;
  status: 'active' | 'inactive' | 'pending';
}

interface AccountsListProps {
  accounts: {
    checking: Account[];
    savings: Account[];
    credit: Account[];
    investment: Account[];
  };
}

const AccountsList: React.FC<AccountsListProps> = ({ accounts }) => {
  const navigate = useNavigate();
  
  const getAccountTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'checking':
        return <CreditCard className="h-5 w-5" />;
      case 'savings':
        return <PiggyBank className="h-5 w-5" />;
      case 'credit card':
        return <CreditCard className="h-5 w-5" />;
      case 'investment':
        return <Briefcase className="h-5 w-5" />;
      default:
        return <CreditCard className="h-5 w-5" />;
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const renderAccountCard = (account: Account) => (
    <Card key={account.id} className="card-gradient card-hover">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="mr-3 p-2 rounded-full bg-bank-primary/10 text-bank-primary">
              {getAccountTypeIcon(account.type)}
            </div>
            <div>
              <CardTitle className="text-lg">{account.name}</CardTitle>
              <CardDescription>
                {account.type} • {account.number.slice(0, 4)}...{account.number.slice(-4)}
              </CardDescription>
            </div>
          </div>
          <div className={`text-xs font-medium px-2 py-1 rounded ${
            account.status === 'active' ? 'bg-green-100 text-green-800' : 
            account.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-gray-100 text-gray-800'
          }`}>
            {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-sm text-muted-foreground">Current Balance</div>
            <div className="text-2xl font-bold mt-1">{formatCurrency(account.balance, account.currency)}</div>
          </div>
          
          {account.type.toLowerCase() === 'credit card' && account.availableCredit !== undefined && (
            <div>
              <div className="text-sm text-muted-foreground">Available Credit</div>
              <div className="text-lg font-medium mt-1">{formatCurrency(account.availableCredit, account.currency)}</div>
            </div>
          )}
          
          {account.type.toLowerCase() === 'savings' && account.interestRate !== undefined && (
            <div>
              <div className="text-sm text-muted-foreground">Interest Rate</div>
              <div className="text-lg font-medium mt-1">{account.interestRate}% APY</div>
            </div>
          )}
        </div>
        
        {account.dueDate && (
          <div className="text-sm text-muted-foreground">
            Next payment due: <span className="font-medium">{account.dueDate}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" size="sm" onClick={() => navigate(`/accounts/${account.id}`)}>
          View Details
        </Button>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Shield className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-bank-primary">Your Accounts</h2>
          <p className="text-muted-foreground">Manage all your bank accounts in one place</p>
        </div>
        <Button className="mt-2 sm:mt-0 flex items-center btn-hover" onClick={() => navigate('/accounts/new')}>
          <Plus className="mr-2 h-4 w-4" />
          Open New Account
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Accounts</TabsTrigger>
          <TabsTrigger value="checking">Checking</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
          <TabsTrigger value="credit">Credit Cards</TabsTrigger>
          <TabsTrigger value="investment">Investments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ...accounts.checking,
              ...accounts.savings,
              ...accounts.credit,
              ...accounts.investment
            ].map(renderAccountCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="checking">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accounts.checking.map(renderAccountCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="savings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accounts.savings.map(renderAccountCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="credit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accounts.credit.map(renderAccountCard)}
          </div>
        </TabsContent>
        
        <TabsContent value="investment">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accounts.investment.map(renderAccountCard)}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted p-4 rounded-lg mt-8">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-full bg-bank-primary/10 text-bank-primary">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Security Notice</h3>
            <p className="text-sm text-muted-foreground">
              All your accounts are protected by our advanced security measures. 
              <Link to="/security" className="text-bank-primary hover:text-bank-secondary ml-1">
                Learn more about our security features.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsList;
