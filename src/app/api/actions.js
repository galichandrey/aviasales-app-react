import { v4 as uuid } from "uuid";

import { GET_TICKETS } from "./types";

const fetchAllTickets = (jsonData, isItLoading = true) => {
  return {
    type: GET_TICKETS,
    tickets: jsonData,
    isLoading: isItLoading,
  };
};

export async function getSearchId() {
  const searchIdRaw = await fetch("https://aviasales-test-api.kata.academy/search");
  const searchId = await searchIdRaw.json();
  return searchId.searchId;
}

export function getTickets() {
  return async (dispatch, getState) => {
    console.log("getState() >>> ", getState());
    let searchId;
    try {
      searchId = await getSearchId();
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
    if (searchId === undefined) return;
    const allTicketsArray = [];
    let stopAll = false;

    while (!stopAll) {
      console.log("Мы ещё запускаем цикл!");
      try {
        const { tickets, stop } = await fetchTickets(searchId);
        stopAll = stop;
        const ticketsWithUUID = tickets.map((element) => {
          return {
            ...element,
            uuID: uuid(),
          };
        });
        if (allTicketsArray.length === 0) {
          dispatch(fetchAllTickets(ticketsWithUUID));
        }
        allTicketsArray.push(...ticketsWithUUID);
        console.log("Нету stop, шлём на сервер ещё один запрос");
      } catch (e) {
        if (e.name === "SyntaxError") {
          throw new Error(`SyntaxError: ${e}`);
        }
      }
    }
    dispatch(fetchAllTickets(allTicketsArray, false));
    console.warn("Вы вышли из цикла! stopAll >>>", stopAll);
  };
}

export async function fetchTickets(searchId) {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (response.status === 500) {
      throw new Error(`Error! Response status: ${response.status}`);
    }
    if (!response.ok) {
      throw new Error(
        `Error fetch URL https://aviasales-test-api.kata.academy/tickets?searchId=... Response status: ${response.status}`
      );
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
}
