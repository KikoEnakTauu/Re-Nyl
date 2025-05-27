import { CustomerSignUpView } from "@/modules/auth/ui/views/customer-sign-up-view";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect("/");
  }

  return <CustomerSignUpView />;
};

export const dynamic = "force-dynamic";
export default page;
