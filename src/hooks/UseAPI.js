import axios from "axios";
async function UseAPI(query, variables) {
  let res = {
    error: false,
    data: null,
  };  
  try {
    const response = await axios.post(
      'https://graphql.contentful.com/content/v1/spaces/szk2cuaoivwt/environments/master',
      {
        query: query,
        variables: variables,
      },
      {
        headers: {          
          'Authorization': `Bearer ${process.env.CONTENTFUL_AUTH}`,
        },
      }
    );

    res.data = response.data.data;
  } catch (error) {
    res.error = true;
  }  
  return res;
}

export default UseAPI;
