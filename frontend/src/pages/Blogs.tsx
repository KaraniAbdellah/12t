export default function Blogs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Blogs</h1>

      <p className="text-gray-600 mb-10">
        Discover tips, guides and insights about Google Play testing.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <article className="p-6 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            How Google Play Testing Works
          </h2>
          <p className="text-gray-600">
            Learn how closed testing helps prepare your app for production.
          </p>
        </article>

        <article className="p-6 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Get 12 Testers in 14 Days
          </h2>
          <p className="text-gray-600">
            A simple guide to completing your testing requirements.
          </p>
        </article>

        <article className="p-6 border rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Improve Your App Before Launch
          </h2>
          <p className="text-gray-600">
            Use tester feedback to improve your app before publishing.
          </p>
        </article>
      </div>
    </section>
  )
}