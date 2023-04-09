import styled from "styled-components";
import Image, { ImageProps } from "next/image";

const AutoHeightImageWrapper = styled.div`
	width: 100%;
	& > span {
		position: unset !important;
		img {
			height: auto !important;
			position: relative !important;
	    }
	}
`

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
	<AutoHeightImageWrapper>
		<Image layout="fill" className="autoImage" {...props} />
	</AutoHeightImageWrapper>
)

export default AutoHeightImage