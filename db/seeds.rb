User.create(
  name: "Admin User",
  email: "admin@ryancollins.io",
  password: "Password123!"
)

Project.create(
  title: 'Corporate Dashboard',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-mockup.jpg?raw=true",
  caption: "Performance Oriented SPA, React & GraphQL",
  description: "Blazingly fast Corporate analytic dashboard application, built with a focus on component-oriented design, UI / UX, Accessibility and performance optimization. Implemented a GraphQL server with subscriptions to serve data in realtime over web sockets.",
  projectUrl: "https://corporate-dashboard-client.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/corporate-dashboard",
  milestones: "- Incorporated best practices to build an interactive application, including data visualizations and a mobile responsive layout. \n \n - Integrated GraphQL with Apollo Client to load realtime data from a NodeJS server. \n \n - Utilized UI / UX and Accessibility best practices \n \n - Built dozens of reusable React components with 100% test coverage \n \n - Utilized Server rendered React and Code Chunking to increase performance exponentially. \n \n - As always, followed the AirBnB React and JavaScript style guides.",
  designPatterns: "The app utilizes A11y accessibility and UX best practices. It uses many performance enhancement techniques to make it blindingly performant. It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. On the back end, it follows the micro-service architecture, serving data via a single endpoint with GraphQL.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, Grommet, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Jest and Enzyme to provide high quality code. Built a custom GraphQL back end schema.",
  technicalReview: "Excellent work, all data are very nicely presented in the DOM! ... Great work with GraphQl and React / Redux!",
  reviewerName: "Expert Code Reviewer",
  category: "frontend"
)
