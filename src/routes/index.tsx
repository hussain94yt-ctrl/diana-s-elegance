import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/diana-salon-hero.jpg";
import bridalImage from "@/assets/diana-bridal-feature.jpg";
import servicesImage from "@/assets/diana-services-collage.jpg";
import makeupImage from "@/assets/diana-gallery-makeup.jpg";
import hairImage from "@/assets/diana-gallery-hair.jpg";
import nailsImage from "@/assets/diana-gallery-nails.jpg";
import skincareImage from "@/assets/diana-gallery-skincare.jpg";
import mehndiImage from "@/assets/diana-gallery-mehndi.jpg";

const phoneDisplay = "0333-0007742";
const phoneLink = "tel:+923330007742";
const mapsUrl = "https://maps.app.goo.gl/sbQD6rMDVzGCdM1YA";
const baseWhatsapp = "https://wa.me/923330007742";
const generalMessage =
  "Assalamualaikum Diana Beauty Salon, I would like to book an appointment. Please share your available timings. Thank you.";
const bridalMessage =
  "Assalamualaikum Diana Beauty Salon, I am interested in booking bridal services. Please share your bridal packages, availability and appointment details.";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Bridal", href: "#bridal" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    name: "Bridal Makeup",
    description: "Elegant bridal looks tailored for your special day.",
    image: bridalImage,
    alt: "Bride receiving professional bridal makeup at a luxury salon",
  },
  {
    name: "Party Makeup",
    description: "Glamorous makeup looks for weddings, parties and special occasions.",
    image: makeupImage,
    alt: "Professional party makeup being applied in a salon",
  },
  {
    name: "Hair Styling",
    description: "Professional styling for everyday looks and special events.",
    image: hairImage,
    alt: "Elegant hair styling with soft waves in a salon",
  },
  {
    name: "Hair Treatments",
    description: "Beauty and care treatments for healthier-looking hair.",
    image: servicesImage,
    alt: "Premium hair and beauty products arranged in a salon",
  },
  {
    name: "Skin Care",
    description: "Facials and beauty treatments designed for a refreshed appearance.",
    image: skincareImage,
    alt: "Skincare treatment room with salon products",
  },
  {
    name: "Nails",
    description: "Manicure, pedicure and professional nail care.",
    image: nailsImage,
    alt: "Professional manicure and nail care service",
  },
  {
    name: "Mehndi",
    description: "Traditional and contemporary mehndi designs for special occasions.",
    image: mehndiImage,
    alt: "Intricate mehndi design being applied for an occasion",
  },
  {
    name: "Bridesmaid Services",
    description: "Coordinated beauty looks for bridesmaids and wedding celebrations.",
    image: makeupImage,
    alt: "Occasion makeup service prepared for a wedding celebration",
  },
];

const galleryItems = [
  {
    title: "Bridal beauty demo image",
    category: "Bridal",
    image: bridalImage,
    alt: "Replaceable demo bridal makeup image for Diana Beauty Salon gallery",
    tall: true,
  },
  {
    title: "Makeup demo image",
    category: "Makeup",
    image: makeupImage,
    alt: "Replaceable demo makeup image for Diana Beauty Salon gallery",
  },
  {
    title: "Hair styling demo image",
    category: "Hair",
    image: hairImage,
    alt: "Replaceable demo hair styling image for Diana Beauty Salon gallery",
    tall: true,
  },
  {
    title: "Nail care demo image",
    category: "Nails",
    image: nailsImage,
    alt: "Replaceable demo nails image for Diana Beauty Salon gallery",
  },
  {
    title: "Salon atmosphere demo image",
    category: "Salon",
    image: heroImage,
    alt: "Replaceable demo salon interior image for Diana Beauty Salon gallery",
  },
  {
    title: "Skincare demo image",
    category: "Salon",
    image: skincareImage,
    alt: "Replaceable demo skincare room image for Diana Beauty Salon gallery",
    tall: true,
  },
  {
    title: "Mehndi demo image",
    category: "Bridal",
    image: mehndiImage,
    alt: "Replaceable demo mehndi image for Diana Beauty Salon gallery",
  },
  {
    title: "Beauty services demo image",
    category: "Makeup",
    image: servicesImage,
    alt: "Replaceable demo collage of Diana Beauty Salon services",
  },
];

const categories = ["All", "Bridal", "Makeup", "Hair", "Nails", "Salon"];

const whyChoose = [
  {
    title: "Personalized Beauty",
    text: "Beauty services selected around your preferred look and occasion.",
  },
  {
    title: "Bridal Focus",
    text: "Dedicated beauty solutions for brides and wedding celebrations.",
  },
  {
    title: "Complete Beauty Experience",
    text: "Hair, makeup, skin, nails and occasion beauty services.",
  },
  {
    title: "Convenient Location",
    text: "Easy-to-find Latifabad Unit 8 location in Hyderabad.",
  },
];

function whatsappLink(message: string) {
  return `${baseWhatsapp}?text=${encodeURIComponent(message)}`;
}

function serviceMessage(serviceName: string) {
  return `Assalamualaikum Diana Beauty Salon, I would like to book an appointment.\n\nService: ${serviceName}\n\nPlease share available dates and timings.\n\nThank you.`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diana Beauty Salon | Latifabad Branch | Hyderabad" },
      {
        name: "description",
        content:
          "Diana Beauty Salon in Latifabad, Hyderabad offering beauty, bridal makeup, hair, skincare, nails and occasion beauty services. Book your appointment on WhatsApp.",
      },
      { property: "og:title", content: "Diana Beauty Salon | Latifabad Branch | Hyderabad" },
      {
        property: "og:description",
        content:
          "Diana Beauty Salon in Latifabad, Hyderabad offering beauty, bridal makeup, hair, skincare, nails and occasion beauty services. Book your appointment on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Diana Beauty Salon | Latifabad Branch",
          description:
            "Premium beauty salon and bridal beauty services in Latifabad, Hyderabad.",
          telephone: "+923330007742",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Latifabad Unit 8",
            addressLocality: "Hyderabad",
            addressRegion: "Sindh",
            addressCountry: "PK",
          },
          areaServed: "Latifabad, Hyderabad, Sindh, Pakistan",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "36",
          },
          url: "/",
          sameAs: [mapsUrl],
        }),
      },
    ],
  }),
  component: DianaBeautySalonPage,
});

function DianaBeautySalonPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.id) setActiveSection(visible.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? current : (current + 1) % filteredGallery.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null ? current : (current - 1 + filteredGallery.length) % filteredGallery.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredGallery.length, lightboxIndex]);

  const activeLightboxItem = lightboxIndex === null ? undefined : filteredGallery[lightboxIndex];

  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />

      <section className="relative isolate min-h-[92svh] overflow-hidden bg-luxury text-primary-foreground">
        <img
          src={heroImage}
          alt="Luxury salon interior with bridal dress display at Diana Beauty Salon"
          width={1600}
          height={1000}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background/30 to-transparent" />

        <div className="mx-auto grid min-h-[92svh] w-full max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-veil px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ivory-muted shadow-soft backdrop-blur">
              <Sparkles className="size-4" aria-hidden="true" />
              Latifabad Unit 8 · Hyderabad
            </p>
            <h1 className="font-display text-5xl leading-none text-primary-foreground sm:text-7xl lg:text-8xl">
              DIANA BEAUTY SALON
            </h1>
            <p className="mt-5 font-display text-3xl text-secondary sm:text-5xl">
              Where Beauty Meets Elegance
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ivory-muted sm:text-lg">
              Professional beauty, bridal and self-care services in Latifabad, Hyderabad.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="luxury" size="xl">
                <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
                  Book an Appointment <CalendarHeart aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#services">
                  Explore Services <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Business information" className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border px-4 py-6 sm:px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
          {[
            ["4.5★", "Google Rating"],
            ["36+", "Google Reviews"],
            ["Bridal Beauty", "Bridal & Occasion Looks"],
            ["Latifabad", "Unit 8, Hyderabad"],
          ].map(([value, label]) => (
            <div key={value} className="px-4 py-6 text-center">
              <p className="font-display text-3xl text-primary">{value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div className="animate-on-scroll relative overflow-hidden border border-border bg-surface p-3 shadow-editorial">
            <img
              src={servicesImage}
              alt="Premium salon makeup, hair, skincare and nail service details"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div className="animate-on-scroll flex flex-col justify-center">
            <p className="section-kicker">About the salon</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
              Beauty. Confidence. Elegance.
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Diana Beauty Salon is a beauty destination in Latifabad, Hyderabad, offering
              professional beauty services for everyday elegance, special occasions and bridal
              celebrations.
            </p>
            <div className="mt-8 border-l-2 border-champagne bg-accent px-6 py-5">
              <p className="font-display text-2xl leading-snug text-foreground">
                From everyday self-care to your most important celebration, our goal is to help every
                client feel confident, comfortable and beautifully prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-3xl">
            <p className="section-kicker">Services</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
              Our Beauty Services
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Professional beauty services designed for everyday elegance, special occasions and
              bridal moments.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.name}
                className="animate-on-scroll group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={720}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-card-foreground">{service.name}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <Button asChild variant="textGold" className="mt-4 px-0">
                    <a href={whatsappLink(serviceMessage(service.name))} target="_blank" rel="noreferrer">
                      Book This Service <ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bridal" className="scroll-mt-24 bg-luxury py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8">
          <div className="animate-on-scroll order-2 lg:order-1">
            <p className="section-kicker text-champagne">Bridal beauty</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary-foreground sm:text-6xl">
              Your Big Day Deserves Your Best Look
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ivory-muted">
              From bridal makeup and elegant hair styling to bridesmaid beauty, create a complete
              wedding-day look designed around your style.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="luxury" size="xl">
                <a href={whatsappLink(bridalMessage)} target="_blank" rel="noreferrer">
                  Book Bridal Appointment <CalendarHeart aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </div>
          <div className="animate-on-scroll order-1 lg:order-2">
            <div className="relative rounded-lg border border-champagne/30 p-3 shadow-editorial">
              <img
                src={bridalImage}
                alt="Elegant bridal makeup service for a South Asian bride"
                width={1408}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-md border border-champagne/30 bg-veil p-5 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
                  Bridal · Makeup · Hair · Mehndi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="section-kicker">Gallery</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
                Beauty Work Gallery
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Demo imagery is shown for presentation and can be replaced with real Diana Beauty Salon work.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant={activeCategory === category ? "tabActive" : "tab"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredGallery.map((item, index) => (
              <button
                key={`${item.title}-${activeCategory}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                 className="animate-on-scroll group mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg border border-border bg-card text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={item.tall ? 1250 : 900}
                  loading="lazy"
                  className={`${item.tall ? "aspect-[4/5]" : "aspect-[5/4]"} w-full object-cover transition duration-700 group-hover:scale-105`}
                />
                <span className="block px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.category} · Replaceable demo image
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-3xl">
            <p className="section-kicker">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
              Why Choose Diana Beauty Salon
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article
                key={item.title}
                className="animate-on-scroll rounded-lg border border-border bg-background p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-editorial"
              >
                <div className="mb-6 grid size-12 place-items-center border border-champagne bg-champagne-soft text-primary">
                  <Sparkles className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="section-kicker">Reviews</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
                Customer Reviews
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                See current customer feedback and the latest rating directly on our Google listing.
              </p>
              <div className="mt-8 rounded-lg border border-border bg-background p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Star className="size-6 fill-current text-champagne" aria-hidden="true" />
                  <p className="font-display text-5xl text-primary">4.5 / 5</p>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                   Google Rating · 36 Reviews
                </p>
                <Button asChild variant="outlineLuxury" size="lg" className="mt-6">
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    View Google Reviews <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-on-scroll grid min-h-80 place-items-center rounded-lg border border-border bg-background p-8 text-center shadow-soft">
              <div className="max-w-md">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-surface text-primary">
                  <Star className="size-6 fill-current" aria-hidden="true" />
                </div>
                <p className="mt-6 font-display text-3xl leading-tight text-primary">Verified feedback, where it belongs.</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Review text is not reproduced here without a verified source. Visit Google Maps to read the latest public customer reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:px-8">
          <div className="animate-on-scroll">
            <p className="section-kicker">Academy</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Learn the Art of Beauty
            </h2>
          </div>
          <div className="animate-on-scroll flex flex-col items-start justify-between gap-6 border border-border bg-background p-6 shadow-soft sm:flex-row sm:items-center">
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              Interested in developing professional beauty skills? Explore Diana Beauty Academy and
              discover available beautician training opportunities.
            </p>
            <Button asChild variant="outlineLuxury" size="lg" className="shrink-0">
              <a href={whatsappLink("Assalamualaikum Diana Beauty Salon, I am interested in beauty training opportunities. Please share the available details.")} target="_blank" rel="noreferrer">
                Explore Training
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-luxury py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <p className="section-kicker text-champagne">Appointments</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
              Ready for Your Next Look?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ivory-muted">
               Book your appointment with Diana Beauty Salon for your next beauty or bridal occasion.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="luxury" size="xl">
                <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
                  Book on WhatsApp <CalendarHeart aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={phoneLink}>
                  Call {phoneDisplay} <Phone aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll mb-10 max-w-3xl">
            <p className="section-kicker">Contact & location</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-6xl">
              Visit Diana Beauty Salon
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div className="animate-on-scroll rounded-lg border border-border bg-surface p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-3xl text-primary">Diana Beauty Salon | Latifabad Branch</h3>
              <div className="mt-7 space-y-6 text-muted-foreground">
                <p className="flex gap-3 leading-7">
                  <MapPin className="mt-1 size-5 shrink-0 text-champagne" aria-hidden="true" />
                  <span>
                    Latifabad Unit 8,<br /> Hyderabad, Sindh, Pakistan
                  </span>
                </p>
                <p className="flex gap-3 leading-7">
                  <Phone className="mt-1 size-5 shrink-0 text-champagne" aria-hidden="true" />
                  <a href={phoneLink} className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Button asChild variant="outlineLuxury">
                  <a href={phoneLink}>Call Now</a>
                </Button>
                <Button asChild variant="luxury">
                  <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outlineLuxury">
                  <a href={mapsUrl} target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-on-scroll overflow-hidden rounded-lg border border-border bg-card shadow-editorial">
              <iframe
                title="Diana Beauty Salon location map in Latifabad Unit 8 Hyderabad"
                src="https://www.google.com/maps?q=Latifabad%20Unit%208%2C%20Hyderabad%2C%20Sindh%2C%20Pakistan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />

      {activeLightboxItem ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-scrim p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <div className="relative max-h-full w-full max-w-5xl rounded-lg border border-champagne/30 bg-background p-3 shadow-editorial">
            <img
              src={activeLightboxItem.image}
              alt={activeLightboxItem.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 pt-3">
              <Button
                type="button"
                variant="outlineLuxury"
                size="icon"
                onClick={() =>
                  setLightboxIndex((current) =>
                    current === null ? current : (current - 1 + filteredGallery.length) % filteredGallery.length,
                  )
                }
                aria-label="Previous gallery image"
              >
                <ChevronLeft aria-hidden="true" />
              </Button>
              <p className="truncate text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {activeLightboxItem.title}
              </p>
              <Button
                type="button"
                variant="outlineLuxury"
                size="icon"
                onClick={() =>
                  setLightboxIndex((current) =>
                    current === null ? current : (current + 1) % filteredGallery.length,
                  )
                }
                aria-label="Next gallery image"
              >
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
            <Button
              type="button"
              variant="glass"
              size="icon"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close gallery image viewer"
              className="absolute right-5 top-5"
            >
              <X aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function Navbar({
  menuOpen,
  setMenuOpen,
  activeSection,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeSection: string;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-nav-border bg-nav backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="min-w-0 font-display text-lg uppercase tracking-[0.16em] text-primary sm:text-2xl">
          <span className="block truncate">Diana Beauty Salon</span>
        </a>
        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
              className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeSection === item.href.slice(1) ? "text-primary after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-secondary-foreground" : "text-muted-foreground hover:text-primary"}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="luxury" size="lg">
            <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="luxury" size="sm">
            <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
              Book
            </a>
          </Button>
          <Button
            type="button"
            variant="glass"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>
      {menuOpen ? (
        <div className="border-t border-nav-border bg-nav px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${activeSection === item.href.slice(1) ? "bg-surface text-primary" : "text-muted-foreground hover:bg-surface hover:text-primary"}`}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="luxury" size="lg" className="mt-3">
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-[0.18em]">Diana Beauty Salon</h2>
          <p className="mt-4 text-ivory-muted">Beauty • Bridal • Hair • Skin • Nails</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-ivory-muted">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-champagne">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-ivory-muted">
            <a href={phoneLink} className="block transition hover:text-champagne">
              {phoneDisplay}
            </a>
            <p>Latifabad Unit 8, Hyderabad</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noreferrer" className="transition hover:text-champagne">
                WhatsApp
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="transition hover:text-champagne">
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-nav-border px-4 py-5 text-center text-xs uppercase tracking-[0.16em] text-ivory-muted">
        Diana Beauty Salon | Latifabad Branch
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink(generalMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-floating transition hover:-translate-y-1 hover:bg-whatsapp-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" className="size-6 fill-current" aria-hidden="true">
        <path d="M19.11 17.55c-.17-.09-1.01-.5-1.17-.56-.16-.06-.27-.09-.39.09-.11.17-.44.56-.54.67-.1.11-.2.13-.37.04-.17-.09-.72-.26-1.36-.84-.5-.45-.84-1-.94-1.17-.1-.17-.01-.26.08-.35.08-.08.17-.2.26-.3.09-.1.11-.17.17-.28.06-.11.03-.22-.01-.3-.04-.09-.39-.93-.53-1.27-.14-.34-.28-.29-.39-.3h-.33c-.11 0-.3.04-.46.22-.16.17-.6.59-.6 1.44s.62 1.67.71 1.79c.09.11 1.22 1.86 2.95 2.61.41.18.73.28.98.36.41.13.79.11 1.09.07.33-.05 1.01-.41 1.15-.81.14-.4.14-.74.1-.81-.04-.07-.16-.11-.33-.2m-3.08 7.05h-.01a8.46 8.46 0 0 1-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.47 8.47 0 1 1 7.18 3.96m7.21-15.68A10.13 10.13 0 0 0 16.02 5C10.42 5 5.87 9.55 5.87 15.15c0 1.79.47 3.54 1.36 5.08L5.79 25.5l5.39-1.42a10.14 10.14 0 0 0 4.84 1.23h.01c5.59 0 10.15-4.55 10.15-10.15 0-2.71-1.04-5.26-2.94-7.18" />
      </svg>
    </a>
  );
}
