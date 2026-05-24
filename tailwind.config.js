/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface": "#fefccf",
        "surface-dim": "#dedcb1",
        "surface-bright": "#fefccf",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f8f6c9",
        "surface-container": "#f2f0c4",
        "surface-container-high": "#eceabe",
        "surface-container-highest": "#e6e5b9",
        "on-surface": "#1d1d03",
        "on-surface-variant": "#43474b",
        "inverse-surface": "#323214",
        "inverse-on-surface": "#f5f3c7",
        "outline": "#73777b",
        "outline-variant": "#c3c7cb",
        "surface-tint": "#51606b",
        "primary": "#202f38",
        "on-primary": "#ffffff",
        "primary-container": "#36454f",
        "on-primary-container": "#a2b2be",
        "inverse-primary": "#b9c9d5",
        "secondary": "#735c00",
        "on-secondary": "#ffffff",
        "secondary-container": "#fed65b",
        "on-secondary-container": "#745c00",
        "tertiary": "#2c2e1e",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#434432",
        "on-tertiary-container": "#b0b19a",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "background": "#fefccf",
        "on-background": "#1d1d03",
        "surface-variant": "#e6e5b9",
        "accent": "#735c00"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "sm": "0.25rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "xs": "4px",
        "sm": "12px",
        "md": "24px",
        "lg": "48px",
        "xl": "80px",
        "container-max": "1280px",
        "gutter": "24px",
        "margin-desktop": "48px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "headline": ["Playfair Display", "serif"],
        "body": ["DM Sans", "sans-serif"],
        "label": ["DM Sans", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-lg": ["40px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "headline-md": ["28px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "label-sm": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [],
};


