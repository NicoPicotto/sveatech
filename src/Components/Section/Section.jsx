/* eslint-disable react/prop-types */
import { Stack } from '@chakra-ui/react';

const Section = ({ children, containerGap, ...props }) => {
	return (
		<Stack
			paddingInline='2em'
			minH='100vh'
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
