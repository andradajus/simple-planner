import { ReactNode, useState } from "react"

const Authentication = ({children}: {children: ReactNode}) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

export default Authentication
