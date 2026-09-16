/*
  FAMUTECH — SITE CONTENT
  ------------------------------------------------------------
  This file holds everything you're likely to update often:
  solar package prices, testimonials, gallery captions and
  contact numbers. Don't edit this file by hand — use
  admin.html to change these values and download a fresh copy
  of this file, then upload it over this one on your host.
  ------------------------------------------------------------
*/
const SITE_CONTENT = {
  contact: {
    phone: "+260777378959",
    whatsappNumber: "260777378959"
  },
  packages: [
    {
      name: "Starter Home",
      sub: "Lights, router, TV, phone charging",
      price: "K 15,500",
      priceSuffix: "+",
      features: [
        "Sumry 1kVA/12V inverter",
        "Polaris 24V 100Ah lithium battery",
        "2 x JA Solar 550W panels",
        "Mounting kit, protection kit & labor included"
      ],
      featured: false
    },
    {
      name: "Family Home",
      sub: "Lights, fridge, TV, router, small appliances",
      price: "K 30,000",
      priceSuffix: "+",
      features: [
        "Sumry 3.2kVA/24V inverter",
        "Polaris 48V 100Ah lithium battery",
        "4 x JA Solar 650W panels",
        "Mounting kit, protection kit & labor included",
        "1-year service check-up"
      ],
      featured: true,
      badge: "Most popular"
    },
    {
      name: "Business / Office",
      sub: "Higher load, extended backup hours",
      price: "K 69,000",
      priceSuffix: "+",
      features: [
        "SRNE 10kVA/48V inverter",
        "Polaris 48V 200Ah lithium battery",
        "8 x JA Solar 650W panels",
        "Mounting kit, protection kit & labor included",
        "Priority support"
      ],
      featured: false
    }
  ],
  gallery: [
    { label: "Rooftop solar install" },
    { label: "Battery & inverter room" },
    { label: "DB board upgrade" },
    { label: "Commercial site wiring" },
    { label: "Panel array, Chelston" },
    { label: "Backup power setup" },
    { label: "Home rewiring project" },
    { label: "Site inspection" }
  ],
  testimonials: [
    {
      quote: "Placeholder testimonial — swap in a real customer quote about the solar installation and how it's held up.",
      name: "Customer Name",
      location: "Kabulonga, Lusaka"
    },
    {
      quote: "Placeholder testimonial — swap in a real customer quote about response time or workmanship.",
      name: "Customer Name",
      location: "Chelston, Lusaka"
    },
    {
      quote: "Placeholder testimonial — swap in a real customer quote about pricing or after-sales support.",
      name: "Customer Name",
      location: "Woodlands, Lusaka"
    }
  ]
};
