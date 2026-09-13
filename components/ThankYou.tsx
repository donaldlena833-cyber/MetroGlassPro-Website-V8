"use client";
import Link from "next/link";
import { useSyncExternalStore } from "react";
const subscribe = () => () => {};
const serverSnapshot = () => null;
const snapshot = () => { try { return sessionStorage.getItem("received-metroglasspro.com"); } catch { return null; } };
const referenceSnapshot = () => { try { return sessionStorage.getItem("received-metroglasspro-reference"); } catch { return null; } };
export function ThankYou() {
 const reference = useSyncExternalStore(subscribe, referenceSnapshot, serverSnapshot);
 const received = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
 return <section className="readiness-page"><article><nav><Link href="/">MetroGlass Pro</Link><Link href="/contact">Contact</Link></nav><h1>{received ? "Thank you." : "Your next step."}</h1><p>{received ? "Your estimate request was received. We will review the project details and contact you about the next step. Installation is not booked by submitting this form." : "To send a new request, return to the website or contact us directly. Opening this page does not submit a request."}</p>{received && reference && <p>Request reference: {reference}</p>}<p><Link href="/">Return to MetroGlass Pro</Link> · <Link href="/contact">Contact us</Link></p></article></section>;
}
