import { useEffect, useState } from "react";
import type { NextPage } from "next";

//Chakra
import { Box, Stack, Text, Flex, useBreakpointValue } from "@chakra-ui/react";

//Framer
import { motion } from "framer-motion";

//Local
import DrawerButton from "../components/DrawerButton";
import ComponentCards from "../components/ComponentCards";
import PreviewBox from "../components/PreviewBox";
import { Component } from "../types/component";
import PropertiesPanel from "../components/PropertiesPanel";

const Home: NextPage = () => {
	const [drawer, setDrawer] = useState<boolean>(true);
	const toolbox = [
		{
			name: "Form",
			type: "form",
			text: "Sample Form",
			styles: {},
			properties: {},
		},
		{
			name: "Heading",
			type: "heading",
			text: "Sample Heading",
			styles: {
				fontSize: "24px",
				fontWeight: 700,
			},
			properties: {},
		},
		{
			name: "Text",
			type: "text",
			text: "Sample Text",
			styles: {
				fontSize: "14px",
				fontWeight: 400,
			},
			properties: {},
		},
		{
			name: "Image",
			type: "image",
			text: "Alt Text 1",
			styles: {
				width: "200px",
				height: "200px",
			},
			properties: {
				src: "https://via.placeholder.com/200",
			},
		},
	] as Component[];
	const DrawerWidth = useBreakpointValue({
		base: "340px",
		"2xl": "660px",
	});
	const variants = {
		open: { width: DrawerWidth },
		closed: { width: "100px" },
	};
	return (
		<Stack
			sx={{
				width: "full",
				height: "100vh",
			}}
			direction="row"
		>
			{/* Drawer */}
			<motion.div
				animate={drawer ? "open" : "closed"}
				variants={variants}
				transition={{ duration: 0.25 }}
			>
				<Stack
					sx={{
						width: "100%",
						height: "100vh",
						overflow: "auto",
						background: "gray.100",
						color: "black",
					}}
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
							height: "4px",
						},
						"&::-webkit-scrollbar-track": {
							width: "4px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "black",
							borderRadius: "10px",
						},
					}}
					direction="column"
				>
					<Flex justifyContent="space-between" alignItems="center">
						{drawer && (
							<Text
								sx={{
									fontWeight: 700,
									fontSize: "24px",
									paddingLeft: "20px",
								}}
							>
								Toolbox
							</Text>
						)}
						<DrawerButton open={drawer} setOpen={(open) => setDrawer(open)} />
					</Flex>
					<ComponentCards components={toolbox as Component[]} isOpen={drawer} />
				</Stack>
			</motion.div>
			{/* Preview Box */}
			<PreviewBox />
			{/* Properties */}
			<PropertiesPanel />
		</Stack>
	);
};

export default Home;
