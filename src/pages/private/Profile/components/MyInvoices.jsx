import { Link } from "react-router-dom";
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
        <div className="InvoicesShowcase">
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
                    {t("invoice:download")}
                  </a>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )) || (
        <div className="NoInvoiceCTA">
          <p className="lead">{t("invoice:none")}</p>
          <Link 
            to="/courses"
            className="ButtonPrimary py-2 px-3 my-2 text-white">
            {t("invoice:cta")}
          </Link>
        </div>
      )}
    </div> 
  );
};
  
export default MyInvoices;