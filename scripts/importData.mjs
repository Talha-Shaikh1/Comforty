// Import environment variables from .env.local
import "dotenv/config";


// Import the Sanity client to interact with the Sanity backend
import { createClient } from "@sanity/client";

// Load required environment variables
// const {
//   NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
//   NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset (e.g., "production")
//   NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Sanity API token
//   BASE_URL = "https://giaic-hackathon-template-08.vercel.app", // API base URL for products and categories
// } = process.env;

// Check if the required environment variables are provided
// if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
//   console.error("Missing required environment variables. Please check your .env.local file.");
//   process.exit(1); // Stop execution if variables are missing
// }

// Create a Sanity client instance to interact with the target Sanity dataset
const targetClient = createClient({
  projectId: "your id", // Your Sanity project ID
  dataset: "production", // Default to "production" if not set
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: "2023-01-01", // Sanity API version
  token: "your api", // API token for authentication
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    // Fetch the image from the provided URL
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    // Convert the image to a buffer (binary format)
    const buffer = await response.arrayBuffer();

    // Upload the image to Sanity and get its asset ID
    const uploadedAsset = await targetClient.assets.upload("image", Buffer.from(buffer), {
      filename: imageUrl.split("/").pop(), // Use the file name from the URL
    });

    return uploadedAsset._id; // Return the asset ID
  } catch (error) {
    console.error("Error uploading image:", error.message);
        return null; // Return null if the upload fails
    }
}

// Main function to migrate data from REST API to Sanity
async function importData() {
  console.log("Starting data migration...");

  try {
    // Fetch categories from the REST API
    // const categoriesResponse = await fetch('https://giaic-hackathon-template-08.vercel.app/api/categories');
    // if (!categoriesResponse.ok) throw new Error("Failed to fetch categories.");
    // const categoriesData = await categoriesResponse.json(); // Parse response to JSON

    // Fetch products from the REST API
    const productsResponse = await fetch('https://next-ecommerce-template-4.vercel.app/api/product');
    if (!productsResponse.ok) throw new Error("Failed to fetch products.");
    const productsData = await productsResponse.json(); // Parse response to JSON

    // const categoryIdMap = {}; // Map to store migrated category IDs

    // Migrate categories
    // for (const category of categoriesData) {
    //   console.log(`Migrating category: ${category.title}`);
    //   const imageId = await uploadImageToSanity(category.imageUrl); // Upload category image

      // Prepare the new category object
      // const newCategory = {
      //   _id: category._id, // Use the same ID for reference mapping
      //   _type: "categories",
      //   title: category.title,
      //   image: imageId ? { _type: "image", asset: { _ref: imageId } } : undefined, // Add image if uploaded
      // };

      // Save the category to Sanity
      // const result = await targetClient.createOrReplace(newCategory);
      // categoryIdMap[category._id] = result._id; // Store the new category ID
      // console.log(`Migrated category: ${category.title} (ID: ${result._id})`);
    // }

    // Migrate products
    for (const product of productsData) {
      console.log(`Migrating product: ${product.title}`);
      const imageId = await uploadImageToSanity(product.imageUrl); // Upload product image

      // Prepare the new product object
      const newProduct = {
        _type: "products",
        name: product.name,
        category: product.category || null,
        price: product.price,
        discountPercentage: product.priceWithoutDiscount || 0,
        isFeaturedProduct: item.isFeaturedProduct,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined, // Add image if uploaded
        // category: {
        //   _type: "reference",
        //   _ref: categoryIdMap[product.category._id], 
        // },
        description: product.description,
        stockLevel: product.stockLevel || 0,
        tags: product.tags,
      };

      // Save the product to Sanity
      const result = await targetClient.create(newProduct);
      console.log(`Migrated product: ${product.title} (ID: ${result._id})`);
    }

    console.log("Data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error.message);
    process.exit(1); // Stop execution if an error occurs
  }
}

// Start the migration process
importData();