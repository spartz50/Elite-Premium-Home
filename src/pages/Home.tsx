import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Phone, Mail, MapPin, Home as HomeIcon, Award, Users, Clock, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Modern Custom Home",
      location: "Port Charlotte, FL",
      images: [
        "/images/projects/exterior_front_1.webp",
        "/images/projects/kitchen_3.webp",
        "/images/projects/interior_entry.webp",
        "/images/projects/bathroom_1.webp",
        "/images/projects/bedroom_1.webp",
        "/images/projects/kitchen_1.webp",
      ],
      specs: "4 Bed • 3 Bath • 2,223 sq ft",
      features: ["Custom Finishes", "Open Floor Plan", "Premium Appliances"],
    },
    {
      title: "Contemporary Residence",
      location: "LaBelle, FL",
      images: [
        "/images/projects/exterior_sunset.webp",
        "/images/projects/kitchen_main.webp",
        "/images/projects/living_room.webp",
        "/images/projects/exterior_front.webp",
        "/images/projects/kitchen_detail.webp",
        "/images/projects/interior_entry.webp",
      ],
      specs: "3 Bed • 2 Bath • 1,530 sq ft",
      features: ["Modern Design", "Energy Efficient", "Quality Craftsmanship"],
    },
    {
      title: "Custom Spec Home",
      location: "LaBelle, FL",
      images: [
        "/jolly_exterior_aerial.webp",
        "/jolly_exterior_front_entry.webp",
        "/jolly_kitchen_main.webp",
        "/jolly_living_room.webp",
        "/jolly_bedroom_main.webp",
        "/jolly_bathroom_shower.webp",
        "/jolly_kitchen_angle_1.webp",
        "/jolly_bedroom_2.webp",
      ],
      specs: "4 Bed • 2 Bath • 1,990 sq ft",
      features: ["Modern Finishes", "Spacious Layout", "Premium Construction"],
    },
    {
      title: "Executive Home",
      location: "LaBelle, FL",
      images: [
        "/justice_exterior_front.webp",
        "/justice_living_room.webp",
        "/justice_kitchen_main.webp",
        "/justice_bedroom_main.webp",
        "/justice_bathroom_main.webp",
        "/justice_kitchen_angle_1.webp",
      ],
      specs: "4 Bed • 2 Bath • 1,693 sq ft",
      features: ["Contemporary Design", "Open Concept", "High-End Finishes"],
    },
  ];



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Enhanced Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo removed - now displayed in hero section */}
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-all hover:text-primary relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="hidden md:inline-flex shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <div className="container relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              {/* Large Logo with Built-in Tagline */}
              <div className="mb-8">
                <img
                  src="/logo.webp"
                  alt="Elite Premium Homes - Exceptional Quality at a Great Value"
                  className="w-full max-w-3xl h-auto"
                />
              </div>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Crafting custom spec homes and residential construction with unparalleled 
                attention to detail. Your dream home, built to perfection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                >
                  Explore Our Work
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg px-8 py-6 border-2"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  239-291-5567
                </Button>
              </div>


            </div>

            {/* Enhanced Image Grid */}
            <div className="relative lg:h-[600px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-64">
                    <img
                      src="/images/projects/exterior_front_1.webp"
                      alt="Custom home exterior"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-72">
                    <img
                      src="/images/projects/kitchen_3.webp"
                      alt="Modern kitchen"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-72">
                    <img
                      src="/images/projects/bathroom_1.webp"
                      alt="Luxury bathroom"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-64">
                    <img
                      src="/images/projects/exterior_sunset.webp"
                      alt="Sunset view"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Enhanced About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-primary border-primary/50 px-4 py-2">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Building Dreams Across Southwest Florida
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elite Premium Home LLC specializes in residential construction and custom spec homes. 
              Our unwavering commitment to quality craftsmanship and meticulous attention to detail 
              ensures every home we build exceeds the highest standards of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Custom Homes",
                description: "Tailored designs meticulously crafted to your exact specifications and lifestyle needs",
              },
              {
                icon: Building2,
                title: "Spec Homes",
                description: "Move-in ready homes featuring premium finishes and modern amenities throughout",
              },
              {
                icon: Award,
                title: "Quality Construction",
                description: "Exceptional craftsmanship in every detail, backed by years of expertise",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-primary border-primary/50 px-4 py-2">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Our Recent Masterpieces</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed homes showcasing our dedication to 
              quality, innovation, and design excellence.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="text-sm">{project.specs}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, fIdx) => (
                      <Badge key={fIdx} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {project.images.map((image, imgIdx) => (
                    <div
                      key={imgIdx}
                      className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                        imgIdx === 0 ? "md:col-span-2 md:row-span-2" : ""
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${imgIdx + 1}`}
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          imgIdx === 0 ? "h-full min-h-[400px]" : "h-64"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-medium">View Full Size</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="text-primary border-primary/50 px-4 py-2">
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Let's Build Your Dream Home</h2>
              <p className="text-lg text-muted-foreground">
                Ready to start your custom home project? Contact us today to discuss your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-8 space-y-8">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      value: "239-291-5567",
                      href: "tel:239-291-5567",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      value: "sbirch@elitepremium.homes",
                      href: "mailto:sbirch@elitepremium.homes",
                    },
                    {
                      icon: MapPin,
                      title: "Address",
                      value: "5781 Lee Blvd Suite 208571\nLehigh Acres, FL 33971",
                      href: null,
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="rounded-xl bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary text-primary-foreground">
                <CardContent className="pt-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                        <Users className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl">Shane Birch</h3>
                        <p className="opacity-90">President</p>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      With years of experience in residential construction, Shane leads Elite Premium 
                      Home LLC with an unwavering commitment to delivering exceptional quality homes 
                      throughout Southwest Florida.
                    </p>
                  </div>
                  <div className="space-y-3 pt-4">
                    <Button
                      className="w-full bg-white text-primary hover:bg-white/90"
                      size="lg"
                      asChild
                    >
                      <a href="tel:239-291-5567">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/20"
                      size="lg"
                      asChild
                    >
                      <a href="mailto:sbirch@elitepremium.homes">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.webp" alt="Elite Premium Homes" className="h-12 w-auto" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Elite Premium Home LLC. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Licensed & Insured • Southwest Florida
              </p>
            </div>
            <div className="text-sm font-medium text-primary">
              Exceptional Quality at a Great Value
            </div>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </Button>
        </div>
      )}
    </div>
  );
}

