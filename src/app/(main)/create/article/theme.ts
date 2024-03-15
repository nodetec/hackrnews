import { createTheme } from "thememirror";
import { tags as t } from "@lezer/highlight";

const palette = {
	colorPrimary: "rgb(var(--color-primary))",
	colorSecondary: "rgb(var(--color-secondary))",
	colorWarn: "rgb(var(--color-warn))",
	colorError: "rgb(var(--color-error))",
	colorInfo: "rgb(var(--color-info))",
	colorSuccess: "rgb(var(--color-success))",
	backgroundColor: "rgb(var(--background-color))",
	surface1: "rgb(var(--surface-1))",
	surface2: "rgb(var(--surface-2))",
	surface3: "rgb(var(--surface-3))",
	textColor: "rgb(var(--text-color))",
	discreetText: "rgb(var(--discreet-text))",
	subText: "rgb(var(--sub-text))",
	bgDotsTransparency: "var(--bg-dots-transparency)",
};

const theme = createTheme({
	variant: "light",
	settings: {
		background: palette.backgroundColor,
		foreground: palette.textColor,
		caret: palette.colorPrimary,
		selection: palette.colorSecondary,
		lineHighlight: palette.surface1,
		gutterBackground: palette.backgroundColor,
		gutterForeground: palette.discreetText,
	},
	styles: [
		{
			tag: t.comment,
			color: palette.discreetText,
		},
		{
			tag: t.variableName,
			color: palette.textColor,
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: palette.textColor,
		},
		{
			tag: t.number,
			color: palette.textColor,
		},
		{
			tag: t.bool,
			color: palette.textColor,
		},
		{
			tag: t.null,
			color: palette.textColor,
		},
		{
			tag: t.keyword,
			color: palette.textColor,
		},
		{
			tag: t.operator,
			color: palette.textColor,
		},
		{
			tag: t.className,
			color: palette.textColor,
		},
		{
			tag: t.definition(t.typeName),
			color: palette.textColor,
		},
		{
			tag: t.typeName,
			color: palette.textColor,
		},
		{
			tag: t.angleBracket,
			color: palette.textColor,
		},
		{
			tag: t.tagName,
			color: palette.textColor,
		},
		{
			tag: t.attributeName,
			color: palette.textColor,
		},
	],
});

export default theme;
