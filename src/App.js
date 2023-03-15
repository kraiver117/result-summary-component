import "./App.css";
import { data } from "./data";

function App() {
  return (
    <div className="main__container">
      <div className="summary__component__container">
        <section className="result__container">
          <h1 className="result__title">Your result</h1>
          <div className="result__score__container">
            <span className="result__current-score">76 </span>
            <span className="result__max-score">of 100</span>
          </div>
          <div className="result__summary__container">
            <h3 className="result__summary__title">Great</h3>
            <p className="result__summary__description">
              You scored higher than 65% of the people who have taken these
              test.
            </p>
          </div>
        </section>
        <section className="summary__container">
          <h1 className="summary__title">Summary</h1>
          {data.map((skill) => (
            <div
              className={
                `summary__skill__container ` +
                `summary__skill__container-${skill.category}`
              }
            >
              <span className={`summary__skill__icon-${skill.category}`} />
              <p className={`summary__skill__title-${skill.category}`}>
                {skill.category}
              </p>
              <div className="summary__skill__score__container">
                <span className="summary__skill__score">
                  {skill.score}
                  <span className="summary__skill_total__score"> / 100</span>
                </span>
              </div>
            </div>
          ))}
          <a href="#1" className="summary__button">
            Continue
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
