import './Calculate.css';
import Button from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import BackdropTitle from "../../components/BackdropTitle/BackdropTitle.jsx";

const Calculate = () => {
  return (
    <section className="calculate">
      <div className="calculate-inner container">
        <div className="calculate-body">
          <BackdropTitle dataTitle="BMI" className="title-medium">
            Input your BMI
          </BackdropTitle>
          <div className="calculate-description">
            <p>Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</p>
          </div>
          <form className="calculate-form">
            <div className="calculate-form-body">
              <Input type="number" placeholder="Height / cm" id="height" />
              <Input type="number" placeholder="Weight / kg" id="weight" />
              <Input type="number" placeholder="Age" id="age" />
              
              <Input isSelect id="gender">
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Input>

              <Input isSelect className="wide" id="activity">
                <option value="" disabled selected>Select an activity factor:</option>
                <option value="1">Low activity</option>
                <option value="2">High activity</option>
              </Input>
            </div>
            <Button variant="transparent" type="submit">Calculate</Button>
          </form>
        </div>

        <div className="calculate-table-wrapper">
          <table className="calculate-table">
            <thead>
              <tr>
                <th>BMI</th>
                <th>Weight status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" className="calculate-table-footer">
                  <strong>BMR</strong> Metabolic Rate / <strong>BMI</strong> Body Mass Index
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Calculate;