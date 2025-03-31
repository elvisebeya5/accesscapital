import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle2, XCircle } from "lucide-react"

interface NotificationDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type: 'success' | 'error'
}

export function NotificationDialog({ isOpen, onClose, title, message, type }: NotificationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[425px] ${type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {type === 'success' ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            <span className={type === 'success' ? 'text-green-500' : 'text-red-500'}>
              {title}
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {message}
        </div>
      </DialogContent>
    </Dialog>
  )
}
