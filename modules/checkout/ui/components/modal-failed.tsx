import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ModalFailed = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center gap-2 text-2xl font-bold">
            Login Required
            <DotLottieReact
              src="https://lottie.host/3a37301c-690a-4168-8ca9-f5335c4622b8/iS281kz309.lottie"
              autoplay
            />
          </DialogTitle>
          <DialogDescription className="text-center">
            You need to be logged in to add items to your cart. <br />
            Please sign in or create an account to continue.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button>Okay</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
