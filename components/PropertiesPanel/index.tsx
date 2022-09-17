import { useContext } from "react";
//Chakra
import {
	Box,
	Text,
	TextProps,
	Stack,
	Input,
	Button,
	SystemStyleObject,
	ImageProps,
} from "@chakra-ui/react";
//Local
import { Component } from "../../types/component";
import { Context } from "../../pages/_app";
const PropertiesPanel = () => {
	const { activeComponent, setActiveComponent, components, setComponents } =
		useContext(Context);
	const updateComponents = (
		component: Component,
		type: keyof Component,
		value: string | SystemStyleObject | ImageProps | TextProps
	) => {
		const newComponents = [...(components || [])];
		//Find the component index
		const itemIndex = newComponents?.indexOf(component);
		//Set new text value
		if (type === "componentName" || type === "name" || type === "text") {
			newComponents[itemIndex][type] = value as string;
		}
		if (type === "properties") {
			newComponents[itemIndex] = {
				...newComponents[itemIndex],
				properties: value as ImageProps | TextProps,
			};
		}
		if (type === "styles") {
			newComponents[itemIndex] = {
				...newComponents[itemIndex],
				styles: value as SystemStyleObject,
			};
		}
		//Update components and activecomponents (this is on Blur)
		setComponents && setComponents((component) => newComponents);
		setActiveComponent && setActiveComponent(newComponents[itemIndex]);
	};
	type ComponentProps = TextProps | ImageProps;
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
					<Text fontSize="sm">Component Name</Text>
					<Input
						value={activeComponent.componentName}
						size="sm"
						borderRadius="5px"
						onChange={(e) =>
							updateComponents(activeComponent, "componentName", e.target.value)
						}
					/>
					<Text fontSize="sm">Text</Text>
					<Input
						value={activeComponent.text}
						size="sm"
						borderRadius="5px"
						onChange={(e) =>
							updateComponents(activeComponent, "text", e.target.value)
						}
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
											} as any;
											newStyle[style] = e.target.value;
											updateComponents(activeComponent, "styles", newStyle);
										}}
									/>
								</Stack>
							);
						})}
					<Button
						size="sm"
						mt="20px"
						width="full"
						sx={{ background: "white", color: "black" }}
					>
						Add new style
					</Button>
				</>
			)}
			{activeComponent && (
				<>
					<Text sx={{ fontWeight: 600, pt: "20px" }}>Properties</Text>
					{activeComponent.properties &&
						delete activeComponent.properties.onDoubleClick &&
						Object.keys(activeComponent.properties).map((property) => {
							return (
								<Stack key={property} sx={{ pt: "10px" }}>
									<Text fontSize="sm">{property}</Text>
									<Input
										value={
											activeComponent.properties &&
											activeComponent.properties[
												property as keyof ComponentProps
											]?.toString()
										}
										size="sm"
										borderRadius="5px"
										onChange={(e) => {
											const newProperty = {
												...activeComponent.properties,
											} as ComponentProps;
											newProperty[property as keyof ComponentProps] =
												e.target.value;
											updateComponents(
												activeComponent,
												"properties",
												newProperty
											);
										}}
									/>
								</Stack>
							);
						})}
					<Button
						size="sm"
						mt="20px"
						width="full"
						sx={{ background: "white", color: "black" }}
					>
						Add new property
					</Button>
				</>
			)}
		</Box>
	);
};
export default PropertiesPanel;
