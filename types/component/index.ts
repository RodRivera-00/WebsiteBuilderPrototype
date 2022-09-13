import { SystemStyleObject, TextProps } from "@chakra-ui/react";

export interface Component {
	id?: number;
	name: string;
	type: ComponentType;
	componentName: string;
	properties?: TextProps;
	styles?: SystemStyleObject;
	text?: string;
}
export enum ComponentType {
	Form = "form",
	Text = "text",
	Heading = "heading",
}
