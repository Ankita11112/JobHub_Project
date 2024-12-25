import mongoose, { Schema } from "mongoose";

const otpSchema = new Schema({
  mobileNumber: {
    type: Number,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 30 * 60,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification for Email",
      emailTemplate(otp)
    );
    console.log("Otp send successfully", mailResponse.response);
  } catch (err) {
    console.error("Error in send verification function in otp model", err);
    throw err;
  }
}

otpSchema.pre("save", async function (next) {
  if (this.isnew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

export const Otp = mongoose.model("Otp", otpSchema);
