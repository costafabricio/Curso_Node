import { useDebugValue, useState } from "react";

import styles from './Message.module.css'

function Message() {
    const [type, setType] = useState("")

    return(
        <div className={`${styles.message} ${styles[type]}`}>Minha messagem</div>
    )
}

export default Message