import { apiKey, baseUrl } from "@/utils/constant";

export async function api<T>(
  endpoint: string,
  {
    query,
    revalidate,
    tags,
    headers,
    ...options
  }: any = {}
): Promise<T> {
  const url = new URL(`${baseUrl}/api${endpoint}`);

//   if (query) {
//     Object.entries(query).forEach(([key, value]) => {
//       if (value !== undefined) {
//         url.searchParams.set(key, String(value));
//       }
//     });
//   }

  const response = await fetch(url.toString(), {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      ...headers,
    },
    next: {
      revalidate,
      tags,
    },
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}