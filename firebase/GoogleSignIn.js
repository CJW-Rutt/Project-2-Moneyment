import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase.config";
import { Button } from "react-native-paper";

export default function GoogleSignIn() {
    const GoogleLogIn = async () => {
        const provider = new GoogleAuthProvider()
        const authorization = auth
        const result = await signInWithPopup(authorization, provider)

        console.log(result)
    }

    return (
        <>
            <Button
                onPress={() => GoogleLogIn()}
                mode='contained'
            >
                Google Log in
            </Button>
        </>
    )
}