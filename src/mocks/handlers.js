import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL;
const urlApiPost = `${urlApi}create?token=h29D8b23Llm45`;
const urlApiDelete = `${urlApi}delete/6187ac37a9bc8866ef6c4b92?token=h29D8b23Llm45`;

const robots = [
  {
    caracteristicas: {
      velocidad: 2,
      resistencia: 2,
      FechaCeCreacion: "1986-09-29",
    },
    nombre: "PruebaDelete",
    imagenUrl:
      "https://dbdzm869oupei.cloudfront.net/img/sticker/large/8340.jpg",
    __v: 0,
    id: "6187ac37a9bc8866ef6c4b92",
  },
  {
    caracteristicas: {
      velocidad: 5,
      resistencia: 7,
      FechaCeCreacion: "12-05-2018",
    },
    _id: "61858347666bcb02723c195d",
    nombre: "WALL·E 22",
    imagenUrl: "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
  },
  {
    caracteristicas: {
      velocidad: 3,
      resistencia: 3,
      FechaCeCreacion: "08-09-1986",
    },
    _id: "61858354666bcb02723c195e",
    nombre: "Mazinger Z",
    imagenUrl: "https://m.media-amazon.com/images/I/811xMqmbi0L._AC_SY606_.jpg",
  },
  {
    caracteristicas: {
      velocidad: 6,
      resistencia: 7,
      FechaCeCreacion: "12-05-2018",
    },
    _id: "6185835d666bcb02723c195f",
    nombre: "WALL·E 4",
    imagenUrl: "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
  },
  {
    caracteristicas: {
      velocidad: 6,
      resistencia: 7,
      FechaCeCreacion: "12-05-2018",
    },
    _id: "61858ad1488689859e900c05",
    nombre: "WALL·E 10",
    imagenUrl: "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
    __v: 0,
  },
  {
    caracteristicas: {
      velocidad: 5,
      resistencia: 7,
      FechaCeCreacion: "12-05-2018",
    },
    _id: "618595881da5fc7cbc76b8d9",
    nombre: "WALL·E 5000",
    imagenUrl: "https://iresiduo.com/sites/default/files/images/08-Wall-E.jpg",
    __v: 0,
  },
];

const robot = {
  caracteristicas: {
    velocidad: 2,
    resistencia: 2,
    FechaCeCreacion: "1986-09-29",
  },
  nombre: "Prueba",
  imagenUrl: "https://dbdzm869oupei.cloudfront.net/img/sticker/large/8340.jpg",
  __v: 0,
  id: "6187ac37a9bc8839ef6c4b92",
};

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(robots));
  }),
  rest.post(urlApiPost, (req, res, ctx) => {
    return res(ctx.json(robot));
  }),
  rest.delete(urlApiDelete, (req, res, ctx) => {
    return res(ctx.json({ id: "6187ac37a9bc8866ef6c4b92" }));
  }),
];

export default handlers;
