export type Inputs = {
  senderAddress: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  clientAddress: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
  createdAt: string;
  description: string;
  paymentTerms: string;
};
