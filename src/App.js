import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

// Add calculators for:
// Savings Calculator: 40/30/30
// Mortgage Calculator

const App = () => {
  return (
    <div>
      <BMICalculator />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
