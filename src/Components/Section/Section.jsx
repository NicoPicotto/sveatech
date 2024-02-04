/* eslint-disable react/prop-types */
import { Stack } from '@chakra-ui/react';
import { useMobile } from '../../Context/MobileContext';

const Section = ({ children, containerGap, ...props }) => {
	const isMobile = useMobile();
	return (
		<Stack
			paddingInline={isMobile ? '1em' : '2em'}
			minH={isMobile ? '100%' : '100vh'}
			justify='center'
			paddingBlock={isMobile ? '5em' : '1.5em'}
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
