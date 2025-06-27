# Chrome Extension React Template

A modern, feature-rich template for building Chrome extensions with Vite, React, TypeScript, and Tailwind CSS. This template provides a solid foundation for developing Chrome extensions with a modern development workflow and best practices.

## 🚀 Features

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development with full TypeScript support
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS 4** - Modern utility-first CSS framework
- **ESLint** - Code linting with React-specific rules
- **Chrome Extension Manifest V3** - Latest Chrome extension API
- **Popup Interface** - Pre-configured popup with React components
- **Options Page** - Dedicated options/settings page
- **Background Script** - Service worker for background tasks
- **Content Script** - Script injection for web page interaction

## 📁 Key Files Explained

#### `vite.config.ts`

Vite configuration with plugins:

- `@vitejs/plugin-react` - React support
- `@tailwindcss/vite` - TailwindCSS integration
- `vite-plugin-web-extension` - Chrome extension build support

#### `src/Popup.tsx`

Main popup component that appears when users click the extension icon. Currently displays a "Hello, World!" message with TailwindCSS styling.

#### `src/Options.tsx`

Options/settings page component for extension configuration. Accessible via Chrome's extension management interface.

## 🧩 Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` folder
4. The extension will appear in your Chrome toolbar

## 📄 License

This template is open source and available under the [MIT License](LICENSE).
