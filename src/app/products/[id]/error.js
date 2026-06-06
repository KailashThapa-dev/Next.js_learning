'use client'

import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation"

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push(PRODUCTS_ROUTE)
  },5000);
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage