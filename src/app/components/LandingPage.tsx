import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-10 md:p-20 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Transform Your Workflow with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Discover the power of AI to enhance productivity, streamline your
            tasks, and deliver real-time insights. Let your AI assistant handle
            it all!
          </p>

          <a
            href="#about"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-md transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image1.jpeg"
                alt="Feature 1"
                width={400}
                height={250}
                className="rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Intelligent Task Automation
              </h3>
              <p className="text-gray-600">
                Let AI handle your repetitive tasks, automating processes and
                workflows to save time and reduce errors.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image2.png"
                alt="Feature 2"
                width={400}
                height={250}
                className="rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Instant Data Insights
              </h3>
              <p className="text-gray-600">
                Quickly gather insights from your data, allowing you to make
                informed decisions faster with real-time analytics.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/image3.jpeg"
                alt="Feature 3"
                width={400}
                height={250}
                className="rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Easily integrate with your existing tools and platforms, making
                it simpler to enhance your current workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
