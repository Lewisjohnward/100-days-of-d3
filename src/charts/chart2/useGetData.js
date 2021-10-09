import {useState, useEffect} from "react"
import {csv} from "d3"


const url = "https://gist.githubusercontent.com/Lewisjohnward/f0a82b4cab2cd299ea5d737f759db48f/raw/77d383d3ab9033b806660e98e0e7988eaca7c3b9/lessons.csv"

export const useGetData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = d => {
            d.date = new Date(d.date)
            d.teacherName = d.teacherName

            return d
        }
        
        csv(url, row).then(setData)
    }, [])


    return data
}
