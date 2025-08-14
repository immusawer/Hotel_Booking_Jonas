import { supabase, supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}
//gdeqrbntopllxdatrmlm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

export async function createEditCabin(newCabin, id) {
  const hashImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name || ""}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hashImagePath
    ? newCabin.image // lowercase "image" here
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // Insert or update
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw error;
  }

  // If the image is already in storage, skip upload
  if (!hashImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id); // data is single row, no array
      console.error(storageError);
      throw storageError;
    }
  }

  return data;
}
