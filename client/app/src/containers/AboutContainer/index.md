## Welcome to my website!
Welcome!  Thanks for checking out this site.  I built this site to showcase my web engineering skills.  I hope you enjoyed browsing it and found the content to be engaging.  Keep reading to learn about how I built it.

## Technologies
The site uses many of the most cutting-edge technologies available.  From back to front, this site was designed to be as dynamic as possible, implementing many cutting edge functional reactive programming techniques.  It was also designed to be as performant as possible, achieving an incredibly fast time to first byte loading time for such a dynamic website.

### Back End API
The back end of this site uses a custom designed GraphQL on Rails API, contributing to the performance of the site. Leveraging the GraphQL type system made it simple to define the site's data needs declaratively and allows for declarative query collocation.

GraphQL is the future of APIs and I find that it is very well suited as the API layer for a Rails application.  This is not your typical Rails codebase, as it only has one endpoint and one controller for the entire site.  Leveraging the power of GraphQL, the site loads dozens of models through the GraphQL type system, making it dead simple to collocate queries and mutations within React containers on the client.  Feel free to take a look at both the [server-side](https://github.com/RyanCCollins/ryancollinsio/tree/master/app/graph) and [client-side](https://github.com/RyanCCollins/ryancollinsio/tree/master/client/app/src/containers) GraphQL implementations.

### Front End Client
The front end was built using React, Redux, GraphQL / Apollo and many other cutting-edge functional JavaScript technologies.  It was built using the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) micro-framework, and incorporates many performance enhancing tools and technologies.  The initial HTML is rendered using Server-side React, which optimizes the time-to-first-byte loading time of the site.  It also uses memoized selectors for computation of derived-data, which allows for optimized rendering of immutable data.

The site also uses [styled components](https://github.com/styled-components/styled-components) and [Css modules](https://github.com/css-modules/css-modules), which allows for component-oriented CSS that renders flawlessly server-side.  Along with the component-oriented architecture and feature-first organization, you will not find a nicer React codebase to work with.  Feel free to take a look through the repo for the [client-side code](https://github.com/RyanCCollins/ryancollinsio/tree/master/client) and feel free to use [my boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) for your next React project.

While building this site, I wrote about much of the experience in [my blog](http://www.ryancollins.io), so please do take a look if you are interested.
