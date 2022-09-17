import {
	SystemStyleObject,
	TextProps,
	ImageProps,
	PropsOf,
} from "@chakra-ui/react";

export interface Component {
	id?: number;
	name: string;
	type: ComponentType;
	componentName: string;
	properties?: TextProps | ImageProps;
	styles?: SystemStyleObject;
	text?: string;
	data?: ComponentData[];
}
export enum ComponentType {
	Form = "form",
	Text = "text",
	Heading = "heading",
	Image = "image",
}
export interface ComponentData {
	name: string;
	value: any;
}
