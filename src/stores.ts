import { persisted } from "svelte-persisted-store";
import { writable } from "svelte/store";

export const dateOfBirthString = persisted<string | null>("dateOfBirth", null)
export const age = persisted<number>("age", 0)
export const useWeeks = persisted<boolean>("useWeeks", false)
export const lifeExpectancy = writable<number>(76)