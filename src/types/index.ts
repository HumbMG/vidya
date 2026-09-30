export type NavigationItem = {
  label: string;
  href: string;
};

export type ProductStatus = "AVAILABLE" | "COMING_SOON" | "SOLD_OUT";

export type ExperienceStatus =
  "INTEREST_VALIDATION" | "OPEN" | "CONFIRMED" | "FULL";

export type Talent = {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  shortBio: string;
  story: string;
  experienceYears: number;
  experiencePhrase: string;
  image: string;
  imageAlt: string;
  productIds: string[];
  experienceIds: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  story: string;
  talentId: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  images: string[];
  imageAlt: string;
  featured: boolean;
};

export type ExperienceSession = {
  id: string;
  label: string;
  date: string;
  time: string;
};

export type Experience = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  learnings: string[];
  talentId: string;
  category: string;
  price: number | null;
  modality: string;
  zone: string;
  sessions: ExperienceSession[];
  minimumCapacity: number;
  maximumCapacity: number;
  enrolled: number;
  status: ExperienceStatus;
  confirmationDeadline: string;
  materialsIncluded: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export type CartItemType = "product" | "experience";

export type CartItem = {
  id: string;
  type: CartItemType;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  talentName: string;
  maximumQuantity: number;
};
