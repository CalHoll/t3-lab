# T3 Sample

This is a sample project using the T3 stack (details below). This project was made as simple as possible while still showing an approach that scales.

Essentially, this project is a dynamic form creator. Currently it expects only two questions to be presented, the first being a radio button, and the second being a multi-select checkbox.

The second question is dynamic based on the first, and the result is dynamic based on customizable logic that is included in the JSON data.

It was designed this way to make it easy for other forms and data to be added in the future.

### Bootstrapped with Create-T3-App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`. Some of the technologies used include:

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [zustand](https://github.com/pmndrs/zustand)

To learn more about the [T3 Stack](https://create.t3.gg/), check out the following resources:

- [T3 Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
- [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app)

## Setup and Development

### Local Development

Install dependencies:

```sh
    npm install
```

Start server locally:

```sh
    npm run dev
```

Open a web browser and navigate to [http://localhost:3000/](http://localhost:3000/).

## How is this deployed?

The app is deployed via Vercel, you can find the current version at [https://t3-pdky091qg-calholl.vercel.app](https://t3-pdky091qg-calholl.vercel.app/)

For info on how deployment works, find the [Vercel guide here.](https://create.t3.gg/en/deployment/vercel)

#### WIP - Running In Docker

Currently the app can also run in Docker, though the DB is included in the compose file and is currently a WIP.

For more info about the app working with docker see the [T3 Docker guide here.](https://create.t3.gg/en/deployment/docker)

## WIP - Setting up the DB

The next step for this project is to connect it to a postgres database. Currently postgres can be spun up using docker, either as a standalone image or networked to a production app version with:

```
    docker compose up
```

For development and testing with a database locally, some useful commands follow:

```sh
    # get image
    docker pull postgres

    # Run image
    docker run --name t3-sandbox-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

    # Connect to local pg
    psql -h localhost -p 5432 -U postgres -W

    # Create db
    CREATE DATABASE t3_sandbox;

    # exit psql
    \q

    # create prisma tables
    npx prisma db push

    # connect to prisma studio
    npx prisma studio
```
