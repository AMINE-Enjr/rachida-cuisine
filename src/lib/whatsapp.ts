export const WHATSAPP_NUMBER = "212660862522";
export const INSTAGRAM_URL = "https://www.instagram.com/rachida___cuisine";
export const INSTAGRAM_HANDLE = "@rachida___cuisine";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function inquiryMessage(dishTitle: string): string {
  return `السلام عليكم لالة رشيدة، بغيت نستفسر على طلب ${dishTitle}. واش ممكن تفاصيل الثمن والكمية وموعد الاستلام؟ شكراً.`;
}

export const GENERAL_ORDER_MESSAGE =
  "السلام عليكم لالة رشيدة، بغيت نكوموندي شهيوات من رشيدة كويزين. عافاك عطيني التفاصيل ديال القائمة والمواعيد المتوفرة. شكراً.";

export const CONTACT_MESSAGE =
  "السلام عليكم لالة رشيدة، بغيت نتواصل معاكم بخصوص طلب أو استفسار. شكراً.";
