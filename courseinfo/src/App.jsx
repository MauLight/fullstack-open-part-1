

const App = () => {

  const courseInfo = {

      course: 'Half Stack application development',
      parts: [
          {
              part: 'Fundamentals of React',
              exercise: 10,
              id: "a1"
          },
          {
              part: 'Using props to pass data',
              exercise: 7,
              id: "b2"
          },
          {
              part: 'State of a component',
              exercise: 14,
              id: "c3"
          },
      ]
  }

  const Header = ({ title }) => <h1>{title.course}</h1>
  const Content = ({ info: { parts } }) => <>{parts.map((elem) => <p key={elem.id}> {elem.part} {elem.exercise} </p>)}</>

  const Total = ({ info: { parts } }) => {

      let total = 0
      parts.forEach(elem => total += elem.exercise)

      return (
          <>
              <p>Number of exercises {total} </p>
          </>
      )
  }

  return (
      <>
          <Header title={courseInfo} />
          <Content info={courseInfo} />
          <Total info={courseInfo} />
      </>
  )
}

export default App