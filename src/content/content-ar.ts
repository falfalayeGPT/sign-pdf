import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Sign_PDF: {
    title: "توقيع PDF",
    seoTitle: "توقيع ملفات PDF عبر الإنترنت - أداة توقيع PDF مجانية",
    description: "أضف توقيعك إلى مستندات PDF عبر الإنترنت",
    color: "#341f97",
    type: ".pdf",
    to: "/sign-pdf",
    features: [
      {
        title: "مجاني تمامًا وبدون تسجيل",
        description: "تقدم PDFEquips خدمة توقيع ملفات PDF عبر الإنترنت مجانًا. ليس من الضروري إنشاء حساب، ولا نطلب أبدًا عنوان بريدك الإلكتروني أو معلومات بطاقة الائتمان الخاصة بك."
      },
      {
        title: "أداة توقيع ملفات PDF سهلة الاستخدام",
        description: "تجعل PDFEquips من السهل إضافة توقيعك إلى أي مستند PDF، سواء كان عقدًا أو نموذجًا أو أي مستند آخر، جميع التنسيقات متوافقة."
      },
      {
        title: "توقيع ملفات PDF عبر الإنترنت بشكل آمن",
        description: "جميع الملفات التي تقوم بتحميلها وإنشائها على خوادمنا مشفرة لأسباب أمنية باستخدام TLS. سيتم حذفها على الفور وبشكل دائم بعد المعالجة. لمزيد من المعلومات، يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا."
      }
    ],
    keywords: "توقيع PDF, توقيع ملفات PDF عبر الإنترنت, إضافة توقيع إلى PDF, توقيع PDF مجاني, أداة توقيع PDF, توقيع PDF عبر الإنترنت, توقيع PDF مجاني, توقيع مستندات PDF, إضافة توقيع عبر الإنترنت, توقيع PDF آمن, توقيع ملفات PDF, أداة توقيع PDF, توقيع PDF عبر الإنترنت مجانا, توقيع ملفات PDF متعددة, إضافة توقيع إلى صفحات PDF, توقيع PDF بدون تسجيل, أداة توقيع PDF, توقيع PDF عبر الإنترنت"
  }
};


export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    sign_pdf: "خيارات توقيع PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    sign_pdf: "توقيع PDF",
  },
  pages: "صفحات",
  page: "صفحة",
};

export const downloadFile: _downloadFile = {
  titles: {
    "sign-pdf": ["تم توقيع ملفات PDF!", "تم توقيع ملف PDF!"],
  },

  btnText: {
    "sign-pdf": ["تحميل ملفات PDF الموقعة", "تحميل ملف PDF الموقع"],
  },

  backto: {
    "sign-pdf": "العودة إلى توقيع PDF",
  },
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
