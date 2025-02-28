# PokeMemo - Pokemon Memory Game

![Pokemon Memory Game](./src/assets/pokeball.svg)

## Overview

PokeMemo is an engaging memory card game built with React and the PokeAPI. Challenge your memory by clicking on Pokemon cards without selecting the same one twice! The game features:

- Random Pokemon selection from the PokeAPI
- Score tracking with high score persistence
- Responsive design for all device sizes
- Retro pixel art styling with the "Press Start 2P" font
- Smooth animations and transitions

## How to Play

1. Click on any Pokemon card to start the game
2. After each click, the cards will shuffle
3. Try to click on each Pokemon only once
4. Your score increases with each unique Pokemon selected
5. If you click on the same Pokemon twice, the game ends
6. Win by successfully selecting all 10 Pokemon without repetition

## Technical Features

### Technologies Used

- React 19
- Vite for fast development and builds
- Tailwind CSS for styling
- PokeAPI JS Wrapper for fetching Pokemon data
- Service Worker for caching Pokemon sprites

### Project Structure

The application follows a modular component-based architecture:

- **Components:**

  - `App.jsx`: Main application container and game logic
  - `Board.jsx`: Displays the grid of Pokemon cards
  - `Card.jsx`: Individual Pokemon card with click handling
  - `GameOver.jsx`: End game overlay when player loses
  - `Winner.jsx`: Victory overlay when player wins
  - `Scoreboard.jsx`: Displays current and high scores

- **Services:**
  - `api.js`: Handles Pokemon data fetching and array shuffling
  - `installSW.js`: Service worker initialization for sprite caching

### Key Implementations

- **Pokemon Selection**: Randomly selects 10 Pokemon from the first 1010 Pokemon in the API
- **Memory Management**: Tracks clicked Pokemon IDs to detect duplicates
- **Responsive Design**: Adapts from mobile (1 column) to desktop (5 columns)
- **Score Tracking**: Maintains current score and high score state
- **Animation Effects**: Includes hover animations and transitions

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/valonsocg-memory-game-app.git
cd valonsocg-memory-game-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Game Logic

The game's core mechanics are handled in the App component:

- `fetchRandomPokemons()`: Retrieves random Pokemon from the API
- `handlePokemonClick(id)`: Processes user clicks on Pokemon cards
- `handleRestart()`: Resets the game state for a new game

## Credits

- Pokemon data provided by [PokeAPI](https://pokeapi.co/)
- Pixel font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- Created by: [@valonsocg](https://github.com/valonsocg)

## License

[MIT License](LICENSE)
