var obj = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]
  const ruangkerja = [];
  const elektronik = [];
  const perabotan = [];
  const dibeli = [];
  const coklat = [];
  const awal = new Date("2020-01-16 00:00:00");
  const akhir = new Date("2020-01-16 23:59:59");
  
  for (var i = 0; i < obj.length; i++) {
      // item in meeting room
      if( obj[i].placement.name == 'Meeting Room')
          ruangkerja.push(obj[i].inventory_id+' '+obj[i].name)
      // item electronic type
      if( obj[i].type == 'electronic')
          elektronik.push(obj[i].inventory_id+' '+obj[i].name)
      // item furniture type
      if( obj[i].type == 'furniture')
          perabotan.push(obj[i].inventory_id+' '+obj[i].name)
      // item purchased at 16 jan 2020
      const check = new Date(obj[i].purchased_at * 1000);
      if(check >= awal && check <= akhir){
          dibeli.push(obj[i].inventory_id+' '+obj[i].name)
      }
      // item with brown tag
      if( obj[i].tags.includes('brown'))
          coklat.push(obj[i].inventory_id+' '+obj[i].name)
  }
  
  console.log("1. Find items in Meeting Room.")
  console.log(ruangkerja)
  console.log("2. Find all electronic devices.")
  console.log(elektronik)
  console.log("3. Find all furnitures.")
  console.log(perabotan)
  console.log("4. Find all items was purchased at 16 Januari 2020.")
  console.log(dibeli)
  console.log("5. Find all items with brown color.")
  console.log(coklat)