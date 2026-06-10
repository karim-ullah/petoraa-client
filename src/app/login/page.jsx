"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, Input, Button } from "@heroui/react";

import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataForm = Object.fromEntries(formData.entries());

    // console.log(dataForm.email);

    const { data, error } = await authClient.signIn.email({
      email: dataForm.email,
      password: dataForm.password,
      rememberMe: true,
    });

    // console.log(data);

    if (data) {
      toast.success("Login Success");
      window.location.href = '/'
      
    }
    if (error) {
      toast.error("Email or Password is not valid");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google'
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-3">
      <Card className="w-full max-w-md shadow-2xl p-2">
        <div className="p-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>

            <p className="text-gray-500 mt-2">Login to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              required
              className={"w-full"}
            />

            {/* Password */}
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
              required
              className={"w-full"}
            />

            {/* Login Button */}
            <Button
              type="submit"
              color="warning"
              className="w-full text-white font-semibold"
              isLoading={loading}
            >
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-sm text-gray-500">OR</span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Google Login */}

          <Button
            onPress={handleGoogleLogin}
            className="w-full"
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-orange-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
