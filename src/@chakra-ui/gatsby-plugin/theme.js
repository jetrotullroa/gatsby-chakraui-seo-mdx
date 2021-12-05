// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans/400.css";
import "@fontsource/encode-sans/700.css";

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	gray: {
		50: "#F6F6FE",
		100: "#DDDDE3",
		200: "#C1C1CD",
		300: "#A5A5B6",
		400: "#89899F",
		500: "#717184",
		600: "#5A5A68",
		700: "#42424C",
		800: "#2B2B31",
		900: "#121216",
	},
	orange: {
		50: "#FDEFE8",
		100: "#F9CEB9",
		200: "#F5AE8A",
		300: "#F18D5B",
		400: "#ED6E2E",
		500: "#D35312",
		600: "#A4400E",
		700: "#752E0A",
		800: "#461C06",
		900: "#170902",
	},
	yellow: {
		50: "#FFFBF5",
		100: "#FFEACC",
		200: "#FFD699",
		300: "#FFC166",
		400: "#FFAC32",
		500: "#FF9800",
		600: "#CC7900",
		700: "#995B00",
		800: "#663D00",
		900: "#331E00",
	},
	teal: {
		50: "#F5F9F9",
		100: "#D5E6E7",
		200: "#B5D2D4",
		300: "#95BFC1",
		400: "#74ABAE",
		500: "#589498",
		600: "#457577",
		700: "#325456",
		800: "#294547",
		900: "#203637",
	},
};

const sizes = {
	container: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		xxl: "1920px",
	},
};

const fontSizes = {
	xs: "0.75rem",
	sm: "0.875rem",
	md: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	"2xl": "1.5rem",
	"3xl": "1.875rem",
	"4xl": "2.25rem",
	"5xl": "3rem",
	"6xl": "3.75rem",
	"7xl": "4.5rem",
	"8xl": "6rem",
	"9xl": "8rem",
};

const components = {};

const theme = extendTheme({
	config,
	styles: {
		global: {},
	},
	fonts: {
		body: "'Encode Sans', sans",
		heading: "'Encode Sans', sans",
		// mono: "Menlo, monospace",
	},
	colors,
	components,
	sizes,
	fontSizes,
});

export default theme;
