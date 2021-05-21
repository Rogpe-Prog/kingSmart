import {useEffect, useState}  from 'react'

import {getBalanceSumByCategory} from '../services/Balance'

const useBalanceSumByCategory = (days = 7) => {
    const [balanceSum, setBlanceSum] = useState([])

    useEffect(() => {
        async function loadBalanceSumByCategory() {
            const data = await getBalanceSumByCategory(days)
            setBlanceSum([...data])
        }

        loadBalanceSumByCategory()
    }, [days])

    return [balanceSum]
}

export default useBalanceSumByCategory


