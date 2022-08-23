# Api Gateway <!-- omit in toc -->

Krakend Api Gateway with authentication server (optional)

[Authserver docs](https://github.com/andreas-levander/node-authserver#role-based-authentication-server-)  
[Krakend docs](https://www.krakend.io/docs/overview/)

![Api-gateway diagram](docs/diagram/api-gateway-diagram.png)

## Table of content <!-- omit in toc -->

- [Setup](#setup)
  - [Requirements](#requirements)
- [Configuration](#configuration)
  - [KrakenD](#krakend)
    - [Adding a endpoint](#adding-a-endpoint)
    - [Influxdb](#influxdb)
    - [Grafana](#grafana)
  - [Authserver](#authserver)

## Setup

Quick start KrakenD only using docker

```
git clone <url of this project>
```

```
docker compose up
```

Quick start KrakenD+Authserver

```
git clone --recurse-submodules <url of this project>
```

```
docker compose -f compose-combined.yaml up
```

### Requirements

- Docker
- Docker compose

## Configuration

### KrakenD

Config location: `/krakend/krakend/config/krakend.json`

You can either mount the config to the container or copy it in while you build the docker image.

Krakend recommends you [build your own](https://www.krakend.io/docs/deploying/docker/).

If you do the recommended way you need to rebuild the image every time you change the config.

#### Adding a endpoint  

Every endpoint is a json object in the enpoints array which maps the url on the api gateway to a backend api. 

For more info visit the [KrakenD docks](https://www.krakend.io/docs/endpoints/).  

Example

```json
{
      "endpoint": "/v1/test", # the url on the krakend gateway
      "output_encoding": "no-op", # encoding of the response, no-op means krakend doesnt modify the response
      "backend": [ # one or multiple backends that the enpoint will go to. Krakend will load balance if there are multiple backends in the array
        {
          "url_pattern": "/", # the url on the backend
          "method": "GET", # method of the backend
          "host": ["http://backend-test:80"] # the host address of the backend. Here we can use docker DHCP if connecting to a container on the same docker network
        }
      ],
      "input_headers": ["*"], # allowed input headers. "*" means that all are allowed
      "extra_config": { # Here we set the required authorization to access the endpoint
        "auth/api-keys": { # these are the api-keys set in the krakend config
          "roles": ["admin"] # allowed roles
        },
        "qos/ratelimit/router": { # Here we can set a rate limit for the endpoint
          "max_rate": 10 # maximum requests per second
        }
      }
}

```

#### Influxdb  

You should change the password for the influxdb in the compose and match it in the KrakenD config.  

It seems to be problems with krakend registering influxdb so you might have to restart krakenD until it registers the influxdb service.  

#### Grafana

If you use grafana you can open the ui by going to its url e.g `http://localhost:3001`. You can set the exposed port in the compose.  

Then you can log in with [default username and password](https://grafana.com/docs/grafana/next/setup-grafana/configure-grafana/#security).  

### Authserver

[Configuring authserver](https://github.com/andreas-levander/node-authserver#configuration)
