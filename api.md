# Relief Tracker API Endpoints

[Home](/README.md)

## [GET /reliefefforts](http://relief-service.cfapps.io/reliefefforts)

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
    <td>Request parameter</td>
    <td>`sortby` - string. Sorts relief effort documents. Use a value of `name` to sort by relief effort name.  Default sort is `name` if `sortby` request parameter is omitted. </td>
  </tr>
  <tr>
    <td>Request parameter</td>
    <td>`limit` - integer. limits the number of relief effort documents returned.  Default is `5`.</td>
  </tr>
  <tr>
    <td>Request parameter</td>
    <td>`startkey` - string. Offsetting (skipping) x number of documents is a potentially expensive operation for a database. Using a “last searched token” like `startkey` allows you to skip over prior results. If provided, the results will list relief efforts _greater than_ the token/startkey.  If not provided, the results will start from the _beginning of the list_.  For example `startkey=Haiti+2015` skips all relief efforts whose `sortby` is less than or equal to "Haiti 2015".</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

### Examples ###

** Simple list example**

Request a simple list of relief efforts sorted by name.  Default `sortby` value is `name`.  The following two examples will retrieve the same results.  By default the response will be limited to 5 records per page.

```
[GET /reliefefforts](http://relief-service.cfapps.io/reliefefforts)

[GET /reliefefforts?sortby=name](http://relief-service.cfapps.io/reliefefforts?sortby=name)
```
** List with limit example**

Request a list of relief efforts by name and limit to 3 records per page.

```
[GET /reliefefforts?sortby=name&limit=3](http://relief-service.cfapps.io/reliefefforts?sortby=name&limit=3)
```

** List with pagination example **

Request the first page of relief effort sorted by name and limited to 3 records.

```
[GET /reliefefforts?sortby=name&limit=3](http://relief-service.cfapps.io/reliefefforts?sortby=name&limit=3)

[
  {
    "_id": "relief_St_Phillips_Dominican_Republic_2016",
    "_rev": "10-3c10861534dcc89028b58429a23052ae",
    "type": "relief",
    "phase": "completed",
    "name": "Dominican_Republic 2016",
    "organizationID": "St. Phillips",
    "desc": "...",
    "start": "2015-11-25",
    "end": "2015-10-01",
    "social": [],
    "team": [ ... ],
    "objectives": [ ... ]
  },
  {
    "_id": "relief_Red_Cross_Guatemala_2016",
    "_rev": "1-b5792aecc07099d79d3ec8462ebc6aa8",
    "type": "relief",
    "phase": "completed",
    "name": "Guatemala 2016",
    "organizationID": "Red Cross",
    "desc": "...",
    "start": "2016-01-05",
    "end": "2016-02-15",
    "active": true
  },
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
    "desc": "...",
    "start": "2015-09-25",
    "end": "2015-10-01",
    "social": [],
    "team": [ ... ],
    "objectives": [ ... ],
    "map": [ ... ]
  }
]

```

Request the next page relief efforts using the `name` value of the last item in the previous page as the `startkey` value.  This skips the previous documents and provides performant pagination.  

```
[GET /reliefefforts?limit=3&sortby=name&startkey=Haiti+2015](http://relief-service.cfapps.io/reliefefforts?limit=3&sortby=name&startkey=Haiti+2015)

[
  {
    "_id": "relief_St_Phillips_Haiti_2017",
    "_rev": "7-c7aeee7ef23c4f5d30169dc57897e089",
    "type": "relief",
    "phase": "planning",
    "tags": [],
    "name": "Haiti 2017",
    "organizationID": "St. Phillips",
    "desc": "...",
    "start": "2016-11-01",
    "end": "2016-11-08",
    "social": [...],
    "team": [...],
    "objectives": [...],
    "map": [...]
  },
  {
    "_id": "relief_Hurricane_Helpers_Hurricane_Charlene_1987",
    "_rev": "2-5caa07ae6cd0074879e61b1c8b5e1e8c",
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Charlene 1987",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "1987-08-23",
    "end": "1987-09-30",
    "team": [...],
    "objectives": [],
    "active": true
  },
  {
    "_id": "relief_Hurricane_Helpers_Hurricane_Katrina_2005",
    "_rev": "3-21bbe7b4610d9f19a99d55296f0a7e27",
    "type": "relief",
    "phase": "completed",
    "name": "Hurricane Katrina 2005",
    "organizationID": "Hurricane Helpers",
    "desc": "...",
    "start": "2005-08-23",
    "end": "2005-09-31",
    "active": true
  }
]
```

## [GET /reliefefforts/{id}](http://relief-service.cfapps.io/reliefefforts/relief_St_Phillips_Haiti_2017)

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
    <td>Request parameter</td>
    <td>none.</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>application/json</td>
  </tr>
</table>

** View relief effort example **

Get a single relief effort using the `_id` of a relief effort in the route.

```
[GET /reliefefforts/relief_St_Phillips_Haiti_2017](http://relief-service.cfapps.io/reliefefforts/relief_St_Phillips_Haiti_2017)

{
  "_id": "relief_St_Phillips_Haiti_2017",
  "_rev": "7-c7aeee7ef23c4f5d30169dc57897e089",
  "type": "relief",
  "phase": "planning",
  "tags": [
    "dental",
    "economic development"
  ],
  "name": "Haiti 2017",
  "organizationID": "St. Phillips",
  "desc": "...",
  "start": "2016-11-01",
  "end": "2016-11-08",
  "social": [],
  "team": [...],
  "objectives": [...],
  "map": [...]
    }
  ]
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

** Edit relief effort example **

Update a relief effort by sending an HTTP PUT request containing the entire relief effort document in the body of the request.  

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

In no sql mode, response includes an incremented `rev` value:

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

## DELETE /reliefefforts/{id}

Deletes a relief effort.

As a user, I want the ability to delete a relief effort.  

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

```
DELETE /reliefefforts/relief_St_Andrews_Kenya_2013
```

In no sql mode, the response includes a `rev` value:

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

---
[Home](/README.md)
