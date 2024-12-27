import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function FeedbackForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add the logic to send the comment to your backend
    toast({
      title: "Feedback Sent",
      description: "Thank you for your feedback.",
    });
    setComment(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Write your feedback here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type="submit" disabled={!comment}>
        Send Feedback
      </Button>
    </form>
  );
} 