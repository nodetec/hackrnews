import { tags as t } from "@lezer/highlight";
import { createTheme } from "mirrorshades";

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
	theme: "light",
	settings: {
		background: palette.surface1,
		foreground: palette.textColor,
		caret: palette.colorPrimary,
    fatCursor: palette.colorPrimary,
		selection: palette.surface3,
		lineHighlight: palette.surface3,
		gutterBackground: palette.surface1,
		gutterForeground: palette.discreetText,
	},
	styles: [
		{
			tag: t.comment,
			color: palette.discreetText,
		},
		{
			tag: t.variableName,
			color: palette.colorWarn,
		},
		{
			tag: [t.string, t.special(t.brace)],
			color: palette.colorSecondary,
		},
		{
			tag: t.number,
			color: palette.colorPrimary,
		},
		{
			tag: t.bool,
			color: palette.colorPrimary,
		},
		{
			tag: t.null,
			color: palette.colorPrimary,
		},
		{
			tag: t.keyword,
			color: palette.colorPrimary,
		},
		{
			tag: t.operator,
			color: palette.colorError,
		},
		{
			tag: t.className,
			color: palette.colorInfo,
		},
		{
			tag: t.definition(t.typeName),
			color: palette.colorWarn,
		},
		{
			tag: t.typeName,
			color: palette.colorInfo,
		},
		{
			tag: t.angleBracket,
			color: palette.colorInfo,
		},
		{
			tag: t.tagName,
			color: palette.colorInfo,
		},
		{
			tag: t.attributeName,
			color: palette.colorError,
		},
	],
});

export default theme;
