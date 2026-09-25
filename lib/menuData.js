// Structured menu data, transcribed directly from photos of the
// in-restaurant printed menu (provided by the client, Aug 2026). This
// supersedes the earlier Instagram/review-sourced list.
//
// Keeping this as plain structured data (rather than hardcoded markup) is
// deliberate groundwork for the POS integration mentioned for a future
// phase — this is the shape a menu/pricing API would eventually replace.
//
// Bakery items are listed without prices since the printed dessert page
// doesn't post them — confirm current pricing with the owner if you want
// it shown.

export const menu = [
  {
    id: "breakfast",
    name: "Breakfast",
    priceTag: "Served all day · $2 – $16",
    icon: "clock",
    defaultOpen: true,
    groups: [
      {
        label: "Sweet",
        items: [
          {
            name: "Pancakes (2)",
            price: "$14.00",
            description:
              "Served with your choice of eggs, plus 2 bacon strips or sausage links.",
          },
          {
            name: "French Toast (2)",
            price: "$14.00",
            description:
              "Served with your choice of eggs, plus 2 bacon strips or sausage links.",
          },
          {
            name: "Waffle",
            price: "$15.00",
            description:
              "Served with your choice of eggs, plus 2 bacon strips or sausage links.",
          },
          { name: "Coffee", price: "$2.00", compact: true },
          {
            name: "Juice",
            price: "$2.00",
            description: "Orange, apple, or cranberry.",
          },
        ],
      },
      {
        label: "Savory",
        items: [
          {
            name: "Breakfast Bun",
            price: "$8.00",
            description:
              "Stuffed with bacon, eggs, potatoes, peppers, and mozzarella cheese.",
          },
          {
            name: "Biscuits and Gravy",
            price: "$15.00",
            description:
              "Fluffy biscuits topped with rich country sausage gravy, served with eggs.",
          },
          {
            name: "Chilaquiles",
            price: "$15.00",
            description:
              "Fresh tortilla chips simmered in savory red sauce, topped with scrambled eggs, sour cream, and cheese. Carne asada add-on +$5.00.",
          },
          {
            name: "Chicken Fried Steak",
            price: "$16.00",
            description: "Served with 2 scrambled eggs and hashbrowns.",
          },
          {
            name: "Breakfast Burrito",
            price: "$8.00",
            description:
              "Made to order with potatoes, eggs, bacon, sausage, chorizo, and mozzarella cheese.",
          },
        ],
      },
      {
        label: "Kids Breakfast",
        items: [
          {
            name: "Mini Pancake Stack",
            price: "$6.50",
            description:
              "3 small pancakes, one egg, and choice of one bacon or one sausage link.",
          },
          {
            name: "Strawberry French Toast",
            price: "$6.00",
            description: "Served with one slice of bacon or sausage.",
          },
          {
            name: "Heart Waffle",
            price: "$6.00",
            description: "Served with one slice of bacon or sausage.",
          },
        ],
      },
      {
        label: "Side Orders",
        items: [
          { name: "Hashbrowns", price: "$3.00", compact: true },
          { name: "Toast", price: "$2.00", compact: true },
          { name: "Gravy", price: "$2.00", compact: true },
          { name: "2 Bacon", price: "$2.00", compact: true },
          { name: "2 Sausage Links", price: "$2.00", compact: true },
          { name: "2 Eggs", price: "$3.00", compact: true },
          { name: "Seasonal Fruit", price: "$3.00", compact: true },
        ],
      },
    ],
  },
  {
    id: "lunch-dinner",
    name: "Lunch & Dinner",
    priceTag: "$6 – $18",
    icon: "chile",
    groups: [
      {
        label: "Sandwiches",
        note: "Includes salad of the day.",
        items: [
          {
            name: "French Dip",
            price: "$15.00",
            description:
              "Roast beef with sautéed mushrooms, onions, and Swiss cheese on a hoagie bun, served with au jus.",
          },
          {
            name: "BBQ Pork",
            price: "$15.00",
            description:
              "Tender pulled pork smothered in BBQ sauce, served on a toasted bun.",
          },
          {
            name: "BLT",
            price: "$14.00",
            description:
              "Crispy bacon, fresh lettuce, and sliced tomatoes on toasted bread, served with mayo.",
          },
          {
            name: "Club",
            price: "$14.00",
            description:
              "Turkey, ham, bacon, lettuce, tomato, and mayo layered on toasted bread.",
          },
          {
            name: "Grilled Ham and Cheese",
            price: "$14.00",
            description:
              "Sliced ham and melted cheese grilled between buttery toasted bread until golden and crisp.",
          },
        ],
      },
      {
        label: "Gaytán's Specialties",
        items: [
          {
            name: "Quesabirria Tacos (2)",
            price: "$15.00",
            description:
              "Crispy corn tortillas filled with slow-cooked shredded beef and melted cheese, served with beef consommé for dipping. Includes rice and beans.",
          },
          {
            name: "Pupusas (3)",
            price: "$15.00",
            description:
              "Thick handmade corn tortillas stuffed with cheese and pork filling, served with curtido and salsa.",
          },
          {
            name: "Chicken Fried Steak",
            price: "$18.00",
            description:
              "Breaded beef steak, fried golden brown and topped with country gravy, served with mashed potatoes and corn.",
          },
          {
            name: "Cheeseburger",
            price: "$15.00",
            description:
              "Juicy grilled beef patty topped with melted cheese on a toasted bun with lettuce, tomato, onion, and pickles. Served with salad of the day.",
          },
          {
            name: "Salad Bar",
            price: "$11.00 – $15.00",
            description:
              "Fresh salad bar with crisp greens, fresh veggies, homemade salads, and assorted toppings. Small bowl $11.00, large bowl $15.00.",
          },
        ],
      },
      {
        label: "For the Kids",
        items: [
          {
            name: "Kids Mac & Cheese",
            price: "$6.00",
            description:
              "Annie's Mac and Cheese — creamy macaroni pasta in a rich cheddar cheese sauce, includes a side of seasonal fruit.",
          },
        ],
      },
    ],
    callout: {
      title: "Gaytán's Daily Specials",
      items: [
        "Soup of the week",
        "Daily special plate",
        "Ask your server for today's feature",
      ],
    },
  },
  {
    id: "bakery-dessert",
    name: "Bakery & Dessert",
    priceTag: "Ask in-house for today's selection",
    icon: "pot",
    description:
      "Fresh cinnamon rolls, homemade peach cobbler, and daily dessert selections available in our dessert fridge — a rotating case of flan, cake, and other fresh-baked treats. Cinnamon rolls are the single most-mentioned item in the kitchen's Google reviews.",
    // TODO: no per-item bakery pricing has ever been published by the
    // business — confirm with the owner if she wants specific prices
    // listed here instead of the "ask in-house" price tag.
  },
];
