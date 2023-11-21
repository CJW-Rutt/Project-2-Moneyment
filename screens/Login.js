import GoogleSignIn from "../firebase/GoogleSignIn"
import UserRegistrationSignIn from "../firebase/UserRegistration"
import UserEmailSignIn from "../firebase/UserSignIn"

export default function Login() {
    return (
        <>
            <View>
                <GoogleSignIn />
                <UserEmailSignIn />
                <UserRegistrationSignIn />
            </View>

        </>
    )
}