"use server"

import { Auth } from "@/components/Auth";
import Quote from "@/components/Quote";

export default async function Page() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="grid grid-cols-1">
        <Auth type="signup" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}
