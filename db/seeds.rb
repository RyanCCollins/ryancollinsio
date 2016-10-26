User.create(
  name: "Admin User",
  email: "admin@ryancollins.io",
  password: "Password123!"
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/home-nav.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/home.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/key-metrics-main.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/key-metrics-bottom.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/geospatial.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-view-main.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-view-search.png?raw=true",
)

ProjectImage.create(
  src: "https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/corporate-dashboard/main-images/data-page-filter.png?raw=true",
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
  category: "frontend",
)

p = Project.first
images = ProjectImage.all

images.each do |i|
  p.images << i
end
p.save

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

Post.create(
  user: User.first,
  feature_image: "http://res.cloudinary.com/dc1qjoyvn/image/upload/v1472925105/ciqbx025nb8gmmkpuc1w.png",
  title: "Embracing Immutable Architecture",
  body: "# Embracing Immutable Architecture – Medium
\n
I believe as a community, many of us JavaScript engineers have embraced Immutable Architecture. Whether we realize it or not, a new way of building apps has crept into the mainstream JavaScript ecosystem and it is here to stay.
\n \n
### What is Immutable Architecture, anyways?
\n
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
