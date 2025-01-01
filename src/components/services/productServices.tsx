import axios from "axios";

const BASE_URL = 'http://192.168.100.91:3030/products/all';
const BASE_URL_Save = 'http://192.168.100.91:3030/save_product';
const BASE_URL_delete = 'http://192.168.100.91:3030/delete_product';

axios.defaults.timeout = 100000; // Set timeout to 10 seconds

export const CreateProduct = async (product: { name: string; image: string; price: number; description: string; discount: number; }) => {
  try {
    const response = await axios.post(BASE_URL_Save, product);
    console.log(response.data);
    return response.data; // Return response to the caller
  } catch (error : any) {
    console.error('Error saving product:', error.message);
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Status Code:', error.response.status);
    }
    throw error; // Allow caller to handle the error
  }
};

export const productsList = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Return the list of products
  } catch (error : any)  {
    console.error('Error fetching products:',  error.message );
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Status Code:', error.response.status);
    }
    throw error;
  }
};


export const deleteProduct = async (id : any) => {
  try {
    const response = await axios.delete(`${BASE_URL_delete}/${id}`);
    return response.data;
  } catch ( error : any) {
    console.error("Error deleting product:", error.message);
    throw error;
  }
};