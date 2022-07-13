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

  const onClickFirstCount = (value) => {
    if (defaultFirstCount) {
      setFirstCount(value)
      return
    }
    setFirstCount (firstCount + value)
  }

  const onClickSecondCount = (value) => {
  if (defaultSecondCount) {
      setSecondCount(value);
      return;
    }

    setSecondCount(secondCount + value);
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
            <Button text={1} onClick={() => onClickFirstCount('1')}/>
            <Button text={2} onClick={() => onClickFirstCount('2')}/>
            <Button text={3} onClick={() => onClickFirstCount('3')}/>
            <Button text={4} onClick={() => onClickFirstCount('4')}/>
            <Button text={5} onClick={() => onClickFirstCount('5')}/>
            <Button text={6} onClick={() => onClickFirstCount('6')}/>
            <Button text={7} onClick={() => onClickFirstCount('7')}/>
            <Button text={8} onClick={() => onClickFirstCount('8')}/>
            <Button text={9} onClick={() => onClickFirstCount('9')}/>
            <Button text={0} onClick={() => onClickFirstCount('0')}/>
            <Button text='Clear' onClick={() => setFirstCount('0')}/>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <Button text='+' onClick={() => setOperator('+')}/>
            <Button text='-' onClick={() => setOperator('-')}/>
            <Button text='*' onClick={() => setOperator('*')}/>
            <Button text='/' onClick={() => setOperator('/')}/>
          </div>
        </div>

        <div className="panel">
          <p>{secondCount}</p>
          <Button text='Recall' onClick={() => setSecondCount(storedResult)}/>
          <div className="numbers">
            <Button text={1} onClick={() => onClickSecondCount('1')}/>
            <Button text={2} onClick={() => onClickSecondCount('2')}/>
            <Button text={3} onClick={() => onClickSecondCount('3')}/>
            <Button text={4} onClick={() => onClickSecondCount('4')}/>
            <Button text={5} onClick={() => onClickSecondCount('5')}/>
            <Button text={6} onClick={() => onClickSecondCount('6')}/>
            <Button text={7} onClick={() => onClickSecondCount('7')}/>
            <Button text={8} onClick={() => onClickSecondCount('8')}/>
            <Button text={9} onClick={() => onClickSecondCount('9')}/>
            <Button text={0} onClick={() => onClickSecondCount('0')}/>
            <Button text='Clear' onClick={() => setSecondCount('0')}/>
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
