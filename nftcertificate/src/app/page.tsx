import React from 'react'
// Import the ThirdwebProvider and the useStorage hook from "@thirdweb-dev/react"
import { useStorage } from "@thirdweb-dev/react";
import fs from 'fs';

async function uploadImage() {
  
  const storage = useStorage();
  const result = await storage?.upload(fs.readFileSync('green.png'));

  const url = storage?.resolveScheme(result);
  uploadJSON(url);

  
  return url;
}
async function uploadJSON(urls:any) {
  // Declare the whole variable inside the function using the const keyword and an object literal
  const variable = {
    name: "My Image",
    description: "A beautiful image of a sunset",
    image: `${urls}`
  };

  // Check if the variable has name, description, and image properties
  if (!variable.name || !variable.description || !variable.image) {
    throw new Error("Invalid variable");
  }

  // Convert the variable into a JSON string
  const jsonString = JSON.stringify(variable);

  // Create a Blob object from the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // Get the storage instance from the useStorage hook
  const storage = useStorage();

  // Upload the blob to thirdweb storage using the storage instance
  const result = await storage.upload(blob);

  // Get the URL of the uploaded file from the result
  const url = result.url;

  // Return the URL
  return url;
}


const page = () => {
  return (
    <div>page</div>
  )
}

export default page