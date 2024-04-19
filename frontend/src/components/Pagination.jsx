import React from "react";

// Criado um componente chamado Pagination que recebe os parâmetros itemsPerPage, totalItems, currentPage e setCurrentPage do tipo PaginationProps, sendo esse componente responsável por renderizar a paginação.
const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = []; // Criado um array vazio que está sendo atribuído a uma variável chamada pageNumbers.

  const totalPages = Math.ceil(totalItems / itemsPerPage); // O ceil está dividindo o total de itens pelo número de itens por página e arredondando para cima, ou seja, se o total de itens for 10 e o número de itens por página for 3, então o resultado será 4 e será atribuído a uma variável chamada totalPages.

  let startPage = Math.max(1, currentPage - 1); // O max está recebendo dois parâmetros, o primeiro é o número 1 e o segundo é o resultado da subtração do currentPage - 1, ou seja, se o currentPage for 1, então o resultado será 1, senão, será o resultado da subtração do currentPage - 1 e será atribuído a uma variável chamada startPage.

  let endPage = Math.min(totalPages, startPage + 2); // O min está recebendo dois parâmetros, o primeiro é o totalPages e o segundo é o resultado da soma do startPage + 2, ou seja, se o startPage for 1, então o resultado será 3, senão, será o resultado da soma do startPage + 2 e será atribuído a uma variável chamada endPage.

  // Se o endPage menos o startPage for menor que 2, então executa o if.
  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2); // O max está recebendo dois parâmetros, o primeiro é o número 1 e o segundo é o resultado da subtração do endPage - 2, ou seja, se o endPage for 1, então o resultado será 1, senão, será o resultado da subtração do endPage - 2 e será atribuído a uma variável startPage.
  }

  // O for recebe três parâmetros, o primeiro é a variável startPage que é o número inicial, o segundo é a condição que é o startPage menor ou igual ao endPage e o terceiro é o incremento que é o startPage + 1.
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i); // O push está adicionando o i ao array pageNumbers, ou seja, se o startPage for 1 e o endPage for 3, então o array pageNumbers será [1, 2, 3].
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-9">
      <button
        className="bg-opacity-0"
        // Quando clicado no botão ele executa a função setCurrentPage que recebe como parâmetro o currentPage - 1.
        onClick={() => setCurrentPage(currentPage - 1)}
        // Se o currentPage for igual a 1, então o botão será desabilitado, senão, será habilitado.
        disabled={currentPage === 1}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // Se o currentPage for igual a 1, então o svg tera a aparência de desabilitado, senão, terá a aparência de habilitado.
          className={`transition-colors duration-200 ease-in-out ${
            currentPage === 1 ? "fill-gray-400 cursor-not-allowed" : "fill-blue"
          }`}
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
            />
          </g>
        </svg>
      </button>

      <div className="flex gap-2">
        {/* O map está percorrendo o array pageNumbers e está retornando um botão para cada item do array pageNumbers. */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            // Quando clicado no botão ele executa a função setCurrentPage que recebe como parâmetro o number do botão clicado.
            onClick={() => setCurrentPage(number)}
            // Se o currentPage for igual ao number, então o botão terá a classe active, senão, não terá.

            className={`w-10 h-10 text-[16px] leading-140 rounded-md text-gray-100 bg-gray-400 transition-colors duration-200 ease-in-out ${
              currentPage === number
                ? "bg-gray-500"
                : "hover:bg-gray-500 text-gray-300"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        className="bg-opacity-0"
        // Quando clicado no botão ele executa a função setCurrentPage que recebe como parâmetro o currentPage + 1.
        onClick={() => setCurrentPage(currentPage + 1)}
        // Se o currentPage for igual ao totalPages, então o botão será desabilitado, senão, será habilitado.
        disabled={currentPage === totalPages}
      >
        {/* Se o currentPage for igual ao totalPages, então o svg será desabilitado, senão, será habilitado. */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // Se o currentPage for igual ao totalPages, então o svg terá a aparência de desabilitado, senão, terá a aparência de habilitado.
          className={`rotate-180 transition-colors duration-200 ease-in-out ${
            currentPage === totalPages
              ? "fill-gray-400 cursor-not-allowed"
              : "fill-purple-dark"
          }`}
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
