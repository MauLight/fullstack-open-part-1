import { useState } from "react"
import Counter from "./components/Counter"
import { HalfStack } from "./components/HalfStack"
import { Feedback } from "./components/Feedback"
import { Anecdotes } from "./components/Anecdotes"

const App = () => {

  return (
    <div>
      <HalfStack />
      <Counter />
      <Feedback />
      <Anecdotes />
    </div>
  )
}

export default App