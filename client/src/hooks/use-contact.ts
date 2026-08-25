import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      // Validate with shared schema before sending (double safety)
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
          const error = api.contact.submit.responses[500].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit inquiry");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent Securely",
        description: "We have received your message and will respond within 24 hours.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "Please check your connection and try again.",
        variant: "destructive",
      });
    },
  });
}
