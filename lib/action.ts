"use server";

import {
  DialoguesDataObject,
  ProverbDataObject,
  Quote,
  QuoteDataObject,
} from "..";

export async function getQuotes({ filter }: { filter: string }) {
  try {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/quotes");
    let data = await response.json();
    if (filter !== "all")
      data.quotes = data?.quotes?.filter(
        (item: Quote) => item.author === filter
      );
    return data as QuoteDataObject;
  } catch (error) {
    console.error("An error occured while fetching quotes", error);
    throw error;
  }
}

export async function getProverbs() {
  try {
    const response = await fetch("https://wordsapi-nkj3.onrender.com/proverbs");
    const data = await response.json();
    return data as ProverbDataObject;
  } catch (error) {
    console.error("An error occured while fetching Proverbs", error);
    throw error;
  }
}

export async function getDialogues() {
  try {
    const response = await fetch(
      "https://wordsapi-nkj3.onrender.com/dialogues"
    );
    const data = await response.json();
    return data as DialoguesDataObject;
  } catch (error) {
    console.error("An error occured while fetching Dialogues", error);
    throw error;
  }
}
