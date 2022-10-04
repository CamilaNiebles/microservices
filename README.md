## Description

This repo is a monorepo using [Nest](https://github.com/nestjs/nest). In this repo you can find an implementation of microservice architecture and kafka to handle events.

## Docker

This project has two docker-compose files

- `docker-compose.yml` this file has the configuration for the database, in this case has the configuration for postgres. To execute this command use `docker-compose up -d`

- `docker-compose-kafka.yml` This file has the configuration for kafka, the file create three containers.

  - `zookeeper`
  - `cp-kafka`
  - `kafka-ui`

  To execute this file use this command, `docker-compose -f docker-compose-kafka.yml up -d`

## Installation

```bash
$ yarn
```

## Stay in touch

- Author - [Camila Niebles Reyes](https://www.linkedin.com/in/maria-camila-niebles-reyes-96061613b/)
