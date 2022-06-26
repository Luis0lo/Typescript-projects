import { useEffect, useState } from "react"
// T for generic, T is going to be an [] of carItems, or a function that return the same type
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

  const [value, setValue] = useState<T>(() => {
    // you only want to chek local storage one time  
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue) // this is going to get us T

    //check the value of our initial value is not localStorage
    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  //to store everysingle time value or key changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  
  return [value, setValue] as [typeof value, typeof setValue]
}