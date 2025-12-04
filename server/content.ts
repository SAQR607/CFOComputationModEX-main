// CMS-editable content data for CFO Computation
// This file can be modified to update website content

export const competitionStages = [
  {
    id: 1,
    titleAr: "المرحلة الأولى",
    titleEn: "التقييم الأساسي",
    descriptionAr: "تقييم الأساسيات المالية والمعرفة التحليلية من خلال اختبار شامل يغطي المفاهيم المالية الأساسية",
    requirements: ["اختبار المعرفة المالية", "تحليل البيانات الأساسية", "فهم القوائم المالية"],
    scoringWeight: 20,
    icon: "clipboard-check"
  },
  {
    id: 2,
    titleAr: "المرحلة الثانية",
    titleEn: "نموذج الحالة",
    descriptionAr: "بناء نموذج مالي متكامل لدراسة حالة حقيقية تتضمن التنبؤ المالي وتحليل السيناريوهات",
    requirements: ["بناء نموذج مالي", "تحليل دراسة حالة", "التنبؤ المالي"],
    scoringWeight: 30,
    icon: "calculator"
  },
  {
    id: 3,
    titleAr: "المرحلة الثالثة",
    titleEn: "محاكاة استراتيجية",
    descriptionAr: "محاكاة قرارات استراتيجية في بيئة أعمال ديناميكية تتطلب تفكيراً استراتيجياً متقدماً",
    requirements: ["اتخاذ قرارات استراتيجية", "إدارة المخاطر", "تحليل السوق"],
    scoringWeight: 25,
    icon: "trending-up"
  },
  {
    id: 4,
    titleAr: "الجولة النهائية",
    titleEn: "تحدي مجلس الإدارة",
    descriptionAr: "عرض تقديمي أمام لجنة التحكيم يحاكي تقديم التقارير لمجلس الإدارة مع مناقشة حية",
    requirements: ["عرض تقديمي احترافي", "الدفاع عن التوصيات", "مهارات التواصل"],
    scoringWeight: 25,
    icon: "users"
  }
];

export const scoringCriteria = [
  { id: 1, nameAr: "دقة التحليل", nameEn: "Accuracy of Analysis", weight: 25, icon: "target" },
  { id: 2, nameAr: "المنطق المالي", nameEn: "Financial Logic", weight: 20, icon: "brain" },
  { id: 3, nameAr: "هيكل النموذج", nameEn: "Model Structure", weight: 20, icon: "layers" },
  { id: 4, nameAr: "التفكير الاستراتيجي", nameEn: "Strategic Thinking", weight: 20, icon: "lightbulb" },
  { id: 5, nameAr: "العرض والسرد", nameEn: "Presentation & Storytelling", weight: 15, icon: "presentation" }
];

export const faqs = [
  {
    id: 1,
    questionAr: "من يمكنه المشاركة في المسابقة؟",
    answerAr: "يمكن لجميع المحللين الماليين، متخصصي FP&A، طلاب الماجستير في إدارة الأعمال، والمهتمين بالمجال المالي المشاركة في المسابقة.",
    category: "eligibility"
  },
  {
    id: 2,
    questionAr: "ما هي رسوم التسجيل؟",
    answerAr: "سيتم الإعلان عن رسوم التسجيل قريباً. تابعونا على منصات التواصل الاجتماعي للحصول على آخر التحديثات.",
    category: "registration"
  },
  {
    id: 3,
    questionAr: "ما هي المدة الزمنية لكل مرحلة؟",
    answerAr: "تختلف المدة حسب المرحلة: المرحلة الأولى (يومان)، المرحلة الثانية (أسبوع)، المرحلة الثالثة (3 أيام)، الجولة النهائية (يوم واحد).",
    category: "timeline"
  },
  {
    id: 4,
    questionAr: "هل يمكنني المشاركة من خارج المنطقة؟",
    answerAr: "نعم، المسابقة متاحة للمشاركين من جميع أنحاء العالم. جميع المراحل تتم عبر الإنترنت باستثناء الجولة النهائية.",
    category: "eligibility"
  },
  {
    id: 5,
    questionAr: "ما هي البرامج المطلوبة للمشاركة؟",
    answerAr: "يُفضل استخدام Microsoft Excel أو Google Sheets لبناء النماذج المالية. كما يمكن استخدام أي برنامج عرض تقديمي للجولة النهائية.",
    category: "technical"
  },
  {
    id: 6,
    questionAr: "كيف يتم تقييم المشاركين؟",
    answerAr: "يتم التقييم بناءً على خمسة معايير رئيسية: دقة التحليل (25%)، المنطق المالي (20%)، هيكل النموذج (20%)، التفكير الاستراتيجي (20%)، والعرض والسرد (15%).",
    category: "scoring"
  },
  {
    id: 7,
    questionAr: "ما هي الجوائز المقدمة؟",
    answerAr: "يحصل الفائزون على شهادات معتمدة، جوائز نقدية، وفرص للتواصل مع كبار المسؤولين الماليين في المنطقة.",
    category: "awards"
  },
  {
    id: 8,
    questionAr: "كيف يمكنني التواصل مع فريق الدعم؟",
    answerAr: "يمكنك التواصل معنا عبر البريد الإلكتروني أو من خلال نموذج التواصل على الموقع. سنرد على استفساراتكم خلال 24-48 ساعة.",
    category: "support"
  }
];

export const judges = [
  {
    id: 1,
    nameAr: "د. أحمد محمد",
    titleAr: "المدير المالي - شركة رائدة",
    imageUrl: "",
    bio: "خبرة تزيد عن 20 عاماً في الإدارة المالية"
  },
  {
    id: 2,
    nameAr: "م. سارة العلي",
    titleAr: "رئيس قسم التخطيط المالي",
    imageUrl: "",
    bio: "متخصصة في النمذجة المالية والتخطيط الاستراتيجي"
  },
  {
    id: 3,
    nameAr: "أ. خالد الرشيد",
    titleAr: "شريك - مكتب استشارات مالية",
    imageUrl: "",
    bio: "خبير في التحليل المالي وتقييم الشركات"
  },
  {
    id: 4,
    nameAr: "د. نورة السعيد",
    titleAr: "أستاذ المالية - جامعة الأعمال",
    imageUrl: "",
    bio: "باحثة في مجال التمويل والاستثمار"
  }
];

export const sponsorshipPackages = [
  {
    id: 1,
    tierAr: "الباقة الذهبية",
    tierEn: "Gold",
    benefits: [
      "الظهور الرئيسي في جميع المواد التسويقية",
      "شعار الراعي على صفحة المسابقة الرئيسية",
      "5 تذاكر مجانية للحضور الجولة النهائية",
      "فرصة لتقديم كلمة في حفل الختام",
      "تقرير مفصل عن المشاركين والتفاعل",
      "منشورات ترويجية على جميع منصات التواصل",
      "شعار على شهادات المشاركين"
    ],
    featured: true
  },
  {
    id: 2,
    tierAr: "الباقة الفضية",
    tierEn: "Silver",
    benefits: [
      "شعار الراعي على صفحة الرعاة",
      "3 تذاكر مجانية للحضور الجولة النهائية",
      "منشورات ترويجية على منصات التواصل",
      "ذكر الراعي في البريد الإلكتروني للمشاركين",
      "تقرير ملخص عن المسابقة"
    ],
    featured: false
  },
  {
    id: 3,
    tierAr: "الباقة البرونزية",
    tierEn: "Bronze",
    benefits: [
      "شعار الراعي على صفحة الرعاة",
      "تذكرتان للحضور الجولة النهائية",
      "ذكر الراعي على منصات التواصل",
      "شهادة تقدير من المنظمين"
    ],
    featured: false
  }
];

export const certificates = [
  {
    id: 1,
    typeAr: "شهادة المشاركة",
    typeEn: "Participation",
    description: "تُمنح لجميع المشاركين الذين أكملوا المرحلة الأولى من المسابقة",
    previewUrl: "/certificates/participation-preview.png",
    downloadUrl: "/certificates/participation.pdf"
  },
  {
    id: 2,
    typeAr: "شهادة التميز",
    typeEn: "Excellence",
    description: "تُمنح للمتسابقين الذين تأهلوا للمراحل المتقدمة وأظهروا أداءً متميزاً",
    previewUrl: "/certificates/excellence-preview.png",
    downloadUrl: "/certificates/excellence.pdf"
  },
  {
    id: 3,
    typeAr: "شهادة الفائز",
    typeEn: "Winner",
    description: "تُمنح للفائزين الثلاثة الأوائل في المسابقة",
    previewUrl: "/certificates/winner-preview.png",
    downloadUrl: "/certificates/winner.pdf"
  }
];

export const journeySteps = [
  {
    id: 1,
    titleAr: "التسجيل",
    descriptionAr: "قم بإنشاء حسابك وإكمال نموذج التسجيل",
    icon: "user-plus"
  },
  {
    id: 2,
    titleAr: "استلام المهمة",
    descriptionAr: "تلقي تفاصيل المهمة والمواد المطلوبة",
    icon: "mail"
  },
  {
    id: 3,
    titleAr: "رفع التسليم",
    descriptionAr: "إرسال عملك قبل الموعد النهائي",
    icon: "upload"
  },
  {
    id: 4,
    titleAr: "تقييم الحكام",
    descriptionAr: "مراجعة لجنة التحكيم لأعمالك",
    icon: "star"
  },
  {
    id: 5,
    titleAr: "إصدار الشهادة",
    descriptionAr: "الحصول على شهادتك والنتائج",
    icon: "award"
  }
];

export const socialLinks = [
  { platform: "LinkedIn", url: "https://linkedin.com/company/modex", icon: "linkedin" },
  { platform: "Instagram", url: "https://instagram.com/modex", icon: "instagram" },
  { platform: "Twitter", url: "https://twitter.com/modex", icon: "twitter" },
  { platform: "YouTube", url: "https://youtube.com/@modex", icon: "youtube" }
];
