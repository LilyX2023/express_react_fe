// BASE URL OF OUR DEPLOYED API
// BASE URL OF OUR DEPLOYED API
const URL = "https://zesty-moxie-3a561a.netlify.app/"

export const projectsLoader = async () => {
    const response = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader = async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}