import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { otpRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {

    const ip =
  request.headers.get("x-forwarded-for") ??
  "127.0.0.1";

const { success } = await otpRateLimit.limit(ip);

if (!success) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Too many requests. Please try again after 5 minutes.",
    },
    {
      status: 429,
    }
  );
}

    const { email } = await request.json();
    console.log("OTP sending email:", email);
    const cleanEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: cleanEmail,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Account not found.",
        },
        {
          status: 404,
        }
      );
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.user.update({
      where: {
        email: cleanEmail,
      },
      data: {
        resetOtp: otp,
        resetOtpExpiry: expiry,
      },
    });

    const { error: emailError } = await resend.emails.send({
      from: "Aditya Group Manpower <info@adityagroupmanpower.co.in>",
      to: cleanEmail,
      replyTo: "adityagroupmanpower@gmail.com",
      subject: "Password Reset OTP",

      html: `
        <div style="font-family:Arial;padding:30px">
          <h2>Aditya Group Manpower</h2>

          <p>Your OTP is:</p>

          <h1>${otp}</h1>

          <p>This OTP is valid for 10 minutes.</p>
        </div>
      `,
    });

    if (emailError) {
      throw new Error(`Resend OTP email failed: ${emailError.message}`);
    }

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully.",
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send OTP.",
      },
      {
        status: 500,
      }
    );
  }
}
