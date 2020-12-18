import renderer from 'react-test-renderer'
import IndexPage from 'pages/index'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<IndexPage />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="container"
      >
        <main
          className="main"
        >
          <h1
            className="title"
          >
            Welcome to 
            <a
              href="https://nextjs.org"
            >
              Next.js!
            </a>
          </h1>
          <p
            className="description"
          >
            Get started by editing
             
            <code
              className="code"
            >
              pages/index.js
            </code>
          </p>
          <div
            className="grid"
          >
            <a
              className="card"
              href="https://nextjs.org/docs"
            >
              <h3>
                Documentation →
              </h3>
              <p>
                Find in-depth information about Next.js features and API.
              </p>
            </a>
            <a
              className="card"
              href="https://nextjs.org/learn"
            >
              <h3>
                Learn →
              </h3>
              <p>
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
            <a
              className="card"
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <h3>
                Examples →
              </h3>
              <p>
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
            <a
              className="card"
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h3>
                Deploy →
              </h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
        <footer
          className="footer"
        >
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by
             
            <img
              alt="Vercel Logo"
              className="logo"
              src="/vercel.svg"
            />
          </a>
        </footer>
      </div>
    `)
  })
})
