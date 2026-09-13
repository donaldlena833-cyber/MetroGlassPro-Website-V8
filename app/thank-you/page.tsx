import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";
export const metadata: Metadata = { title: { absolute: "Thank you | MetroGlass Pro" }, description: "Next steps for your MetroGlass Pro request.", robots: { index: false, follow: false }, alternates: { canonical: "https://metroglasspro.com/thank-you/" } };
export default function Page() { return <ThankYou />; }
