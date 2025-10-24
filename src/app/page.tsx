"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Coffee, Globe, HelpCircle, Mail, MessageCircle, Package, Sparkles, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bean Bliss"
          button={{
            text: "Order Now",
            href: "https://order.beanbliss.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Artisan Coffee, Perfect Every Time"
          description="Experience the perfect blend of flavor and quality with our freshly roasted coffee beans, expertly crafted by passionate baristas."
          tag="Fresh Daily"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Coffee",
              href: "https://order.beanbliss.com"
            },
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Coffee Story"
          description={[
            "Founded in 2018, Bean Bliss started as a dream to bring exceptional coffee experiences to our community.",
            "We source our beans directly from sustainable farms and roast them in small batches to ensure maximum freshness and flavor."
          ]}
          buttons={[
            {
              text: "Visit Our Shop",
              href: "https://maps.google.com/beanbliss"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Coffee Selection"
          description="Discover our signature coffee blends, carefully crafted to deliver exceptional taste in every cup."
          tag="Bestsellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "House Blend Espresso",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "House blend espresso coffee"
            },
            {
              id: "2",
              name: "Signature Latte",
              price: "$5.50",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Signature latte with art"
            },
            {
              id: "3",
              name: "Cold Brew Classic",
              price: "$4.75",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Coffee Subscription Plans"
          description="Get fresh coffee delivered to your door with our flexible subscription options."
          tag="Save More"
          tagIcon={Package}
          plans={[
            {
              id: "basic",
              price: "$24.99/mo",
              name: "Coffee Explorer",
              buttons: [
                {
                  text: "Start Trial",
                  href: "https://subscribe.beanbliss.com/basic"
                },
                {
                  text: "Learn More",
                  href: "subscription"
                }
              ],
              features: [
                "2 bags of coffee monthly",
                "Free shipping",
                "Access to exclusive blends",
                "Brewing tips included"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$39.99/mo",
              name: "Coffee Connoisseur",
              buttons: [
                {
                  text: "Start Trial",
                  href: "https://subscribe.beanbliss.com/premium"
                },
                {
                  text: "Learn More",
                  href: "subscription"
                }
              ],
              features: [
                "4 bags of coffee monthly",
                "Free priority shipping",
                "Premium single-origin options",
                "Personal brewing consultation"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Coffee Impact"
          description="Numbers that showcase our commitment to quality coffee and happy customers."
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "cups served",
              description: "Happy customers enjoying our coffee daily",
              icon: Coffee
            },
            {
              id: "2",
              value: "15",
              title: "coffee origins",
              description: "Countries we source our premium beans from",
              icon: Globe
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who trust Bean Bliss for their daily brew."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7793131/pexels-photo-7793131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Developer",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34164498/pexels-photo-34164498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike Chen"
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Designer",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7580975/pexels-photo-7580975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Lovers Everywhere"
          description="Join thousands of satisfied customers who choose quality coffee from Bean Bliss."
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7580962/pexels-photo-7580962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee, subscriptions, and services."
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source our beans directly from sustainable farms and roast them in small batches to ensure maximum freshness and flavor. Each batch is carefully crafted by our expert roasters."
            },
            {
              id: "2",
              title: "How often do you roast your coffee?",
              content: "We roast fresh batches multiple times per week to ensure you always receive the freshest coffee possible. All orders are fulfilled with coffee roasted within 7 days."
            },
            {
              id: "3",
              title: "Do you offer decaf options?",
              content: "Yes! We offer several decaffeinated options using the Swiss Water Process, which removes caffeine naturally without chemicals while preserving the coffee's original flavor."
            },
            {
              id: "4",
              title: "Can I modify my subscription?",
              content: "Absolutely! You can modify, pause, or cancel your subscription at any time through your account dashboard or by contacting our customer service team."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Get Coffee Updates & Exclusive Offers"
          description="Subscribe to our newsletter for the latest coffee news, brewing tips, and special discounts delivered to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails from Bean Bliss. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bean Bliss"
          columns={[
            {
              items: [
                {
                  label: "Our Menu",
                  href: "product"
                },
                {
                  label: "Subscriptions",
                  href: "pricing"
                },
                {
                  label: "Gift Cards",
                  href: "https://gift.beanbliss.com"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Locations",
                  href: "https://maps.google.com/beanbliss"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}