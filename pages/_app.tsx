import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext, SetStateAction } from "react";

//Chakra
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

//DnD
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

//Context
export const Context = createContext<ContextProps>({});
interface ContextProps {
	components?: Component[];
	setComponents?: React.Dispatch<SetStateAction<Component[]>>;
	activeComponent?: Component;
	setActiveComponent?: React.Dispatch<SetStateAction<Component | undefined>>;
}
//Local
import { Component } from "../types/component";

const fonts = {
	body: `'Roboto', san-serif`,
};
const breakpoints = {
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1200px",
	"2xl": "2000px",
};

const theme = extendTheme({ fonts, breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
	const [components, setComponents] = useState<Component[]>([]);
	const [activeComponent, setActiveComponent] = useState<
		Component | undefined
	>();
	return (
		<ChakraProvider theme={theme}>
			<Context.Provider
				value={{
					components,
					setComponents,
					activeComponent,
					setActiveComponent,
				}}
			>
				<DndProvider backend={HTML5Backend}>
					<Component {...pageProps} />
				</DndProvider>
			</Context.Provider>
		</ChakraProvider>
	);
}

export default MyApp;
