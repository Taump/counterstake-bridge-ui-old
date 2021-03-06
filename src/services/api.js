const URL = process.env.REACT_APP_BACKEND_URL;

const request = async (endpoint, options) => {
  const response = await fetch(`${URL}${endpoint}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    ...options
  });

  if (response.status !== 200) {
    const { error } = await response.json();
    throw new Error(error);
  }

  return await response.json();
}


export async function getBridges() {
  const resp_body = await request(`/bridges`);
  return resp_body;
}

export async function getTransferStatus(txid) {
  const resp_body = await request(`/transfer/${txid}`);
  return resp_body?.data;
}