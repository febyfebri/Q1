var obj = 
    [
        {
          "id": 323,
          "username": "rinood30",
          "profile": {
            "full_name": "Shabrina Fauzan",
            "birthday": "1988-10-30",
            "phones": [
              "08133473821",
              "082539163912"
            ]
          },
          "articles:": [
            {
              "id": 3,
              "title": "Tips Berbagi Makanan",
              "published_at": "2019-01-03T16:00:00"
            },
            {
              "id": 7,
              "title": "Cara Membakar Ikan",
              "published_at": "2019-01-07T14:00:00"
            }
          ]
        },
        {
          "id": 201,
          "username": "norisa",
          "profile": {
            "full_name": "Noor Annisa",
            "birthday": "1986-08-14",
            "phones": []
          },
          "articles:": [
            {
              "id": 82,
              "title": "Cara Membuat Kue Kering",
              "published_at": "2019-10-08T11:00:00"
            },
            {
              "id": 91,
              "title": "Cara Membuat Brownies",
              "published_at": "2019-11-11T13:00:00"
            },
            {
              "id": 31,
              "title": "Cara Membuat Brownies",
              "published_at": "2019-11-11T13:00:00"
            }
          ]
        },
        {
          "id": 42,
          "username": "karina",
          "profile": {
            "full_name": "Karina Triandini",
            "birthday": "1986-04-14",
            "phones": [
              "06133929341"
            ]
          },
          "articles:": []
        },
        {
          "id": 201,
          "username": "icha",
          "profile": {
            "full_name": "Annisa Rachmawaty",
            "birthday": "1987-12-30",
            "phones": []
          },
          "articles:": [
            {
              "id": 39,
              "title": "Tips Berbelanja Bulan Tua",
              "published_at": "2019-04-06T07:00:00"
            },
            {
              "id": 43,
              "title": "Cara Memilih Permainan di Steam",
              "published_at": "2019-06-11T05:00:00"
            },
            {
              "id": 58,
              "title": "Cara Membuat Brownies",
              "published_at": "2019-09-12T04:00:00"
            }
          ]
        }
      ];

      const nomor = [];
      const artikel = [];
      const annis = [];
      const artikel2020 = [];
      const lahir1989 = [];
      const artikeltip = [];
      const artikelagustus = [];
      const awaltahun = new Date("2020-01-01 00:00:00");
      const akhirtahun = new Date("2020-12-31 23:59:59");
      const bulanagustus = new Date("2019-07-31 23:59:59");

      for (var i = 0; i < obj.length; i++) {

        if(obj[i].profile.phones.length < 1)
            nomor.push(obj[i].id+' '+obj[i].username)
            if(obj[i]['articles:'].length > 0)
		        artikel.push(obj[i].id+' '+obj[i].username)
            if(obj[i].profile.full_name.toLowerCase().indexOf('annis') >= 0)
                annis.push(obj[i].id+' '+obj[i].username)
                for (var j = 0; j < obj[i]['articles:'].length; j++) {
                    const check = new Date(obj[i]['articles:'][j].published_at);
                    if(check >= awaltahun && check <= akhirtahun){
                        artikel.push(obj[i].id+' '+obj[i].username)
                        break
         }
      }

      if(obj[i].profile.birthday.indexOf('1986') >= 0)
		lahir1989.push(obj[i].id+' '+obj[i].username)

        for (var j = 0; j < obj[i]['articles:'].length; j++) {

            if(obj[i]['articles:'][j].title.toLowerCase().indexOf('tips') >= 0)
                artikeltip.push(obj[i]['articles:'][j].id+' '+obj[i]['articles:'][j].title)

            const check = new Date(obj[i]['articles:'][j].published_at);
            if(check <= bulanagustus){
                artikelagustus.push(obj[i]['articles:'][j].id+' '+obj[i]['articles:'][j].title)
            }
        }
    }

console.log("1. Find users who doesn\'t have any phone numbers.")
console.log(nomor)

console.log("2. Find users who have articles.")
console.log(artikel)

console.log("3. Find users who have \"annis\" on their name.")
console.log(annis)

console.log("4. Find users who have articles on year 2020.")
console.log(artikel2020)

console.log("5. Find users who are born on 1986.")
console.log(lahir1989)

console.log("6. Find articles that contain \"tips\" on the title.")
console.log(artikeltip)

console.log("7. Find articles published before August 2019.")
console.log(artikelagustus)