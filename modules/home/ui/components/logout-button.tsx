"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/modules/checkout/hooks/use-cart";

export const LogoutButton = () => {
  const { clearCart } = useCart();
  const router = useRouter();
  const trpc = useTRPC();

  const logout = useMutation(
    trpc.auth.logout.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        router.push("/"); // ✅ Pakai router.push() bukan redirect()
        window.location.reload(); // Optional: jika ingin reload data
        clearCart(); // Hapus cart saat logout
        toast.success("Logout successful");
      },
    })
  );

  const handleLogOut = () => {
    logout.mutate(); // ✅ Trigger mutasi logout
  };

  return (
    <Button onClick={handleLogOut} className="cursor-pointer bg-red-400">
      Logout
    </Button>
  );
};
