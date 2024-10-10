import { SignedOut, SignInButton } from '@clerk/clerk-react'

const Auth = () => {
    
    return (
		<header>
            <SignedOut>
					<SignInButton className="p-2 rounded-lg bg-red-500 text-white m-10"/>
			</SignedOut>
		</header>
	)
}

export default Auth
