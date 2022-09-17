//Chakra
import { Image } from "@chakra-ui/react";
//Local
import { Component } from "../../../types/component";
interface ImageProps {
	component: Component;
	isActive: boolean;
	saveValue(arg0: Component, arg1: string): void;
}
const ImageComponent = ({ component, isActive, saveValue }: ImageProps) => {
	return (
		<>
			{isActive && (
				<Image
					sx={component.styles}
					alt={component.text}
					{...(component.properties as ImageProps)}
				/>
			)}
			{!isActive && (
				<Image
					sx={component.styles}
					alt={component.text}
					{...(component.properties as ImageProps)}
				/>
			)}
		</>
	);
};
export default ImageComponent;
