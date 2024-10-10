import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Auth = () => {
    return (
		<header>
            <SignedOut>
					<SignInButton className="p-2 rounded-lg bg-red-500 text-white m-10"/>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</header>
	)
}

export default Auth
