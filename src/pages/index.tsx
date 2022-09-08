import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css' 
import { variable, varChange } from '../utils/function'

const Home: NextPage = () => {
  const [parameter, setParameter] = useState(variable)
  useEffect(() => {
    console.log("useEffect")
    setParameter(variable)
  }, [variable])

  function handleClick() {
    setParameter(variable)
  }

  return (
      <div className={styles.container}>
        <div>{parameter}</div>
        <button onClick={varChange}>change variable</button>
        <button onClick={handleClick}>update variable</button>
      </div>
  )
}

export default Home
