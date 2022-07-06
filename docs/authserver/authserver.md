# Role Based Authentication Server <!-- omit in toc -->

Authentication server created with Node.js and MongoDB to be used for Role Based Authentication (RBAC)

## Table of Contents <!-- omit in toc -->

- [Features](#features)
- [Setup](#setup)
  - [Using Docker](#using-docker)
    - [Requirements](#requirements)
  - [Without Docker using Npm](#without-docker-using-npm)
    - [Requirements](#requirements-1)
    - [Installation](#installation)
- [Configuration](#configuration)
  - [Environmental variables](#environmental-variables)
- [API Endpoints](#api-endpoints)
  - [Public](#public)
  - [Private](#private)

## Features

- Asymmetric key generation
- Input validation
- Password generation
- Public key endpoint to let services verify token
- Login Api to serve authorized users a Json Web Token
- Admin Api to create/remove users

## Setup

### Using Docker

Quick start using docker

```
docker compose up
```

#### Requirements

- Docker
- Docker compose

### Without Docker using Npm

#### Requirements

- npm & Node.js 16
- Mongodb

#### Installation

1. Setup your database
2. Add your MONGODB_URI in an .env file in /authserver directory or in /authserver/utils/config.js
3. Install dependencies `cd authserver && npm install --omit=dev`
4. Start server `npm start`

## Configuration

You can configure the authserver by setting environmental variables.

### Environmental variables

`PORT` default=4000  
`MONGODB_URI` set your mongodb uri here  
`USERNAME_MINLENGTH` minimum required username length default 5  
`KEY_GEN_ALG` algorithm used for generating json web tokens. default=EdDSA

## API Endpoints

### Public

- [Login](/docs/authserver/endpoints/login.md) : `POST /v1/api/public/login`
- [Validate](/docs/authserver/endpoints/validate.md) : `GET /v1/api/public/validate`

### Private

- [Create User](/docs/authserver/endpoints/createuser.md) : `POST /v1/api/admin/createuser`
- [Remove User](/docs/authserver/endpoints/removeuser.md) : `POST /v1/api/admin/removeuser`
