export const  getPost = async () => {
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json()
    return data
}