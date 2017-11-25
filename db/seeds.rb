User.create(
  name: "Admin User",
  email: "admin@ryancollins.io",
  password: "Password123!"
)

# React TS Boilerplate
p = Project.create!(
  title: 'Scalable React TypeScript Boilerplate',
  user: User.all.first,
  description: "A React + TypeScript boilerplate that follows the feature-first architecture for maximum scalability.  Based on the Scalable React Boilerplate project, the main difference being that this project embraces static types using TypeScript.  By implementing statically typed interfaces, this project is a great starter project for component libraries, web apps, or even static websites.",
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/srtsb/main.png?raw=true",
  projectUrl: "https://scalable-react-ts-boilerplate.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/scalable-react-ts-boilerplate",
  milestones: "- Built a scalable, feature-first React boilerplate / micro-framework using TypeScript. \n - Developed a documentation webpage for user's of the library. \n - Built dozens of reusable component primitives with typed APIs. \n - Wrote a publication on the merits of utilizing typed APIs when developing React User Interface Libraries.",
  designPatterns: "This project implements static typing using TypeScript, providing type-safety and self-documentation.  It uses Redux and the Flux unidirectional data flow, along with Styled-Components.  Finally, it incorporates the feature-first architecture, which promots code reuse by seperating reusable UI from project specific UI.",
  technicalInformation: "Built with TypeScript, React, Redux and many other libraries using the feature-first architecture.  Utilizes Functional Reactive Programming and Immutable data structures.  The app is universal and renders serverside using an express application.",
  category: "frontend",
  sort_priority: 203
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/srtsb/main.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/srtsb/all.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

tags = ['React', 'TypeScript', 'Redux', 'Flux', 'ES6', 'Node', 'Express', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

# Calendar web app

p = Project.create!(
  title: 'Udacity Blitz Calendar Web App',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/main-mockup.jpg?raw=true",
  description: "Built as a contractor for the Udacity Blitz platform, the mentor calendar web application is an engineering feat to say the least.  As a core engineer on the project, my goal is to implement the most cutting-edge web technologies available to build a highly optimized dynamic web application, which will be used by Udacity Mentors and Students from around the globe.",
  projectUrl: "https://github.com/udacity-blitz/calendar-web-app-frontend",
  repoUrl: "https://github.com/udacity-blitz/calendar-web-app-frontend",
  milestones: "- Integrated more than 150 unit tests in an effort to provide reliable code. \n - Utilized best-practices for organization of React applications. \n - Wrote dozens of connected containers and reusable React UI components following the Flux unidirectional and feature-first architectures",
  designPatterns: "The app utilizes the Flux unidirectional data flow and the feature-first code organization architecture.  It uses the AirBnb styleguide and Eslint plugins.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, Bootsrap, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Over 150 Unit tests written with Enzyme to provide high quality code.",
  category: "frontend",
  sort_priority: 200
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/1.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/2.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/3.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/4.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/5.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/6.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/7.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/8.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mentor-calendar/9.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

tags = ['React', 'GraphQL', 'Redux', 'Flux', 'ES6', 'Bootstrap']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

# Udacity Alumni Client
p = Project.create(
  title: 'Udacity Alumni Client',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-client.png?raw=true",
  caption: "Component-oriented dynamic SPA for Udacity Alumni Publishing Platform",
  description: "A true feat of engineering, this application serves as a hub for Udacity Alumni from around the world. We built a bespoke publishing platform and social network to connect Alumni from around the world, using many of the most advanced web engineering technologies available.",
  projectUrl: "https://udacity-alumni-client.herokuapp.com/",
  repoUrl: "https://github.com/udacityalumni/alumni-client",
  milestones: "- As team leader, lead the engineering of the Udacity Alumni Web application, with over 800 commits from 20+ engineers from around the world \n - Engineered a cutting edge React single page application that utilizes server rendering, providing exceptional performance. \n  - Implemented webpack code-chunking, lazy loading, and other similar performance optimization techniques to cut the time-to-first-byte loading time to milliseconds",
  designPatterns: "The app utilizes accessibility and UX best practices and contains dozens of dynamic UI components. It uses many performance enhancement techniques, including Server-rendering, code-chunking, lazy-loading, et. al. It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, Grommet, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React applications. Unit tests written with Jest and Enzyme to provide high quality code.",
  category: "frontend",
  sort_priority: 202
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/1.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/2.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/3.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/4.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/5.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-client/6.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

tags = ['React', 'GraphQL', 'Redux', 'Flux', 'Grommet', 'ES6', 'Apollo', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

# Udacity Alumni API
p = Project.create(
  title: 'Udacity Alumni API',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-api.png?raw=true",
  caption: "Custom GraphQL on Rails API and Micro-services",
  description: "The Udacity Alumni Development team is building a bespoke publishing platform and social network for the alumni community.  We built a custom GraphQL powered backend API and micro-services for the purposes of serving dynamic data and providing authentication for the front end.",
  projectUrl: "https://udacity-alumni-client.herokuapp.com/",
  repoUrl: "https://github.com/udacityalumni/alumni-api",
  milestones: "- Built a GraphQL on Rails API to allow for declarative query collocation \n - As team leader, lead the engineering of the Udacity Alumni Web application, with over 800 commits from 20+ engineers from around the world \n  - Optimized the data-loading functionality using server optimization techniques",
  designPatterns: "Followed the micro-service architecture, serving data via a single endpoint with GraphQL, allowing for declarative collocated queries and performant network requests.",
  technicalInformation: "Built a custom GraphQL back end running on Ruby on Rails.",
  category: "backend",
  sort_priority: 201
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-api/1.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-api/2.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-api/3.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-api/4.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/udacity-alumni-api/5.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

tags = ['GraphQL', 'Apollo', 'Ruby on Rails']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

# Ryancollins.io
p = Project.create(
  title: 'RyanCollins.io',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/portfolio.jpg?raw=true",
  caption: "Progressive Offline-first Web App",
  description: "A complete rewrite of RyanCollins.io, built with the latest and greatest technologies.  The application will be used for me to broadcast online courses, blog, post about my recent work, etc.",
  projectUrl: "https://ryancollins.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/ryancollinsio",
  milestones: "- Built a GraphQL on Rails API to allow for declarative query collocation \n  - Developed a cutting edge React single page application that utilizes server rendering to increase performance exponentially. \n  - Implemented webpack code-chunking, lazy loading, and other similar performance optimization techniques to cut the time-to-first-byte loading time to milliseconds \n  - Built an accompanying React Native app",
  designPatterns: "The app utilizes service worker and app cache to provide an offline experience.  It utilizes accessibility and UX best practices and contains many dynamic UI components. It uses many performance enhancement techniques, including Server-rendering, code-chunking, lazy-loading, et. al. to make it blindingly performant. It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. On the back end, it follows the micro-service architecture, serving data via a single endpoint with GraphQL, allowing for declarative collocated queries and performant network requests.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, Grommet, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Jest and Enzyme to provide high quality code. Built a custom GraphQL back end running on Ruby on Rails.",
  category: "fullstack",
  sort_priority: 199
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/1.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/2.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/3.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/4.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/5.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollins-io-v3/6.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

tags = ['React', 'GraphQL', 'Redux', 'Flux', 'Grommet', 'ES6', 'Apollo', 'Ruby on Rails', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

p = Project.create(
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
  category: "frontend",
  sort_priority: 198
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/home-nav.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/home.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/key-metrics-main.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/key-metrics-bottom.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/geospatial.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-view-main.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-view-search.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-page-filter.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'GraphQL', 'Redux', 'Grommet', 'ES6', 'Apollo', 'Node', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!


# Restaurant Reviewer
p = Project.create(
  title: 'Restaurant Reviewer',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/new/restaurantreviewermock.jpg?raw=true",
  caption: "Restaurant Reviewer A11y Best Practices App and performance optimized React single page app",
  description: "Full Stack web application built with a focus on UX and A11y Accessibility best practices. Shows a list of restaurants retrieved through a web scraper and corresponding reviews for the restaurants. The application allows users to submit new reviews for restaurants and focuses on providing a world-class user experience no matter the end-user's device.",
  projectUrl: "http://restaurant-reviewer-client.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/restaurant-reviewer",
  milestones: "## Front End Milestones: \n - Followed the feature-first approach, whereby components exist in isolation from the app, encouraging encapsulation and reusability. \n - Wrote dozens of scalable react components and connected containers. \n - Followed functional programming best practices, utilizing the immutable architecture and encapsulating business logic in the Redux store. \n - As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality \n ## Back End Milestones: \n - Wrote unit tests using RSpec, providing a solid framework for the app \n - Utilized the Ruby on Rails v.5 API only mode in an effort to build a micro-service oriented API to serve JSON data to the front end. \n - Utilized Docker to encourage maximum scalability and build automation. \n - As always, followed the Ruby style guide and best practices.",
  designPatterns: "Most notably, the app utilizes A11y accessibility and UX best practices. It also uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. On the back end, it follows the micro-service architecture, serving custom endpoints via a RESTful API. The application uses Docker to automate the build process.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code. Built a Rails API to serve and persist data for the application.",
  technicalReview: "I really appreciate your hard work with both Backend and Frontend! Very professionally built app and very enjoyable to use. Keep it up!",
  reviewerName: "Expert Code Reviewer",
  category: "fullstack",
  sort_priority: 197
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/mainpage.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/restaurantsmain.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/addreview.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/reviewmodal.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/reviews.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/reviewsmain.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/singlerestaurant.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/singlerestaurantmain.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/restaurant-reviewer-swnd/skiplinks.png?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'Ruby on Rails', 'Redux', 'GraphQL', 'Apollo', 'Grommet', 'ES6', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

p = Project.create(
  title: 'Meetup Event Planner',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/meetup-main-mockup.jpg?raw=true",
  caption: "Rails, React & GraphQL App Highlighting Interactivity and Performance.",
  description: "Built a dynamic single page application using React and Redux showcasing best practices for building dynamic and interactive web forms built to increase conversions. Built a responsive web application that allows the user to establish a meet-up event.",
  projectUrl: "http://meetup-event-planner.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/meetup-event-planner",
  milestones: "## Front End Milstones: \n \n - Followed ES2015 best practices \n \n Crafted reusable modules with 100% test coverage using webpack as a module bundler \n \n Created highly dynamic User Interface, including Web forms and other interactive content \n \n Followed UX and A11y Accessibility Best Practices \n \n Created several dozen reusable stateful and stateless functional React components using best practices \n \n As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality. \n \n ## Back End Milestones: \n \n - Built a scalable GraphQL on Rails API to provide data and authentication to the site \n \n - Utilized a decoupled and service oriented architecture for maximum scalability \n \n - Wrote tests utilizing RSpec to eliminate Regressions",
  designPatterns: "This app uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. Follows best practices for stateless functional components. Implements a service oriented architecture using GraphQL and Ruby on Rails for maximum performance and scalability",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Built a highly scalable GraphQL on Rails backend to provide data and authentication to the site.",
  technicalReview: "Excellent work, all data are very nicely presented in the DOM! ... Great work with GraphQl and React / Redux!",
  reviewerName: "Expert Code Reviewer",
  category: "fullstack",
  sort_priority: 196
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/main-all.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/main-top.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/events-list.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/single-event-all.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/signup.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/meetup-event-planner/meetup-event-planner/login-main.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'GraphQL', 'Redux', 'Apollo', 'Grommet', 'ES6', 'Ruby on Rails', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

p = Project.create(
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
  category: "frontend",
  sort_priority: 195
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-all.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/main-main.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-all.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/react-weekly/images/about-main.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'GraphQL', 'Apollo', 'Redux', 'Grommet', 'ES6', 'Node', 'Server Rendered', 'Python']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save!

p = Project.create(
  title: 'Scalable React Boilerplate',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/scalable-react/1.png?raw=true",
  caption: "Best practices React boilerplate, code generation tools and microframework",
  description: "Released an open-source boilerplate, multiple scaffolding tools and React component generators using the knowledge and best practices gained from working on several large-scale React projects. The boilerplate aims to implement best practices for developing with cutting-edge JavaScript in 2016 and both provide a useful starting place for any of my projects going forward. The generators automate all of the most time consuming parts of working with React, scaffolding out components, containers, action creators, reducers and tests in a similar fashion to Rails. The two projects showcase seperate organizational strategies, offering multiple options for different situations.",
  projectUrl: "https://scalable-react-boilerplate.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/scalable-react-boilerplate",
  milestones: "- Used the experience gained from scaling several large-scale React projects to create multiple open source projects for others to use to learn the best practices. \n - Created demo applications using React and Redux to showcase the projects \n - Wrote slush generators that scaffolds out the starter projects \n - Created scaffolding generators to automate the creation of react / redux components and containers \n - Wrote a contribution guide and maintained an open-source community that uses the best practices outlined in the boilerplate project \n - As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality",
  designPatterns: "Utilize the Flux unidirectional data flow architecture. The scalable project implements the feature-first organizational pattern, providing maximum scalability.  It integrates Reselect, Webpack Code-chunking and Server-rendered React for maxium performance.  It also integrates GraphQL and Apollo for declarative query collocation",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code. Uses the react-redux connect method to hook up react components to the redux store.",
  category: "frontend",
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/scalable-react/1.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/scalable-react/2.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/scalable-react/3.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'GraphQL', 'Redux', 'Apollo', 'ES6', 'Grommet', 'Node', 'Server Rendered']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end

p.save

p = Project.create(
  title: 'Public Transportation',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/map.png?raw=true",
  caption: "Project 2 for Senior Web Nanodegree.",
  description: "Developed an offline-first, progressive web application that allows selection of train stations from a map and loads a train schedule in real-time. Using cutting edge offline technologies such as Service Worker, the application intelligently caches all of the data and assets, making the application function both on and offline.",
  projectUrl: "http://public-transporation-sw.herokuapp.com/",
  repoUrl: "https://github.com/RyanCCollins/public-transportation",
  milestones: "- Built a dynamic single page application using offline first technologies \n - Transpiled cutting edge JavaScript with ES6 using Babel \n - Implemented service worker and IDB to provide persistent offline data \n - Utilized reachability to determine when the app was offline \n - Wrote several dozen reusable React components \n - Utilized Redux and unidirectional data-flow to manage dynamic state predictably \n - Wrote tests to eliminate regressions and provide a solid user experience \n - As always, followed the AirBnB JSX and JavaScript style guides and utilized ESLint to provide exceptional style and code quality",
  designPatterns: "Most notably, this app uses the Flux unidirectional data-flow architecture and functional reactive programming techniques. Follows best practices for stateless functional components.",
  technicalInformation: "Built with functional JavaScript, ES2015, React, Redux, CSS Modules, following the unidirectional data-flow architecture. Utilizes best practices for scaling of React Apps. Unit tests written with Expect and Mocha / JSDOM to provide high quality code. Uses the react-redux connect method to hook up react components to the redux store.",
  category: "frontend"
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/main.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/about.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/confirm-details.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/help.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/schedule.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/public-transportation/slideout.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'Redux', 'Material UI']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

p = Project.create(
  title: 'Hacksmiths.io',
  user: User.all.first,
  featureImage: "https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/main-mockup-web.png",
  caption: "Web API and Front End built for the Hacksmiths members.",
  description: "Implemented the Foundation web framework and React JS to design and develop a multi user web application for the members of the Hacksmiths. Built a multi-user blog for members of the site and implemented both server rendered Jade views and dynamic React JS components.",
  projectUrl: "http://hacksmiths.io/",
  repoUrl: "https://github.com/RyanCCollins/hacksmiths-website",
  milestones: "- Built an authentication system to allow for multi users on the site \n - Built a web API to provide data to multiple clients \n - Implemented a custom designed Front End web site \n - Utilized the Foundation web framework to build an attractive front end web application \n - Automated the build process, using Gulp and Webpack \n - Implemented server-rendered Jade views",
  designPatterns: "Built with server rendered Jade views, utilizing the MVC architecture and the Foundation responsive web framework. Implemented several React JS components, utilizing ES6 and Webpack. Utilized Gulp to automate the build process and allow for the usage of preprocessors, including Sass.",
  technicalInformation: "Implements the Model View Controller design pattern, 12 Factor Micro-Services, build automation.",
  category: "fullstack"
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/landing.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/members.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/events.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/blog.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/single%20event.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'Sass', 'Foundation', 'ES6', 'Docker']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

p = Project.create(
  title: 'Hacksmiths App',
  user: User.all.first,
  featureImage: "https://raw.githubusercontent.com/RyanCCollins/hacksmiths-app/master/IMG_0408%202_iphone6plus_gold_side2.png",
  caption: "iOS Mobile Application built for the Hacksmiths.",
  description: "Followed best practices to design and develop the Hacksmiths.io app, a professional iOS mobile app built for the members of the Hacksmiths. Implemented best practices for design and user experience, creating a functional and aesthetically appealing application.  Founded by Ryan Collins and Sean Craig, the Hacksmiths are a group of software professionals working collaboratively in a virtual environment in an effort to solve real world problems through the development of software. We build tools designed to help non-profit organizations streamline their philanthropic efforts, utilizing industry best practices and advanced software development methodologies.",
  projectUrl: "http://hacksmiths.io/",
  repoUrl: "https://github.com/RyanCCollins/hacksmiths-app",
  milestones: "- Designed a polished User Interface using Apple's UIKit libraries, Cocoapods and custom views. \n - Implemented a scalable Node.js API with a persistent MongoDB store to synch server data in real-time to the app. \n - Integrated push notifications both app and server-side \n - Implemented a complex Core Data model to persist data on the device, providing a seamless offline experience. \n - Utilized Promises via the PromiseKit library to provide an elegant Asynchronous experience. \n - Implemented the Model View Presenter and Model View Controller patterns. \n - Utilized custom Protocols to create modular components. \n - Developed an extremely elegant and complex networking client, creating a fast and reliable service layer for the application.",
  designPatterns: "Utilizes the Model View Presenter and Model View Controller paradigms, along with the Delegate / Protocol Pattern.",
  technicalInformation: "Built in Swift 2.2 using a multitude of Apple Libraries and Cocoapods. Implements Promises to create a seamless Asynchronous experience.",
  technicalReview: "This is one of the best apps I've reviewed. Your coding style is amazing and reading the code was a breeze. Also the design was especially professional.",
  reviewerName: "Spiros Raptis",
  category: "ios"
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-ios/community@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-ios/event@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-ios/idea-submission@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-ios/participants@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-ios/slideout@3x.PNG?raw=true",
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['Model View Controller', 'Swift', 'Core Data', 'Model View Presenter']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

p = Project.create(
  title: 'Hacksmiths Admin Dashboard',
  user: User.all.first,
  featureImage: "https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/hacksmiths-web/admin-hacksmiths-main.jpg",
  caption: "Admin Dashboard and API for the Hacksmiths Project",
  description: "Followed best practices to build a Node JS web API containing data driven microservices and React JS / Keystone JS Admin Dashboard. Backed by MongoDB, the API serves multiple clients, including the web app and the iOS app.  Built a ReactJS powered Admin Dashboard.",
  projectUrl: "http://hacksmiths.io/",
  repoUrl: "https://github.com/RyanCCollins/hacksmiths-website",
  milestones: "- Built a scalable backend using Node JS, Express JS \n - Implemented a custom admin dashboard using React and KeystoneJS \n - Automated the build process, following the 12 factor guidelines to build a scalable app \n - Implemented server-rendered Jade views \n - Architected a data system utilizing MongoDB, serving data to multiple clients via a REST API",
  designPatterns: "Implements the Model View Controller design pattern, 12 Factor Micro-Services, build automation.",
  technicalInformation: "Built with NodeJS, Express, MongoDB and KeystoneJS, utilizing the MVC architecture. Utilized Jade to render views server side and implemented a fast and functional admin dashboard to provide easy access to the site's data. Utilized the Twitter and Github APIs as OAuth providers for the app and deployed via Docker, automating the process of Continuous Delivery.",
  category: "fullstack"
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-all.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-events.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-filter.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-gallery.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-login.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/hacksmiths-web/admin-mobile.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'Foundation', 'Docker', 'Node', 'REST']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!


p = Project.create(
  title: 'Food Drivr - React Front End App',
  user: User.all.first,
  featureImage: "https://raw.githubusercontent.com/RyanCCollins/cdn/master/portfolio-image-gallery-images/food-drivr-web/wastenotmock.jpg",
  caption: "React JS Application built to streamline food donations via the Food Drivr platform.",
  description: "Coordinated collaborative efforts and contributed to the development of a React JS web application for the Food Drivr project.",
  projectUrl: "http://fooddrivr.com/",
  repoUrl: "https://github.com/teamhacksmiths/food-drivr-frontend",
  milestones: "- Implemented cutting-edge Javascript, including React, ES6 and Webpack. \n - Wrote a client-side API layer utilizing a Promise based approach, providing a seamless asynchronous experience. \n - Implemented Material-UI and custom React components, providing a reactive experience.",
  designPatterns: "Utilizes the AirBnB JS Style Guide, the Flux and Model View Controller Architectures, HTML 5 and CSS best practices.",
  technicalInformation: "Built with React JS the application is a Single Page App that compiles via Webpack Hot Module Reloading. It is truly as cutting edge as it gets, implementing the best parts of ES6 through the use of Babel. It utilizes a number of NPM modules, Post CSS and boasts custom design by the Hacksmiths resident designer, Sean Craig.",
  category: "frontend",
  sort_priority: 100
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/donate-einstein.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/donate.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/donor-signup.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/signup.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/volunteer-signup.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/landing-section-one.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/landing-section-two.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/landing-section-three.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/profile-one.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-web/profile-two.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['React', 'Axios', 'ES6']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

p = Project.create(
  title: 'Food Drivr - API',
  user: User.all.first,
  featureImage: "https://raw.githubusercontent.com/teamhacksmiths/food-drivr-frontend/master/food-drivr-donate-mock.jpg",
  caption: "Rails JSON API and Back End built to drive the Food Drivr project.",
  description: "Coordinated collaborative efforts and lead the development team of the Food Drivr food donation web and mobile applications. The Food Drivr website and mobile app serves to make it dead simple to donate edible food to the hungry. Open the app, press a button and a driver will come pick it up, bringing it to the less fortunate",
  projectUrl: "http://fooddrivr.com/",
  repoUrl: "https://github.com/teamhacksmiths/food-drivr",
  milestones: "- Led the development of a scalable REST API utilizing the Ruby on Rails web framework. \n - Utilized Docker to completely automate the deployment and allow for maximum scalability. \n - Implemented a PostgreSQL database, providing an API to persist data for the project. \n - Wrote tests utilizing Rspec to eliminate regressions. \n - Wrote comprehensive documentation to provide sustainability to the project.",
  designPatterns: "Utilizes the Model View Controller pattern and the AirBnb Ruby Style Guide. Followed the REST architecture, implementing a modern and stable API.",
  technicalInformation: "Utilizes the Model View Controller pattern and the AirBnb Ruby Style Guide. Followed the REST architecture, implementing a modern and stable API.",
  category: "backend",
  sort_priority: 99
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-erd.png?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-api/food-drivr-docs-errors.png?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['Ruby on Rails', 'REST']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

p = Project.create(
  title: 'Food Drivr - iOS App',
  user: User.all.first,
  featureImage: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/food-drivr-mock.jpg?raw=true",
  caption: "iOS Mobile application, utilizing an Uber model to combat food waste.",
  description: "Coordinated collaborative efforts to create open source software with 18 experienced software developers from no less than 5 countries across the world. Leading the team in creating the Food Drivr project and building a JSON REST API for the project utilizing the Ruby on Rails web framework. Orchestrated the creation of multiple software clients for the project, including an iOS Mobile App, REST API, Data Analytic platform, Admin Dashboard and ReactJS web Frontend. The Food Drivr website and mobile app serves to make it dead simple to donate edible food to the hungry. Open the app, press a button and a driver will come pick it up, bringing it to the less fortunate.",
  projectUrl: "http://fooddrivr.com/",
  repoUrl: "https://github.com/teamhacksmiths/food-drivr-ios",
  milestones: "- Utilized the Model View Controller and Model View Presenter architectures \n - Led a team of 18 developers to build the project from the ground up \n - Provided support and guidance to the team, coordinating the creation of a multi-client application and API.",
  designPatterns: "Utilizes the Model View Presenter and Model View Controller paradigms, along with the Delegate / Protocol Pattern.",
  technicalInformation: "Built in Swift using XCode, the application was built using best practices and design patterns.",
  category: "ios",
  sort_priority: 98
)

images = [
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/accepting@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/donation-acceptance@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/donation-history@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/mapview@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/pending-donations@3x.PNG?raw=true",
  "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/food-drivr-app/profile@3x.PNG?raw=true"
]

images.each do |i|
  p.images << ProjectImage.create(
    src: i
  )
end

p.save!

tags = ['Model View Controller', 'Swift', 'Core Data', 'Model View Presenter']
tags.each do |tag|
  p.tags << Tag.find_or_create_by(title: tag)
end
p.save!

the_post = Post.create(
  user: User.first,
  category: 'frontend',
  sort_priority: 201,
  title: 'Scaling JavaScript Apps with GraphQL and Apollo',
  feature_image: 'https://cdn-images-1.medium.com/max/800/1*IHFSOkPgFqI6clmF81SPQw.png',
  body: "
# Scaling JavaScript Apps with GraphQL & Apollo
\n
Note: to see code examples, please read this article on [Medium](https://medium.com/@ryancollinsio/scaling-javascript-apps-with-graphql-8f99b0e2df18#.c8n3jslyi).
\n
I originally agreed to write this article as a favor to a good friend of mine,
[Andres Narvaez](https://medium.com/@drdrace), who is a technical project
manager at [Udacity Blitz](https://blitz.com/). As a technical project manager,
Andres’ job is to manage a team of software engineers to deliver complex
software projects to start up clients around the world.
\n
After a particularly complex project that we worked on recently, Andres and I
started having discussions about what tools we could use to ensure that we were
able to deliver products of the highest quality at scale, on time and under
budget.
\n
I had written an article about building a full on web application with [Ruby,
JavaScript and
GraphQL](https://medium.com/ryancollinsio/building-a-full-on-graphql-app-b261f6cfea93#.ep4mm0ucv)
and was asked to revisit the topic from a standpoint of a Full Stack JavaScript
app.
\n
I’d like to take this as an opportunity to look at one of my recent open source
projects, which does just that. I’ll talk about the thought process that went
into making it and why I think this particular combination of technologies is
the answer to scaling distributed web applications.
\n
\n
### The what and why of GraphQL
\n
Before we jump into the how, let’s first talk about the what and the why of
GraphQL. First of all, what even is GraphQL?
\n
> GraphQL is a query language for APIs and a runtime for fulfilling those queries
> with your existing data.
\n
Okay great, so GraphQL is a query language, but why would we even need a query
language?
\n
In my opinion, one of the most challenging parts of being a client-side
developer is having to define your data requirements ahead of time. It’s
impossible to truly understand all of the details of your project until you’ve
been working on it for a while. By the time you discover the edge-cases, the
back end work has already been done and it can be hard to request changes at
that point.
\n
The problem with having to make changes to your data requirements with
traditional REST architecture is that it has an effect on multiple components of
your application that are coupled together over a large distance. When you have
components of a distributed application that are tightly coupled, it makes them
brittle and hard to change. This is one of the areas where GraphQL really
shines.
\n
According to the GraphQL documentation site
\n
> GraphQL provides a complete and understandable description of the data in your
> API, gives clients the power to ask for exactly what they need and nothing more,
makes it easier to evolve APIs over time, and enables powerful developer tools.
— Graphql.org
\n
GraphQL introduces a deterministic approach to fetching data, making it easier
to evolve your client without the need for the constant back and forth between
the front end and back end teams. Not that I don’t enjoy working with back end
folks, but it does add time and complexity to a project for sure. With that
said, let’s take a look at how we can get started with GraphQL.
\n
\n
#### Using GraphQL with NodeJS
\n
*NOTE: If you want a full picture of the code shown below, please reference the
*[Scalable React TypeScript boilerplate
project](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate)*.
Even though this project is mainly in TypeScript, I’ve stripped out the majority
of the type annotations to make it easy to use as reference for any JavaScript
project.*
\n
*Also, the documentation for this project *[contains an overview of the file
tree](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/README.md#file-tree-structure)*
for both the server and client, in case you need to reference it.*
\n
First of all, we need a GraphQL server. For my project, I chose ExpressJS, but
you could just as easily use Koa, Hapi, SailsJS, or whatever else you want. I’ll
start by creating a  file in the root level server directory, where we will
attach the necessary GraphQL middleware to the Express application.
\n
As you can see, I wrote a function that takes as input an Express application
and returns a promise of a new Express application decorated with a few
endpoints that power the GraphQL server.
\n
I’ve also attached the [GraphiQL](https://github.com/graphql/graphiql) tool to
the server, which provides a user interface for interacting with GraphQL
queries. This tool is truly invaluable as it gives you the ability to explore
the data in real-time and it presents documentation that is automatically
generated from the GraphQL schema (*more on this later*).
\n
One thing to note here is that I am using the  module instead of using . As you
can see from the
[documentation](https://github.com/apollographql/graphql-server), this module
was built by the Apollo team to provide a more robust and production ready
GraphQL server.
\n
Lastly, I also added a function that will create a JSON file that contains the
schema. I am using [async
await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
to make sure that the schema is safely stored on disk before resolving from the
function.
\n
Next, I’ve created the main server application within the root level  module.
\n
The majority of this code is related to getting the Express server up and
running and rendering React server-side. I could have added the GraphQL entry to
this file, but I decided it would be more modular to import it from another
module. Once the  promise has resolved, I can apply the standard Express
middleware, add the React server-rendering boilerplate and then get my
application running.
\n
The next step is to define the data model. In this case, I used MongoDB with
Mongoose to make this project as simple as possible. Although MongoDB can be a
great choice for many applications, I would leave this decision up to you.
GraphQL does not care about what database you use to store your data. This could
just as easily been a PostgresSQL database, a JSON file, or even an HTTP request
to another API.
\n
Once the models have been defined, the final step is to introduce the GraphQL
schema’s type system. The idea with the type system is to describe to GraphQL
what types of data you have available in your API.
\n
In the case of the demo application for this article, I have two main models:
Post and Comment. The code below demonstrates how to add GraphQL types based on
the Mongoose schemas for the Post and Comment models.
\n
The process of generating a GraphQL schema is fairly straight forward and can be
[automated](https://www.npmjs.com/package/mongoose-schema-to-graphql) fairly
easily. The idea is to describe a data model, whatever it may be, in terms that
GraphQL can understand. The important part here is to give a type to each field
within the model.
\n
One thing to note is that the types above are output types. They represent the
return value from a query, data that can be read but not written to. If you are
intending on writing rather than reading data, you will need to create input
types as well. I’ve added the [comment input
type](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/blob/master/src/server/graph/types/comment/commentInput.ts)
below to demonstrate this and will come back to this later.
\n
\n
### Queries
\n
Next, let’s look at GraphQL
[Queries](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/server/graph/queries)
on the server.
\n
Queries are the code that glues together the GraphQL schema and the actual data.
Each query has a resolver function that takes any number of arguments and
returns the data from the model.
\n
Here I have two queries, one to get the entire list of posts and another to get
a single post by ID. To accomplish this, I export an object that tells GraphQL
which type I want to use and contains a resolver function that queries the Post
model, returning the data that is needed to resolve the query. GraphQL is smart
enough to see that my model returns the same properties that I defined in my
schema and it takes care of the rest. In this case, the Post model contains a
field that will populate the related comments when a request to get a single
post is made.
\n
\n
#### Exploring the Data
\n
I want to take a brief pause to revisit an earlier topic, which is the awesome
tooling that GraphQL provides out of the box. When you run your server, you have
the option of attaching the GraphiQL IDE to your API. When you visit the
specified URL, you have the ability to interact with your data in real-time.
\n
As you can see below, as I am typing the  query from above into the IDE, I get
intelligent autocompletion that shows me exactly the fields that are available
as defined by the schema we created earlier.
\n
![](https://cdn-images-1.medium.com/max/800/1*feAOisgHU7lYBUq884-Z5w.gif)
\n
When I execute the query, I am given back a response that matches the request
exactly. Lee Byron, the creator of GraphQL suggests that a GraphQL document
\n
> Is like JSON without the values
\n
![](https://cdn-images-1.medium.com/max/600/1*6CVKBr5c6dQUMuAz-EnRCw.png)
![](https://cdn-images-1.medium.com/max/600/1*06vKSpbshhK_bg8hAr5E7A.png)
<span class='figcaption_hack'>An example query and query response, showing that the structure matches exactly
what was requested</span>
\n
There is nothing better than predictability in Computer Science. Using our
tooling to provide determinism in a world full of chaos is just plain smart! By
using this tool, I am able to define my React component APIs around the shape of
the response, making the process much smoother than with a traditional endpoint.
On top of that, GraphQL affords us some pretty awesome performance gains out of
the box, essentially fixing the problem of over-fetching data.
\n
\n
#### Mutations
\n
[Mutations](https://github.com/RyanCCollins/scalable-react-typescript-boilerplate/tree/master/src/server/graph/mutations)
are fairly similar to queries in execution. The main difference, as noted
earlier, is that we use mutations to write data to the database rather than to
read data.
\n
The code above demonstrates that a mutation takes as input a GraphQL type, in
this case the  and returns a GraphQL type, in this case a boolean indicating
whether the request succeeded or not. Within the resolver function, I created a
new model given the input data and saved it to the database. If that request
fails, an error is returned, otherwise I return true indicating that the model
was saved properly.
\n
Now that we have the grunt of the work behind us in order to read and write data
to the database, we can examine what this looks like from the client’s
perspective.
\n
\n
#### Client Side GraphQL Setup
\n
*NOTE: If you are looking for a non-typescript version, please refer to this
*[article on the
subject](https://medium.com/react-weekly/implementing-graphql-in-your-redux-app-dad7acf39e1b#.bjhlkhoi0)*.*
\n
For this example, I am using two libraries (Apollo Client and React Apollo) to
help minimize the boilerplate involved in setting up GraphQL on the client.
Apollo and GraphQL are language and framework agnostic, so I choose to use
TypeScript and React since these are technologies that I am very passionate
about.
\n
First of all, I instantiated an instance of the apolloClient and a network
interface within my  entry file that connects to the url where the Express app
is running. Also, I’ve wrapped the entire app inside of the  and provided the
apollo reducer to my main reducer because React Apollo uses redux to manage its
state behind the scenes.
\n
\n
#### Executing a query on the client
\n
Now I am ready to start writing queries within my React containers. I will start
by fetching the blog posts.
\n
The first step is to create a GraphQL query document. It is possible to
collocate this within your container module, but for the sake of scalability, I
take the approach of separating concerns. Following the [feature-first
approach](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.7svr3ohb9)
to code organization, this file lives within the same folder as the container
that utilizes it. I am using the  library, which allows me to write GraphQL
documents within a template string.
\n
<span class='figcaption_hack'>graphql query document</span>
\n
This query should look familiar. It looks a lot like the GraphQL post type that
I defined earlier. A GraphQL query represents the structure of the response that
you request. This gives me the power to request exactly the data I need for my
container, which makes the response predictable / deterministic.
\n
Within the container, I am using the react-apollo library to hookup the query to
my container. The  function is a higher-order function that takes the data
returned from the query, plus a few others, and maps them to properties within
the container.
\n
Let’s take a step back and look at what I just did. I created a React container,
just like I would otherwise, and injected the exact data needed for the
container as regular ol’ props. It’s almost like I am importing the data from a
local JSON file directly. This makes it very straight-forward to develop my
front end UI components. I don’t have to put much thought into how I fetch the
data needed, or how I need to parse it afterwards. I don’t have to fetch data
from several endpoint when I need to represent a complex object graph. It’s as
simple as dropping in the GraphQL query and mapping the result to the
container’s props.
\n
By putting in the work up front to write the GraphQL boilerplate that’s
required, it frees us from having to work with the back end developer to iterate
on the API when we find that the data requirements are changing over time.
\n
\n
#### Executing a mutation on the client
\n
For this example, I am going to show you a bit of a more complex container to
demonstrate how to use a mutation to write data to the database through a
GraphQL endpoint. The container also contains a query that will provide the data
for the blog post and its comments to the container before and after the
mutation is sent.
\n
The comment mutation is mapped to the container in a similar fashion as the
query. Since this mutation takes input data, it is a bit more complex, but still
fairly straightforward. The  higher order function maps the  function to a
property that can be used within the container. When a user submits a comment,
the  function is called, passing in the input data. After the mutation has
completed, the data is re-fetched to update the user interface (note that you
can also use [optimistic
responses](http://dev.apollodata.com/react/optimistic-ui.html) for this).
\n
Let’s take a look at this in the GraphiQL IDE again. This time, I have pasted in
the mutation from above and am demonstrating how you can pass variables into a
mutation or query through the IDE. The procedure is essentially the same when
you use this in your app.
\n
![](https://cdn-images-1.medium.com/max/800/1*fAO69_l6kejStfbQ1UrcOA.gif)
\n
\n
### Benefits of Static Typed APIs
\n
You may not realize this, but we’ve touched on a number of the benefits of
Static typing already. GraphQL embraces static typing, which means that it is
able to support some fantastic tooling out of the box. The autocompletion within
GraphiQL is a great example and in fact you can enable this in your editor.
Using the eslint-plugin-graphql eslint plugin, you can even lint your GraphQL
documents.
\n
You will find a dozen or so tools on the Apollo team’s github page that can be
used to harness the power of static types. One example that I am very interested
in exploring is the
[Apollo-Codegen](https://github.com/apollographql/apollo-codegen) tool, which
will generate TypeScript or FlowTypes from your GraphQL schema.
\n
Another major benefit of the GraphQL type system is that it allows for
auto-generation of documentation. In fact, within the GraphiQL IDE, you can see
the auto-generated documentation for your API. Take a look at the gif below for
an example of how easy it is to explore the API.
\n
![](https://cdn-images-1.medium.com/max/800/1*GqbnmLpfYqYgUshTV1R0Yw.gif)
\n
The real benefit of all this tooling is the efficiency that you are afforded
once you have set up all of the boilerplate for your app. You spend less time
working with the server developers to iterate on the API and less time writing
code to fetch and parse data. You also do not have to spend time documenting
your API, which can save a ton of time in the long run. As the API evolves, you
do not run the risk of your documentation falling out of sync as things change.
The schema will be updated automatically, along with the documentation, and can
be kept in a central repository so that your entire team has access to the most
up-t0-date documentation.
\n
\n
### Summing it up
\n
GraphQL is an incredible tool that can be used to build robust APIs that scale
exceptionally well. It can be incrementally adopted on top of any project and
can eventually completely replace your (soon to be) deprecated REST APIs. By
employing a static type system, GraphQL enables you to take advantage of a
multitude of tools that can be used to speed up development time, both for the
client-side and server-side developers.
\n
GraphQL is framework / language agnostic and has been adopted by plenty of heavy
hitters in the tech-industry. There is a thriving ecosystem behind GraphQL that
is building tools faster than you can say “custom endpoint”. The best tools are
coming out of the [Apollo team](https://apollographql.slack.com/messages), who
were some of the engineers behind the Meteor framework and they are committed to
making the GraphQL development experience world-class.
\n
This past week was the [Apollo GraphQL Contributor
week](https://dev-blog.apollodata.com/apollo-contributor-week-starts-today-39dd139c70ee#.52v38b2nh),
which motivated me to introduce Apollo GraphQL into an open source project that
I sponsor and to write about it. The Apollo team is doing fantastic work and
supporting the GraphQL ecosystem. [Much
respect](https://medium.com/@ryancollinsio/sashko-stubailo-and-team-apollo-are-killing-it-4f2e1d7eccd8#.w0pwq5c5g)
to them for the amazing work they are doing!
\n
If you are on the fence about GraphQL, now is the time to jump on board. I hope
that this article has helped you to see some of the benefits of using GraphQL
and has taught you a bit about the implementation details.
\n
If you have any questions or require clarification, please don’t hesitate to
leave a note in the comments!
\n
Also, if you are interested in contributing to any of the
[scalable-react](https://github.com/scalable-react) open source projects, we’d
love to hear from you on [slack](http://here for an invite/). We are working
hard to build React / Apollo GraphQL boilerplates that scale. Right now, we are
working on the [TypeScript
version](https://github.com/scalable-react/scalable-react-typescript-boilerplate)
of the [original
scalable-react-boilerplate](https://github.com/scalable-react/scalable-react-boilerplate).
We’d love for you to submit a PR if you find any areas that you think can be
improved upon.
\n
\n
### Resources
\n
* [Building a Full on GraphQL
App](https://medium.com/ryancollinsio/building-a-full-on-graphql-app-b261f6cfea93#.hm9xx5xtj)
* [Implementing GraphQL in your Redux
App](https://medium.com/react-weekly/implementing-graphql-in-your-redux-app-dad7acf39e1b#.8x6etwzcy)
* [Apollo](http://www.apollostack.com/) Stack website
* [Learn GraphQL](https://learngraphql.com/)
* [GraphQL Specification](https://facebook.github.io/graphql/) — This document is
especially useful if you are serious about integrating GraphQL.
* [GraphQL Concepts
Visualized](https://medium.com/apollo-stack/the-concepts-of-graphql-bc68bd819be3#.94scr3agl)
— An amazing article that explores how our data can be expressed by
[Graphs](https://en.wikipedia.org/wiki/Graph_theory).
* [JavaScript Code Quality w/ Free
Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d)
— An article about improving DX w/ TypeScript by [Sashko
Stubailo](https://medium.com/@stubailo)
* [Graphql](https://medium.com/tag/graphql?source=post)
* [JavaScript](https://medium.com/tag/javascript?source=post)
* [Typescript](https://medium.com/tag/typescript?source=post)
* [Node](https://medium.com/tag/node?source=post)
  "
)

tags = ['Front End', 'GraphQL', 'Apollo', 'TypeScript']
tags.each do |tag|
  the_post.tags << Tag.find_or_create_by(title: tag)
end
the_post.save!

the_post = Post.create(
  user: User.first,
  category: 'frontend',
  sort_priority: 200,
  title: "ES2015 JavaScript vs. Elm vs. TypeScript",
  feature_image: "https://cdn-images-1.medium.com/max/800/0*dr-Nr-6WsphJPBFb.png",
  body: "# ES2015 JavaScript vs. Elm vs. TypeScript \n
  ## In search of the perfect Front End Language
\n
As a Front End focused software engineer, one of my goals is to constantly
evolve the tools and methodologies I use in my work. Change is baked right into
my DNA, and rightfully so considering my chosen profession I might add. People
often speak of [JavaScript fatigue](https://medium.com/search?q=javascript
fatigue), a syndrome where engineers get burnt out from the constant change in
the JavaScript ecosystem. This is not a problem for me. I embrace the change and
I try to move faster than it, which of course is not always possible. That said,
when it comes to making alterations at the language level, I am often more
cautious and I take my time to make decisions based on experience.
\n
Over the past year, I have written JavaScript professionally and have
experimented significantly with two additional flavors of JavaScript supersets,
if you will, including Elm and TypeScript. In this article, I will compare each
of these language choices and make a conclusion as to which is my language of
choice for 2017.
\n
\n
### JavaScript
\n
JavaScript has undergone some serious transformations over the years. Most
recently, it received the biggest update to the language ever. The JavaScript we
are writing nowadays with ES2015 and onward is a totally different animal
compared to what you might be used to seeing with pre-ES2015 JavaScript. If you
are not familiar, we are using a tool called [Babel](https://babeljs.io/) that
takes new JavaScript and changes (transpiles) it into JavaScript that can be
understood by modern web-browsers.
\n
The release of ES2015 gave me motivation to write JavaScript full-time, where in
the past I would never have considered making a career out of it. It’s a very
exciting time to be a Front End Engineer. Using web technologies nowadays, we
are able to make just about anything you can think of. Dynamic web applications,
native and browser-based mobile apps, virtual reality, artificial intelligence,
APIs & web-servers, cross-platform desktop apps, et. al.
\n
Beyond just the syntactic updates to the language, one of the major changes has
come with the tooling that is now available. Using Webpack, we no longer need to
load modules via script tags and are able to bundle up our code in such a way
that is compatible with web-browsers. This has enabled Front End Engineers to
think about UI application design in terms of components, making it simple to
package up reusable interface component libraries.
\n
Overall, JavaScript is a very exciting language to work with, but at the end of
the day, it is still missing some key features in my opinion. On the top of the
list is static-typing, followed closely by native immutable data structures.
Although there are libraries that help to fill in the gaps, namely
[Flow](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwj3z_jFlqLRAhXCOCYKHf3mAKIQFggyMAI&url=https://flowtype.org/&usg=AFQjCNHjkhdusPST_3mtgYlEMsU6yzHSsg&sig2=6rMFTU2UTXLa9M7PF_GEug)
and [Immutable.js](https://facebook.github.io/immutable-js/), it can be tough to
find a common ground from project to project. For this reason, vanilla
JavaScript is not my top choice for Front End languages going forward.
\n
\n
### Elm
\n
I spent roughly 3–4 months reading books about Elm before I took the dive into
using it for a project. I have to say that Elm is by far my favorite of the
three and in fact might be one of my favorite languages of all time. First-class
support for: static typing, persistent immutable data structures, auto-currying,
[ADTs](https://en.wikipedia.org/wiki/Algebraic_data_type), the Elm architecture,
etc. The list goes on and on. Elm is a Front End Functional Programmer’s best
friend and is right up my alley.
\n
With all of this said, Elm is not my top choice for Front End languages. Elm is
still very much a niche language without a terrible amount of widespread
industry acceptance. My desire to be involved in a number of projects as an
independent contractor keeps me motivated to use more mainstream technologies
for the time being. Perhaps in a year or so, Elm will rank number 1 for me.
\n
\n
### TypeScript
\n
Let’s get real for a second. Nowadays we are building just about everything with
JavaScript. For the most part, this works great. We are able to eliminate nearly
all bugs and performance issues using immutable data structures and Flux /
Redux. There is still one class of bugs that pop up quite frequently, however.
This entire class of bugs can be fixed with static type checking and TypeScript
is designed to do just that. With TypeScript, you are still writing the
JavaScript that you are already used to, but you have first-class support for
static-typing bundled into an extremely modern and fast compiler.
\n
TypeScript is a blast to work with and is very easy to get setup with it. Using
Webpack makes incorporating TypeScript as easy as installing a loader and saving
files to a .ts(x) extension. Other than a few demonstration projects, the first
real project that I made using TypeScript as the main language is the
[scalable-react-ts-boilerplate](https://github.com/RyanCCollins/scalable-react-ts-boilerplate)
project. This project is a spin-off of another [boilerplate
micro-framework](https://github.com/RyanCCollins/scalable-react-boilerplate)
that I built as leader of the [Udacity Alumni Web
Team](https://medium.com/udacity/introducing-the-udacity-alumni-web-team-f69e7609a0aa#.ecop5gu0v).
It implements the same feature-first architectural pattern, but using TypeScript
as the main language.
\n
In building this project, the realization that I made is that TypeScript is very
well fit for building UI component libraries. As part of this boilerplate, I
built a dozen or so reusable UI components, which demonstrated the capacity of
TypeScript to facilitate self-documenting APIs. This is also the case for
GraphQL, a library that I am also incredibly fond of, as it also deploys a
static type system which facilitates automatic documentation of your
application’s data layer. Due to the fact that in 2017, I will be working as a
core contributor on several UI Component libraries, TypeScript is starting to
make a lot of sense for me.
\n
By incorporating a static type-checking tool like Flow, JavaScript on it’s own
is a very powerful language and is on the same level as TypeScript in terms of
its abilities. The main reason why I prefer TypeScript at the current point in
time is that it encourages the use of type-safety more so than Flow. It has been
my experience that when you work with a team on a project, Flow does nothing to
enforce the usage of static-typing, meaning that your team members can very
easily sidestep Flow’s type-checking. With TypeScript, it is a given that anyone
working on the project will be using static typing and you end up with higher
quality code as a result.
\n
\n
### Summary
\n
While there are dozens of solid choices for Front End languages these days, it
is my opinion that the three that I wrote about here are the best available
choices. ESNext will be one of the top choices for a long time to come due to
its mainstream acceptance. It is a very good language and is leaps and bounds
more evolved than its predecessors were. Elm is my favorite language of the
bunch due to its functional nature, but due to the fact that it’s still fairly
niche it is not going to be my primary language anytime soon. All in all,
TypeScript is my top choice. The fact that I am writing nearly the exact same
thing as with JavaScript, other than adding type annotations, makes TypeScript
the perfect middle-ground for me.
\n
\n
### Resources
\n
* [Getting Started with TypeScript React and
Webpack](https://medium.com/@fay_jai/getting-started-with-reactjs-typescript-and-webpack-95dcaa0ed33c)
* [TypeScript Deep Dive](https://www.gitbook.com/book/basarat/typescript/details)
* [An enhanced GraphQL experience with
TypeScript](https://dev-blog.apollodata.com/graphql-dx-d35bcf51c943#.gxoxk6lyu)
* [JavaScript Code Quality with Free
Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.txqeh1lnb)
* [5 Benefits of static GraphQL
Queries](https://dev-blog.apollodata.com/5-benefits-of-static-graphql-queries-b7fa90b0b69a#.vx5w52wyj)"
)

tags = ['Front End', 'Elm', 'TypeScript']
tags.each do |tag|
  the_post.tags << Tag.find_or_create_by(title: tag)
end
the_post.save!

the_post = Post.create(
  user: User.first,
  category: 'frontend',
  sort_priority: 199,
  title: "Performance Optimizing A React Single Page App — Part 2",
  feature_image: 'https://cdn-images-1.medium.com/max/800/1*vgmd53ACeiyX_JbYF6geQg.png',
  body: "This is a brief followup to my [past
article](https://medium.com/front-end-hacking/performance-optimizing-a-react-single-page-app-a68985fa72cc#.v0k8ln44k)
on the same subject.
\n
I’ve been working with React for nearly 12 months, full-time for the last 8, and
over that time have learned a ton about performance optimization and how it
relates to functional programming concepts. In my past article, I chose to leave
out these ideas to make the article specific to React, but lately have been
itching to write about this stuff. Hopefully you will find this article and the
linked resources useful!
\n
\n
### Immutable Data
\n
In general, immutable data structures are less performant than their mutable
brethren. However, there are several incredible performance enhancements that
are completely dependent of the use of immutable data structures.
\n
According to Lee Byron, the author of Immutable.js, a mutable push operation
with a million items was benchmarked at 83 ms, whereas an immutable data
structure (without CS magic) was benchmarked at 288ms.
\n
![](https://cdn-images-1.medium.com/max/800/1*2WgwvkLKjupqDNjhFA4EvA.png)
<span class='figcaption_hack'>Lee Byron, Using Immutable.js with React</span>
\n
It might seem like immutable data structures are doomed, but I assure you they
are not.
\n
\n
### Structural Sharing
\n
Six months ago, I came across a very famous white paper on [Persistent Immutable
Data Structures](https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf), written as a
thesis by Chris Okasaki. This paper, written in September of 1996 is way ahead
of its time. It took me a whole 6 months to read through it and understand it,
but it was well worth it. This white paper holds many of the secrets that I will
discuss here, so it is well worth the read if you want to take a deep dive into
this subject.
\n
Thanks to Lee Byron, we now have access to [persistent immutable data-structures
in JavaScript](https://facebook.github.io/immutable-js/). In Lee’s [Using
Immutable with React talk](https://youtu.be/YFP8lbdZ0cs) at devConf, he breaks
down a key architectural choice of his Immutable.js library: structural sharing.
\n
By using an [Directed Acyclic
Graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG) data
structure, namely an indexed Trie, immutable data structure mutations can share
the structure of the initial data and only copy over the nodes that were changed
in the operation. One of the main benefits of using a Trie is that we can
perform efficient graph traversal algorithms, specifically Depth First
Traversal, which gives us essentially the same performance as an Array lookup.
\n
Lee’s Immutable library uses these performance enhancements behind the scene’s
while maintaining a similar API to JavaScript Arrays. Using similar data
structures, such as a Hash Trie, we can also mimic the behavior of JavaScript
objects with Immutable data structures.
\n
We have yet to talk about how this benefits a React application, but if you bear
with me we will get there shortly. The important piece to take away is that
using computer science, we can optimize immutable data structures to have a
similar performance overhead to their mutable counter-parts.
\n
\n
### Memoization
\n
Another fantastic performance optimization that we can deploy is Memoization.
There is one important concept that you first must grasp before memoization can
be use effectively and that is referential transparency. Often referred to as
pure functions, a function is said to be referentially transparent if it can be
replaced with its corresponding return value without changing the software’s
behavior. Put differently, given the same input, you will always get the same
ouput.
\n
By maintaining this rule, we get a very convenient side-effect. Not only do pure
functions make it easier for humans to reason about their functionality, but
they also make it easier for tooling to reason about them. Memoization is one of
the main performance enhancements that we can use when we employ pure-functions.
\n
Memoization, according to Wikipedia, is defined as an
\n
> …optimization technique that can be used to speed up computer programs by
> storing the results of expensive function calls and returning the cached results
when the same input occurs again.
\n
With pure-functions we can always be assured that given the same input, a
function will return the same output, so we can use our tooling to speed up our
applications by storing the results of these functions in memory. Any time the
same function is called, instead of re-running the function, a potentially
expensive operation, we can instead use the cached value.
\n
\n
### The problems with Mutable state
\n
The main problem with mutable state is that it makes it very hard to keep track
of how your values change over time. It makes it very hard to keep all of your
code in your head, which leads to bugs and the loss of performance.
\n
For me, when I gave in to immutable data, I had a pink cloud over my head for
months. I told all of my friends and pushed it on everyone, trying to get them
to switch to this paradigm. The reason for this is that I had eliminated the
biggest source of bugs and complexity, all in one fell-swoop. It made my code
easier to write, easier to maintain, and cut runtime exceptions almost
completely out of my programs.
\n
All this is really theoretical, so why don’t we take a look at how React uses
these optimization techniques and also talk about how these ideas can be used in
other domains.
\n
\n
### Putting it to Good Use
\n
There are a few significant performance gains that we can get right out of the
box by employing immutable data structures and memoization.
\n
For one, using the
[React.PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent)
(formerly the pure-render-mixin), along with immutable data, we can optimize the
rendering of our entire component hierarchy. The default implementation to the
shouldComponentUpdate lifecycle method in React is to return true always.
\n
What this means is that by default, React will continuously update your UI
anytime data in your entire application changes. In fact, this has been a very
difficult problem in the past in web frameworks. That is, how do they keep the
UI updated with data when it changes. Angular 1 had the [digest
cycle](https://www.thinkful.com/projects/understanding-the-digest-cycle-528/),
along with two-way data binding. With React, our views are pure functions of
data, so why do we have to be constantly re-rendering? Can’t we use memoization?
\n
By comparing the data (props and state) in the componentWillUpdate function, we
can optimize the entire rendering cycle of our React applications. The only
problem, however, is that the equality check to determine if our data has
changed at the component level is only possible with immutable data. With
mutable data, we miss out on an incredible performance optimization because it
is impossible to guarantee that our shall0w-check is accurate.
\n
According to the React Documentation, the React.PureComponent
\n
> only shallowly compares the objects. If these contain complex data structures,
> it may produce false-negatives for deeper differences. Only mix into components
which have simple props and state, or use  when you know deep data structures
have changed. Or, consider using [immutable
objects](https://facebook.github.io/immutable-js/) to facilitate fast
comparisons of nested data.
\n
With immutable data structures, we can avoid expensive re-renders by doing a
shallow comparison of the old vs. new state within components and avoiding
re-rendering entire branches of the component hierarchy when no data has
changed.
\n
<span class='figcaption_hack'>React Component Hierarchy Optimizations with Pure Rendering</span>
\n
Another huge performance gain can be seen when using Redux, along with
[Reselect](https://github.com/reactjs/reselect). Before we get into that, let me
first just say that when using Redux, it’s incredibly important to structure
your state correctly. According to the [Redux
documentation](http://redux.js.org/docs/faq/Performance.html)
\n
> For maximum rendering performance in a React application, state should be stored
> in a normalized shape, many individual components should be connected to the
store instead of just a few, and connected list components should pass item IDs
to their connected child list items (allowing the list items to look up their
own data by ID). This minimizes the overall amount of rendering to be done.
\n
Now, back to our big performance optimization. By combining the idea of having a
normalized state tree with the subject of Memoization, we can seriously optimize
the rendering pipeline of our React Redux applications. Because much of the
performance drain in an application comes from the expensive rendering cycle of
the UI, especially when complex computation to the state needs to occur, it’s
not hard to see how memoization can be a killer performance enhancement.
\n
By applying the Reselect library to our React Redux applications, we can avoid
complex re-rendering cycles by caching the output of the derived data
manipulations. It is often the case that the structure of our data in the Redux
store doesn’t completely match what we need for the UI. For example, we may need
to combine values into a template string, adding labels, or we may need to
filter or sort a list in the UI. Rather than calculating this derived data for
every render, we intelligently cache it using a selector.
\n
I am not going to give an example here, but I implore you to read the Redux
documentation and also take a look at [this
article](http://blog.rangle.io/react-and-redux-performance-with-reselect/) on
the same subject, as it contains some awesome examples.
\n
The final benefit, of course, to using Redux and Reselect is how darn easy it is
to keep track of what is happening in your application. A picture tells a
thousand words.
\n
\n
### Summing it Up
\n
Hopefully this article has convinced you that it’s worth it to use immutable
data and memoization, along with pure functions. Not only do these concepts make
your programs easier and more fun to write, but they have exceptional
performance benefits.
\n
Up until a year ago, I had never considered all of the implications of using
functional paradigms in my projects. Now, there is just no way that I can go
back to writing applications with mutable state and imperative mechanisms. If
you are working in a domain that is still predominantly imperative, I implore
you to consider all of the benefits of the functional paradigm. If the
JavaScript ecosystem can transition, any language or domain can.
\n
\n
### Coming Next
\n
In Part3, I will take a deep dive into how we can optimize server round-trips
using GraphQL and some intelligent tooling. The gist is that by collocating
data-fetching with GraphQL, we can optimize data-fetching to the extreme. I will
look into how Facebook does this with Relay and the similarities and differences
to how ApolloStack optimizes GraphQL data-fetching."
)

tags = ['React', 'Performance', 'Front End']
tags.each do |tag|
  the_post.tags << Tag.find_or_create_by(title: tag)
end
the_post.save!

the_post = Post.create(
  user: User.first,
  title: 'Performance Optimizing a React Single Page App-Part 1',
  category: 'frontend',
  sort_priority: 198,
  feature_image: 'https://cdn-images-1.medium.com/max/800/1*b3JmmosHi_E1aVEzF2MalA.png',
  body: "Note, this is part one in a two-part series about React performance
optimization. Part 2 can be [found
here](https://medium.com/@ryancollinsio/performance-optimizing-a-react-single-page-app-part-2-92a0f0c83202#.vhywyzera).
\n
This is a brief story of how I took a React application from a 15 second total
loading time to less than 2 second total rendering time.
\n
*****
\n
I like to use my [portfolio
website](https://github.com/RyanCCollins/ryancollins.io) as my testing bed for
new libraries and methodologies. Several months ago, I rewrote it using React,
Redux and Node. Along the way, I learned many of the secrets to performance
optimizing React Single Page Applications. I’d like to tell you about some of
the strategies I took and the drastic performance improvements I saw both in
this app and others.
\n
*****
\n
### Server Rendering
\n
Performance is more about psychology than anything, in my experience. There are
many UX tricks that can be used to make waiting more bearable to the user. One
of those is to use optimistic UI, whereby you render a part of your UI before
the rest of it is ready.
\n
With React, the only time your user generally will be waiting is before React is
loaded. Once it is loaded, as we all know, it is extremely fast. So fast, in
fact, that sometimes I even need to fake server latency to allow the loading
indicator a chance to appear for a second or two.
\n
The big problem, however, is that a large application like my portfolio, which
includes dozens of complex routes, produces a gigantic JavaScript file that
takes a very long time to get from the server to the client. We will go into how
to handle this later, but for now what I would like to describe is how we can go
about making it seem like we are loading things faster than we actually are.
\n
We have an opportunity to send a very small and simple HTML file that will be
loaded while the rest of our bundle loads. This is a tactic that is used in both
web and mobile. For example, with iOS apps Apple will load a single
non-interactive view as the rest of your app loads. This makes the perceived
loading time much more bearable.
\n
One option would be to send a pre-loader, which is something I have done in the
past on numerous websites. This is a great option, but I wanted to try something
new. I chose to use server rendering to take care of sending a bit of UI that we
can look at while the rest of the page loads. To do so, I had to do some complex
React Router setup. I will outline the steps I took below and leave it to you to
[dig through the repository](https://github.com/RyanCCollins/ryancollins.io) if
you are interested in more detailed implementation details.
\n
  ```
    // /routes/index.js
    import express from 'express';

    // Note, the creatTemplate helper takes html and renders it into
    // your index.html template file, sending off a pre-rendered representation
    // of the part of the application your user is requesting.
    // See here:
    import createTemplate from './utils/createTemplate';

    import React from 'react';
    import { renderToString } from 'react-dom/server';
    import { match, RouterContext } from 'react-router';
    import { Provider } from 'react-redux';
    import store from '../app/src/store/store.js';
    import { routes } from '../app/src/utils/routes.jsx';

    // Other server stuff here removed for brevity
    exports = module.exports = function (app) {
      app.all('/api*', keystone.middleware.api);
      // More server api routes here.

    app.use(express.static('./public'));

      // The important bits.  More info here:
      //
      app.use((req, res) => {
        match({ routes, location: req.url },
          (error, redirectLocation, renderProps) => {
            if (error) {
              res.status(500).send(error.message);
            } else if (redirectLocation) {
              res.redirect(
                302,
                redirectLocation.pathname + redirectLocation.search
              );
            } else if (renderProps) {
              const body = renderToString(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              );
              res.status(200)
                .send(createTemplate(body, store.getState()));
            } else {
              res.status(400).send('Not Found 🤔');
            }
          });
      });
    };
```
\n
Next, we need to also wrap our client-side render function with the React Router
Match function. This part needs to be done with care, less we end up with
obscure error messages.
\n
```
    // /app/src/index.js
    import React from 'react';
    import { render } from 'react-dom';
    import RouterApp from './utils/routes';
    import { history } from './store/store';
    import { routes } from './utils/routes';
    import { match } from 'react-router';
    import '../styles/styles.scss';

    match({ history, routes },
      (error, redirectLocation, renderProps) => {
        if (error) {
          return console.error('Require.ensure error'); // eslint-disable-line
        }
        render(<RouterApp {...renderProps} />, document.getElementById('app'));
      });
```
\n
Notice how in both cases, I need to import my routes. I will go into the routing
bit in a later section, but take a look at the
[repo](https://github.com/RyanCCollins/ryancollins.io/blob/master/app/src/utils/routes.jsx)
if you’re impatient.
\n
At this point, we have the basic server rendering working. It’s sending down a
rendered representation that looks pretty awful, to be honest, but our
performance has already been increased from the perspective of our end-users.
Let’s see what else we can do!
\n
*****
\n
### Code Chunking
\n
Webpack is a powerful beast of a platform for building complex web applications.
One of its more advanced features is the ability to break down your bundle into
multiple pieces, called Chunks and to only load the chunks that you need at any
given time.
\n
This feature works fantastically with React Router and server rendering. We can
essentially tell React Router to lazy load these chunks only when they are
requested by a Route in our application.
\n
Webpack Chunking is extremely complex so that you can control the process. For
example, I have seen people setup Webpack to load the “above the fold” content
of their website, including the assets, first and then send down the rest of the
content afterwards. I did not choose this approach, however and will need to dig
deeper into advanced Webpack configuration to figure out how to do so.
\n
Some people recommend breaking your Webpack configuration into multiple files,
but I chose to leave the production and development configuration in [one
file](https://github.com/RyanCCollins/ryancollins.io/blob/master/webpack.config.js).
I enabled the chunking plugin for the production environment, as shown below.
\n
```
    plugins: process.env.NODE_ENV === 'production' ?
      [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          children: true,
          minChunks: 2,
          async: true,
        }),
    ...
    ];
```
\n
The next time I ran `npm run production`, my public folder ended up looking like
the image below. Nice!
\n
Along with using
[require.ensure](https://webpack.github.io/docs/code-splitting.html) within my
React Router configuration, our performance is looking a whole heck of a lot
better.
\n
In the file where my routes were defined, I use a Shim to use the require.ensure
syntax in node.
\n
```
    if (typeof module !== 'undefined' && module.require) {
      if (typeof require.ensure === 'undefined') {
        require.ensure = require('node-ensure');
      }
    }
```
\n
And then, when a route is referenced, I require the component asynchronously
\n
```
    export const routes = {
      component: App,
      path: '/',
      indexRoute: {
        getComponent(location, callback) {
          require.ensure([], () => {
            const LandingPage = require('../containers/LandingPage/LandingPage').default;
            callback(null, LandingPage);
          });
        }
      },
      childRoutes: [
        {
          path: 'portfolio',
          getComponent(location, callback) {
            require.ensure([], () => {
              const Portfolio = require('../containers/Portfolio/Portfolio').default;
              callback(null, Portfolio);
            });
          }
        },
        ... other routes go here
      ];
    }
```
\n
Wow, so our performance now is so much better! Not only that, one embarrassing
problem that I had before setting this all up was that when a user refreshed the
page manually, the Express server would fail with a 500. Now, it will send down
server rendered HTML that represents the requested page’s content and will
continue to incrementally load up the rest of the JavaScript and remaining
assets. The time to first byte now is just a few seconds, rather than half a
minute.
\n
Our UX just went up a whole lot, but we still have one small problem. Our CSS
seems to be the last thing to load, providing a flash of un-styled content that
is a bit ugly. We can fix this, however, with a nifty Webpack plugin called the
ExtractTextPlugin.
\n
Typically when using CSS modules, Webpack will put your css right into Style
tags in the generated bundle. This works well in Development, especially with
Hot Module Reloading, but we can use the ExtractTextPlugin to generate css files
for us so that we can have more control over how we load the styles in our
Production bundle.
\n
We add the plugin to our Webpack configuration like so:
\n
```
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            loader: 'style-loader!css-loader!postcss-loader!sass-loader'
          })
        },
```
\n
*****
\n
### Asset Optimization
\n
The final part I will touch on is optimizing your assets. This is something that
I always do, no matter if I am developing a single page app or not, but it still
deserves a place in this article.
\n
Performance, beyond the psychological part, really comes down to how much work
the browser needs to do to get a webpage in front of the end-user. Typically,
this can be very easily quantified using the tools in your browser.
\n
In the case of my portfolio, I am loading a ton of images over the network. In
this case, I don’t have control over optimizing the image during the build
process, so it is so very important that your backend take care of optimization.
In other words, you need to ensure that not only are you optimizing your assets
at your build step, with a tool like [Webpack Image
Loader](https://github.com/tcoopman/image-webpack-loader), but you also need to
talk to your Back End team and see that they take asset optimization seriously.
\n
Let me show you an example of what happens when you do not optimize the assets
that you request from the server.
\n
As you can see above, everything is going very well with the loading until we
get to 3/4 of the way down (about-all.png). We are requesting three images that
are not compressed and they are taking a ton of time and resources to load. Can
you spot them? Here, let me zoom in.
\n
![](https://cdn-images-1.medium.com/max/800/1*Pt6LlNUJuh5MzNps2IlZ9g.png)
<span class='figcaption_hack'>Performance Hogging Images</span>
\n
Looking at the statistics, it is just staggering. Our biggest chunk took less
than 500 MS to load and just ONE of these images took 1.3 seconds. So how do we
fix this?
\n
Using [Optimizilla](http://optimizilla.com/), an online service that runs the
same compression algorithms as the tools we use during our build process, we
have the ability to greatly increase our performance while maintaining most of
the clarity of our PNG and JPG images. When possible, using SVG is the [right
choice](http://stackoverflow.com/questions/24433640/svg-icons-vs-png-icons-in-modern-web-sites)
for icons and other small pictorials.
\n
Using Optimizilla, we were able to take our biggest file, 1.9 MB, and chop it
down to ~400KB without losing any clarity to our end-users. Let’s take a look at
what this looks like now.
\n
Nice! We are doing a whole lot better. Let’s zoom in on the biggest offenders
from earlier.
\n
![](https://cdn-images-1.medium.com/max/800/1*6qO9so3xwXTOpA2HkzwZjg.png)
\n
As we can see, we have cut down the loading of those images by more than a
factor of 10. Awesome!
\n
*****
\n
### Summing it up
\n
What I hope to have shown you from this article is that performance isn’t a big
mystery. Just like testing, it is something that all of us need to pay attention
to. I hope that this article offered some insight into my performance
optimization process. That said, there are a ton of great resources that you
should check out to become a web performance ninja.
\n
There are a ton of awesome techniques that this article did not touch on, such
as utilizing Immutable data structures with the Pure Render option in React,
implementing DLLs with Webpack, and much more. Please take a look at the
resources below and remember, with great power comes great responsibility!
\n
*****
\n
### More Resources
\n
* Kyle Simpson’s [Web Performance
Course](https://frontendmasters.com/courses/website-performance/)
* [Optimizing Webpack with
DLLs](https://robertknight.github.io/posts/webpack-dll-plugins/)
* React Server Rendering:
[Here](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md),
[here](https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md)
and
[here](https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/).
* [Advanced React
Performance](https://facebook.github.io/react/docs/advanced-performance.html)
* Joe Eame’s [Webpack
Course](https://zombiecodekill.com/2016/06/03/webpack-fundamentals-advanced-builds/)
* Pluralsight [Course on Web
Performance](https://app.pluralsight.com/library/courses/web-performance/table-of-contents)"
)

tags = ['React', 'Performance', 'Front End']
tags.each do |tag|
  the_post.tags << Tag.find_or_create_by(title: tag)
end
the_post.save!

post = Post.create(
  user: User.first,
  feature_image: "http://res.cloudinary.com/dc1qjoyvn/image/upload/v1472925105/ciqbx025nb8gmmkpuc1w.png",
  title: "Embracing Immutable Architecture",
  category: 'frontend',
  sort_priority: 197,
  body: "I believe as a community, many of us JavaScript engineers have embraced Immutable Architecture. Whether we realize it or not, a new way of building apps has crept into the mainstream JavaScript ecosystem and it is here to stay.
\n \n
So what is Immutable Architecture, anyways?
\n
### Immutable Architecture

To understand immutable architecture, we need to first understand state. State, an evil source of complexity in any software, is the characteristic of a value. According to Miriam Webster, state is defined as 'the particular condition that someone or something is in at a specific time.' As we continue to make web applications with more and more dynamic data, we are introducing more and more state into our applications.
\n
Combined with asynchronicity, a core characteristic of modern web applications, it's no wonder why our applications have become very hard to understand.
\n
Whether you realize it or not, you have most definitely dealt with state bugs many times over if you are a software engineer in any capacity. In fact, there is a famous white-paper about the [Software Crisis][2] that references state as the number one contributor to software complexity.
\n
The main issue with state complexity is that it causes our code to become harder to reason about. When you are unable to reason about what your code is doing, you lose the ability to properly communicate with the computer and that leads to bugs and the inability to maintain the software. As software scales to more and more people, the probability of introducing state bugs increases exponentially.
\n
So how do we control state complexity? It's actually really simple, we use [Immutability][3] to our advantage.
\n \n
### Immutability
\n
Immutability is defined as 'unchanging over time or unable to be changed.' In software, a value that is immutable, by its very definition, does not have state! With one simple change, our entire problem is solved! Where the complexity sinks back in is when you try to do anything meaningful without stateful data and the ability to mutate data.
\n
It is a common misconception that immutability hinders the engineer's ability to write meaningful software. Without going into the details of the mathematical background of Functional Programming, I am going to attempt to explain immutable architecture in simple terms that hopefully all of us can understand.
\n \n
### State Management
\n
The way we curtail software complexity in JavaScript land is to use a state management library, such as [Redux][4] or [MobX][5]. One can also use any number of Immutable data structure libraries, but let's leave that aside for now. With state management, what we are attempting to do is to handle the changing values over time (state mutations) through a predictable mechanism. In other words, the only way to alter state is through a strict mechanism.
\n
In the case of [Redux][6], we use pure functions to mutate state. Pure functions are defined as those that given the same input, always return the same output. In other words, they are predictable as they do not rely on any outside mechanism or global state.
\n
By employing state management in our apps, we are boldly turning off mutable state within the majority of our app and we are using state management to manage the situations where our state needs to be changed in order to provide a meaningful experience to our application's end users.
\n
I hope you see that this idea is actually fairly simple. You do not need to be a functional programming wizard to understand it. State management needs to be a primary focus of all of our applications.
\n \n
### One way data flow
\n
I am sure you have no doubt heard of [unidirectional data flow][7] by now. It might seem complex, but it is just a natural extension of the ideas described above. With unidirectional data flow, we take the principles of pure functions and apply it to our entire app.
\n
So now, our state is managed properly, we are using immutability throughout our app and our application consists almost entirely of pure functions. By thinking of our applications as a pure function of state, we are suddenly able to reason about what the application is doing. This can be applied to our entire application architecture, from data-fetching to UI.
\n
A perfect example of this in practice is [React][8]. With React, you design your user interface as a collection of components. Each component is a pure function that takes data and returns HTML. With unidirectional data flow, we are able to describe our application as [pure functions][9] and we are given the guarantee that when the data changes in our app, through a predictable state management mechanism of course, the user interface will be completely recalculated.
\n
Suddenly, we are given a guarantee that if our UI renders correctly once, it will render the same from now until eternity. The components of your application are now totally decoupled from the complexity of your app. This makes testing, both manual and automated, a predictable process.
\n
Even without React, this concept can be applied to building applications in any domain. In fact, React is not at all necessary for this equation. Many frameworks are picking up these concepts and the newer version of JavaScript enable these ideas by having declarative mechanisms built right into the language.
\n \n
### Paradigm Shift
\n
The transition to Immutable architecture represents a paradigm shift in our industry. Those of us that are using Immutable architecture on a daily basis are here to stay. Our software development process is just so much easier and less buggy. It scales well because it eliminates the biggest cause of software complexity, which again is the complexity caused by mutating state.
\n
It is exciting to see the growing popularity of Immutable architecture. Elm, a functional language that compiles to JavaScript, was the first mainstream example of immutable architecture in Front End land. The fact that this same architecture was transferred, via Redux, to the mainstream JavaScript community is really fantastic. I think we owe a lot of credit to [Dan Abramov][10], [Lee Byron][11] and the other incredible Facebook engineers for helping to lead the movement.
\n
Over the last year, I have become immersed in Immutable architecture, both with Elm and JavaScript and I am happy to say that it will be the only architecture I use for the foreseeable future. There really is no going back for me. If you feel the same way, I would love to hear about your experience!
\n \n
### More Resources
\n
If you have yet to embrace immutable architecture, I recommend the following resources.
\n
Also, searching for [Immutable Architecture][12] and [Functional JavaScript][13] on Medium provides dozens of fantastic articles on the subject.
\n \n
[1]: https://cdn-images-1.medium.com/max/800/1*De-cn--751z3cHRlMiXJDw.png
[2]: http://www.curtclifton.net/storage/papers/MoseleyMarks06a.pdf
[3]: http://www.dictionary.com/browse/immutability
[4]: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwis89j1xvHOAhUCQCYKHT4VDccQFggwMAI&url=http%3A%2F%2Fredux.js.org%2Fdocs%2Fintroduction%2F&usg=AFQjCNHnkPrMBLcMU_jNH47oP3RaS8JSqg&sig2=19FujZxWZVBNUE6VBj_NeQ
[5]: https://github.com/mobxjs/mobx
[6]: https://github.com/reactjs/redux
[7]: http://redux.js.org/docs/basics/DataFlow.html
[8]: https://facebook.github.io/react/
[9]: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.wsv7amxfq
[10]: https://github.com/gaearon
[11]: https://github.com/leebyron
[12]: https://medium.com/search?q=immutable%20architecture
[13]: https://medium.com/search?q=functional%20javascript"
)

tags = ['Immutable Architecture', 'Functional Programming', 'Front End']
tags.each do |tag|
  post.tags << Tag.find_or_create_by(title: tag)
end
post.save!

post = Post.create(
  user: User.first,
  feature_image: "http://res.cloudinary.com/dc1qjoyvn/image/upload/v1472593988/ge3wvwgvomm5tc04zjsz.png",
  title: "Feature First Organization",
  category: 'frontend',
  sort_priority: 196,
  body: "Colocation is in. Your organization starts and ends with the feature you are implementing. You know you are doing it right if your entire app is a composition of feature-first components and your components are modular to the point where you can pluck components for reuse by dragging and dropping the folder they reside in. [The original article was posted on Medium](https://medium.com/front-end-hacking/the-secret-to-organization-in-functional-programming-913484e85fc9#.kwiqkohbv) and featured on [Front End Weekly](https://medium.com/front-end-hacking), a curated publication for Front End JavaScript engineering content.
\n \n
## Feature First
\n
I am not going to claim ownership of the idea, but I will tell you about how I came to believe that organizing your applications by feature is such an amazing pattern to follow. I am a web developer, so my examples will relate to my web development. If you stick with me, however, I will tell you how I believe that this architecture can be applied in nearly any domain.
\n \n
## Search for Perfection
\n
In the search to build the perfect boilerplate for myself and the teams I work with ([Hacksmiths](https://github.com/teamhacksmiths) and [Udacity Alumni](https://github.com/udacityalumni)), I reverse engineered some of the most popular open source [React boilerplates](https://github.com/mxstbr/react-boilerplate) available. Without a shadow of a doubt, the organization pattern followed by the React Boilerplate project is the best. In an attempt to put a name on it, I did some research and I found an article that explained this organizational strategy fairly well.
\n
The [article](http://engineering.kapost.com/2016/01/organizing-large-react-applications/), entitled “Organizing Large React Applications”, calls this type of organization Feature First Organization. They explain that a large application should be a collection of small applications that function in isolation. Wait a minute, this is starting to sound like another architectural pattern known in the Back End ecosystem as “micro-services”. I think we are onto something here!
\n
In an attempt to switch into the practice of organizing my applications by feature, I created a clone of one of [my open source boilerplate projects](https://github.com/RyanCCollins/react-redux-simple-starter). I went about reorganizing the structure of the demo application in order to follow the feature first pattern.
Here is an example of the file structure from my boilerplate project:
\n
```
|   |   ├── containers
|   |   |   ├── FeatureFirstContainer
|   |   |   |   ├── tests
|   |   |   |   |   ├── actions.test.js
|   |   |   |   |   ├── index.test.js
|   |   |   |   |   └── reducer.test.js
|   |   |   |   ├── actions.js
|   |   |   |   ├── constants.js
|   |   |   |   ├── index.js
|   |   |   |   ├── index.module.scss
|   |   |   |   └── reducer
|   |   |   └── index.js
```
\n
You will see that all of the files pertaining to the one FeatureFirstContainer component, including all of the Redux boilerplate, tests and component files exist within one folder. The module takes care of literally everything related to the one feature, in this case a mock container connected to Redux.
\n
Another way to think about this is that there are no files that exist outside of this component that couple it to the application I am currently building. I am not suggesting that you don’t use the component in your app, but when you do use it, you import it as if it were any other NPM module. If you look at this example on Github, you will see that I even include a README.md file with each React Component. Without even realizing it, my application is completely modular and reusable. Brilliant!
\n
I have a [few example projects](https://github.com/RyanCCollins/restaurant-reviewer/tree/master/app/src/containers) that demonstrates this strategy, by the way. Take a look through the components and connected containers in the link listed above, if you are interested. I also suggest that you take a look at my boilerplate projects ([Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) and [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter)) to see the difference between these organizational strategies.
\n \n
## Benefits of Feature First
\n
The real benefit as I see it, to this organizational pattern is that you encourage isolation and encapsulation of your UI components. You are literally guaranteeing that your application’s components will be reusable.
\n
At the end of my projects, I generally will go through the source code to determine what parts of it are reusable, so that I can add them to a UI Kit that I am building. The amazing thing is that as soon as I started using the Feature First organization strategy, ALL of my UI became reusable. It’s truly amazing.
\n
React encourages that you take a functional approach to building UIs. By following a few simple suggestions, your UI can become pure and composable, which is the goal of Functional Programming. Complexity is encapsulated under the hood and your UI becomes a box of legos that you can piece together. I propose that following the feature first organizational strategy is a natural progression of this idea.
\n
\n
## Colocation
\n
The engineers at Facebook realize the benefits of functional abstractions. As far as I can tell, they are taking this approach to the extreme by applying it to their entire architecture. For example, GraphQL is an extension of this abstraction. It colocates data fetching right into your UI components. Using the tools of today, such as Webpack, we can colocate literally everything with our UI. CSS, Images, Data fetching, State Management, etc.
\n
Colocation [used to be a horrible idea](http://stackoverflow.com/questions/2612483/whats-so-bad-about-in-line-css), but now we see that with the right abstractions, it can be glorious. The big difference, in my opinion, is how we think about architecting our apps today versus then. We have modules baked right into the JavaScript language and are able to build apps using this approach.
\n
By following the feature-first approach, we can get away with colocation and in many ways it makes our applications simpler. Just like the micro-service architecture, we can architect our user interface as a composition of self-contained UI components.
Brilliant!
\n \n
## Application in Other Domains
\n
What I hope is that this pattern can be followed in nearly any programming domain and language. The fact that it works with Flux and React so well should be a sign that we are onto something big here that other domains can also benefit from. Any language with a module system can benefit from the feature first architecture.
\n
My hope in writing this article is to spread the knowledge I have gained from following this strategy. If you are a programmer who craves composability, maybe give the feature-first organizational pattern a try in your domain and let us know how it works.
\n
\n
## P.S.
\n
If you are interested like me in the effects of cutting edge functional programming on the JavaScript ecosystem, check out the [React Rally talk by Brian Lonsdorf](https://youtu.be/Fk--XUEorvc?t=11643). He is one of the leading Functional Programmers in the JavaScript community and he talks about the beauty of composability.
\n
Another talk that I have also enjoyed was [Lee Byron’s Immutable Architecture](https://vimeo.com/166790294) talk. It gives you a glimpse into how Facebook is using Functional Abstractions in their app architecture.
\n
I hope that my insights have been helpful in your search for the perfect organizational strategy on the web. If so, please tap the heart button below! Many thanks!
\n
\n
## P.P.S
\n
In object oriented languages, such as Python and Ruby, encapsulation is a part of the language. You may be thinking that the problems addressed in this article are solved by OO languages and the solution is to stick with OO. My point is to show you my approach to implementing modularity in a non OO language / domain. Even still, OO has its problems and even with smart OO architecture your application can become [extremely coupled](http://www.johndcook.com/blog/2011/07/19/you-wanted-banana/).
\n
Functional / Immutable architecture can be utilized with any language / domain that uses functions, which is close to all of them. You don’t need Haskell to reap these benefits. If you look at Rails, for example, you see that the approach to organization is to group code by their file types, versus their features.
\n
In my opinion, having worked as an iOS and a Rails developer, along with other similar domains, I feel that most approaches in OO languages require additional abstractions. MVC gets you pretty far, but as our apps continue to get more and more complex, we need to take a different approach. I propose that the feature first architecture, along with unidirectional data flow, is one suitable approach and I look forward to seeing it used in many other domains."
)


tags = ['Functional Programming', 'Front End']
tags.each do |tag|
  post.tags << Tag.find_or_create_by(title: tag)
end
post.save!


post = Post.create(
  user: User.first,
  feature_image: "http://res.cloudinary.com/dc1qjoyvn/image/upload/v1468092213/efjetjkyzb6b9tcxrxqp.png",
  title: "Lessons Learned From Functional Reactive Programming",
  category: 'frontend',
  sort_priority: 195,
  body: "The author of [Elm-lang](http://elm-lang.org/papers/concurrent-frp.pdf), a progressive functional language built to create Front End Web GUIs states in his senior thesis that 'Functional Reactive Programming (FRP) is a declarative way to create reactive systems.'
\n
He goes on to further define the need for FRP in building user interfaces and defining how FRP has shown great potential in other areas: 'FRP has already shown its potential in a diversity of domains: robotics, music synthesis, animation, video games, and graphical user interfaces. These domains are reactive because they require interaction with a wide range of outside inputs, from keyboards to accelerometers.'
\n
\n
### What's this all about?
\n
So what does this all mean and why is it important? The complexity of software is growing at an exponential rate. To sum up a [famous article](http://www.curtclifton.net/storage/papers/MoseleyMarks06a.pdf) detailing this phenomenon, the biggest problem with modern software is the ever-growing complexity of dynamic state.
\n
The aim of Functional Programming is to provide a set of rules that simplify the cognitive overhead of the engineering of modern software. In the case of Elm, the creator’s vision was to bring these abstract ideas from the forefront of academia into the mainstream and apply them to the domain of graphical user interfaces on the web.
\n
Many of the design patterns that are commonly used by modern software developers, MVC for example, aim to solve the same problem of curtailing complexity as our GUIs continue to advance. Graphical user interfaces on the web and mobile devices are expected to be fast and responsive and in almost all cases are one of the biggest determining factors of the success of an application.
\n
The rate of computational complexity of our applications on the web and in other domains is growing. As a result, we are forced to think of new ways to continue to provide our end users with a reactive experience while decreasing the complexity of building such applications.
\n
\n
### Functional Reactive Programming to the rescue
\n
We’ve seen the concepts of FRP enter the mainstream in many forms, specifically with React, Redux and many other (now) commonly used JavaScript libraries.
\n
So what does the paradigm shift brought by these innovations entail and what does it mean for developers and engineers?
\n
The main principles of Functional Programming pertaining to JavaScript are well detailed by DrBoolean in his [entertaining and educational book](https://github.com/ryan-collins-forks/mostly-adequate-guide) entitled 'Professor Frisbee's Mostly Adequate Guide to Functional Programming' and in his [animated cartoon series](https://youtu.be/h_tkIpwbsxY) by the same name.
\n
\n

## A brief introduction
\n
I would highly recommend that you use the resources and links from this article to take a deeper dive into the world of Functional Programming and please take what I have to say with an understanding that it has been simplified for the sake of brevity.
\n
That said, I have provided a bit of an overview of the main concepts involved in understanding how Functional Programming solves many of the problems we face while developing reactive software systems.
\n
\n

### Immutable Data
\n
Mutable data, as defined by Merriam Webster, is “capable of change or of being changed” over time. Going back to state complexity, we can pinpoint one of the main causes of this growing complexity.
\n
Mutable data structures, by their very definition, are capable of changing their assigned values over time. When you think about this, this is craziness. How are we to keep our applications in sync with our data when the data can change over time? It’s like trying to eat a nice relaxing dinner when the tablecloth is continually ripped out from underneath your dinnerware.
\n
Immutable data structures solve this problem by very loudly declaring that they will not change their assigned value over time, offering us a guarantee that forms the very backbone of Functional Programming. In other words, when you assign a variable to a value, that value cannot ever be reassigned.
Can you see how this principle aims to solve state complexity? State is defined as “the particular condition that someone or something is in at a specific time”. If the condition of our data cannot change, then we basically eliminate state and therefore state complexity. Problem solved, right?
\n
Well, sort’ve.
\n
In reality, stateless (read static) applications are fairly boring. Modern applications, in fact, have more dynamic state than ever before and to our end users, this is wonderful!
\n
So how do we allow for dynamic data if we cut off the ability of our data to dynamically change over time?
\n
Enter Pure Functions, or as DrBoolean says 'Pure Happiness with Pure Functions.'
\n
\n

### Pure Functions
\n
Pure functions come from the mathematical roots of Functional Programming.  By definition, a pure function is one without side effects.  Given the same input, a pure function will always return the same output.
\n
A very simple example of this is a function that takes as input two numbers and returns the numbers added together.  I recommend reading up on pure functions in the [Mostly Adequate Guide](https://github.com/ryan-collins-forks/mostly-adequate-guide), but for the sake of demonstration, let us take a look.
\n
\n

```
// Using ES2015 fat arrow functions
const add = (num1, num2) => num1 + num2;
// And with ES5
var add = function(num1, num2) {
 return num1 + num2;
};
// add(2, 3) => 5
```
\n
\n

If you are thinking that this is a very oversimplified example of the type of functions you write every day, then you are right. Most of our applications have side effects all over the place! Self-containing our applications can only take us so far. Our software needs to interact with the outside world through APIs, for example, by making calls to micro-services, databases, etc. We need to write asynchronous code with ajax, or more recently Fetch. The list goes on and on.
\n
It seems so far that each of these principles sound great in isolation, but don’t really work so well in the real world. However, given several somewhat simple rules, you can apply pure functions to nearly any problem and completely eliminate side effects while still being able to create an application that communicates with the outside world. As a matter of fact, we innately employ many of these same principles, isolating state and side effects that is, when utilizing the prominent systems architectures used today (REST, for example).
\n
Going back to the first principle of employing immutable data structures, the answer to how your data can change over time is to utilize pure functions as a vehicle to mutate state. If you are familiar at all with Redux, this is actually quite simple and can be applied to your workflow with very little overhead.
\n
By example, Redux gives you [Reducer functions](http://redux.js.org/docs/basics/Reducers.html) and [Actions](http://redux.js.org/docs/basics/Actions.html), which work together to provide a means to represent state mutations using a pure functional approach. Although Redux does not actually provide you with the tools to eliminate side effects completely while still allowing you to interact with the outside world, it does provide you with a set of principles that when followed guarantees that your state will be managed predictably.
\n
In order to interact with the outside world, you will want to use Middleware such as [Redux Thunk](https://github.com/gaearon/redux-thunk), [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware) or [Redux Sagas](https://github.com/yelouafi/redux-saga), which help give you a place to put side effects in your JavaScript application.
\n
\n
## Higher Order Functions
The idea that a function is a first-class citizen is not at all a new concept. Almost all of the modern programming languages, including Ruby, Python, Swift, JavaScript, etc. employ this idea. A function, just like an object or any other data type, can be assigned and passed around as a variable.
\n
Using this concept, we come upon the idea that we can compose new functionality by passing functions into other functions. Woah, what? This is not actually as much of a head spinner as it first may sound. You likely use this declarative approach in your modern language of choice already.
\n
For example, one of the most commonly used higher order functions is .map, which takes as an argument a function that will be applied to every item in an array and returns an array containing the newly transformed data.

\n
\n
```
//Using ES2015s Fat Arrow Functions this would look like:
const myArray = [1, 2, 3, 4];
const myNewArray = myArray.map((item) => item * 2);
// => [2, 4, 6, 8]
// And in Ruby (Notice the similarities?)
myArray = [1, 2, 3, 4]
myNewArray = myArray.map{ |item| item * 2 }
```

\n
\n
As many of you may know, in practice, this type of code can be very powerful. Instead of the imperative approach whereby you define how something should happen, with the declarative approach, the details of how something happens are hidden behind the scenes. Suddenly, the world in front of us opens up and we begin to see how this approach can be applied to nearly everything.
\n
For example, using React, we can .map over an array and return an array of user interface that the browser can understand.

\n
\n
```
const MyComponent = ({
  items
}) => (
  <ul>
    {items.map((item) =>
      <li>{item.property}</li>
    )}
  </ul>
);
```
\n
\n
### A bit of history
\n
This approach comes from a branch of combinatory mathematics, made famous by [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry), a mathematician whose studies led to an innovation known as Lambda Calculus.  As a matter of fact, the idea of a function taking other functions as arguments and even returning a function that can be passed around and called later was [named after this same man](https://en.wikipedia.org/wiki/Currying) as was one of the most famous functional languages, [Haskell](https://www.haskell.org/).
\n
The idea of higher order functions is implemented by almost every major modern language and it is one of the secrets behind the declarative nature of many of our favorite languages and libraries, including React and Redux. Using this approach, the door to [function composition](https://en.wikipedia.org/wiki/Function_composition) is opened, providing us with the means to create highly reusable and powerful code. It encourages encapsulation by providing the engineer with the ability to define the declaration of data transformations while leaving the steps taken behind the scenes up to the language / library.

\n
\n
### Sign Me Up!
\n
If you are a JavaScript developer and are sold on the idea of limiting the cognitive overhead of your application, I suggest that you watch the [Egghead.io Redux series](https://egghead.io/courses/getting-started-with-redux) featuring [Dan Abramov](https://medium.com/@dan_abramov), the creator of Redux. In this video series, Mr. Abramov teaches much more than the API to his library. He touches on many of the same principles as referenced in this article and describes how you can employ them in JavaScript applications using just a few simple libraries.
\n
By agreeing to the contracts of Functional Programming, you enable amazing features that previously did not exist, such as [Time Travel](https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fgaearon%2Fredux-devtools) and [Hot Reloading](https://medium.com/r/?url=https%3A%2F%2Fgaearon.github.io%2Freact-hot-loader%2F). Your applications suddenly become totally predictable and easy to debug, while remaining fast and reactive to the end user. Your application becomes easier to reason about and much easier to test.
\n
We see these innovations and ideas used in many areas beyond Redux. Elm for example, was the pioneer of many of these innovations, including Facebook’s popularized [Flux](https://facebook.github.io/react/docs/flux-overview.html) / [unidirectional data flow architecture](https://medium.com/r/?url=http%3A%2F%2Fstaltz.com%2Funidirectional-user-interface-architectures.html). The innovation of Redux is to provide an agreed upon set of tools that integrates directly with the tooling we already use and provides us with an agreed upon set of terminology for these concepts.

\n
\n
### Summing it up
\n
Again, the concepts discussed here are really just the tip of the iceberg when it comes to Functional Programming. When combined together, they form the basis of a powerful paradigm shift. At the same time, they work to minimize the cognitive overhead involved with building and maintaining modern software.
\n
Whether you are a seasoned engineer / developer, or are just starting your journey, I encourage you to take a serious look at Functional Programming and the impact it has had on the way we build software. I am not saying that you need to totally dismiss Object Orientation and the patterns and paradigms you currently employ. At the very least, I do recommend that you put aside some play time to try these concepts out in practice.
\n
With great power comes great responsibility, so if like me, you do find that Functional Programming opens your eyes to powerful new ideas, please share the knowledge and insights that you have gained through the experience of learning it."
)

tags = ['Functional Programming', 'Front End']
tags.each do |tag|
  post.tags << Tag.find_or_create_by(title: tag)
end
post.save!

Reference.create(
  avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/000/1bd/2fd/2e31416.jpg',
  name: 'Mike Walrath',
  body: "I can’t say enough nice things about Ryan. He was wonderful 
    to work with and I couldn't ask for a better colleague and friend. 
    Under the strictest of timelines I could always count on Ryan to 
    have a great attitude, communicate well and utilize his extraordinary 
    talents to get the job done. \n Ryan has many accomplishments and 
    aspirations for the future but his humble, honest, ego free attitude 
    truly excites me for what he might achieve. I wish Ryan the very best 
    in the future and honestly hope our career paths cross again 
    because it was a pleasure to work with him.",
  title: 'Project Manager',
  company: 'Hewlett-Packard Enterprise'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/andres.jpg?raw=true',
  name: 'Andres Narvaez',
  body: 'Ryan is an incredibly smart worker with a high proficiency in his field,
    quick turnaround times, and a producer of high-quality code.
    His contributions were a major reason why we delivered the new
    mentor/student scheduling platform to Udacity to their full satisfaction.
    He is the type of developer who goes above and beyond to understand a
    problem and arrive at an efficient solution, with great enthusiasm,
    which has led him to accumulate a wealth of experience using popular
    technologies such as React/Redux. He always knows the right questions
    to ask before committing to code and I have always been able to
    count on him to deliver what our clients expect. His communications
    skills are superb, has an impressive Internet presence with a sense
    of UX (just visit his website, or find him on Medium!), and he is just
    a great person to work with. I would recommend Ryan to any progressive/game changing team!',
  title: 'Technical Project Manager',
  company: 'Udacity Blitz'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/gabriele-cimato-pic.png?raw=true',
  name: 'Gabriele Cimato',
  body: 'Ryan will be a great asset in any field he
      applies his energy to. He is extremely knowledgeable
      and has also some fundamental traits that make him ideal in
      any team. He is very open minded, determined and well rounded
      in javascript, Front-End and Back-End. He did a tremendous job
      coordinating a team of developers from different parts of the
      globe to achieve results within a deadline on the Food Drivr project.
      I really enjoyed our hacking marathons and working hard together towards
      a goal. Ryan was always either helping out the Front-End or the
      Back-End team and even hopping in with the Mobile one as well.
      His dedication and knowledge as a developer are inspiring!',
  title: 'Lead Full Stack Engineer',
  company: 'Food Perk'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/frank.jpg?raw=true',
  name: 'Frank Robert',
  body: "Ryan has been an outstanding leader from the day that I've met him. He constantly shows initiative and well-developed problem-solving skills that have allowed him to create several large-scale projects on his own, freelance, create his own company, and even begin working towards a Hackathon. Ryan is also extremely insightful and has helped me learn quite a bit. He has pushed everyone on the Hacksmiths team to perform their best and on schedule. I believe that Ryan will succeed and compliment any development team he joins.",
  title: 'Front End Software Engineer',
  company: 'Sweet IQ'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/mikael.jpg?raw=true',
  name: 'Mikael Mukhsikaroyan',
  body: "Ryan is one of the most intelligent Software
      Engineers I've had the pleasure of knowing. He has demonstrated
      his leadership skills as leader of Hacksmiths and has a personality
      that inspires those around him to always do their best. I have
      gained a lot of knowledge about software development from Ryan,
      who always takes the time to explain concepts that are difficult
      to grasp. Whether as a team member or as a leader, Ryan would be
      an asset to any project.",
  title: 'iOS Developer',
  company: 'Hacksmiths'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/cody.jpg?raw=true',
  name: 'Cody Perry',
  body: "Ryan is a fantastic leader, teacher and project manager.
      He has a wealth of knowledge expanding from the Front end technologies
      to integrating the back-end aspect on projects. The information he brings
      fundamentally makes everyone around him better. Anytime someone is
      struggling to understand or complete a task he's available to walk through it.",
  title: 'Front End Web Developer',
  company: "Perry's Design"
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/sean.jpg?raw=true',
  name: 'Sean Craig',
  body: "Ryan is one of the most focused developers I've had the privilege to work with. His knowledge base is also incredibly deep. We have partnered on several projects and all of them are world class. Ryan is also an incredibly enjoyable person to work with and I've had a blast working with him.",
  title: 'Lead Designer',
  company: 'Applied Rater'
)

Reference.create(
  avatar: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/alice.jpg?raw=true',
  name: 'Alice Bonner',
  body: "Ryan was one of the standout employees in my tenure ... More importantly, Ryan was innovative and always looking for new ways to solve problems.  He has tremendous leadership potential, both in terms of his interpersonal skills and his solid knowledge of data systems...",
  title: 'Director',
  company: 'CMS - Division of Nursing Homes'
)


Tutorial.create(
  link: "https://youtu.be/aRhKzi_ewdM",
  title: "Udacity Redux Demonstration - Part 3",
  description: "Redux demonstration for Udacity Alumni Collaborative project, video part 3",
  body: "A demonstration of integrating Redux into the Udacity Alumni Community web app",
  user: User.all.first,
  image: "https://github.com/RyanCCollins/cdn/blob/master/misc/logo-redux.png?raw=true"
)

Tutorial.create(
  link: "https://youtu.be/iVI2LJdv-CQ",
  title: "Udacity Redux Demonstration - Part 2",
  description: "Redux demonstration for Udacity Alumni Collaborative project, video part 2",
  body: "A demonstration of integrating Redux into the Udacity Alumni Community web app",
  user: User.all.first,
  image: "https://github.com/RyanCCollins/cdn/blob/master/misc/logo-redux.png?raw=true"
)

Tutorial.create(
  link: "https://youtu.be/qZZyJa3HcRs",
  title: "Udacity Redux Demonstration - Part 1",
  description: "Redux demonstration for Udacity Alumni Collaborative project, video part 1",
  body: "A demonstration of integrating Redux into the Udacity Alumni Community web app",
  user: User.all.first,
  image: "https://github.com/RyanCCollins/cdn/blob/master/misc/logo-redux.png?raw=true"
)


projects = Project.all
projects.each do |project|
  project.status = "published"
  project.save
end

tuts = Tutorial.all
tuts.each do |tut|
  tut.status = "published"
  tut.save
end

all_posts = Post.all
all_posts.each do |the_post|
  the_post.status = "published"
  the_post.save
end
