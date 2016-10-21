# Relief Tracker User Stories

[Home](/README.md)  

A full stack javascript sample application.

# Manage a Relief Effort

Example of relief effort document.

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


## List Relief Efforts  
As a user, I want to page through a list of relief efforts.  Relief efforts should be sorted by relief effort name. Each relief effort item should display the relief effort name, organization, and start date. Once I find the relief effort I'm looking for, I'd like to view the relief effort details (See View Relief Effort).

## View Relief Effort
As a user, I want to view all the details about a relief effort such as start date, end date, phase, team members, objectives, and map.

## Edit Relief Effort
As a user, I want the ability to edit the following high level details about a relief effort including:
  - phase
  - name
  - organization
  - desc
  - start (date)
  - end (date)

## Delete Relief Effort
As a user, I want the ability to delete a relief effort.  

# Manage Relief Effort Team
As an administrator, I need to the ability to track the persons who are participating on a relief effort.  I need the ability to maintain a listing of team members including their name and role.  

## List Relief Effort Team members
As a user, I want the ability to view a list of team members associated with a relief effort.  

## Add Relief Effort Team Members
As a user, I want the ability add team members to a relief effort by reviewing a listing of persons not currently on the team.  I would like the ability to add team members from this list as well as pick their role on the team.

## Update Relief Effort Team Member
As a user, when viewing a listing of team members, I'd like the ability to change a person's role on the team.

## Delete Relief Effort Team Member
As a user, when viewing a listing of team members, I'd like the ability to remove a person from a team.  

## View Person Details
As a user, when viewing a listing of team members, I'd like the ability to view contact information for a user.  See View Person.


# Manage People

## List People  
As a user, I want to page through a listing of people in the database. I want to be able to sort people by either their last name or email address. Display the person's name, email address, and phone number in the list. Once I find the person I'm looking for, I'd like to view all the contact information (See View Person).

## View Person
As a user, I want to view contact information about a person whenever they are listed within the application.  For example, when I am viewing the list of team members for a relief effort, I would like the ability to view the contact info for an individual team member.  

## Add Person
I would like the ability to add new persons to the database. The application should prevent me from adding a person with a duplicate email address.  

## Edit Person
I would like the ability to edit an existing persons in the database. The application should prevent me from adding a person with a duplicate email address.  

## Delete Relief Effort Team Member
As a user, I want the ability to delete a person from the database.


# Manage Relief Effort Objectives

## List Relief Effort Team members
As a user, I want the ability to view a list of objectives associated with a relief effort.

## Add Relief Effort Objective
As a user, I want the ability to add an objective to a relief effort.

## Update Relief Effort Team Member
As a user, I want the ability to edit an objective on a relief effort.

## Delete Relief Effort Team Member
As a user, I want the ability to remove a person from a relief effort.



# Manage Relief Effort Map

## Display Map
As a user, I want the ability to view a map of the relief effort area including individual map markers.  

## Center Map
As a user, I want the ability to center a map.

## Add Marker
As a user, I want the ability to add a marker to a map.

## Update Marker Details
As a user, I want the ability to edit marker details.

## Delete Marker
As a user, I want the ability to remove a marker from the map.

---
[Home](/README.md)  
