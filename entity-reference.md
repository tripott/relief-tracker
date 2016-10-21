# Entity Reference

[Home](/README.md)  

## Relief Effort

In no sql mode, a relief effort document includes a `_rev` value:

```
{
  "_id": "relief_St_Phillips_Haiti_2015",
  "_rev": "8-16b393021bb03047ffe7606141a802aa",
  "type": "relief",
  "phase": "completed",
  "tags": [
    "education"
  ],
  "name": "Haiti 2015",
  "organizationID": "St. Phillips",
  "desc": "Build school desks and blackboards at the St. Esprit (Holy Spirit) church and school in the remote village of Gros Mangle in the island of La Gonave, Haiti. Home base is located in the main town of Anse - à - Galets at the St.François d’ Assise church and school.",
  "start": "2015-09-25",
  "end": "2015-10-01",
  "social": [],
  "team": [
    {
      "name": "Steve Ananias",
      "role": "Team Leader",
      "personID": "person_stevean@duke.edu"
    },
    {
      "name": "Libby Satterfield",
      "role": "Team member",
      "personID": "person_lsat1972@gmail.com"
    },
    {
      "name": "Judy Jones",
      "role": "Team member",
      "personID": "person_judy5555@aol.com"
    }
  ],
  "objectives": [
    {
      "id": "1",
      "name": "Build desks",
      "type": "primary",
      "description": "Build desks for the school in Gros Mangles.",
      "order ": 1,
      "completed": true,
      "successFactor": 5
    },
    {
      "id": "2",
      "name": "Build blackboards",
      "type": "secondary",
      "description ": "Build blackboards for school rooms",
      "order ": 2,
      "completed": true,
      "successFactor": 5
    },
    {
      "id": "3",
      "name": "Deliver generator",
      "type": "secondary",
      "description ": "Deliver gas powered generator church/school in Anse-a-Galets.",
      "order ": 3,
      "completed": false,
      "successFactor": 1
    }
  ],
  "map": [
    {
      "name": "La Gonave",
      "center": {
        "lat": 18.831768,
        "lng": -72.866371
      },
      "markers": [
        {
          "title": "Anse-a-Galets",
          "label": "Home Base",
          "color": "",
          "position": {
            "lat": 18.831768,
            "lng": -72.866371
          }
        },
        {
          "title": "Gros Mangle",
          "label": "Objective",
          "color": "",
          "position": {
            "lat": 18.927275,
            "lng": -73.104122
          }
        }
      ]
    }
  ]
}
```

---
[Home](/README.md)  
