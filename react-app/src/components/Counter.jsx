import { useState } from "react"

const Display = ({ counter, text }) => <p>{`${text} ${counter}`}</p>
const Button = ({ handler, text }) => <button onClick={handler} ><p className="btn-text">{text}</p></button>
const History = ({ history }) => {
    if (history.length === 0) {
        return <p>No history recorded.</p>
    }

    return <p>Button press history: {history.join(' ')}</p>
}

const Counter = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeft = () => {
        console.log("Before : " + left)
        setAllClicks([...allClicks, 'L'])
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRight = () => {
        console.log("Before : " + right)
        setAllClicks([...allClicks, 'R'])
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(updatedRight + left)
    }

    const handleAgain = () => {
        setLeft(0)
        setRight(0)
        setTotal(0)
        setAllClicks([])
    }

    const Hello = (name) => () => console.log(`Hello ${name}!`)

    return (
        <>
            <Display counter={total} text={"Total: "} />
            <Display counter={left} text={"Left: "} />
            <Display counter={right} text={"Right: "} />
            <History history={allClicks} />
            <Button handler={handleLeft} text="Left!" />
            <Button handler={handleAgain} text="Start over!" />
            <Button handler={handleRight} text="Right!" />
            <Button handler={Hello("Mau")} text="My Name!" />
            <Button handler={Hello("Elv")} text="Your Name!" />
        </>
    )
}

export default Counter