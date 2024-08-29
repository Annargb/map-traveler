const apiToken = import.meta.env.VITE_API_TOKEN;
console.log('API Token:', apiToken);

export const mapSettings = {
  style: 'mapbox://styles/mapbox/streets-v12',
  apiToken: apiToken,
};
