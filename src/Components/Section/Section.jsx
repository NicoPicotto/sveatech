/* eslint-disable react/prop-types */
import { Stack } from '@chakra-ui/react';

const Section = ({ children, ...props }) => {
	return (
		<Stack paddingInline='2em' paddingBlock='1.5em' align='center' {...props}>
			<Stack w='100%' maxW='1280px' justify='space-between'>
				{children}
			</Stack>
		</Stack>
	);
};

export default Section;
