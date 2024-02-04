/* eslint-disable react/prop-types */
import { Stack, useMediaQuery } from '@chakra-ui/react';

const Section = ({ children, containerGap, ...props }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack
			paddingInline={isMobile ? '1em' : '2em'}
			minH={isMobile ? '100dvh' : '100vh'}
			justify='center'
			paddingBlock='1.5em'
			align='center'
			{...props}
		>
			<Stack
				w='100%'
				maxW='1280px'
				justify='space-between'
				gap={containerGap ? containerGap : '0.5rem'}
			>
				{children}
			</Stack>
		</Stack>
	);
};

export default Section;
