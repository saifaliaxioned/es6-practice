let fetcher = async (url)=> {
  const data = await fetch(url).then((res)=> res.json());
  return data;
}

export default fetcher;