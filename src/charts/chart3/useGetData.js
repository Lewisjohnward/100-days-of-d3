import {useState, useEffect} from "react"
import {csv} from "d3"


const url = "https://gist.githubusercontent.com/Lewisjohnward/8192f90bcb3d1298a9b1723d5d5471be/raw/6fa24f5a3db45f6b6d68d3846ca17b4d0435f60c/worth.csv"
export const useGetData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = d => {
            const splitArray = d.date.split("-")
            const year = splitArray[1]
            const month = splitArray[0]
            d.date = new Date(`20${year}`, month, 1)
            d.basicexp = +d["basic expenditure"]
            d.extraexp = +d["extra expenditure"]
            d.totalexp = +d["total expenditure"]
            d.networth = +d["nw"]
            d["4"] = +d["4"]
            d["5"]= +d["5"]

            return d
        }
        
        csv(url, row).then(setData)
    }, [])


    return data
}
