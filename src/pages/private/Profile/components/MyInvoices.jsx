import { useSelector } from "react-redux";

const MyInvoices = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
  const invoices = currentUser.invoices.data;
  
  return (
    <div className="MyInvoices text-center">
      <h1>Stripe id : {currentUser.customer_stripe_id}</h1>
      {(invoices && invoices.length > 0 && (
        <>
          {invoices.map((invoice) => (
            <p key={invoice.id}><a href={invoice.invoice_pdf}>Click here for your invoice</a></p>
          ))}
        </>
      )) || (
        <p>No invoice</p>
      )}
    </div> 
  );
};
  
export default MyInvoices;