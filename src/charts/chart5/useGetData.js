import {useState, useEffect} from "react"
import {json} from "d3"


const url = "https://gist.githubusercontent.com/Lewisjohnward/d40f11d1c3489407be05af653a7391e4/raw/0030623ef6b96674f40a2d056c95af37f2af67e3/scheletri-word-list-count.json"
export const useGetData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {        
        json(url).then(setData)
    }, [])

    


    return data
}
