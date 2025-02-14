import { authClient } from "@/lib/auth-client";
import { Github } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaDiscord } from "react-icons/fa";
import logo from "../../../../../public/icon.png";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Image
            src={logo}
            alt="TAC Logo"
            width={200}
            height={200}
            className="rounded-lg size-8"
          />
          <span className="ml-2 text-2xl font-bold text-gray-900">- TAC</span>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600">
          Please login to your account using one of the following methods:
        </p>
        <button
          onClick={async () => {
            "use server";
            await authClient.signIn.social(
              {
                provider: "github",
                disableRedirect: false,
              },
              {
                onSuccess: async (response) => {
                  redirect(response.data.url);
                },
                onError: (error) => {
                  console.log("onError", error);
                },
              }
            );
          }}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-black rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Github className="mr-2" />
          Sign in with GitHub
        </button>
        <button
          onClick={async () => {
            "use server";
            await authClient.signIn.social(
              {
                provider: "discord",
                disableRedirect: false,
              },
              {
                onSuccess: async (response) => {
                  redirect(response.data.url);
                },
                onError: (error) => {
                  console.log("onError", error);
                },
              }
            );
          }}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaDiscord className="mr-2" />
          Sign in with Discord
        </button>
        <div className="flex justify-center">
          <a
            href="/sign-in"
            className="text-sm font-medium text-gray-700 hover:underline"
          >
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
