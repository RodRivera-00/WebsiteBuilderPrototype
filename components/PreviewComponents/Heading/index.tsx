//Chakra
import { Input, Text, TextProps } from "@chakra-ui/react";
//Local
import { Component } from "../../../types/component";
interface HeadingProps {
	component: Component;
	isActive: boolean;
	saveValue(arg0: Component, arg1: string): void;
}
const Heading = ({ component, isActive, saveValue }: HeadingProps) => {
	return (
		<>
			{isActive && (
				<Input
					sx={component.styles}
					variant="unstyled"
					autoFocus={isActive}
					value={component.text}
					width="1920px"
					onChange={(e) => {
						saveValue(component, e.target.value);
					}}
				/>
			)}
			{!isActive && (
				<Text
					display="block"
					width="full"
					sx={component.styles}
					{...(component.properties as TextProps)}
				>
					{component.text}
				</Text>
			)}
		</>
	);
};
export default Heading;
