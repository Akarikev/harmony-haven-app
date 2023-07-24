'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { auth, provider } from '@/config/Firestore_d'

import {
    signInWithPopup,
    signInAnonymously,
    onAuthStateChanged,
    getAuth,
    GoogleAuthProvider,
  } from "firebase/auth";
import { Button } from './ui/button';


function LoginPage() {

    const router = useRouter()

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            if (res.user) {
              console.log(res.user.uid);
              router.push('/dashboard');
            }
          } catch (error) {
            console.error("Error signing in with Google:", error);
          }
        };
  return (
    <div>
       
      <Button onClick = {signInWithGoogle}>
        Login
      </Button>
     
            
       
    </div>
  )
}

export default LoginPage