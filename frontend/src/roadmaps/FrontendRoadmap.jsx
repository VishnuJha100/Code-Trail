const FrontendRoadmap = () => {
  return (
    <div className="px-20 py-10 flex flex-col gap-4 text-gray-700">
      {/* Heading */}
      <div className="flex justify-center my-4">
        <p className="text-3xl text-gray-700 font-semibold">
          Frontend Development Roadmap 🚀
        </p>
      </div>
      <div>
        <p className="text-2xl text-gray-700">
          Here’s a comprehensive roadmap for Frontend Development, covering
          everything from basics to advanced concepts. If you're aiming to
          become a proficient frontend developer, following this structured
          guide will help!
        </p>
      </div>

      {/* Content */}
      <div className="py-10 flex flex-col gap-10">
        <div className="px-5 flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            🔹 Phase 1: Foundation (HTML, CSS, JavaScript){" "}
          </h1>
          <div className="px-10">
            <h1 className="font-bold">
              1- HTML (HyperText Markup Language) – Structure the Web:
            </h1>
            <ul>
              <li>1. HTML Tags & Elements (div, span, header, footer)</li>
              <li>2. Forms (input, textarea, button)</li>
              <li>3. Semantic HTML (Better accessibility & SEO)</li>
              <li>4. HTML5 Features (Audio, Video, Canvas, Storage)</li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold">
              2- CSS (Cascading Style Sheets) – Styling the Web:
            </h1>
            <ul>
              <li>1. CSS Box Model (Margin, Padding, Border)</li>
              <li>2. Selectors & Specificity</li>
              <li>3. Flexbox & Grid for Responsive Layouts</li>
              <li>4. Media Queries (@media for mobile responsiveness)</li>
              <li>5. CSS Animations & Transitions</li>
              <li>6. SASS/SCSS for advanced styling</li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold">
              3- JavaScript (JS) – Adding Interactivity:
            </h1>
            <ul>
              <li>1. Variables (const, let, var) & Data Types</li>
              <li>
                2. DOM Manipulation (document.querySelector, addEventListener)
              </li>
              <li>3. Functions (arrow functions, callbacks)</li>
              <li>
                4. ES6+ Features (spread/rest operators, destructuring,
                async/await)
              </li>
              <li>5. Event Handling (click, keydown, scroll)</li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-xl font-bold">
            🔹 Phase 2: Advanced JavaScript & Browser APIs{" "}
          </h1>
          <div className="px-10">
            <h1 className="font-bold">4- Advanced JavaScript Concepts:</h1>
            <ul>
              <li>1. Closures & High-Order functions</li>
              <li>2. Prototypes & Object-Oriented JavaScript</li>
              <li>3. Modules & Imports (import/export)</li>
              <li>4. Async JavaScript (Promises, Async/Await)</li>
              <li>5. Functional Programming Concepts</li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold">5- Browser APIs & Storage:</h1>
            <ul>
              <li>1. Fetch API (fetch() for handling requests)</li>
              <li>2. LocalStorage & SessionStorage</li>
              <li>3. WebSockets for real-time communication</li>
              <li>4. Service Workers (PWA Essentials)</li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-xl font-bold">
            🔹 Phase 3: Modern Frontend Frameworks{" "}
          </h1>
          <div className="px-10">
            <h1 className="font-bold">6- React.js (Most Popular Framework):</h1>
            <ul>
              <li>1. Components and Props</li>
              <li>2. State management (useState, useReducer)</li>
              <li>3. React router for Navigation</li>
              <li>4. Context API & Redux (Global State Management)</li>
              <li>5. Hooks (useEffect, useRef, useMemo)</li>
              <li>6. Performance Optimization (Lazy Loading, Memoization)</li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold">7- Alternative Frameworks:</h1>
            <ul>
              <li>1. Vue.js (Vuex for state management)</li>
              <li>2. Angular (RxJS, TypeScript)</li>
              <li>3. Svelte (Lightweight Alternative)</li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-xl font-bold">
            🔹 Phase 4: UI Libraries & Component Styling{" "}
          </h1>
          <div className="px-10">
            <h1 className="font-bold">
              8- CSS Frameworks & Utility Libraries:
            </h1>
            <ul>
              <li>1. Tailwind CSS (Utility-first framework)</li>
              <li>2. Bootstrap (Pre-built components)</li>
              <li>3. Material UI (React Components Library)</li>
              <li>4. Styled Components (CSS-in-JS approach)</li>
            </ul>
          </div>
          <div className="px-10">
            <h1 className="font-bold">9- Animation & Interactive UI:</h1>
            <ul>
              <li>1. Framer Motion (React animation library)</li>
              <li>2. GSAP (Advanced animations)</li>
              <li>3. Lottie (JSON-based animations)</li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-xl font-bold">
            🔹 Phase 5: Deployment{" "}
          </h1>
          <div className="px-10">
            <h1 className="font-bold">
              10. Deployment & Hosting:
            </h1>
            <ul>
              <li>1. Git & GitHub (git commit, git push, pull requests)</li>
              <li>2. Netlify / Vercel for deploying frontend apps</li>
              <li>3. Docker & CI/CD Basics</li>
            </ul>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-xl font-bold">
            🔹 Advice:{" "}
          </h1>
          <div className="px-10">
            <ul>
              <li>1. Practice daily → Code small projects to improve skills</li>
              <li>2. Join Developer Communities → GitHub, Twitter Dev, Discord groups</li>
              <li>3. Learn UI/UX Basics → Helps in building intuitive interfaces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendRoadmap;
