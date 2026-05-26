'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Card,
  Input,
  Button,
} from "@heroui/react";

import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    // Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain one uppercase letter");
      setLoading(false);
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain one lowercase letter");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {

      const {data, error} = await authClient.signUp.email({
        name,
        email,
        password,
        image: photoUrl,
      })

      toast.success("Account Created Successfully");

      router.push("/login");

    } catch (error) {

      toast.error("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10">

      <Card className="w-full max-w-lg shadow-2xl">

        <div className="p-8">

          {/* Heading */}
          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Sign up to get started
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >

            {/* Name */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Name
              </label>

              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Email
              </label>

              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Photo URL
              </label>

              <Input
                type="url"
                name="photoUrl"
                placeholder="Enter photo URL"
                variant="bordered"
                className="w-full"
              />
            </div>

            {/* Password */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Password
              </label>

              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="w-full">
              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                variant="bordered"
                className="w-full"
                required
              />
            </div>

            {/* Password Rules */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>• At least 6 characters</p>
              <p>• One uppercase letter</p>
              <p>• One lowercase letter</p>
              <p>• Password & Confirm Password must match</p>
            </div>

            {/* Signup Button */}
            <Button
              type="submit"
              color="warning"
              className="w-full text-white font-semibold"
              isLoading={loading}
            >
              Sign Up
            </Button>

          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-orange-500 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>
      </Card>
    </div>
  );
}