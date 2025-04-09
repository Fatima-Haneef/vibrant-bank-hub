
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeftRight, ExternalLink, CalendarClock } from 'lucide-react';

// Define schema for internal transfers
const internalTransferSchema = z.object({
  fromAccount: z.string({ required_error: 'Please select a source account' }),
  toAccount: z.string({ required_error: 'Please select a destination account' }),
  amount: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Amount must be greater than 0',
  }),
  description: z.string().optional(),
});

// Define schema for external transfers
const externalTransferSchema = z.object({
  fromAccount: z.string({ required_error: 'Please select a source account' }),
  recipientName: z.string().min(2, 'Recipient name is required'),
  recipientAccount: z.string().min(8, 'Valid account number is required'),
  bankCode: z.string().min(2, 'Bank code is required'),
  amount: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Amount must be greater than 0',
  }),
  description: z.string().optional(),
});

// Define schema for scheduled transfers
const scheduledTransferSchema = z.object({
  fromAccount: z.string({ required_error: 'Please select a source account' }),
  toAccount: z.string({ required_error: 'Please select a destination account' }),
  amount: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Amount must be greater than 0',
  }),
  startDate: z.string().min(1, 'Start date is required'),
  frequency: z.string({ required_error: 'Please select a frequency' }),
  description: z.string().optional(),
});

type InternalTransferFormValues = z.infer<typeof internalTransferSchema>;
type ExternalTransferFormValues = z.infer<typeof externalTransferSchema>;
type ScheduledTransferFormValues = z.infer<typeof scheduledTransferSchema>;

interface Account {
  id: string;
  name: string;
  type: string;
  number: string;
  balance: number;
  currency: string;
}

interface TransferFormProps {
  accounts: Account[];
}

const TransferForm: React.FC<TransferFormProps> = ({ accounts }) => {
  const [activeTab, setActiveTab] = useState('internal');
  
  // Form for internal transfers
  const internalForm = useForm<InternalTransferFormValues>({
    resolver: zodResolver(internalTransferSchema),
    defaultValues: {
      fromAccount: '',
      toAccount: '',
      amount: '',
      description: '',
    },
  });

  // Form for external transfers
  const externalForm = useForm<ExternalTransferFormValues>({
    resolver: zodResolver(externalTransferSchema),
    defaultValues: {
      fromAccount: '',
      recipientName: '',
      recipientAccount: '',
      bankCode: '',
      amount: '',
      description: '',
    },
  });

  // Form for scheduled transfers
  const scheduledForm = useForm<ScheduledTransferFormValues>({
    resolver: zodResolver(scheduledTransferSchema),
    defaultValues: {
      fromAccount: '',
      toAccount: '',
      amount: '',
      startDate: '',
      frequency: '',
      description: '',
    },
  });

  const handleInternalSubmit = (data: InternalTransferFormValues) => {
    console.log('Internal transfer submitted:', data);
    toast.success('Transfer initiated successfully!');
    internalForm.reset();
  };

  const handleExternalSubmit = (data: ExternalTransferFormValues) => {
    console.log('External transfer submitted:', data);
    toast.success('External transfer initiated successfully!');
    externalForm.reset();
  };

  const handleScheduledSubmit = (data: ScheduledTransferFormValues) => {
    console.log('Scheduled transfer submitted:', data);
    toast.success('Scheduled transfer set up successfully!');
    scheduledForm.reset();
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>Money Transfer</CardTitle>
        <CardDescription>Transfer funds between your accounts or to external recipients</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="internal" className="flex items-center">
              <ArrowLeftRight className="h-4 w-4 mr-2" />
              <span>Internal</span>
            </TabsTrigger>
            <TabsTrigger value="external" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              <span>External</span>
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="flex items-center">
              <CalendarClock className="h-4 w-4 mr-2" />
              <span>Scheduled</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="internal">
            <Form {...internalForm}>
              <form onSubmit={internalForm.handleSubmit(handleInternalSubmit)} className="space-y-6">
                <FormField
                  control={internalForm.control}
                  name="fromAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From Account</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                              {account.name} - {account.number.slice(-4)} (
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: account.currency,
                                }).format(account.balance)}
                              )
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={internalForm.control}
                  name="toAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To Account</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem 
                              key={account.id} 
                              value={account.id}
                              disabled={account.id === internalForm.watch('fromAccount')}
                            >
                              {account.name} - {account.number.slice(-4)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={internalForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input {...field} placeholder="0.00" className="pl-8" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={internalForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Add a note or description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full btn-hover">Transfer Now</Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="external">
            <Form {...externalForm}>
              <form onSubmit={externalForm.handleSubmit(handleExternalSubmit)} className="space-y-6">
                <FormField
                  control={externalForm.control}
                  name="fromAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From Account</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                              {account.name} - {account.number.slice(-4)} (
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: account.currency,
                                }).format(account.balance)}
                              )
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={externalForm.control}
                  name="recipientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={externalForm.control}
                  name="recipientAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Recipient Account Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="1234567890" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={externalForm.control}
                  name="bankCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Code / Routing Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="123456789" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={externalForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input {...field} placeholder="0.00" className="pl-8" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={externalForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Add a note or description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full btn-hover">Send Transfer</Button>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="scheduled">
            <Form {...scheduledForm}>
              <form onSubmit={scheduledForm.handleSubmit(handleScheduledSubmit)} className="space-y-6">
                <FormField
                  control={scheduledForm.control}
                  name="fromAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>From Account</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                              {account.name} - {account.number.slice(-4)} (
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: account.currency,
                                }).format(account.balance)}
                              )
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={scheduledForm.control}
                  name="toAccount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>To Account</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination account" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem 
                              key={account.id} 
                              value={account.id}
                              disabled={account.id === scheduledForm.watch('fromAccount')}
                            >
                              {account.name} - {account.number.slice(-4)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={scheduledForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <Input {...field} placeholder="0.00" className="pl-8" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={scheduledForm.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} min={new Date().toISOString().split('T')[0]} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={scheduledForm.control}
                  name="frequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Frequency</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={scheduledForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Add a note or description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full btn-hover">Schedule Transfer</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t pt-6 text-sm text-muted-foreground">
        <p>Transfers between your accounts are typically processed immediately.</p>
        <p>External transfers may take 1-3 business days to complete.</p>
        <p>Daily transfer limit: $10,000</p>
      </CardFooter>
    </Card>
  );
};

export default TransferForm;
