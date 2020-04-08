# PROJETO MEGA HACK COVID-19

## BACKEND EM NODEJS

```plantuml
class Address {
  zipcode: String
  street: String
  district: String
  number: String
  complement: String
  latitude: String
  longitude: String
}

class Attachment {
  url: String
}

class ServiceCategory {
  name: String
}

class Service {
  name: String
  category: ServiceCategory[]
}

class User {
  *name: String
  *email: String
  *password: String
  *serviceProvider: Boolean
  *address: Address
  *phone: String
  services: Service[]
  avatar: Attachment
}

class Job {
  requester: User
  provider: User
}

Job <-- User
User <-- Address
User <-- Attachment
User <-- Service
Service <-- ServiceCategory

```
