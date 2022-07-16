import React, { useContext, useState, useEffect } from 'react'

const SomeContext = React.createContext()

export function useSomeCtx() {
  return useContext(SomeContext)
}

export function SomeCtxProvider ({children}) {
  const [string, setString] = useState({input: '', switch: false, slider: 12})

  useEffect(() => {

  }, [string])


  return (
    <SomeContext.Provider value={ {setString: setString, string: string.input, stringFontWeight: string.switch, stringFontSize: string.slider} }>
      {children}
    </SomeContext.Provider>
  )
}