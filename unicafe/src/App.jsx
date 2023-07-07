import { useEffect, useState } from "react"

const Button = ({ text, handler }) => <button onClick={handler}><p className="btn-text">{text}</p></button>
const Statistic = ({ text, counter }) => (
  <tr className="statistic-text">
    <td>{`${text}: `}</td>
    <td>{counter}</td>
  </tr>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [currAverage, setCurrAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    const newTotal = total + 1
    setGood(newGood)
    setTotal(newGood + neutral + bad)
    setAverage(newGood - bad)
    setPositive((newGood / newTotal) * 100)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = total + 1
    setNeutral(newNeutral)
    setTotal(newNeutral + good + bad)
    setPositive((good / newTotal) * 100)
  }

  const handleBad = () => {
    const newBad = bad + 1
    const newTotal = total + 1
    setBad(newBad)
    setTotal(newBad + good + neutral)
    setAverage(good - newBad)
    setPositive((good / newTotal) * 100)
  }

  const handleAverage = () => {
    total === 0 ? setCurrAverage(0) : setCurrAverage(average / total)
  }

  useEffect(() => {
    handleAverage()
  }, [average])

  return (
    <div>
      <h1 className="feed-text">Give Feedback!</h1>
      <div className="container">
        <Button text='Good' handler={handleGood} />
        <Button text='Neutral' handler={handleNeutral} />
        <Button text='Bad' handler={handleBad} />
      </div>
      <h2 className="feed-text">Statistics</h2>
      <div className="container">
        {
          total === 0 ? <p className="statistic-text">No feedback given.</p>
            :
            <table>
              <tbody>
                <Statistic text={'Good'} counter={good} />
                <Statistic text={'Neutral'} counter={neutral} />
                <Statistic text={'Bad'} counter={bad} />
                <Statistic text={'Total'} counter={total} />
                <Statistic text={'Average'} counter={currAverage} />
                <Statistic text={'Positive'} counter={positive + "%"} />
              </tbody>
            </table>
        }
      </div>
    </div>
  )
}

export default App