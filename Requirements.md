# API Requirements

### API Endpoints
### Users:
* index (/api/users/index) (requires token)
* create (/api/users/create)
* show (/api/users/show/:id) (requires token)

### Orders:
* create (/api/orders/create) (requires token)
* show (/api/orders/show/:id) (requires token)

### Products:
* index (/api/products/index)
* create (/api/products/create) (requires token)
* show (/api/products/show/:id)

### Data Shapes
### Users:
* user_name
* id
* email
* full_name
* password

### Orders:
* id
* status
* user_id

### Products:
* name
* id
* price

### Products of Order:
* id
* quantity
* order_id
* product_id
