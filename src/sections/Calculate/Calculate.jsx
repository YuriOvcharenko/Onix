import styles from './Calculate.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Calculate = () => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const activityOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' }
  ];

  return (
    <section className={styles.calculate}>
      <div className={`${styles['calculate-inner']} container`}>
        <div className={styles['calculate-body']}>
          <h2 className={`${styles['calculate-title']} title-medium backdrop-title`} data-title="BMI">
            Input your BMI
          </h2>
          <div className={styles['calculate-description']}>
            <p>Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</p>
          </div>
          
          <form className={styles['calculate-form']}>
            <div className={styles['calculate-form-body']}>
              <Input 
                className={styles['calculate-input']}
                label="Height" 
                id="height" 
                type="number" 
                placeholder="Height / cm" 
              />
              
              <Input 
                className={styles['calculate-input']}
                label="Weight" 
                id="weight" 
                type="number" 
                placeholder="Weight / kg" 
              />

              <Input 
                className={styles['calculate-input']}
                label="Age" 
                id="age" 
                type="number" 
                placeholder="Age" 
              />

              <Input 
                className={styles['calculate-input']}
                label="Gender" 
                id="gender" 
                isSelect 
                placeholder="Gender" 
                options={genderOptions} 
              />

              <Input 
                className={`${styles['calculate-input']} ${styles.wide}`}
                label="Activity factor" 
                id="activity-factor" 
                isSelect 
                placeholder="Select an activity factor" 
                options={activityOptions} 
              />
            </div>

            <Button 
              className={styles['calculate-button']}
              variant="transparent" 
              type="submit"
            >
              Calculate
            </Button>
          </form>
        </div>
        
        <div className={styles['calculate-table-wrapper']}>
          <table className={styles['calculate-table']}>
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
                <td colSpan="2"><b>BMR</b> Metabolic Rate / <b>BMI</b> Body Mass Index</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Calculate;