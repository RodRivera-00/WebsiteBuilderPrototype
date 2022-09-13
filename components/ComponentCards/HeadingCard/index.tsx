//Chakra
import { Text, Box, Flex, Stack } from "@chakra-ui/react";
//React DnD
import { useDrag } from "react-dnd";

//Local
import { Component } from "../../../types/component";

interface HeadingCardProps {
	component: Component;
	isOpen: boolean;
}
const HeadingCard = ({ component, isOpen }: HeadingCardProps) => {
	const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		type: "Component",
		item: component,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));
	return (
		<>
			{isOpen && (
				<Stack
					ref={drag}
					direction="column"
					justifyContent="space-between"
					sx={{
						border: "1px solid rgba(0, 0, 0, 0.25)",
						borderRadius: "10px",
						padding: "20px",
						width: "300px",
						height: "200px",
						background: "white",
						textAlign: "center",
					}}
				>
					<Flex flexGrow={1} alignItems="center">
						<Box
							background="#d5dade"
							width="full"
							height="25px"
							marginTop="5px"
						/>
					</Flex>

					<Text
						sx={{
							fontWeight: 600,
							paddingTop: "10px",
							userSelect: "none",
						}}
					>
						{component.name}
					</Text>
				</Stack>
			)}
			{!isOpen && (
				<Flex
					ref={drag}
					width="100px"
					height="100px"
					alignItems="center"
					justifyContent="center"
					border="1px solid rgba(0,0,0,0.25)"
					borderRadius="10px"
				>
					H
				</Flex>
			)}
		</>
	);
};
export default HeadingCard;
