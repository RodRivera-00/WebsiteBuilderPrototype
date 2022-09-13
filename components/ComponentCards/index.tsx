import React from "react";

//Chakra
import { Stack, Box } from "@chakra-ui/react";

//Local
import FormCard from "./FormCard";
import TextCard from "./TextCard";
import HeadingCard from "./HeadingCard";
import { Component, ComponentType } from "../../types/component";

interface ComponentCardsProps {
	components: Component[];
	isOpen: boolean;
}

const ComponentCards = ({ components, isOpen }: ComponentCardsProps) => {
	const getCardType = (component: Component) => {
		switch (component.type) {
			case ComponentType.Form:
				return <FormCard component={component} isOpen={isOpen} />;
			case ComponentType.Text:
				return <TextCard component={component} isOpen={isOpen} />;
			case ComponentType.Heading:
				return <HeadingCard component={component} isOpen={isOpen} />;
		}
	};
	return (
		<Stack
			direction="row"
			flexWrap="wrap"
			justifyContent="space-between"
			rowGap="20px"
			padding={isOpen ? "20px" : 0}
			spacing="0"
		>
			{isOpen &&
				components.map((component) => (
					<React.Fragment key={component.name}>
						{getCardType(component)}
					</React.Fragment>
				))}
			{!isOpen &&
				components.map((component) => (
					<Box key={component.name} sx={{ width: "100px", height: "100px" }}>
						{getCardType(component)}
					</Box>
				))}
		</Stack>
	);
};
export default ComponentCards;
