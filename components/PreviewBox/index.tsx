//Chakra
import { Box, Button, Stack, Flex, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";

//React DnD
import { useDrop } from "react-dnd";
import { Context } from "../../pages/_app";

import { Component } from "../../types/component";
import PreviewComponents from "../PreviewComponents";
const PreviewBox = () => {
	const { components, setComponents } = useContext(Context);
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "Component",
		drop: (item) => {
			const data = item as Component;
			setComponents &&
				setComponents((components) => [
					...components,
					{
						...data,
						componentName: `${data.name}${components.length + 1}`,
						id: components.length + 1,
					},
				]);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	return (
		<Flex
			flexGrow={1}
			direction="column"
			overflow="auto"
			sx={{
				padding: "20px",
			}}
		>
			<Stack direction="row">
				<Input
					defaultValue="https://sandbox-ProjectName.gullible.dev/"
					readOnly
				/>
				<Button>Save</Button>
				<Button colorScheme="blue">Publish</Button>
			</Stack>
			<Box
				width="full"
				height="full"
				justifyContent="center"
				overflow="auto"
				sx={{
					background: "rgba(0,0,0,0.1)",
					marginTop: "20px",
					border: "1px solid rgba(0,0,0,0.25)",
				}}
			>
				<Box
					w="full"
					h="full"
					justifyContent="center"
					overflow="auto"
					css={{
						"&::-webkit-scrollbar": {
							width: "8px",
							height: "8px",
						},
						"&::-webkit-scrollbar-track": {
							width: "12px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "black",
							borderRadius: "10px",
						},
					}}
				>
					<Box
						ref={drop}
						sx={{
							maxW: "1920px",
							maxH: "1080px",
							minW: "1920px",
							minH: "1080px",
							background: "white",
						}}
					>
						<PreviewComponents />
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};
export default PreviewBox;
