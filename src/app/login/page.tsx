"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { ArrowLeft, User, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process - replace with actual authentication logic
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect back to product page
      router.back();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)' }}>
      {/* Black Header */}
      <div className="w-full bg-black">
        <div className="w-full py-4">
          <div className="flex items-center justify-between px-6 sm:px-8 lg:px-10">
            <Button variant="flat" startContent={<ArrowLeft className="w-4 h-4" />} onClick={() => router.back()} className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]">
              Back
            </Button>
            <Logo />
            <div className="flex gap-3">
              <a 
                href="https://tehnolink.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018] px-3 py-2 rounded-md transition-colors"
              >
                Main website
              </a>
              <Button variant="flat" startContent={<User className="w-4 h-4" />} onClick={() => {}} className="text-white border-white/20 flex items-center gap-2 hover:text-[#DA0018]">
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-center">
        <div className="mx-auto" style={{ width: '360px' }}>
          <Card className="shadow-lg rounded-[10px]">
            <CardBody className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-[50px]"
                  isLoading={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Need help?</p>
                  <a 
                    href="mailto:marko@phronema.rs" 
                    className="text-[#DA0018] hover:underline flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
