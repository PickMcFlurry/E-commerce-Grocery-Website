const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("product");

function setproductdesc(img, name, description, price, review) {
  document.getElementById("product-image").src = img;
  document.getElementById("product-name").innerText = name;
  document.getElementById("product-description").innerText = description;
  document.getElementById("product-price").innerText = price;
  document.getElementById("product-review").innerText = review;
}
if (productName === "cauliflower") {
  setproductdesc(
    "/images/cauli.png",
    "Cauliflower",
    "Cauliflower is a versatile cruciferous vegetable known for its mild flavor and ability to be used in various dishes, from creamy soups to low-carb pizza crusts.",
    "Rs.100(1 KG)",
    "(23)"
  );
} else if (productName === "chili") {
  setproductdesc(
    "/images/chili.png",
    "Red Chilli",
    "Red chili is a spicy pepper commonly used in cooking to add heat and flavor to dishes around the world.",
    "Rs.100(1 KG)",
    "(47)"
  );
} else if (productName === "lady-finger") {
  setproductdesc(
    "/images/lady finger.png",
    "Lady Finger",
    "Ladyfinger, also known as okra, is a green, elongated vegetable with a unique texture often used in soups, stews, and stir-fries for its mild flavor and thickening properties.",
    "Rs.70(1 KG)",
    "(20)"
  );
} else if (productName === "potato") {
  setproductdesc(
    "/images/potato.png",
    "Potato",
    "Potato is a starchy tuberous vegetable widely used in various cuisines, prized for its versatility and ability to be prepared in countless ways, from mashed potatoes to crispy fries.",
    "Rs.60(1 KG)",
    "(100)"
  );
} else if (productName === "apple") {
  setproductdesc(
    "/images/apple.png",
    "Apple",
    "Apples are crisp, juicy fruits with a variety of flavors, ranging from sweet to tart, enjoyed raw or used in countless culinary applications.",
    "Rs.320(1 KG)",
    "(50)"
  );
} else if (productName === "tomato") {
  setproductdesc(
    "/images/tomato.png",
    "Tomato",
    "Tomato is a juicy, red fruit commonly used as a vegetable in cooking, prized for its vibrant flavor and versatility in dishes ranging from salads to sauces.",
    "Rs.50(1 KG)",
    "(50)"
  );
} else if (productName === "carrots") {
  setproductdesc(
    "/images/carrots.png",
    "Carrots",
    "Carrots are crunchy, vibrant root vegetables known for their sweet flavor and high beta-carotene content, often used in salads, soups, and as a healthy snack.",
    "Rs.80(1 KG)",
    "(50)"
  );
} else if (productName === "cabbage") {
  setproductdesc(
    "/images/cabbage.png",
    "Cabbage",
    "Cabbage is a versatile leafy vegetable with a mild, slightly sweet taste, used in salads, slaws, stir-fries, and as a key ingredient in many cuisines worldwide.",
    "Rs.50(1 KG)",
    "(50)"
  );
} else if (productName === "mango") {
  setproductdesc(
    "/images/mango.png",
    "Mango",
    "Mango is a tropical fruit prized for its sweet, juicy flesh and distinct flavor, often enjoyed fresh, in smoothies, salads, or as a topping for desserts.",
    "Rs.150(1 KG)",
    "(50)"
  );
} else if (productName === "jam") {
  setproductdesc(
    "/images/jam.png",
    "Strawberry Jam",
    "Strawberry jam is a sweet and fruity spread made from fresh strawberries, sugar, and pectin, often enjoyed on toast, pastries, or as a topping for desserts.",
    "Rs.195(340 ml)",
    "(63)"
  );
} else if (productName === "ketchup") {
  setproductdesc(
    "/images/ketchup.png",
    "Tomato Ketchup",
    "Tomato ketchup is a popular condiment made from tomatoes, vinegar, sugar, and spices, used as a versatile sauce for enhancing the flavor of various dishes, from burgers to fries.",
    "Rs.250(397 ml)",
    "(55)"
  );
} else if (productName === "mayo") {
  setproductdesc(
    "/images/mayo.png",
    "Mayonnaise",
    "Mayonnaise is a creamy and tangy condiment made from egg yolks, oil, and vinegar or lemon juice, used as a spread, dressing, or base for sauces in various dishes, salads, and sandwiches.",
    "Rs.365(295 ml)",
    "(96)"
  );
} else if (productName === "coke") {
  setproductdesc(
    "/images/coke.png",
    "Coke",
    "Coke, short for Coca-Cola, is a carbonated soft drink known for its signature sweet and fizzy taste, enjoyed worldwide as a refreshing beverage.",
    "Rs.200(355 ml)",
    "(126)"
  );
} else if (productName === "redbull") {
  setproductdesc(
    "/images/redbull.png",
    "Redbull",
    "Red Bull is a popular energy drink known for its caffeine content and stimulating effects, often consumed to increase alertness and energy levels.",
    "Rs.280(250 ml)",
    "(68)"
  );
} else if (productName === "drpepper") {
  setproductdesc(
    "/images/dr.pepper.png",
    "Dr pepper",
    "Dr Pepper is a unique soda with a blend of 23 flavors, offering a distinct taste that combines fruity, spicy, and cola notes, enjoyed as a refreshing beverage.",
    "Rs.400(355 ml)",
    "(43)"
  );
} else if (productName === "gatorade") {
  setproductdesc(
    "/images/gatorade.png",
    "Gatorade",
    "Gatorade is a sports drink designed to rehydrate and replenish electrolytes lost during physical activity, known for its refreshing taste and ability to help athletes maintain performance and recover.",
    "Rs.200(591 ml)",
    "(100)"
  );
} else if (productName === "prime") {
  setproductdesc(
    "/images/prime.png",
    "Prime ",
    "Prime Blue Raspberry is a flavored hydration drink known for its bold, sweet, and artificial blue raspberry taste. It's marketed as a sugar-free, electrolyte-enhanced beverage containing B vitamins and antioxidants, aiming to quench thirst and replenish electrolytes while providing a fruity flavor.",
    "Rs.300(500 ml)",
    "(27)"
  );
} else if (productName === "powerade") {
  setproductdesc(
    "/images/powerade.png",
    "Powerade",
    "Powerade is a sports drink similar to Gatorade, formulated to replenish electrolytes and provide hydration during exercise, often chosen for its refreshing taste and ability to support athletic performance and recovery.",
    "Rs.230(591 ml)",
    "(57)"
  );
} else if (productName === "apple cider") {
  setproductdesc(
    "/images/apple cider.png",
    "Apple cider juice",
    "Somersby Apple Cider is a popular alcoholic beverage made from fermented apple juice, known for its crisp and refreshing taste with a hint of sweetness, enjoyed as a refreshing alternative to beer or wine.",
    "Rs.200(250 ml)",
    "(47)"
  );
} else if (productName === "soju") {
  setproductdesc(
    "/images/soju.png",
    "Korean Soju",
    "Korean soju is a clear, distilled alcoholic beverage typically made from rice, barley, or wheat, known for its smooth taste and high alcohol content, often enjoyed in social settings as a popular traditional Korean drink.",
    "Rs.170(300 ml)",
    "(77)"
  );
} else if (productName === "coolberg") {
  setproductdesc(
    "/images/coolberg.png",
    "Coolberg Hawaii",
    "Coolberg is a non-alcoholic beverage brand known for its range of refreshing and flavorful malt-based drinks, offering a variety of fruity and classic flavors, enjoyed as a refreshing alternative to traditional sodas.",
    "Rs.185(330 ml)",
    "(88)"
  );
} else if (productName === "feastable") {
  setproductdesc(
    "/images/feastables.png",
    "Feastable Chocolate Bar",
    "A nutritious snack packed with wholesome ingredients to satisfy your hunger and fuel your adventures.",
    "Rs.340",
    "(107)"
  );
} else if (productName === "ranch") {
  setproductdesc(
    "/images/ranch.png",
    "Ranch",
    "A ranch is a large farm, typically used for raising livestock such as cattle or sheep, often spanning vast areas of land.",
    "Rs.530(267 ml)",
    "(47)"
  );
} else if (productName === "soysauce") {
  setproductdesc(
    "/images/soysauce.png",
    "Soysauce",
    "Soy sauce is a savory, umami-rich condiment made from fermented soybeans, wheat, salt, and water, widely used in Asian cuisine to add depth of flavor to dishes.",
    "Rs.400(150 ml)",
    "(47)"
  );
} else if (productName === "tobasco") {
  setproductdesc(
    "/images/tobasco.png",
    "Tobasco",
    "Tabasco hot sauce is a fiery condiment made from Tabasco peppers, vinegar, and salt, renowned for its spicy kick and tangy flavor, perfect for adding heat to any dish.",
    "Rs.400(60 ml)",
    "(47)"
  );
} else if (productName === "jackfruit") {
  setproductdesc(
    "/images/jackfruit.png",
    "Jackfruit",
    "Durian is a tropical fruit known for its distinctive odor, creamy texture, and sweet, custard-like flavor.",
    "Rs.300(1 KG)",
    "(20)"
  );
} else if (productName === "dragonfruit") {
  setproductdesc(
    "/images/dragon fruit.png",
    "Dragon Fruit",
    "Dragon fruit, also known as pitaya, is a tropical fruit with a vibrant pink or yellow skin and sweet, mildly flavored flesh speckled with tiny black seeds.",
    "Rs.980(1 KG)",
    "(120)"
  );
} else if (productName === "strawberry") {
  setproductdesc(
    "/images/strawberry.png",
    "Strawberry",
    "Strawberries are small, red, juicy fruits known for their sweet flavor and fragrant aroma, commonly used in various culinary dishes and desserts.",
    "Rs.800(1 KG)",
    "(80)"
  );
} else if (productName === "avocado") {
  setproductdesc(
    "/images/avocado.png",
    "Avocado",
    "Avocado is a creamy fruit with a buttery texture, prized for its rich taste and versatility in culinary applications, ranging from savory dishes like guacamole to smoothies and salads.",
    "Rs.300(1 KG)",
    "(20)"
  );
} else if (productName === "kiwi") {
  setproductdesc(
    "/images/kiwi.png",
    "Kiwi",
    "Kiwi is a small, oval-shaped fruit with fuzzy brown skin and vibrant green flesh speckled with tiny black seeds. It has a sweet and tangy flavor, reminiscent of a combination of strawberries and melons, and is rich in vitamin C and other nutrients.",
    "Rs.550(1 KG)",
    "(180)"
  );
} else if (productName === "brocolli") {
  setproductdesc(
    "/images/brocolli.png",
    "Brocolli",
    "Broccoli is a nutrient-rich vegetable with dense, green heads and stalks, prized for its health benefits and versatility in cooking.",
    "Rs.200(1 KG)",
    "(160)"
  );
} else if (productName === "doritos") {
  setproductdesc(
    "/images/doritos.png",
    "Doritos",
    "Doritos are a popular brand of flavored tortilla chips known for their bold and zesty taste, available in various flavors and enjoyed as a snack worldwide.",
    "Rs.240(1 packet)",
    "(20)"
  );
} else if (productName === "cheetos") {
  setproductdesc(
    "/images/cheetos.png",
    "Cheetos",
    "Cheetos are a brand of cheese-flavored puffed cornmeal snacks, known for their crunchy texture and cheesy taste, enjoyed by snack enthusiasts worldwide.",
    "Rs.460(1 packet)",
    "(122)"
  );
} else if (productName === "cabbage") {
  setproductdesc(
    "/images/cabbage.png",
    "Cabbage",
    "Cabbage is a leafy green or purple vegetable known for its versatility in culinary applications, offering a crunchy texture and mild flavor, often used raw in salads, fermented in sauerkraut, or cooked in various dishes.",
    "Rs.40(1 KG)",
    "(65)"
  );
} else if (productName === "honey") {
  setproductdesc(
    "/images/honey.png",
    "Australian Honey",
    "Australian honey is renowned for its diverse flavors, textures, and unique floral profiles, sourced from native eucalyptus, wildflowers, and other native flora across the country's vast landscapes, offering a rich and distinct taste loved by honey enthusiasts worldwide.",
    "Rs.1200(350 ml)",
    "(156)"
  );
} else if (productName === "vinegar") {
  setproductdesc(
    "/images/vinegar.png",
    "Organic Rice vinegar",
    "Organic rice vinegar is a type of vinegar made from fermented rice, offering a milder and slightly sweet flavor compared to other vinegars. It's often used in Asian cuisine for pickling, salad dressings, and marinades, and it's prized for its natural and health-conscious production process, which avoids synthetic chemicals and pesticides.",
    "Rs.350(350 ml)",
    "(70)"
  );
} else if (productName === "hotsauce") {
  setproductdesc(
    "/images/hotsauce.png",
    "Reaper Hot sauce",
    "Reaper hot sauce is a fiery condiment made from Carolina Reaper peppers, one of the hottest chili peppers in the world. Known for its intense heat and fruity undertones, this sauce is not for the faint of heart and is often used sparingly to add a powerful kick to dishes.",
    "Rs.1400(147 ml)",
    "(120)"
  );
} else {
  // Product doesnot exist
  document.getElementById("productName").innerText = "Product doesnt Exist";
}
