'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Button className="w-full bg-primary transition-all delay-300 duration-1000 hover:gradient-bg" variant="default">
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input id="email" type="email" placeholder="Email" />
      </div>
      <div className="relative">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Input 
          id="password" 
          type={showPassword ? "text" : "password"} 
          placeholder="Password" 
        />
        <button
          type="button"
          className="absolute inset-y-0 hover:cursor-pointer hover:bg-gray-100 right-0 flex items-center px-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Eye className="w-5 h-5 text-gray-500" />
          ) : (
           <EyeOff className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <Link href="/forgot-password" className="text-sm gradient-text hover:underline">
          Forgot password?
        </Link>
      </div>
      <Button className="w-full bg-primary transition-all duration-700 hover:gradient-bg" type="submit">
        Sign in
      </Button>
      <p className="text-sm text-center">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="gradient-text hover:underline">
          Sign up
        </Link>
      </p>
    </motion.div>
  )
}