import paymentFetch from "hooks/paymentFetch";

const MyCourses = () => {

  const { newPayment } = paymentFetch();

  const handlePayment = () => {
    newPayment(4000, "TEST ARGUMENT LEARNING PATH");
  };

  return (
    <>
      <div className="MyCourses">
        <h2>🛠 WIP - Fetch Learning paths du User 🛠</h2>
      </div>

      <button onClick={handlePayment}>TEST PAIEMENT</button>
    </>
  );
};
  
export default MyCourses;