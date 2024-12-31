
import axios from 'axios';

const BASE_URL = 'http://192.168.100.91:3030/users/save';
const AllAccount = 'http://192.168.100.91:3030/users';
const SignInEndpoint = 'http://192.168.100.91:3030/signin';
axios.defaults.timeout = 100000; // Set timeout to 10 seconds

export const listUsers =()=>{ axios.get(BASE_URL)}
export const CreateUsers = async (user: {
  firstName: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(BASE_URL, user);
    console.log("User created:", response.data);
    return response.data; // Return the created user for further use if needed
  } catch (error) {
    const err = error as any;
    console.error("Error creating user:", err.message);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Response Data:", error.response.data);
      console.error("Status Code:", error.response.status);
    }
    throw error; // Re-throw the error to handle it in the calling function
  }
};


    export const getUsers =(User: { firstName: string; email: string; password: string; })=>{ 
        axios.get(BASE_URL ).then(
        (res)=>{ console.log(res.data)}).catch(error => console.log(error))}
      

        // export const getAllUsers = async () => {
        //   try {
        //     // Make the GET request to the /list endpoint
        //     const response = await axios.get(AllAccount);
        //     return response.data; // Return the list of users
        //   } catch (error) {
        //     console.error('Error fetching users:', response.data);
        //     if (error.response) {
        //       console.error('Response Data:', error.response.data);
        //       console.error('Status Code:', error.response.status);
        //     }
        //     throw error; // Re-throw error to handle it in your UI
        //   }
        // };

        
        export const SignInUser = async (user: { email: string; password: string }) => {
          try {
            const response = await axios.post(SignInEndpoint, user, {
              headers: {
                'Content-Type': 'application/json', // Ensure correct content type
              },
            });
            console.log('Sign-in successful:', response.data);
            return response.data; // Return the relevant data (e.g., user details or token)
          } catch (error: any) {
            if (axios.isAxiosError(error)) {
              console.error('Error during sign-in:', error.message);
        
              if (error.response) {
                console.error('Response Data:', error.response.data);
                console.error('Status Code:', error.response.status);
                throw new Error(error.response.data.message || 'Sign-in failed.'); // Extract a meaningful error message
              } else {
                throw new Error('Network error or server not reachable.');
              }
            } else {
              throw new Error('An unexpected error occurred.');
            }
          }
        };