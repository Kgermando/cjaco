declare let process: any;
const env = process.env.NODE_ENV;

export const environment = {  
  apiURL: (env  === 'production') 
    ? 'https://cjaco-api-ed535afe0b85.herokuapp.com/api'
    : 'http://localhost:3000/api'
};