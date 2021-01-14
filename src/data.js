export const projects = [
  {
    id: 1,
    title: 'Augustine restaurant website',
    name: 'Augustine',
    url: 'https://creperie-augustine.com',
    stack: ['React', 'Next', 'Firebase'],
    description:
      'This is the website of a French crêperie located in Paris. The UI was built with Next and I used Firebase to manage a database with the different bookings and orders. I also used Firebase to create an admin profile which has authorization to deal with the customers bookings and orders.'
  },
  {
    id: 2,
    title: 'Peintepox website',
    name: 'Peintepox',
    url: 'https://peintepox.vercel.app',
    stack: ['React', 'Next', 'Styled-Components'],
    description:
      'Here is the website of a French company specialized in industrial sanding, chemical pickling and painting. I built it using React with Next, and it is fully static.'
  },
  {
    id: 3,
    title: 'My portfolio',
    name: 'Portfolio',
    url: '#home',
    stack: ['Svelte'],
    description:
      "I read so many excellent reviews about Svelte that I definitely wanted to learn it. I thought that a light portfolio would be the ideal project to get started with it, so I took the leap and here is how I built what you're reading!"
  }
];

export const reviews = [
  {
    id: 1,
    description: 
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Théophile',
    company: 'Crêperie Augustine',
    image: '/images/logo/augustine.png' 
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name:'Cyriaque',
    company: 'Peintepox',
    image: '/images/logo/peintepox.png'
  }
];
