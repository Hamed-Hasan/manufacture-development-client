import React from "react";
import { Link } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
import blog1 from "../../assets/blog/blog1.webp"
import blog2 from "../../assets/blog/blog2.webp"
import blog3 from "../../assets/blog/blog3.webp"
import blog4 from "../../assets/blog/blog4.webp"
import blog5 from "../../assets/blog/blog5.webp"

const Blog = () => {
  return (
    <div id="blog" className="bg-gray-100 px-4 xl:px-4 py-14">
      <ReactHelmet title="Blog"></ReactHelmet>
      <div className="mx-auto container">
        <span role="contentinfo">
          <h1
            tabIndex="0"
            className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900"
          >
            Latest from our Blog
          </h1>
        </span>
        <div
          tabIndex="0"
          aria-label="Group of cards"
          className="focus:outline-none mt-12 lg:mt-24"
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div
              tabIndex="0"
              className="focus:outline-none"
              aria-label="card 1"
            >
              <img
                role="img"
                aria-label="code editor"
                tabIndex="0"
                className="focus:outline-none w-full"
                src={blog1}
                alt="code editor"
              />
              <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                >
                  Inditex (Zara){" "}
                </p>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                >
                  13TH Oct, 2020
                </p>
              </div>
              <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h1
                  tabIndex="0"
                  className="focus:outline-none text-4xl text-gray-900 font-semibold tracking-wider"
                >
                  What are the different ways to manage a state in a React
                  application
                </h1>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12"
                >
                  The four major forms of state you need to keep track of in
                  your React projects are: Local state, Global state, Server
                  state, and URL state. A component's local state refers to the
                  data it keeps. Managing local state in React is often
                  accomplished via the usage of the useState hook. Additionally,
                  for both local and global states, useReducer is an option that
                  may be implemented in any way. Under the hood, it is quite
                  similar to useState, except that it takes a reducer instead of
                  a starting state. You'd need local state for things like
                  showing or hiding a modal component and keeping track of input
                  data for forms that have been disabled. Data that is shared
                  across different components is referred to as global state.
                  When data has to be accessed and updated across many parts of
                  our program, we need to use global state. Authenticated user
                  state is a frequent example of a global state. In order to get
                  or update data from an external server, you must handle a
                  variety of states, including loading and error state..
                  <span>
                    How to Manage Global State in React Once you attempt to
                    manage state across multiple components, things get a bit
                    trickier. You will reach a point in your application where
                    patterns like “lifting state up” and passing callbacks down
                    to update your state from components lead to lots and lots
                    of props. What do you do if you want to update a component’s
                    state from basically anywhere in your app? You turn it into
                    global state. To manage it, however, you should opt for a
                    third-party solution. Many developers are inclined to use
                    built-in React features like the Context API to manage their
                    state. To be clear: the Context API is not a state
                    management solution. It is a way to avoid problems like
                    props drilling (creating a bunch of props in components that
                    don’t need it), but it is only helpful for reading state,
                    not updating it. The reason to not use Context for global
                    state management lies in the way it works. The default
                    behavior for Context is to re-render all children components
                    if the value provided to it as a prop changes. For example,
                    it is bad practice to combine useReducer and useContext:
                  </span>
                  <span>
                    us, you don’t need to wrap your components in a Context
                    Provider. Just install and go! How to Manage Server State in
                    React Server state can be deceptively challenging to manage.
                    At first, it seems you just need to fetch data and display
                    it in the page. But then you need to display a loading
                    spinner while you are waiting for the data. Then you need to
                    handle errors and display them to the user as they arise.
                    What happens when there is a network error? Do I really need
                    to hit my server every time my user visits the home page if
                    the data hasn’t changed? Do I need to add useState and
                    useEffect in every component I want to fetch my data? To fix
                    this, there are a couple of great libraries that make data
                    fetching in React a breeze: SWR and React Query.
                  </span>
                </p>
                <div className="w-full flex justify-end">
                  <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <Link
                      to="/blogNext"
                      className="flex items-center text-base tracking-wide text-indigo-700"
                    >
                      Read more
                      <svg
                        className="ml-3 lg:ml-6 text-indigo-700"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                      >
                        <path
                          d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M1 8.53662H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Link>
                  </button>
                </div>
                <div className="h-5 w-2"></div>
              </div>
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div
                  tabIndex="0"
                  className="focus:outline-none "
                  aria-label="card 2"
                >
                  <img
                    tabIndex="0"
                    role="img"
                    aria-label="gaming"
                    className="focus:outline-none w-full"
                    src={blog2}
                    alt="games"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
                    >
                      Cutter & buck{" "}
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      Why do not set the state directly in React
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      Using setState allows you to move a state from one
                      component to another without having to change the
                      original. SetState is required for integrating an item
                      into the current state (). Components that are stateful or
                      stateless cannot be known by their parents and children,
                      and they should not be concerned about whether or not they
                      are defined as functions or classes. Any React component
                      may have a state attached to it. A user action or a system
                      event may cause the state of a component to change. If the
                      component's state changes, React re-renders it. Before
                      changing the state's value, it is important to create an
                      initial state setup. To make changes to the object's
                      current state, we use the setState() method. You may be
                      sure that the component's current state has been
                      maintained by requesting a re-render. If a synchronous
                      call is performed to change an object's state, it may not
                      be updated on the console at the right time.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 3"
                >
                  <img
                    tabIndex="0"
                    role="img"
                    aria-label="gaming"
                    className="focus:outline-none focus:outline-none w-full"
                    src={blog3}
                    alt="notes"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Adidas
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      search to find products
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      In order to discover a product by its name in an array, we
                      will use array.find(). To get a truthy value, the
                      callbackFn function is called once for each index in the
                      array. If so, find returns the element's value instantly.
                      Unless this is the case, find returns an error. For every
                      index in the array, callbackFn is called, not only those
                      that have been given values. If you use the callbackFn
                      function offered by find, you may change the array that it
                      is called on. Before the initial callbackFn activation,
                      the items found by find are pre-set. Using Javascript's
                      arr.find() function, you may obtain the value of the first
                      member in an array that meets your criteria. If any of the
                      array's items meet the criterion, the first one to meet it
                      will print. Empty array items are not supported by this
                      method, and it does not alter the original one.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                <div
                  tabIndex="0"
                  className="focus:outline-none "
                  aria-label="card 4"
                >
                  <img
                    tabIndex="0"
                    role="img"
                    aria-label="laptop"
                    className="focus:outline-none w-full"
                    src={blog4}
                    alt="laptop"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      prototypical inheritance
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      There is an unnoticed [[Prototype]] property in every
                      object in addition to its methods and attributes.
                      JavaScript's Prototypal Inheritance capability may be used
                      to provide extra methods and properties to objects.
                      Inheritance is a process through which an object may take
                      on the traits and behaviors of another object. The
                      [[Prototype]] of an object may typically be obtained and
                      modified using the Object.getPrototypeOf and
                      Object.setPrototypeOf methods. The _proto_ method is now
                      often used in modern languages to set it.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex="0"
                  className="focus:outline-none"
                  aria-label="card 5"
                >
                  <img
                    tabIndex="0"
                    role="img"
                    aria-label="worker"
                    className="rounded-t-3xl focus:outline-none w-full"
                    src={blog5}
                    alt="worker"
                  />
                  <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      Bruce Wayne
                    </p>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-sm text-white font-semibold tracking-wide"
                    >
                      13TH Oct, 2020
                    </p>
                  </div>
                  <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                    <h1
                      tabIndex="0"
                      className="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider"
                    >
                      improve performance of a React Application
                    </h1>
                    <p
                      tabIndex="0"
                      className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2"
                    >
                      A React application may be made more efficient in a
                      variety of ways. As an example, wherever possible, keep
                      state of components local. Memorying React components to
                      avoid unwanted re-renders is also a good strategy. In
                      addition, dynamic imports in React allow for
                      code-splitting (). React's virtualization of windows or
                      lists. In React, photos may be loaded in a 'lazy' manner.
                      Making Use of Structural Consistency. As many chunk files
                      as you'd want
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
