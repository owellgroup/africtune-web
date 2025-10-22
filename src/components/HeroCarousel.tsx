import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      content: "/slide1.mp4",
      title: "Empowering African Artists",
      description: "Join the revolution in music royalty collection. Track, manage, and receive your earnings seamlessly.",
    },
    {
      type: "image",
      content: slide2,
      title: "Professional Royalty Management",
      description: "Connect with leading radio and TV channels across Africa. Get paid for every play of your music.",
    },
    {
      type: "image",
      content: slide3,
      title: "Your Music, Your Rights",
      description: "Transparent tracking and timely payments. Experience the future of music royalty collection.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <video
              src={slide.content}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover film-grain grayscale-[50%] brightness-75"
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center film-grain grayscale-[50%] brightness-75"
              style={{ backgroundImage: `url(${slide.content})` }}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in text-gradient">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
