const email = "shawnbarron16@gmail.com"
const github = "https://github.com/shawnbarron16"
const linkedin = "https://www.linkedin.com/in/shawn-barron16/"

export function Footer() {
    return(
        <footer>
            <ul>
                <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href={`mailto:${email}`}>Email: {email}</a></li>
            </ul>
        </footer>
    )
}