import Party1 from "../../assets/party1.png";
import Party2 from "../../assets/party2.png";
import Party3 from "../../assets/party3.png";
import Party4 from "../../assets/party4.png";
import Party5 from "../../assets/party5.png";
import Meeting2 from "../../assets/meeting2.png";
import Meeting3 from "../../assets/meeting3.png";
import Meeting4 from "../../assets/meeting4.png";
import Meeting5 from "../../assets/meeting5.png";
import Sport1 from "../../assets/sport1.png";
import Sport2 from "../../assets/sport2.png";
import Sport3 from "../../assets/sport3.png";
import Sport4 from "../../assets/sport4.png";
import Sport5 from "../../assets/sport5.png";
import Wedding1 from "../../assets/wedding1.png";
import Wedding2 from "../../assets/wedding2.png";
import Wedding3 from "../../assets/wedding3.png";
import Wedding4 from "../../assets/wedding4.png";
import Wedding5 from "../../assets/wedding5.png";

const allVenues = [
  {
    id: 1,
    title: "Enchanted Garden Lounge",
    handle: "Bugojno",
    image: Party1,
    description1: "Capacity",
    description2: "Nestled in the heart of the city, this whimsical venue features lush greenery, twinkling fairy lights, and a charming gazebo, creating a magical atmosphere for any celebration.",
    price: 100,
    guests: 40,
    href: "/partyonedescription"
  },
  {
    id: 2,
    title: "Skyline Rooftop Terrace",
    handle: "Sarajevo",
    image: Party2,
    description1: "Capacity",
    description2: "Elevate your event at this chic rooftop venue boasting panoramic views of the city skyline. With stylish decor and a sophisticated ambiance, it's the perfect setting for upscale gatherings and unforgettable soirées.",
    price: 50,
    guests: 90,
    href: "/party-twe"
  },
  {
    id: 3,
    title: "Neon Nights Dance Club",
    handle: "Sarajevo",
    image: Party3,
    description1: "Capacity",
    description2: " Step into a world of vibrant energy and pulsating beats at this trendy dance club. With neon accents, a state-of-the-art sound system, and a spacious dance floor, it's the ultimate destination for those seeking a lively and dynamic party experience.",
    price: 30,
    guests: 150

  },
  {
    id: 4,
    title: "Skyline Loft at Sunset Tower",
    handle: "Sarajevo",
    image: Party4,
    description1: "Capacity",
    description2: "Elevate your event at Sunset Tower's Skyline Loft, perched high above the city with breathtaking sunset views. This chic and contemporary venue, with its open layout and stylish decor, is ideal for networking events, cocktail parties, and upscale receptions, providing an unforgettable experience for attendees.",
    price: 60,
    guests:20
  },
  {
    id: 5,
    title: "Cozy Fireside Lounge ",
    handle: "Mostar",
    image: Party5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },
  {
    id: 7,
    title: "Skyline Rooftop Terrace",
    handle: "Sarajevo=",
    image: Meeting2,
    description1: "Capacity",
    description2: "Elevate your event at this chic rooftop venue boasting panoramic views of the city skyline. With stylish decor and a sophisticated ambiance, it's the perfect setting for upscale gatherings and unforgettable soirées.",
    price: 50,
    guests: 90,
  },
  {
    id: 8,
    title: "Neon Nights Dance Club",
    handle: "Sarajevo",
    image: Meeting3,
    description1: "Capacity",
    description2: " Step into a world of vibrant energy and pulsating beats at this trendy dance club. With neon accents, a state-of-the-art sound system, and a spacious dance floor, it's the ultimate destination for those seeking a lively and dynamic party experience.",
    price: 30,
    guests: 150
  },
  {
    id: 9,
    title: "Skyline Loft at Sunset Tower",
    handle: "Vesela",
    image: Meeting4,
    description1: "Capacity",
    description2: "Elevate your event at Sunset Tower's Skyline Loft, perched high above the city with breathtaking sunset views. This chic and contemporary venue, with its open layout and stylish decor, is ideal for networking events, cocktail parties, and upscale receptions, providing an unforgettable experience for attendees.",
    price: 60,
    guests:20
  },
  {
    id: 10,
    title: "Cozy Fireside Lounge ",
    handle: "Sarajevo",
    image: Meeting5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },
  {
    id: 11,
    title: "Stadium of Champions",
    handle: "Mostar",
    image: Sport1,
    description1: "Capacity",
    description2: "Immerse yourself in the roar of the crowd at this state-of-the-art stadium, equipped with cutting-edge facilities and a colossal seating capacity. Whether for a thrilling football match or an electrifying concert, it's the ultimate venue for experiencing the intensity of live sports and entertainment.",
    price: 100,
    guests: 40
  },
  {
    id: 12,
    title: "Olympic Aquatics Center",
    handle: "Vesela",
    image: Sport2,
    description1: "Capacity",
    description2: "Dive into world-class aquatic events at this Olympic-standard venue, featuring sparkling pools and top-notch facilities. With a legacy of hosting prestigious competitions, it provides the perfect stage for swimmers, divers, and water sports enthusiasts to showcase their skills.",
    price: 50,
    guests: 90,
  },
  {
    id: 13,
    title: "Motorsport Arena",
    handle: "Sarajevo",
    image: Sport3,
    description1: "Capacity",
    description2: "Feel the adrenaline rush at this high-speed motorsport arena, where roaring engines and screeching tires create an atmosphere of pure excitement. Whether for a heart-pounding race or a gripping stunt show, this venue offers an immersive experience for fans of fast-paced action.",
    price: 30,
    guests: 150
  },
  {
    id: 14,
    title: "Basketball Hub",
    handle: "Sarajevo",
    image: Sport4,
    description1: "Capacity",
    description2: "Step into a storybook setting at this meticulously preserved manor house, where centuries-old architecture and manicured gardens provide a romantic atmosphere. Perfect for those seeking a touch of vintage charm, this venue offers an elegant backdrop for a classic wedding.",
    price: 60,
    guests:20
  },
  {
    id: 15,
    title: "Tennis Grand Slam Venue",
    handle: "Sarajevo",
    image: Sport5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },
  {
    id: 16,
    title: "The Garden Oasis",
    handle: "Sarajevo",
    image: Wedding1,
    description1: "Capacity",
    description2: "Exchange vows surrounded by blooming flowers and lush greenery in this enchanting garden venue. With its romantic pergola and tranquil setting, it's the ideal location for a fairy-tale wedding and timeless photographs.",
    price: 100,
    guests: 40
  },
  {
    id: 17,
    title: "Seaside Elegance Resort",
    handle: "Sarajevo",
    image: Wedding2,
    description1: "Capacity",
    description2: "Celebrate your special day with the sound of waves as your backdrop at this coastal resort. Offering a picturesque beach ceremony and a sophisticated reception space, this venue combines waterfront charm with refined luxury.",
    price: 50,
    guests: 90,
  },
  {
    id: 18,
    title: "Vineyard Romance Estate",
    handle: "Sarajevo",
    image: Wedding3,
    description1: "Capacity",
    description2: " Step into a world of vibrant energy and pulsating beats at this trendy dance club. With neon accents, a state-of-the-art sound system, and a spacious dance floor, it's the ultimate destination for those seeking a lively and dynamic party experience.",
    price: 30,
    guests: 150
  },
  {
    id: 19,
    title: "Historic Manor House",
    handle: "Bugojno",
    image: Wedding4,
    description1: "Capacity",
    description2: "Step into a storybook setting at this meticulously preserved manor house, where centuries-old architecture and manicured gardens provide a romantic atmosphere. Perfect for those seeking a touch of vintage charm, this venue offers an elegant backdrop for a classic wedding.",
    price: 60,
    guests:20
  },
  {
    id: 20,
    title: "Modern Cityscape Loft ",
    handle: "Sarajevo",
    image: Wedding5,
    description1: "80",
    description2: "Escape the hustle and bustle at this intimate fireside lounge, where plush sofas, warm hues, and a crackling fireplace create a cozy retreat. Ideal for smaller gatherings or relaxed celebrations, it exudes a comfortable and inviting vibe.",
    price: 100,
    guests:80,
    location:"Sarajevo",
  },
];

export default allVenues;