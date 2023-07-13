/* eslint-disable no-unused-vars */
import API from '@/config/api'

async function fetchAllYearMovie() {
    const controller: AbortController = new AbortController()
    const signal: AbortSignal = controller.signal
    const endpoint: string = `years`

    try {
        const response: Response = await fetch(`${API.lk21_API}/${endpoint}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${process.env.API_KEY}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            signal: signal,
            cache: 'force-cache',
        })

        if (!response.ok)
            throw new Error(
                `Failed Fetching Data HTTP Status Code (${response.status})`
            )

        return await response.json()
    } catch (error) {
        controller.abort()
        console.log(`Failed To Fetching Data`)
    }
}

export default fetchAllYearMovie
