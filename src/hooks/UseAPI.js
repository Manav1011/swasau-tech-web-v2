import axios from "axios";
async function UseAPI(query, variables) {
    let res = {
      error: false,
      data: null,
    };
    try {
      const response = await fetch('https://graphql.contentful.com/content/v1/spaces/szk2cuaoivwt/environments/master', {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CONTENTFUL_AUTH}`,
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      });
    
      const responseData = await response.json();
    
      if (!response.ok) {
        throw new Error(responseData.message || 'Request failed');
      }
    
      res.data = responseData.data;
    } catch (error) {
      res.error = true;
    }  
    return res;  
}

export default UseAPI;
