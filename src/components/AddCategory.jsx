import React, { useState } from 'react'



export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )        
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //recuerda siempre kevin los callback
        // setCategories( categories => [...categories , inputValue] )
        setInputValue('')
        onNewCategory( inputValue.trim() );
    }


  return (
      <form onSubmit={ onSubmit }>
          <input 
              type="text"
              placeholder=' Buscar gifs'
              value={ inputValue }
              onChange={ onInputChange }
          />
      </form>
  )
}
