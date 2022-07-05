# Api Gateway

Krakend Api Gateway with authentication server

[Authserver docs](/docs/authserver/authserver.md)  
[Krakend docs](https://www.krakend.io/docs/overview/)

## Table of content

- [Api Gateway](#api-gateway)
  - [Table of content](#table-of-content)
  - [Setup](#setup)
    - [Requirements](#requirements)
    - [Setting up mongodb for authserver](#setting-up-mongodb-for-authserver)
  - [Configuration](#configuration)
    - [KrakenD](#krakend)
    - [Authserver](#authserver)

## Setup

Quick start using docker

```
docker compose up
```

### Requirements

- Docker
- Docker compose

### Setting up mongodb for authserver

Initialization script location: `/mongodb/docker-entrypoint-initdb.d`

When starting MongoDB for the first time it will run the initialization script if it is mounted in the mongodb container as it is done in the docker compose.yaml.

You should configure the script with the username and password used by the authserver.

Also you should change the root username and password in the compose.yaml.

## Configuration

### KrakenD

Config location: `/krakend/krakend/config/krakend.json`

You can either mount the config to the container or copy it in while you build the docker image. Krakend recommends you [build your own](https://www.krakend.io/docs/deploying/docker/).  
If you do the recommended way you need to rebuild the image every time you change the config.

### Authserver

[Configuring authserver](/docs/authserver/authserver.md)

Todo
