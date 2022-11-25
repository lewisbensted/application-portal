import { ClipLoader } from 'react-spinners'

export const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<ClipLoader color="var(--color-denim-15)" size="50px" />
		</div>
	)
}
