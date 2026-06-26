
const api_key = "e81d10561e82cdc749724bfb76b6c0a21b580f34378883131c1fb7e8ff874d40"
const base_url = "https://serpapi.com/search?engine=google_jobs"

const getJobs = async (query) =>{
    const url = `${base_url}&q=${query}&api_key=${api_key}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}


const searchJobs = async (query) =>{
    const url = `${base_url}&q=${query}&api_key=${api_key}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}