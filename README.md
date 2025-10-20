# Frederik W. Grimm - Interactive Terminal Portfolio

Hi there! 👋 This is the source code for my personal portfolio, built as an interactive web terminal.

**Visit the live site: [fwgrimm.com](https://fwgrimm.com)**

This project is a [Next.js](https://nextjs.org) application styled with [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) to mimic a command-line interface.

## ✨ Features

- **Interactive Terminal UI:** A console-based interface where users can type commands to navigate the site.
- **ASCII Art Welcome:** A custom "DontFred" ASCII art header on load.
- **Core Commands:**
  - `help`: Lists all available commands.
  - `about`: Displays a short bio about my work as a freelancer.
  - `projects`: Shows a list of notable projects with links.
  - `clear`: Clears the terminal screen and shows the welcome message again.
- **Legal Pages:** Includes bilingual (German/English) pages for `/imprint`, `/privacy-policy`, and `/terms-and-conditions`.
- **Bilingual Tabs:** Uses `shadcn/ui` tabs to easily switch between German and English on legal pages.
- **Dark Mode First:** Designed with a clean, dark-mode aesthetic.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15 (using App Router and Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (specifically for the Tabs)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📦 Running Locally

To run this project on your local machine, follow these steps.

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/DontFred/homepage.git](https://github.com/DontFred/homepage.git)
    cd homepage
    ```

    _(Note: Assumes your repo is named `homepage` and your username is `DontFred`. Please update if incorrect!)_

2.  **Install dependencies:**
    You can use bun.

    ```bash
    bun install
    ```

3.  **Run the development server:**
    This project is configured to use **Turbopack** for development (see `package.json`).

    ```bash
    bun dev
    ```

4.  **Open your browser:**
    Open [http://localhost:3000](http://localhost:3000) to see the result. You can start editing the main page by modifying `app/page.tsx`.

## 👤 Contact

- **GitHub:** [@DontFred](https://github.com/DontFred)
- **Email:** [mail@fwgrimm.com](mailto:mail@fwgrimm.com)
