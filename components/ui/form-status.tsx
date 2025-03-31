interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
  successMessage?: string;
  errorMessage?: string;
}

export function FormStatus({ 
  status, 
  successMessage = "Submission successful! We'll respond within 4 business hours.",
  errorMessage = "There was an error submitting the form. Please try again."
}: FormStatusProps) {
  if (status === 'idle') return null;

  return (
    <div className={`text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
      {status === 'success' ? successMessage : errorMessage}
    </div>
  );
}