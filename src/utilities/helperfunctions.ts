// Debug print
export const print = (data: unknown, str?: string): void => {
  console.log(JSON.stringify(data, undefined, 2), str);
};

// First letter caps
export const Capitalize = (str: string = ""): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Even number
export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

// Odd number
export const isOdd = (n: number): boolean => {
  return Math.abs(n % 2) === 1;
};

// String empty check
export const strEmptyCheck = (str?: string | null): boolean => {
  return !!str && str !== "";
};

// Replace hyphen with space
export const replaceHyphen = (str: string): string => {
  return str.replaceAll("-", " ");
};

// Replace space with hyphen
export const replaceSpace = (str: string): string => {
  return str.replaceAll(" ", "-").toLowerCase();
};

// Format date (dd.mm.yy)
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dates = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);
  return `${dates}.${month}.${year}`;
};

// Convert date (dd.mm.yyyy)
export const convertDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

// Currency converter
export const currencyConvertor = (
  number: number,
  fraction: number = 0
): string => {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      minimumFractionDigits: fraction,
      currency: "INR",
    }).format(number);
  } catch (error) {
    console.error("Currency formatting error:", error);
    return "₹ " + number.toFixed(2);
  }
};

// Convert to IST local time
export const toLocalTime = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  return date.toLocaleTimeString("en-IN", options);
};

// Remove spaces + lowercase
export const replace_Lower = (text: string): string => {
  return text.replace(/\s+/g, "").toLowerCase();
};

// Valid array
export const isValidArray = <T>(arr?: T[] | null): boolean =>
  Array.isArray(arr) && arr.length > 0;

// Valid object
export const isValidObject = (
  obj?: Record<string, unknown> | null
): boolean => !!obj && Object.keys(obj).length > 0;

// FormData print
export const showFormdata = (formData: FormData): void => {
  for (const [key, value] of formData.entries()) {
    console.log(`Key: ${key} -- value: ${value}`);
  }
};

// Get IP address
export const getIpaddress = async (): Promise<string | null> => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data: { ip: string } = await res.json();
    return data.ip;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// WhatsApp redirect
export const handleOpenWhatsapp = (phoneNumber: string): void => {
  const message = `Hello! Welcome to South safari 🥳 🥳 🥳`;
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
};

// Get last word
export const getLastText = (heading: string = ""): string => {
  const headingList = heading.split(" ");
  return headingList.slice(-1).join(" ");
};

// Get remaining text
export const getRemainingText = (heading: string = ""): string => {
  const headingList = heading.trim().split(" ");
  return headingList.slice(0, -1).join(" ");
};