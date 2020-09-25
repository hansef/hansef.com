import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              inveterate generalist. managing director &amp; cto at bletchley.
            </h1>
            <p className="px-4 text-lg text-gray-700">
              <a href="mailto:hans@bletchley.co">hans@bletchley.co</a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
