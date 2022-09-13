//Chakra
import { Button } from "@chakra-ui/react";

interface DrawerButtonProps {
	open: boolean;
	setOpen(arg0: boolean): void;
}

const DrawerButton = ({ open, setOpen }: DrawerButtonProps) => {
	return (
		<Button
			sx={{
				height: "100px",
				width: "100px",
			}}
			onClick={() => setOpen(!open)}
		>
			{open ? "<-" : "->"}
		</Button>
	);
};
export default DrawerButton;
