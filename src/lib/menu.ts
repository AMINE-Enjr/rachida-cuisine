export type MenuCategory = "occasions" | "traditional" | "savory";

export type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  notice: string;
  category: MenuCategory;
  image: string;
  imageAlt: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "pastilla",
    title: "بسطيلة ملكية",
    subtitle: "Pastilla royale",
    description:
      "بسطيلة فاخرة بالدجاج واللوز البلدي، أو بفواكه البحر للضيافات والمناسبات الكبرى. ورقة مقرمشة وحشوة معتبرة كتستاهل الضيافة.",
    notice: "قبل 48-72 ساعة",
    category: "occasions",
    image:
      "https://images.unsplash.com/photo-1544025162-d766403e9010?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "طبق مناسبات فاخر يقدم على المائدة",
  },
  {
    id: "djaj-mhamar",
    title: "دجاج محمر على حقو وطريقو",
    subtitle: "Djaj Mhamar",
    description:
      "دجاج محمر مدغمر بالزيتون والحامض مصير، كيحمر الوجه وكيجي بطعم الدار الأصيل. مثالي للعزائم وعطلة الجمعة.",
    notice: "قبل 24-48 ساعة",
    category: "occasions",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b7047369082?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "دجاج محمر طازج جاهز للتقديم",
  },
  {
    id: "chabakia",
    title: "شباكية فاسلية بلدية",
    subtitle: "Chabakia",
    description:
      "شباكية مجعبة وشاربة العسل واللوز، مقرمشة ومحضرة بضمير. للحلا والقهوة، رمضان، والمناسبات الحلوة.",
    notice: "قبل 24-48 ساعة",
    category: "traditional",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "حلويات عسلية تقليدية",
  },
  {
    id: "msemen-beghrir",
    title: "مسمن وبغرير الدار",
    subtitle: "Msemen & Beghrir",
    description:
      "مسمن مورق وخفيف بالزبدة البلدية، وبغرير اسفنجي للعسل والزبدة. للكوتي، الفطور، والطلبات ديال الصباح.",
    notice: "قبل 24 ساعة",
    category: "traditional",
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "فطائر ذهبية طازجة للفطور",
  },
  {
    id: "pizza-sales",
    title: "بيتزا ومملحات عصرية",
    subtitle: "Pizza & Salés",
    description:
      "تشكيلة مملحات وبيتزا بريستيج للبوفيهات، أعياد الميلاد، والاجتماعات. تقديم أنيق وكميات حسب الطلب.",
    notice: "قبل 24 ساعة",
    category: "savory",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "بيتزا ومملحات للبوفيه",
  },
];
