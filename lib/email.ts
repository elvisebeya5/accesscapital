import emailjs from '@emailjs/browser';

interface EmailResponse {
  success: boolean;
  error?: any;
}

export const sendEmail = async (
  templateId: string,
  templateParams: Record<string, any>,
  htmlContent?: string
): Promise<EmailResponse> => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      templateId,
      {
        ...templateParams,
        message_html: htmlContent || templateParams.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};
