import "./Pricing.scss";
import { Table } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { IoIosInfinite } from "react-icons/io";
const Pricing = () => {
  return (
    <article className="Pricing container text-center pt-5">
      <h2>Pricing</h2>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Free Course</h3>
            </th>
            <th>
              <h3>Solo Course</h3>
            </th>
            <th>
              <h3>Premium</h3>
            </th>
            <th>
              <h3>Bootcamp</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tarif</td>
            <td>0</td>
            <td>100</td>
            <td>30</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Duree</td>
            <td>
              <IoIosInfinite />
            </td>
            <td>
              <IoIosInfinite />
            </td>
            <td>
              <BsCalendar />
            </td>
            <td>
              <BsCalendar />
            </td>
          </tr>
          <tr>
            <td>Mentor</td>
            <td>
              <AiOutlineCloseCircle />
            </td>
            <td>
              <AiOutlineCloseCircle />
            </td>
            {/* <td colSpan="2">Larry the Bird</td> */}
            <td>
              <AiOutlineCheckCircle />
            </td>
            <td>
              <AiOutlineCheckCircle />
            </td>
          </tr>
        </tbody>
      </Table>
    </article>
  );
};

export default Pricing;
//
