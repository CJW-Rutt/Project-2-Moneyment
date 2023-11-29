import { Text, Modal } from "react-native-paper"
import { useContext, useState } from "react"
import { DarkModeContext } from "../../../context/darkMode"
import { SIZES } from "../../../constants"

import Chat from "../../../screens/Chat"
import TopHeader from "../../molecules/TopHeader"

export default function ChatModal({ show, func }) {
    const { isDarkMode } = useContext(DarkModeContext)
    const [showChat, setShowChat] = useState(false)

    const height = SIZES.height
    const width = SIZES.width

    return (
        <>
            <Modal
                contentContainerStyle={{ zIndex: 3, position: 'absolute', height: height - 90, width: width, margin: 'auto', backgroundColor: isDarkMode ? 'black' : 'white' }}
                dismissable
                visible={show}
            >
                <TopHeader title='Chat' type='close' func={func} />
                <Chat />
            </Modal>
        </>
    )
}