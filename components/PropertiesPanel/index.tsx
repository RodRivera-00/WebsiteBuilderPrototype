import { useContext } from "react";
//Chakra
import { Box, Text, Stack, Input, SystemStyleObject } from "@chakra-ui/react";
//Local
import { Component } from "../../types/component";
import { Context } from "../../pages/_app";
const PropertiesPanel = () => {
	const { activeComponent, setActiveComponent, components, setComponents } =
		useContext(Context);
	const updateComponents = (component: Component, value: string) => {
		const newComponents = [...(components || [])];
		//Find the component index
		const itemIndex = newComponents?.indexOf(component);
		//Set new text value
		newComponents[itemIndex] = { ...newComponents[itemIndex], text: value };
		//Update components and activecomponents (this is on Blur)
		setComponents && setComponents((component) => newComponents);
		setActiveComponent && setActiveComponent(newComponents[itemIndex]);
	};
	const updateStyles = (component: Component, styles: SystemStyleObject) => {
		const newComponents = [...(components || [])];
		//Find the component index
		const itemIndex = newComponents?.indexOf(component);
		//Set new text value
		newComponents[itemIndex] = { ...newComponents[itemIndex], styles: styles };
		//Update components and activecomponents (this is on Blur)
		setComponents && setComponents((component) => newComponents);
		setActiveComponent && setActiveComponent(newComponents[itemIndex]);
	};
	return (
		<Box
			sx={{
				minWidth: "300px",
				background: "#000000d9",
				color: "white",
				padding: "15px",
			}}
		>
			<Text sx={{ fontWeight: 600, pb: "5px" }}>Component Values</Text>
			{!activeComponent && <Text>Select an element first</Text>}
			{activeComponent && (
				<Stack>
					<Text fontSize="sm">Text</Text>
					<Input
						value={activeComponent.text}
						size="sm"
						borderRadius="5px"
						onChange={(e) => updateComponents(activeComponent, e.target.value)}
					/>
				</Stack>
			)}
			{activeComponent && (
				<>
					<Text sx={{ fontWeight: 600, pt: "20px" }}>Styles</Text>
					{activeComponent.styles &&
						Object.keys(activeComponent.styles).map((style) => {
							return (
								<Stack key={style} sx={{ pt: "10px" }}>
									<Text fontSize="sm">{style}</Text>

									<Input
										value={
											activeComponent.styles &&
											activeComponent.styles[
												style as keyof typeof activeComponent.styles
											]?.toString()
										}
										size="sm"
										borderRadius="5px"
										onChange={(e) => {
											const newStyle = {
												...activeComponent.styles,
											} as SystemStyleObject;
											newStyle[style as keyof typeof newStyle] = e.target.value;
											updateStyles(activeComponent, newStyle);
										}}
									/>
								</Stack>
							);
						})}
				</>
			)}
		</Box>
	);
};
export default PropertiesPanel;
