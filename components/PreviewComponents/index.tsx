import { useContext, useEffect } from "react";

//Local
import { Context } from "../../pages/_app";
import { Box } from "@chakra-ui/react";
import { Component, ComponentType } from "../../types/component";
import Heading from "./Heading";
import Text from "./Text";

const PreviewComponents = () => {
	const { components, setComponents, activeComponent, setActiveComponent } =
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
	const getComponent = (component: Component) => {
		switch (component.type) {
			case ComponentType.Heading:
				return (
					<Heading
						component={component}
						isActive={activeComponent?.id === component.id}
						saveValue={updateComponents}
					/>
				);
			case ComponentType.Text:
				return (
					<Text
						component={component}
						isActive={activeComponent?.id === component.id}
						saveValue={updateComponents}
					/>
				);
		}
	};
	const ActivateComponent = (component: Component) => {
		setActiveComponent && setActiveComponent(component);
	};
	return (
		<>
			{components &&
				components.map((component) => (
					<Box
						key={component.id}
						sx={{
							border:
								activeComponent?.id === component.id
									? "1px solid black"
									: "none",
						}}
						onClick={() => ActivateComponent(component)}
					>
						{getComponent(component)}
					</Box>
				))}
		</>
	);
};
export default PreviewComponents;
