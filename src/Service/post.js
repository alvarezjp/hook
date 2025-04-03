export const  getPost = async () => {
    const response = await fetch('https://3000-monospace-hooks-1712442245852.cluster-nxnw2gov3naqkvuxb437f67u5e.cloudworkstations.dev/posts')
    const data = await response.json()
    return data
}