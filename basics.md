# Basics

## Base URL

<table>
  <tr>
    <th>Base URL</th>
    <th>`http://relief-service.cfapps.io/`</th>
  </tr>
</table>

## Content types

Unless otherwise noted, all endpoints accept and return data formatted as JSON. The `Content-Type` request header with a value of `application/json` is required when providing content on the body of a request.

## HTTP Verbs

<table>
    <thead>
          <tr>
              <th>Verb</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
        <tr>
            <td>GET</td>
            <td>Used to retrieve resources.</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>Used to create resources.</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>Used to update/replace the entire resource.</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>Used to delete resources.</td>
        </tr>
      </tbody>
  </table>

## Pagination

`/reliefefforts` and `/persons` endpoints return a collection of records.  In these case we provide _pagination_, where instead of returning all of the results in a single response, we return them in smaller sets called _pages_. This approach allows us to keep the performance high on the server, and also minimizes the size of our responses on the wire by breaking them into smaller, more manageable blocks.

### `startkey` and `limit`

When an endpoint supports pagination, it will accept `startkey` and `limit` query string parameters to allow you to control the paging. The `limit` parameter is an integer that represents the number of records to return (page size). The default value for `limit` is `5`. The `startkey` parameter is a string that represents the records to skip.  Offsetting (skipping) documents is a potentially expensive operation for a database. Using a “last searched token” like `startkey` allows you to skip over prior results. If provided, the results will documents _greater than_ the token/startkey.  If not provided, the results will start from the _beginning of the list_. For example `startkey=Haiti+2015` skips all relief efforts whose relief effort name is less than or equal to "Haiti 2015".

Here's an example request for returning the first 3 relief efforts via the `/reliefefforts` endpoint and the `limit` query string parameter:

Request the first page of relief effort sorted by name and limited to 3 records:

```
GET /reliefefforts?sortby=name&limit=3

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

Request the next page of relief efforts using the `name` value of the last item in the previous page as the `startkey` value.  This skips the previous documents and provides performant pagination.  

```
GET /reliefefforts?limit=3&sortby=name&startkey=Haiti+2015

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
