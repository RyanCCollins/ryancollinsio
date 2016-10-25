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

Project.create(
  title: 'Meetup Event Planner',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/main-mock.png?raw=true",
  caption: "Rails, React & GraphQL App Highlighting Interactivity and Performance.",
  description: "Built a dynamic single page application using React and Redux showcasing best practices for building dynamic and interactive web forms built to increase conversions. Built a responsive web application that allows the user to establish a meet-up event.",
  projectUrl: "http://meetup-event-planner.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/meetup-event-planner",
  milestones: "## Front End Milstones: \n \n - Followed ES2015 best practices \n \n Crafted reusable modules with 100% test coverage using webpack as a module bundler \n \n Created highly dynamic User Interface, including Web forms and other interactive content \n \n Followed UX and A11y Accessibility Best Practices \n \n Created several dozen reusable stateful and stateless functional React components using best practices \n \n As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality. \n \n ## Back End Milestones: \n \n - Built a scalable GraphQL on Rails API to provide data and authentication to the site \n \n - Utilized a decoupled and service oriented architecture for maximum scalability \n \n - Wrote tests utilizing RSpec to eliminate Regressions",
  designPatterns: "This app uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. Follows best practices for stateless functional components. Implements a service oriented architecture using GraphQL and Ruby on Rails for maximum performance and scalability",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Built a highly scalable GraphQL on Rails backend to provide data and authentication to the site.",
  technicalReview: "Excellent work, all data are very nicely presented in the DOM! ... Great work with GraphQl and React / Redux!",
  reviewerName: "Expert Code Reviewer",
  category: "fullstack"
)

Project.create(
  title: 'React Weekly',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-mockup-2.jpg?raw=true",
  caption: "Performance Oriented SPA, React & GraphQL",
  description: "Front End Single Page application built with a focus on performance and UX. Custom built back end running GraphQL, Python and Node JS.",
  projectUrl: "http://www.reactweekly.co/",
  repoUrl: "https://github.com/RyanCCollins/react-weekly",
  milestones: "## Front End Milestones: \n \n - Implemented Advanced Webpack Code Chunking and server rendering to increase performance exponentially \n \n - Followed the feature-first approach, whereby components exist in isolation from the app, encouraging encapsulation and reusability. \n \n - Wrote dozens of scalable react components and connected containers. \n \n - Followed functional programming best practices, utilizing the immutable architecture and encapsulating business logic in the Redux store. \n \n - As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality \n \n ## Back End Milestones: \n \n - Implemented a custom GraphQL schema. \n \n - Wrote an Express JS Server to serve content in real-time with increased I/O performance \n \n - Integrated custom Python scripts in order to scrape the medium API for posts for the site.",
  designPatterns: "Most notably, the app utilizes A11y accessibility and UX best practices. It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. On the back end, it follows the micro-service architecture, serving data via a single endpoint with GraphQL.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, Grommet, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code. Built a custom GraphQL back end schema.",
  category: "frontend"
)
