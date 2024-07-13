const {
  addBookHandler,
  getAllBooksHanlder,
  getDetailBookById,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHanlder,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getDetailBookById,
  },
];

module.exports = routes;
