import "../MainPage.css";

const RulesComponent = () => {
  return (
    <div className="rules-div">
      <div className="rules">
        ?
        <div className="hovering">
          Welcome to QuizOut!, these are the following rules of the game:
          <div className="rule-numbers-list">
            <ol className="list">
              <li>
                You have the 4 different answers per given question, only one of
                them is correct
              </li>
              <li>
                The time to answer your questions is limited, it depends on
                number of questions that you're answering
              </li>
              <li>
                Your personal score will rise as you're giving the correct
                answers, otherwise it will go down if the answers are incorrect
              </li>
              <li>
                You have the option to skip the question if you cant or you're
                unwilling to give answer, skipping questions will not affect your score
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesComponent;
