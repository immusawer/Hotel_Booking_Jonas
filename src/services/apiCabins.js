import { supabase } from "./supabase";

export async function getApiCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw error;
  }
  return cabins;
}
