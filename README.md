# GameHub 🎮

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.5-319795.svg)](https://chakra-ui.com/)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF.svg)](https://vitejs.dev/)

A modern, responsive game discovery application built with React and TypeScript that helps users explore and discover video games from a vast database.

## Features

-  **Game Discovery**: Browse thousands of games with detailed information
-  **Advanced Search**: Search games by title with real-time results
-  **Genre Filtering**: Filter games by genres (Action, RPG, Strategy, etc.)
-  **Platform Selection**: Filter games by gaming platforms (PlayStation, Xbox, PC, etc.)
-  **Sort Options**: Sort games by relevance, date added, name, release date, popularity, and rating
-  **Critic Scores**: View Metacritic scores for each game
-  **Dark Mode**: Built-in dark theme with toggle support
-  **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
-  **Loading States**: Elegant skeleton loaders for smooth user experience
-  **Optimized Images**: Automatic image cropping for faster load times

##  Technologies Used

- **Frontend Framework**: React 18.2 with Hooks
- **Type Safety**: TypeScript 4.9
- **UI Library**: Chakra UI 2.5 with Emotion
- **Build Tool**: Vite 4.1
- **HTTP Client**: Axios 1.7
- **Icons**: React Icons 4.7
- **Animations**: Framer Motion 10.0

## 📋 Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- RAWG API Key (Get one free at [RAWG.io](https://rawg.io/apidocs))

## 🚀 Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/youssef-al-mostafa/game-hub.git
cd game-hub
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Add your RAWG API key to `.env`
```
VITE_RAWG_API_KEY=your_api_key_here
```

5. Start the development server
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
GameHub/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── ColorModeSwitch.tsx
│   │   ├── CriticScore.tsx
│   │   ├── Emoji.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameCardContainer.tsx
│   │   ├── GameCardSkeleton.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GameHeading.tsx
│   │   ├── GenreList.tsx
│   │   ├── NavBar.tsx
│   │   ├── PlatformIconsList.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── SearchInput.tsx
│   │   └── SortSelector.tsx
│   ├── data/            # Static data
│   │   └── genres.ts
│   ├── hooks/           # Custom React hooks
│   │   ├── useData.ts
│   │   ├── useGames.ts
│   │   ├── useGenre.ts
│   │   └── usePlatforms.ts
│   ├── services/        # API services
│   │   ├── api-client.ts
│   │   └── img-url.ts
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   └── theme.ts         # Chakra UI theme configuration
├── .env.example         # Environment variables template
├── index.html           # Entry HTML file
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

##  Key Highlights

- **Custom Hooks Architecture**: Reusable `useData` hook for efficient API calls with proper error handling and loading states
- **Type-Safe Development**: Full TypeScript integration for better developer experience and fewer runtime errors
- **Optimized Performance**: Request cancellation with AbortController to prevent memory leaks
- **Smart Image Handling**: Automatic image URL optimization for faster loading
- **Responsive Grid System**: Chakra UI's Grid layout for seamless responsive behavior
- **Component Composition**: Modular component design following React best practices

##  Features in Detail

### Search & Filter
- Real-time game search with form submission
- Genre filtering with visual genre icons
- Platform-specific filtering (PC, PlayStation, Xbox, Nintendo, etc.)
- Multiple sort options for customized browsing

### Game Display
- Grid layout adapting to screen size (1-4 columns)
- Platform icons for each game
- Metacritic critic scores with color-coded badges
- Emoji ratings based on game scores
- High-quality game cover images

### User Experience
- Skeleton loading animations during data fetch
- Smooth transitions and hover effects
- Dark mode optimized for gaming aesthetics
- Error handling with user-friendly messages

## 🔒 Security

- API keys stored in environment variables
- `.env` file excluded from version control
- `.env.example` provided for easy setup

## Acknowledgements

- [RAWG.io](https://rawg.io/) - Comprehensive video games database API
- [Chakra UI](https://chakra-ui.com/) - Component library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Framer Motion](https://www.framer.com/motion/) - Animation library


## Contact

- Youssef Al Mostafa - [LinkedIn](https://linkedin.com/in/youssef-al-mostafa) 
- [youssefalmostafa2@gmail.com](mailto:youssefalmostafa2@gmail.com)