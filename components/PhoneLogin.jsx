"use client";

import React, { useState } from "react";
import useRouter from "next/navigation";
import { Button } from "./ui/button";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "./ui/use-toast";
import { auth, provider } from "@/config/Firestore_d";

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  auth.useDeviceLanguage();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber) {
      setShowOtpInput(true);
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          window.recaptchaVerifier.render().then(function (widgetId) {
            grecaptcha.reset(widgetId);
          });

          console.log(error, error.code, error.message, error.stack);
        });
    }
  };

  const verifyOTP = () => {
    confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        if (error) {
          toast({
            title: "Verification code error",
            description: "Your verification code is incorrect",
          });
        }
      });
  };

  return (
    <div>
      <h1>Phone Number Login</h1>

      <form action="" onSubmit={requestOTP}>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button type="submit">Send OTP</Button>
      </form>

      {showOtpInput && (
        <div>
          <input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <Button type="submit" onClick={verifyOTP}>
            Verify Code
          </Button>
        </div>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneLogin;
