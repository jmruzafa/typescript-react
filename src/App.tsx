import React from "react";
import "./App.css";

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?: string;
}

type InvoiceDataType = {
  customerName: string;
  invoices: InvoiceType[];
};

type PaymentStatusType = "paid" | "pending" | "late";

type InvoiceType = {
  id: number;
  name: string;
  total: string;
  paymentStatus: PaymentStatusType; // directly can be added here -> "paid" | "pending";
};
const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceData;
  const itemStyleContainer = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div className="m-3">
      <h1 className="text-3xl bg-red-300 rounded-lg">{customerName}</h1>
      <hr />
      <div>
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            style={itemStyleContainer}
            className="my-1 rounded-lg bg-purple-50"
          >
            <div>{invoice.name}</div>
            <div>
              {invoice.total} - {invoice.paymentStatus}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const data: InvoiceDataType = {
    customerName: "Google",
    invoices: [
      { id: 123, name: "Dev Work", total: "20.00", paymentStatus: "paid" },
      {
        id: 456,
        name: "More Dev Work",
        total: "50.00",
        paymentStatus: "pending",
      },
      {
        id: 789,
        name: "Other matters",
        total: "100.00",
        paymentStatus: "paid",
      },
    ],
  };
  return (
    <div className="App">
      <InvoiceList invoiceData={data} />
    </div>
  );
}
