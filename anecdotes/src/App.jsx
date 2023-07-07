import { useEffect, useState } from "react"

const Button = ({ text, handler }) => <button onClick={handler}><p className="btn-text">{text}</p></button>

const App = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(null)
    const [greatest, setGreatest] = useState(null)
    const [numVotes, setNumVotes] = useState(0)
    const [currIndex, setCurrIndex] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))

    const handleSelected = () => {
        let selection = Math.floor(Math.random() * anecdotes.length)
        if (selected === selection) {
            selection = Math.floor(Math.random() * anecdotes.length)
            setSelected(selection)
        }
        setSelected(selection)
        handleGreatest()
    }

    const handleVote = () => {
        const copyVotes = [...votes]
        copyVotes[selected] += 1
        setVotes(copyVotes)
    }

    const handleGreatest = () => {
        let counter = numVotes
        let bestIndex = currIndex
        votes.forEach((elem, index) => {
            if (elem > counter) {
                counter = elem
                bestIndex = index
            }
        })

        if (counter === 0) {
            setGreatest(null)
            return -1
        }
        setNumVotes(counter)
        setCurrIndex(bestIndex)
        setGreatest(bestIndex)
        return 1
    }

    useEffect(() => {
        handleGreatest()
    }, [votes])

    return (
        <div className="anecdotes">
            <h1 className="feed-text">Anecdotes!</h1>
            <p className="statistic-text">
                {
                    !selected && selected !== 0 ? "Press 'Hit me!' button to start" : anecdotes[selected]
                }
            </p>
            {
                !selected && selected !== 0 ? null : <p className="statistic-text">{votes[selected] === 1 ? `has ${votes[selected]} vote` : `has ${votes[selected]} votes`}</p>
            }
            <div className="container">
                <Button text='Hit me!' handler={handleSelected} />
                {
                    !selected && selected !== 0 ? null : <Button text='Vote!' handler={handleVote} />
                }
            </div>
            {
                !greatest && greatest !== 0 ? null : (
                    <>
                        <p className="statistic-text">{`The most voted anectode is: `}</p>
                        <p className="statistic-text2">{`"${anecdotes[greatest].toLowerCase()}"`}</p>
                    </>

                )
            }
        </div>
    )
}

export default App