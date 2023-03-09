export async function fetchData<TData>(url: string) {
  const response = await fetch(`http://localhost:5001/${url}`);
  const data: TData[] = await response.json();
  return data;
}
