"use client";
import { useState } from 'react';
import { Input } from '@/components/UI/input';
import { Button } from '@/components/UI/button';
import { Label } from '@/components/UI/label';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from "../../../public/assets/logos/facebook-icon.png";
import googleIcon from "../../../public/assets/logos/Google-logo.png";
import modelImg from "../../../public/assets/logos/modeIcon.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen mb-5">
  
      <div className="w-full lg:mx-24 bg-white shadow-lg flex flex-col md:flex-row rounded-3xl overflow-hidden">
        {/* Left Side: Image */}
        <div className="hidden md:block flex-1 relative rounded-3xl overflow-hidden">
          <Image
            src={modelImg}
            alt="Image of Models"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right Side: Form */}
        <div className="flex-1 p-6 md:p-10 flex flex-col gap-8 justify-center">
          
          {/*  Heading and Paragraph */}
          <div className="flex flex-col gap-4 items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary">
              SignIn your account.
            </h1>
            <p className="text-textGray font-medium text-base sm:text-lg tracking-wide">
              Don&apos;t have an account?
              <Link
                href="/signUp"
                className="text-textGray font-medium ml-1 underline underline-offset-[6px] hover:text-primary inline-block hover:scale-105"
              >
                SignUp
              </Link>
            </p>
          </div>

          {/*  Input Fields */}
          <div className="flex flex-col gap-6 items-center">

            {/* Email Field */}
            <div className="w-full max-w-md flex flex-col gap-2">
              <Label className="ml-4 text-base sm:text-[17px] font-medium">
                Enter your email?
              </Label>
              <Input type="email" placeholder="Enter your email address" className="w-full" />
            </div>

            {/* Password Field */}
            <div className="w-full max-w-md flex flex-col gap-2">
              <Label className="ml-4 text-base sm:text-[17px] font-medium">
                Enter your password
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pr-10 w-full"
                  autoComplete="new-password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col items-center gap-4">
            <Button
              variant={'outline'}
              className="w-full max-w-md h-12 text-white font-medium text-base sm:text-lg bg-primary rounded-full"
            >
              SignIn
            </Button>
          </div>

          {/*  Social Login */}
          <div className="flex flex-col items-center">
            <p className="text-center text-sm sm:text-base font-medium text-textGray mb-4">
              OR Continue with
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-2xl">
              <Button
                variant={'outline'}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-full w-full sm:w-[300px] h-12"
              >
                <Image src={facebookIcon} alt="Facebook" className="h-5 w-5" />
                <span>Facebook</span>
              </Button>
              <Button
                variant={'outline'}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-full w-full sm:w-[300px] h-12"
              >
                <Image src={googleIcon} alt="Google" className="h-5 w-5" />
                <span>Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;