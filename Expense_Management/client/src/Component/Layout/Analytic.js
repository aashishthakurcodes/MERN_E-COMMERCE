import React from "react";
import { Progress } from "antd";

const Analytic = ({ getData }) => {
  //Categories wise Data
  const categories = [
    "salary",
    "food",
    "bills",
    "miscellaneous",
    "fees",
    "rent",
    "medical",
    "tax",
    "grocery",
    "Maintenance",
  ];

  const totalTransec = getData.length;
  const totalIncometransec = getData.filter(
    (transection) => transection.type === "income"
  );
  const totalExpensetransec = getData.filter(
    (transection) => transection.type === "expense"
  );
  const totalIncomeper = (totalIncometransec.length / totalTransec) * 100;
  const totalExpenseper = (totalExpensetransec.length / totalTransec) * 100;

  //Total TurnOver Data
  const totalTurnOver = getData.reduce(
    (acc, transection) => acc + transection.amount,
    0
  );
  const totalIncomeTurnover = getData
    .filter((transection) => transection.type === "income")
    .reduce((acc, transection) => acc + transection.amount, 0);

  const totalExpenseTurnover = getData
    .filter((transection) => transection.type === "expense")
    .reduce((acc, transection) => acc + transection.amount, 0);

  const totalIncomeTurnoverPer = (totalIncomeTurnover / totalTurnOver) * 100;
  const totalExpenseTurnoverPer = (totalExpenseTurnover / totalTurnOver) * 100;
  return (
    <div>
      <h1>Analytics</h1>
      <h2>Total Transection={totalTransec}</h2>
      <div>
        <h2>Total Income :{totalIncometransec.length}</h2>
        <h2>Total Expense :{totalExpensetransec.length}</h2>
        //Progress bar
        <div>
          <Progress
            type="dashboard"
            strokeColor={"green"}
            percent={totalIncomeper.toFixed(0)}
          />
          <Progress
            type="dashboard"
            strokeColor={"red"}
            percent={totalExpenseper.toFixed(0)}
          />

          <div>
            <h2>Total Turnover={totalTurnOver}</h2>
            <div>
              <h2>Total Income TurnOver :{totalIncomeTurnover}</h2>
              <h2>Total Expense TurnOver :{totalExpenseTurnover}</h2>
            </div>

            {/* Progress bar */}
            <h3>Progress bar</h3>
            <div>
              <Progress
                type="dashboard"
                strokeColor={"green"}
                percent={totalIncomeTurnoverPer.toFixed(0)}
              />
              <Progress
                type="dashboard"
                strokeColor={"red"}
                percent={totalExpenseTurnoverPer.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="categroy">
        <div>
            <h2>Categories wise income</h2>
            {
                categories.map(category=>{
                    const amount=getData.filter(transection=>transection.type === 'income' && transection.category === category).reduce((acc,transection)=> acc + transection.amount,0)
                    return(
                        amount> 0 &&(
                        <div>
                            <div>
                                <h3>{category}</h3>
                                <Progress percent={((amount/totalIncomeTurnover)*100).toFixed(0)}/>
                            </div>
                        </div>
                    )
                    )
                })
            }
        </div>


        <div>
            <h2>Categories wise expense</h2>
            {
                categories.map(category=>{
                    const amount=getData.filter(transection=>transection.type === 'expense' && transection.category === category).reduce((acc,transection)=> acc + transection.amount,0)
                    return(
                        amount> 0 &&(
                        <div>
                            <div>
                                <h3>{category}</h3>
                                <Progress strokeColor={"red"} percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
                            </div>
                        </div>
                    )
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Analytic;
