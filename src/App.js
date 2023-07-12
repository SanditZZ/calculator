import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import Counter from "./components/Counter";
import Header from "./components/Header";
import RandomQuote from './components/RandomQuote';

// Add header for listing react hooks used
// Add calculators for:
// Savings Calculator: 40/30/30
// Mortgage Calculator

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <RandomQuote />
      <BMICalculator />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;