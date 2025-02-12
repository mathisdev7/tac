"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const signup = async (username: string, name: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TAC_API_URL}/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, name }),
    }
  );
  const data = await response.json();
  return data;
};

const queryClient = new QueryClient();

export default function Signup() {
  return (
    <QueryClientProvider client={queryClient}>
      <SignupComponent />
    </QueryClientProvider>
  );
}

function SignupComponent() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["signup", username, name],
    queryFn: () => signup(username, name),
    enabled: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await refetch();
    console.log(data);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Sign Up
        </h1>
        {error && <p className="text-red-500">{error.message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black/80 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
