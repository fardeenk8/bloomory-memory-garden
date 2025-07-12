
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Target, Award, Calendar } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Fardeen Kachawa",
      role: "CEO & Founder",
      bio: "“On a mission to build thoughtful AI tools that make life simpler — starting with how we capture, organize, and celebrate our memories.”",
      image: "/ceo.jpeg"
    },
    // {
    //   name: "Marcus Rodriguez",
    //   role: "CTO",
    //   bio: "Ex-Apple engineer specializing in mobile AI and secure cloud infrastructure.",
    //   image: "/placeholder.svg"
    // },
    // {
    //   name: "Emily Watson",
    //   role: "Head of Design",
    //   bio: "Award-winning UX designer with expertise in creating beautiful, intuitive memory platforms.",
    //   image: "/placeholder.svg"
    // },
    // {
    //   name: "David Kim",
    //   role: "VP of Partnerships",
    //   bio: "Former event industry executive helping connect creative professionals with AI technology.",
    //   image: "/placeholder.svg"
    // }
  ];

  const timeline = [
    {
      year: "2021-December",
      title: "The Idea",
      description: "Founded with the vision to make memory preservation intelligent and beautiful."
    },
    {
      year: "2022-September",
      title: "Partner Platform",
      description: "Launched our first AI-powered photo organization and facial recognition features."
    },
    {
      year: "2023-December",
      title: "Mobile Experience",
      description: "Released BloomoryAI Mobile App for iOS and Android — enabling offline albums, voice memories, and live AI filters on-the-go."
    },
    {
      year: "2024-May",
      title: "AI Development",
      description: "Released BloomoryAI Mobile App for iOS and Android — enabling offline albums, voice memories, and live AI filters on-the-go."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding worldwide with enhanced AI features and mobile applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About BloomoryAI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how people preserve, organize, and share their most precious memories using the power of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  BloomoryAI was born out of a simple frustration: the struggle of preserving and organizing memories in an increasingly digital world. Our founder, Fardeen Kachawa, witnessed firsthand the challenges families and creatives face when trying to manage thousands of photos and videos scattered across devices, cloud storage, and social platforms.
                </p>
                <p>
                  We started with a simple idea—what if there was a way to organize, store, and share memories seamlessly and securely? What if technology could help us rediscover forgotten moments and connect with our loved ones in a deeper way? This led to the development of BloomoryAI, an AI-powered platform designed to organize, enhance, and safeguard your most cherished memories.
                </p>
                <p>
                  From the very beginning, we focused on making the user experience intuitive and reliable. Our cutting-edge AI works behind the scenes to categorize images and videos intelligently, identify key moments, and even auto-organize them based on dates, locations, and people. But it doesn’t stop there. BloomoryAI offers an array of tools for seamless sharing, customization, and privacy control, all while ensuring that your content remains secure and easily accessible.
                </p>
                <p>
                  As we continue to grow, we remain committed to our core values: innovation, security, and connection. Our team is dedicated to pushing the boundaries of what's possible with AI to ensure that BloomoryAI is not just a platform, but a memory-saving companion that evolves alongside you.
                </p>
                <p>
                  Today, BloomoryAI serves thousands of families and hundreds of creative professionals, helping them preserve life's most meaningful moments with the power of AI.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
                  <div className="text-gray-600">Partner Vendors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                  <div className="text-gray-600">Memories Stored</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make memory preservation effortless and beautiful through intelligent AI technology, helping individuals and professionals create, organize, and share life's most precious moments with confidence and joy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every meaningful moment is beautifully preserved, intelligently organized, and securely shared, creating a global community of memory keepers connected by AI-powered technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600">
              The passionate mind behind BloomoryAI's innovative platform
            </p>
          </div>
          <div className={`grid ${teamMembers.length === 1 ? 'place-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br  transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in BloomoryAI's evolution
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="text-2xl font-bold text-purple-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
