import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import moment from "moment";

const MyInvoices = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);
  const invoices = currentUser.invoices.data;
  const { t } = useTranslation();
  
  return (
    <div className="MyInvoices text-center">
      {(invoices && invoices.length > 0 && (
        <>
          {invoices.map((invoice) => (
            <Card key={invoice.id} className="my-4">
              <Card.Body>
                <Card.Title>{invoice.description}</Card.Title>
                <Card.Subtitle className="my-2 text-muted">
                  {t("invoice:when")}
                  &nbsp;
                  {moment(invoice.createdAt).format("L")}
                </Card.Subtitle>
                <Button type="submit" className="ButtonPrimary my-2">
                  <a href={invoice.invoice_pdf} className="text-white text-decoration-none">
                    {t("invoice:cta")}
                  </a>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )) || (
        <p>No invoice</p>
      )}
    </div> 
  );
};
  
export default MyInvoices;