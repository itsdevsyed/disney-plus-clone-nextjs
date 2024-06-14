# Disney Clone

![Disney Clone](https://via.placeholder.com/728x90.png?text=Disney+Clone)

A feature-rich Disney+ clone built with Next.js and other modern web technologies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication
- Customizable themes with Next Themes
- Carousel integration with Embla Carousel
- Form handling with React Hook Form
- Styled with TailwindCSS and TailwindCSS Animate
- SVG icons with Lucide React

## Tech Stack

- **Frontend:** React, Next.js, TailwindCSS
- **Backend:** Next.js API Routes
- **Other:** Radix UI, Billboard, Class Variance Authority, Clsx, Zod

## Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- Node.js and npm installed on your machine

### Installation

#### 1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/disney-clone.git
   cd disney-clone
   ```

#### 2. Install the dependencies:

   ```sh
   npm install
   ```

#### 3. Set up environment variables:

   Create a `.env` file in the root directory and add your environment variables. Here's an example:

   ```env
   # Example environment variables
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="yoursecret"
   ```

#### 4. Start the development server:

   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for linting errors.

## Configuration

### NextAuth.js

NextAuth.js handles user authentication. Configure your providers and session settings in the `[...nextauth].js` file located in the `pages/api/auth` directory.

### TailwindCSS

TailwindCSS is used for styling. You can customize the TailwindCSS configuration in the `tailwind.config.js` file.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

   ```sh
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```sh
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```sh
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License.
