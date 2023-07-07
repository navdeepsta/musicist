import React, {useState} from 'react'
import Button from '../Button/Button'
import styles from './SearchBar.module.css'
import  {validateInput}  from '../Validators/Validators'

export default function SearchBar(props) {

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageFlag, setErrorMessageFlag] = useState(false);
  const [input, setInput] = useState('');

  const handleOnChange = ({target}) => { 
    setInput(target.value);
  }

  const handleClick = (event) => {
   try{
        validateInput(input)
        setErrorMessageFlag(false);
        props.trackNameCallback(input);
        setInput('')
   }catch(err) {
        setErrorMessageFlag(true);
        setErrorMessage(err.message);
   }

  }

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <div className="input-group w-50">
        <input 
          onChange={handleOnChange}
          value={input}
          type="text" 
          className="form-control" 
          placeholder="Track name" 
          aria-label="RecipieTrack name"
          aria-describedby="button-addon2" />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="button-addon2"
          onClick ={handleClick}
          >Search</button>
        </div>
      </div>
       { errorMessageFlag ? <p className={styles.validation_error}>{errorMessage}</p> : ""}
   </div>
  )
}
  