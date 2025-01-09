// const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      screens: {
        'xl': '1180px',
      },
      padding: {
        DEFAULT: '1rem',
        xl: '0',
      },
    },
    extend: {
      fontSize: {
        '2xs': ['10px', '14px'],
      },
      colors: {
        primary: {
          light: 'var(--primary-light)',
          light2: 'var(--primary-light-2)',
          light3: 'var(--primary-light-3)',
          DEFAULT: "var(--primary)",
          dark: 'var(--primary-dark)',
        },
        secondary: {
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
        // tertiary: {
        //   DEFAULT: "var(--tertiary)",
        // },
        success: {
          light: "var(--success-light)",
          DEFAULT: "var(--success)",
          dark: "var(--success-dark)",
          dark2: "var(--success-dark2)",
        },
        danger: {
          DEFAULT: "var(--danger)",
          light: "var(--danger-light)",
          light2: "var(--danger-light2)",
        },
        warning: {
          DEFAULT: "var(--warning)",
        },
        info: {
          light: "var(--info-light)",
          light2: "var(--info-light2)",
          light3: "var(--info-light3)",
          light4: "var(--info-light4)",
          light5: "var(--info-light5)",
          DEFAULT: "var(--info)",
          secondary: "var(--info-secondary)",
          dark: "var(--info-dark)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          primary: "var(--dark-primary)",
          secondary: "var(--dark-secondary)",
          shade1: "var(--dark-shade-1)",
          shade2: "var(--dark-shade-2)",
          shade3: "var(--dark-shade-3)",
          shade6: "var(--dark-shade-6)",
        },
        gray: {
          light: "var(--gray-light)",
          DEFAULT: "var(--gray)",
          shade3: "var(--gray-shade3)",
          shade4: "var(--gray-shade4)",
          shade5: "var(--gray-shade5)",
          shade6: "var(--gray-shade6)",
        },
        textColor: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
        },
        background: {
          DEFAULT: "var(--background)",
          shade3: "var(--background-shade-3)",
        },
        link: {
          DEFAULT: "var(--link)",
        },
        disabled: {
          DEFAULT: "var(--disabled)",
        },
        borderColor: {
          light: "var(--border-light)",
          DEFAULT: "var(--border)",
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
        // foreground: {
        //   DEFAULT: "var(--foreground)"
        // },
        // muted: {
        //   DEFAULT: "var(--muted)",
        //   foreground: "var(--muted-foreground)",
        // },
        // popover: {
        //   DEFAULT: "var(--popover)",
        //   foreground: "var(--popover-foreground)",
        // },
        // accent: {
        //   DEFAULT: "var(--accent)",
        //   foreground: "var(--popover-foreground)",
        // },
        // destructive: {
        //   DEFAULT: "var(--destructive)",
        //   foreground: "var(--destructive-foreground)",
        // },
        ring: {
          light: "var(--ring-light)",
          DEFAULT: "var(--ring)",
          secondary: "var(--ring-secondary)",
          dark: "var(--ring-dark)",
          gray: "var(--ring-gray)",
        },
        input: {
          DEFAULT: "var(--input)",
        },
      },
      borderRadius: {
        'xs': "calc(var(--radius) - 2px)",
        'sm': "calc(var(--radius) + 2px)",
        'md': "calc(var(--radius) + 4px)",
        'lg': "calc(var(--radius) + 6px)",
        'xl': "calc(var(--radius) + 8px)",
        '2xl': "calc(var(--radius) + 10px)",
        '3xl': "calc(var(--radius) + 12px)",
        '4xl': "calc(var(--radius) + 14px)",
        '5xl': "calc(var(--radius) + 16px)",
        '6xl': "calc(var(--radius) + 18px)",
        '7xl': "calc(var(--radius) + 20px)",
      },
      boxShadow: {
        'xs': "0px 1px 2px 0px",
        'sm': "2px 2px 24px 0px",
        // 'lg': "0px 0px 0px 4px",
        'radio': '0px 0px 0px 4px rgba(152, 162, 179, 0.14)',
        'borderShadow': '2px 2px 16px 0px rgba(12, 59, 100, 0.20)',
      },
      screens: {
        'xs': '400px',
        '2xl': '1400px',
        '3xl': '1700px',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  // plugins: [animate],
}