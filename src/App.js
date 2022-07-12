import { useState } from 'react'
import { Button } from './components/Button'
import "./App.css"

function App() {   
  const [firstCount, setFirstCount] = useState('0')
  const [secondCount, setSecondCount] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('0')
  const [storedResult, setStoredResult] = useState('')

  const defaultFirstCount = (firstCount === '0')
  const defaultSecondCount = (secondCount === '0')

  const firstNumber = Number(firstCount)
  const secondNumber = Number(secondCount)

  const eventButtonFirstCount = (value) => (firstCount) => {
    if (defaultFirstCount) return value.target.innerText
    return firstCount + value.target.innerText
  }

  const clearButton = () => {
    return '0'
  }

  const eventButtonSecondCount = (value) => (secondCount) => {
    if (defaultSecondCount) return value.target.innerText
    return secondCount + value.target.innerText
  }

  const eventButtonOperator = (value) => (operator) => {
    return operator = value.target.innerText
  }

  const eventResult = () => {
    switch(operator) {
      case '+':
        return firstNumber + secondNumber
      case '-':
        return firstNumber - secondNumber
      case '*':
        return firstNumber * secondNumber
      case '/':
        return firstNumber / secondNumber
    }
  }

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstCount}</p>
          <Button text='Recall'onClick={() => {
            setFirstCount(storedResult)
          }}/>
          <div className="numbers">
            <Button text={'1'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'2'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }} />
            <Button text={'3'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'4'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'5'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'6'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'7'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'8'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'9'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text={'0'} onClick={(event) => {
              setFirstCount(eventButtonFirstCount(event))
            }}/>
            <Button text='Clear' onClick={() => {
              setFirstCount(clearButton)
            }}/>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <Button text='+' onClick={(event) => {
              setOperator(eventButtonOperator(event))
            }}/>
            <Button text='-' onClick={(event) => {
              setOperator(eventButtonOperator(event))
            }}/>
            <Button text='*' onClick={(event) => {
              setOperator(eventButtonOperator(event))
            }}/>
            <Button text='/' onClick={(event) => {
              setOperator(eventButtonOperator(event))
            }}/>
          </div>
        </div>

        <div className="panel">
          <p>{secondCount}</p>
          <Button text='Recall' onClick={() => {
            setSecondCount(storedResult)
          }}/>
          <div className="numbers">
            <Button text={1} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={2} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={3} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={4} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={5} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={6} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={7} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={8} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={9} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text={0} onClick={(event) => {
              setSecondCount(eventButtonSecondCount(event))
            }}/>
            <Button text='Clear' onClick={() => {
              setSecondCount(clearButton)
            }}/>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
          <Button text='=' onClick={() => {
            setResult(eventResult)
          }}/>
          <Button text='Store' onClick={() => {
            setStoredResult(String(result))
          }}/>
          </div>
        </div>
    </div>
  )
}

export default App
