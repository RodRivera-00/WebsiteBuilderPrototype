//Chakra
import { Text, Input } from "@chakra-ui/react";
//Local
import { Component } from "../../../types/component";
interface TextProps {
	component: Component;
	isActive: boolean;
	saveValue(arg0: Component, arg1: string): void;
}

const TextComponent = ({ component, isActive, saveValue }: TextProps) => {
	return (
		<>
			{isActive && (
				<Input
					sx={component.styles}
					variant="unstyled"
					defaultValue={component.text}
					autoFocus={isActive}
					width="1920px"
					value={component.text}
					onChange={(e) => {
						saveValue(component, e.target.value);
					}}
					multiple
				/>
			)}
			{!isActive && (
				<Text sx={component.styles} {...(component.properties as TextProps)}>
					{component.text}
				</Text>
			)}
		</>
	);
};
export default TextComponent;
