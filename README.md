
# Invoice API

This API allow users to create Invoice they can provide Invoiced date, Invoice numbr and Invoice amount and do the post request and api will check the date of Invoice it is present or not or also check the Invoice date shloud be greater than its previous Invoice date and less than its next Invoice date than it will add to the database.

User also get all the invoices and they can get Invoice by their number as well. User can update an invoice amount and alos delete particular invoice using their respective number.




## Tech Stacks

**Server:** Node, Express, Mongoose and MongoDB database


## Features

- Create invoices/addInvoice
- Get all invoices
- Update particular invoice
- Delete particular invoice


## API Reference

#### Get all invoices

```http
  GET "/api/invoice"
```
To get the all invoices.

#### Get particular invoice

```http
  GET "/api/invoice/${invoiceNumber}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `invoiceNumber`      | `number` | **Required**. invoiceNumber of invoice to fetch |

#### Update particular invoice

```http
  GET "/api/invoice/${invoiceNumber}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `invoiceNumber`      | `number` | **Required**. invoiceNumber of invoice to Update |

Pass the invoice value what you want to Update like invoice amount in json body.

#### Delete particular invoice

```http
  GET "/api/invoice/${invoiceNumber}"
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `invoiceNumber`      | `number` | **Required**. invoiceNumber of invoice to delete |

### To add an invoice

```http
  GET "/api/invoice/addInvoice"
```
```
    {
        "invoiceDate": "4th July 2023",
        "invoiceNumber": 1,
        "invoiceAmount": 100
    }
```

Create this format to add an invoice.
## Installation and to start with api

You can clone this repo to use this api

```
    git clone {url of the repo}
```
Than install all the packages

```
     npm install
```

### To start server do

Install nodemon 

```
    npm install nodemon -g
```

Than run the command

```
    nodemon index.js
```



## Feedback

If you have any feedback, please reach out to us at irfanjunaid78081@gmail.com

