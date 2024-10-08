export const tool = {
  Sign_PDF: {
    title: "Sign PDF",
    seoTitle: "Sign PDFs Online - Free PDF Signature Tool",
    description: "Add your signature to PDF documents online",
    color: "#341f97",
    type: ".pdf",
    to: "/sign-pdf",
    features: [
      {
        title: "Completely free and without registration",
        description: "PDFEquips offers a free online PDF signing service It's not necessary to create an account, and we never ask for your email address or credit card information"
      },
      {
        title: "Easy to use PDF signing tool",
        description: "PDFEquips makes it simple to add your signature to any PDF document, whether it's a contract, form, or any other document, all formats are compatible"
      },
      {
        title: "Securely sign PDF files online",
        description: "All files you upload and create on our servers are encrypted for security reasons using TLS They will be immediately and permanently deleted after processing For more information, please refer to our privacy policy"
      }
    ],
    keywords: "sign PDF, sign PDF online, add signature to PDF, free PDF sign, PDF signature tool, online PDF signing, PDF sign free, sign PDF documents, add signature online, secure PDF signing, PDF file signature, PDF sign tool, free online PDF signature, sign multiple PDFs, add signature to PDF pages, no registration PDF sign, PDF signing tool, online PDF signature"
  }
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const edit_page = {
  edit_page_titles: {
    sign_pdf: "Sign PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    sign_pdf: "Sign PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile = {
  titles: {
    "sign-pdf": ["PDF files have been signed!", "PDF file has been signed!"],
  },

  btnText: {
    "sign-pdf": ["Download Signed PDF files", "Download Signed PDF file"],
  },

  backto: {
    "sign-pdf": "Back To Sign PDF",
  },
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
