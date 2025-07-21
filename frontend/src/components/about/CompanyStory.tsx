import React from "react"
import { Fade, Slide } from "react-awesome-reveal"
import storyImage from "../../assets/img/scenery2.jpg"

const CompanyStory: React.FC = () => {
  return (
    <section id="company-story" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/50 to-blue-100/50 rounded-full opacity-60 translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-100/50 to-yellow-100/50 rounded-full opacity-60 -translate-x-40 translate-y-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <Slide direction="right" triggerOnce>
              <div className="space-y-6">
                <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg">
                  <i className="bi bi-clock-history mr-2" />
                  Our Journey
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  A Story of{" "}
                  <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                    Passion & Purpose
                  </span>
                </h2>
              </div>
            </Slide>

            <Fade direction="up" delay={200} triggerOnce>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-700 font-medium">
                  Founded in <span className="text-teal-600 font-bold">2010</span> by travel enthusiast Nimantha Perera,
                  our company began with a simple yet powerful vision: to share the extraordinary beauty and rich
                  culture of Sri Lanka with travelers from around the world.
                </p>

                <p className="text-gray-600">
                  What started as a small family business has grown into one of Sri Lanka's most trusted travel
                  companies. Our founder's deep love for his homeland and genuine desire to create meaningful
                  connections between visitors and local communities has been the driving force behind our success.
                </p>

                <p className="text-gray-600">
                  Over the years, we've had the privilege of guiding thousands of travelers through ancient temples,
                  pristine beaches, misty mountains, and vibrant cities. Each journey has taught us something new, and
                  every satisfied traveler has inspired us to reach even greater heights.
                </p>
              </div>
            </Fade>

            {/* Key Milestones */}
            <Fade direction="up" delay={400} triggerOnce>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  {[
                    { year: "2010", event: "Company founded with a vision to showcase Sri Lanka" },
                    { year: "2015", event: "Reached 100+ satisfied customers milestone" },
                    { year: "2018", event: "Expanded services to include luxury travel packages" },
                    { year: "2020", event: "Adapted to digital-first approach during pandemic" },
                    { year: "2023", event: "Celebrated 500+ happy travelers and counting" },
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full min-w-[60px] text-center">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700 flex-1">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last">
            <Fade direction="left" triggerOnce>
              <div className="relative group">
                {/* Decorative backgrounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl opacity-20 transform rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 rounded-3xl opacity-15 transform -rotate-3 scale-110 group-hover:-rotate-6 transition-transform duration-700" />

                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={storyImage || "/placeholder.svg"}
                    alt="Sri Lanka landscape representing our journey"
                    className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 aspect-[4/5]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-3xl shadow-2xl z-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">13+</div>
                    <div className="text-sm font-medium">Years of Excellence</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-3xl shadow-2xl z-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm font-medium">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
