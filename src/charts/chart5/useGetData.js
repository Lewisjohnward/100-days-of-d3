import {useState, useEffect} from "react"
import {json} from "d3"


const url = "https://gist.githubusercontent.com/Lewisjohnward/d40f11d1c3489407be05af653a7391e4/raw/c36706aa1162f90b26a900cc96d3a93de1a7a172/scheletri-word-list-count.json"
const totals = "https://gist.githubusercontent.com/Lewisjohnward/7eb0cf4aee5369efc552ee96ebf4ccb5/raw/96e021ca929b15242ebca641d2e496e15c862141/scheletri-word-totals.json"
export const useGetData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {        
        json(url).then(setData)
    }, [])

    return data
}

export const useGetTotals= () => {
    const [data, setData] = useState(null)

    useEffect(() => {        
        json(totals).then(setData)
    }, [])

    return data
}
