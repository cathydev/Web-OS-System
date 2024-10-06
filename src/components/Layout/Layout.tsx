import { ReactElement } from "react"
import styles from "../../styles//Layout.module.css"

export default function Layout({ children } : {children: ReactElement}) {
    return (
            <div className={styles.container}>
                {children}
            </div>
    )
}