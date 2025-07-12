
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play, Award, Users, Heart } from "lucide-react";

const Testimonials = () => {
  const personalReviews = [
    {
      name: "Vikram Iyer",
      role: "Family Memory Keeper",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",  //boy
      rating: 5,
      review: "BloomoryAI has completely transformed how our family preserves memories. The AI organization is incredible - it automatically grouped our vacation photos by location and even recognized our kids as they grew up!"
    },
    {
      name: "Aanya Joshi",
      role: "Travel Enthusiast",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png", //girl
      rating: 4,
      review: "As someone who takes thousands of photos while traveling, the duplicate detection and smart tagging features are game-changers. I found photos I had forgotten about from years ago!"
    },
    {
      name: "Rhea Kapoor",
      role: "New Mom",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "The facial recognition feature helped me create the most beautiful timeline of my baby's first year. Every milestone is perfectly organized and easy to share with grandparents."
    },
    {
      name: "Dev Patel",
      role: "Photography Hobbyist",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "The AI editing tools and filters are professional-grade. I love how it enhances my photos while keeping them natural-looking. The background removal feature is fantastic!"
    },
    {
      name: "Priya Mehta",
      role: "Event Planner",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 3.5,
      review: "BloomoryAI has become my secret weapon for client events. I can create beautiful galleries, tag guests automatically, and even offer personalized albums in minutes. It's made memory delivery as seamless as event execution."
    },
    {
      name: "Ankit Sharma",
      role: "Wedding Photographer",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 4,
      review: "I’m not very tech-savvy, but BloomoryAI made it so simple to preserve years of family history. The voice notes and timeline view brought my old photos back to life. My grandkids love it too!"
    }
  ];

  const partnerReviews = [
    {
      name: "Amit Malhotra",
      role: "Lead Photographer, SnapAura",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "BloomoryAI's partner platform has revolutionized my workflow. The white-labeled sharing and watermarking features have increased my client satisfaction by 300%. The booking system is seamless!"
    },
    {
      name: "Neha Suresh",
      role: "Owner, The Event Mela",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "The AI-powered organization saves me hours of post-event work. Clients love receiving their beautifully organized galleries, and the payment integration has streamlined my business."
    },
    {
      name: "Shivani Patel",
      role: "Creative Head, Moments & Magic",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "The event planning toolkit integrated with memory preservation is brilliant. My clients can plan their events and automatically preserve the memories in one platform!"
    },
    {
      name: "Tanvi Desai",
      role: "Director, EverAfter Weddings",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
      review: "Being able to let customers order personalized gifts directly from their albums has increased our sales by 250%. The integration is seamless and professional."
    }
  ];

  const videoTestimonials = [
    {
      name: "Johnson Family",
      title: "How BloomoryAI Saved Our Wedding Memories",
      thumbnail: "/placeholder.svg",
      duration: "2:30"
    },
    {
      name: "Pro Photography Studio",
      title: "Growing Our Business with AI-Powered Tools",
      thumbnail: "/placeholder.svg",
      duration: "3:45"
    }
  ];

  const stats = [
    { number: "4.7/5", label: "Average Rating", icon: Star },
    { number: "700+", label: "Happy Users", icon: Users },
    { number: "35+", label: "Partner Businesses", icon: Award },
    { number: "200K+", label: "Memories Preserved", icon: Heart }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of families and hundreds of professionals trust BloomoryAI with their most precious memories.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal User Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Personal User Reviews
            </h2>
            <p className="text-xl text-gray-600">
              See how BloomoryAI is helping families preserve their precious moments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalReviews.map((review, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-gray-600 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                    <p className="text-gray-700 leading-relaxed pl-6">
                      {review.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              How creative professionals are growing their businesses with BloomoryAI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerReviews.map((review, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-purple-600 text-sm font-medium">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                    <p className="text-gray-700 leading-relaxed pl-6">
                      {review.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch real users share their BloomoryAI experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Play className="w-6 h-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{video.name}</h3>
                    <p className="text-white/90 text-sm">{video.title}</p>
                    <span className="inline-block bg-black/50 text-white text-xs px-2 py-1 rounded mt-2">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Trust Badges */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by industry leaders
          </h3>
          <div className="flex items-center justify-center space-x-12 grayscale opacity-60">
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
            <div className="w-24 h-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Testimonials;
