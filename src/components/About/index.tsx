const About = ({ darkMode }: any) => {
  return (
    <div className={`space-y-14 lg:space-y-24 ${darkMode ? 'text-white' : ''}`}>
      <section className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="lg:px-4 lg:mt-12 ">
              <h1 className={`text-2xl font-bold text-gray-900 lg:text-5xl ${darkMode ? 'text-white' : ''}`}>Hey, I'm <span className="text-blue-500">Mateus</span>.</h1>
              <div className={`mt-6 text-gray-800 ${darkMode ? 'text-white' : ''}`}>
                <p className="mb-4">I'm a Mobile Developer.</p>
                <p className="mb-4">
                  I am a mobile developer with previous experience in front-end web development.
                  My expertise lies in creating mobile applications for Android and iOS using technologies such as Flutter and React Native.
                </p>
                <p className="mb-4">
                  As a computer science student, I am passionate about exploring the thrilling world of technology and learning about its boundless possibilities.
                </p>
                <p className="font-bold">Technology is the key that unlocks the infinite potential of the human imagination. 💙</p>
              </div>
            </div>
            <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 drop-shadow-xl flex justify-center">
              <img
                src="/src/assets/me.jpeg"
                className="rounded-full w-52 h-52 sm:w-60 sm:h-60 object-cover shadow-lg dark:shadow-none dark:bg-gray-800"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default About;