//Chakra
import { Input, Text } from "@chakra-ui/react";
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
					defaultValue={component.text}
					autoFocus={isActive}
					value={component.text}
					onChange={(e) => {
						saveValue(component, e.target.value);
					}}
				/>
			)}
			{!isActive && (
				<Text sx={component.styles} {...component.properties}>
					{component.text}
				</Text>
			)}
		</>
	);
};
export default Heading;
