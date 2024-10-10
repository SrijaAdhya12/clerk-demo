import { SignedIn, UserButton, useUser } from '@clerk/clerk-react'

const Profile = () => {
	const { user, isLoaded } = useUser()

	return (
		<div>
			<SignedIn>
				{isLoaded && user ? (
					<div>
						<h1>Welcome, {user.fullName}</h1> 
					</div>
				) : (
					<p>Loading...</p>
				)}
				<UserButton />
			</SignedIn>
		</div>
	)
}

export default Profile
