## Setup
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## API Endpoints

### Create a resource
POST /resources
```json
{
  "name": "example",
  "data": "some data"
}
```

### List resources
GET /resources?name=filter

### Get a resource
GET /resources/:id

### Update a resource
PUT /resources/:id
```json
{
  "name": "updated",
  "data": "updated data"
}
```

### Delete a resource
DELETE /resources/:id
