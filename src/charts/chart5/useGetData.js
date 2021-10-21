import {useState, useEffect} from "react"
import {json} from "d3"


const url = "https://gist.githubusercontent.com/Lewisjohnward/a6ea968550aa733753f18098e021eee9/raw/a7d7bc30ded4badc5126c4351be03570ce688ce1/scheletri-words.json"
export const useGetData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = d => {
            
            return d
        }
        
        json(url, row).then(setData)
    }, [])

    


    return data
}
