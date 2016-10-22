[Home](/README.md)  |  [User Stories](/user-stories.md)  |  [Basics](/basics.md)  |  [API Endpoints](/api.md)  |  [Entity Reference](/entity-reference.md)
---

# Relief Tracker API Endpoints

## Relief Efforts

## GET /reliefefforts

Lists relief efforts.

As a user, I want to page through a list of relief efforts.  Relief efforts should be sorted by relief effort name. Each relief effort item should display the relief effort name, organization, and start date. Once I find the relief effort I'm looking for, I'd like to view the relief effort details see `GET /reliefefforts/{id}`.

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>GET</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>`/reliefefforts`</td>
  </tr>
  <tr>
    <td>Query parameter</td>
    <td>`sortby` - string. Sorts relief effort documents. Use a value of `name` to sort by relief effort name.  Default sort is `name` if `sortby` request parameter is omitted. </td>
  </tr>
  <tr>
    <td>Query parameter</td>
    <td>`limit` - integer. limits the number of relief effort documents returned.  Default is `5`.</td>
  </tr>
  <tr>
    <td>Query parameter</td>
    <td>`sorttoken` - string. Offsetting (skipping) x number of documents is a potentially expensive operation for a database. Using a “last searched token” like `sorttoken` allows you to skip over prior results. If provided, the results will list relief efforts _greater than_ the token.  If not provided, the results will start from the _beginning of the list_.</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>`application/json`</td>
  </tr>
</table>

### Simple list example ###

Request a simple list of relief efforts sorted by name.  Default `sortby` value is `name`.  The following two examples will retrieve the same results.  By default the response will be limited to 5 records per page.

```
GET /reliefefforts
GET /reliefefforts?sortby=name
```

### List with limit example ###

Request a list of relief efforts by name and limit to 3 records per page.

```
GET /reliefefforts?sortby=name&limit=3
```

### List with pagination example (mysql) ###

Request the first page of relief effort sorted by name and limited to 3 records.  If the `sorttoken` query parameter and value is not provided, the results will start from the beginning of the list.

```
GET /reliefefforts?sortby=name&limit=3

[
  {
    "_id": 4,
    "type": "relief",
    "phase": "completed",
    "name": "Haiti 2015",
    "organizationID": "St. Phillips",
    "desc": "...",
    "start": "2015-11-01",
    "end": "2015-11-08",
    "team": [...],
    "objectives": [...],
    "sortToken": "Haiti 20154"
  },
  {
    "_id": 5,
    "type": "relief",
    "phase": "planning",
    "name": "Haiti 2017",
    "organizationID": "St. Phillips",
    "desc": "...",
    "start": "2017-02-01",
    "end": "2017-02-08",
    "team": [...],
    "objectives": [...],
    "sortToken": "Haiti 20175"
  },
  {
    "_id": 45,
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Charlene 1987",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "1987-08-23",
    "end": "1987-09-30",
    "team": [...],
    "objectives": [...],
    "sortToken": "Hurricane Charlene 198745"
  }
]
```

Request the next page of relief efforts using the `sorttoken` value of the last item in the previous response as the query string `sorttoken` value.  This skips the previous documents and provides performant pagination.  

```
/reliefefforts?sortby=name&limit=3&sorttoken=Hurricane+Charlene+198745

[
  {
    "_id": 31,
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Jeff 1984",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "2005-08-23",
    "end": "2005-09-30",
    "team": [...],
    "objectives": [],
    "sortToken": "Hurricane Jeff 198431"
  },
  {
    "_id": 33,
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Jeff 1985",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "2005-08-23",
    "end": "2005-09-30",
    "team": [...],
    "objectives": [],
    "sortToken": "Hurricane Jeff 198533"
  },
  {
    "_id": 34,
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Jeff 1986",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "1986-08-22",
    "end": "1986-09-29",
    "team": [...],
    "objectives": [],
    "sortToken": "Hurricane Jeff 198634"
  }
]
```

## POST /reliefefforts

Add a person to the database.  The endpoint will not allow duplicate email addresses.  

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>POST</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>`/reliefefforts`</td>
  </tr>
  <tr>
    <td>Query parameters</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>`application/json`</td>
  </tr>
</table>

## GET /reliefefforts/{id}

View a relief effort.

As a user, I want to view all the details about a relief effort such as start date, end date, phase, team members, objectives, and map waypoints.  

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>GET</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>`/reliefefforts/{id}`</td>
  </tr>
  <tr>
    <td>Query parameters</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### View relief effort example (nosql)###

Get a single relief effort using the `_id` of a relief effort in the route (nosql mode).

```
GET /reliefefforts/relief_St_Phillips_Haiti_2017

{
  "_id": "relief_St_Phillips_Dominican_Republic_2016",
  "_rev": "10-3c10861534dcc89028b58429a23052ae",
  "type": "relief",
  "phase": "completed",
  "name": "Dominican_Republic 2016",
  "organizationID": "St. Phillips",
  ...
```

### View relief effort example (mysql)###

Get a single relief effort using the `_id` of a relief effort in the route (mysql mode). In mysql mode, the `_rev` key is not included in the response.

```
GET /reliefefforts/4

{
  "_id": 4,
  "type": "relief",
  "phase": "completed",
  "name": "Haiti 2015",
  "organizationID": "St. Phillips",
  ...
}
```

Attempting to retrieve a resource that does not exist result in a `404`:

```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

## PUT /reliefefforts/{id}

Edits a relief effort.

As a user, I want the ability to edit the following high level details about a relief effort including:

  - phase
  - name
  - organization
  - desc
  - start (date)
  - end (date)

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>PUT</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>/reliefefforts/{id}</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>

</table>

### Edit relief effort example (nosql) ###

Update a relief effort by sending an HTTP PUT request containing the entire relief effort document in the body of the request.  (nosql mode)

```
PUT /reliefefforts/relief_St_Phillips_Haiti_2017

{
  "_id": "relief_St_Phillips_Haiti_2017",
  "_rev": "7-c7aeee7ef23c4f5d30169dc57897e089",
  "type": "relief",
  "phase": "planning",
  "tags": [
    "dental",
    "medical",
    "economic development"
  ],
  "name": "Haiti 2017",
  "organizationID": "St. Phillips",
  "desc": "Provide dental services,
   remaining document omitted for brevity
   ... remaining doc omitted for brevity
```

In nosql mode, a successful response includes an incremented `rev` value:

```
{
  "ok": true,
  "id": "relief_St_Phillips_Haiti_2017",
  "rev": "8-96146282b6001c0abbb60274ea55f4b9"
}
```

Attempting to update a resource that does not exist results in a `404`:

```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

In nosql mode, attempting to update a resource without the most current `_rev` value in the request body, results in a `409 - conflict` error:

```
{
  "name": "conflict",
  "status": 409,
  "message": "Document update conflict.",
  "reason": "Document update conflict.",
  "error": "conflict"
}
```

When this occurs, you should perform a `GET` on the resource to retrieve the latest revision and then re-attempt the `PUT`.

## DELETE /reliefefforts/{id}

Deletes a relief effort.

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>/reliefefforts/{id}</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### Delete relief effort example (nosql) ###

```
DELETE /reliefefforts/relief_St_Andrews_Kenya_2013
```

In nosql mode, the response includes a `rev` value:

```
{
  "ok": true,
  "id": "relief_St_Andrews_Kenya_2013",
  "rev": "4-deef890f60cf5fa495f69e35c9209616"
}
```

Attempting to delete a resource that does not exist result in a `404`:

```
{
  "name": "not_found",
  "status": 404,
  "message": "deleted",
  "reason": "deleted",
  "error": "not_found"
}
```

## Persons

## GET /persons

Provides a list of people.  

As a user, I want to page through a listing of people in the database. I want to be able to sort people by either their last name or email address. Display the person's name, email address, and phone number in the list. Once I find the person I'm looking for, I'd like to view all the contact information (See GET /persons/{id}).

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>GET</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>`/persons`</td>
  </tr>
  <tr>
    <td>Request parameter</td>
    <td>`sortby` - string. Sorts persons documents. Use a value of `lastname` to sort by last name.  Default sort is `lastname` if `sortby` request parameter is omitted. Use a value of `email` to sort by email address.</td>
  </tr>
  <tr>
    <td>Request parameter</td>
    <td>`limit` - integer. limits the number of documents returned.  Default is `5`.</td>
  </tr>
  <tr>
    <td>Request parameter</td>
    <td>`sorttoken` - string. Offsetting (skipping) documents is a potentially expensive operation for a database. Using a “last searched token” like `sorttoken` allows you to skip over prior results. If provided, the results will list people _greater than_ the token.  If not provided, the results will start from the _beginning of the list_.
    </td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### Simple list example ###

Request a list of people by last name.  Default `sortby` value is `lastname`.  The following two examples will retrieve the same results.  By default the response will be limited to 5 records per page.

```
GET /persons
GET /persons?sortby=lastname
```

### List with limit example ###

Request a list of people by last name and limit to 20 records per page.

```
GET /persons?sortby=lastname&limit=20
```

### List with pagination example (nosql) ###

Get the first page of people.  Request a list of people by last name, limit to 3 records per page.

```
GET /persons?sortby=lastname&limit=3

[
  {
    "_id": "person_stevean@duke.edu",
    "_rev": "3-4af3e0bbf5b1cbc3547b61acc3eeddd5",
    "type": "person",
    "firstName": "Steve",
    "lastName": "Ananias",
    "phone": "843 555-1515",
    "email": "stevean@duke.edu",
    "active": true,
    "sortToken": "Ananiasperson_stevean@duke.edu"
  },
  {
    "_id": "person_joe.anderson12345@gmail.org",
    "_rev": "1-a22abc251beff50c2cbc1fdf30e122a8",
    "firstName": "Joe",
    "lastName": "Anderson",
    "phone": "300 111-1234",
    "email": "joe.anderson12345@gmail.org",
    "active": true,
    "type": "person",
    "sortToken": "Andersonperson_joe.anderson12345@gmail.org"
  },
  {
    "_id": "person_mgo1234@yahoo.com",
    "_rev": "1-740438eacd7aef816103de6c92315019",
    "firstName": "Mary",
    "lastName": "Gonzalez",
    "phone": "404 303-1234",
    "email": "mgo1234@yahoo.com",
    "active": true,
    "type": "person",
    "sortToken": "Gonzalezperson_mgo1234@yahoo.com"
  }
]
```

Request the next page. Using the `sorttoken` query parameter skips the previous documents.

```
GET /persons?sortby=lastname&limit=3&sorttoken=Gonzalezperson_mgo1234@yahoo.com

[
  {
    "_id": "person_steveharvey1111@gmail.com",
    "_rev": "6-8ba392bbeaee76b8119837c9edd39ebb",
    "firstName": "Steve",
    "lastName": "Harvey",
    "phone": "404 303-2323",
    "email": "steveharvey1111@gmail.com",
    "type": "person",
    "active": true,
    "sortToken": "Harveyperson_steveharvey1111@gmail.com"
  },
  {
    "_id": "person_TJ@dentalone.com",
    "_rev": "3-53b5f94dfac608bc88b44869115431e6",
    "type": "person",
    "firstName": "Tom",
    "lastName": "Jefferson",
    "phone": "843 444-4444",
    "email": "TJ@dentalone.com",
    "active": true,
    "sortToken": "Jeffersonperson_TJ@dentalone.com"
  },
  {
    "_id": "person_stevejenkey@gmail.com",
    "_rev": "1-e25afda47da1c6c1b94529b32291feb1",
    "firstName": "Steve",
    "lastName": "Jenkins",
    "phone": "404 303-4444",
    "email": "stevejenkey@gmail.com",
    "type": "person",
    "active": true,
    "sortToken": "Jenkinsperson_stevejenkey@gmail.com"
  }
]
```

## GET /persons/{id}

View contact information about a person.  

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>GET</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>`/persons/{id}`</td>
  </tr>
  <tr>
    <td>Query parameters</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### View person example (nosql)###

Retrieve a person using the `_id` of a person in the route (nosql mode).

```
GET /persons/person_gary.johnson1971@gmail.com

{
  "_id": "person_gary.johnson1971@gmail.com",
  "_rev": "6-5345c34a6c31b82fe34ae2880dc33736",
  "type": "person",
  "firstName": "Gary",
  "lastName": "Johnson",
  "phone": "843 555-9876",
  "email": "gary.johnson1971@gmail.com",
  "active": true
}
```
## PUT /persons/{id}

Replaces an existing person in the database.

<table>
  <tr>
    <th>HTTP Verb</th>
    <th>PUT</th>
  </tr>
  <tr>
    <td>Route</td>
    <td>/persons/{id}</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### Edit person example (nosql) ###

Update a person by sending an HTTP PUT request containing the entire person document in the body of the request.  (nosql mode)

```
PUT /persons/person_steveharvey1111@gmail.com

{
  "_id": "person_steveharvey1111@gmail.com",
  "_rev": "6-8ba392bbeaee76b8119837c9edd39ebb",
  "firstName": "Steve",
  "lastName": "Harvey",
  "phone": "404 303-2323",
  "email": "steveharvey1111@gmail.com",
  "type": "person",
  "active": true
}
```

In nosql mode, a successful response includes an incremented `rev` value:

```
{
  "ok": true,
  "id": "person_steveharvey1111@gmail.com",
  "rev": "7-4419c1a74010d55d18decf08a2cf9ad3"
}
```

Attempting to update a resource that does not exist results in a `404`:

```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

In nosql mode, attempting to update a resource without the most current `_rev` value in the request body, results in a `409 - conflict` error:

```
{
  "name": "conflict",
  "status": 409,
  "message": "Document update conflict.",
  "reason": "Document update conflict.",
  "error": "conflict"
}
```

When this occurs, you should perform a `GET` on the resource to retrieve the latest revision and then re-attempt the `PUT`.



---
[Home](/README.md)  |  [User Stories](/user-stories.md)  |  [Basics](/basics.md)  |  [API Endpoints](/api.md)  |[Entity Reference](/entity-reference.md)
