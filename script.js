var nameArray = new Array("Fido", "Max", "Lucky", "Bruno", "Spot", "Penny", "Luna", "Charlie", "Frank", "Milo", "Rico", "Daisy", "Champ", "Shadow", "Sassie", "Jazzie", "Bella", "Midnight", "Fluffy", "Reese", "Goose", "Cosmo", "Gunner", "Buddy", "Sadie", "Lulu", "Lola", "Lucy", "Maggie", "Coco", "shelby", "Toby", "Rocky", "Spike", "Bennie", "Bingo", "Blizzard", "Blue", "Bonbon", "Boots", "Bowie", "Buttercup", "Buttons", "Chance", "Chandler", "Checkers", "Colby", "Comet", "Dobby", "Donut", "Nugget", "Eddie", "Hank", "Ferguson", "Flash", "French Fry", "Pumpkin", "Ghost", "Gumdrop", "Harley", "Marley", "Gus", "Honey", "Albert", "Izzy", "Joey", "Kona", "Mack", "Marshmellow", "Squish", "Gary", "Memphis", "Mittens", "Mojo Jojo", "Mimi", "Momo", "Muffin", "Nova", "Oliver", "Pancake", "Parker", "Patches", "Pepsi", "Pepper", "Lafeyette", "Lorenzo", "Pickles", "Pip", "Pirate", "Lance", "Porkchop", "Quinn", "Clyde", "Raven", "Remy", "Riley", "Rory", "Sage", "Salsa", "Scout", "Shiloh", "Smokey", "Snickerdoodle", "Socks", "Stevie", "Sunny", "Tiger", "Tiny", "Terry", "Tofu", "Toffee", "Waffles", "Winter", "Hunter", "Wonton", "Wiggles", "Zoey");

function nameGenerator() {
    document.getElementById('dogNameGenerated').innerHTML = 
      nameArray[Math.floor(Math.random() * nameArray.length)];
  };