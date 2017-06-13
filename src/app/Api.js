// curl "http://localhost:2000/api/2/formula/income_tax?salary=4000"

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default function makeSimulation(salary) {
    let url = "http://localhost:2000/api/2/formula/income_tax?salary="+salary.name;
    console.log(url);
    return fetch(url)
        .then(checkStatus);
}